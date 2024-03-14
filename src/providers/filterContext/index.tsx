import { createContext, useContext, useState } from "react";
import { iFilterContextProps, iFilterContextValue, iFilterType } from "./types";
import { StoreContext } from "../storeContext";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { iProduct, iErrorResponse } from "../storeContext/types";
import { useNavigate } from "react-router-dom";

export const FilterContext = createContext({} as iFilterContextValue);

export const FilterProvider = ({ children }: iFilterContextProps) => {
  const [filterType, setFilterType] = useState<iFilterType>({} as iFilterType);

  const {
    fetchProducts,
    setGlobalLoading,
    setCurrentQueryFilter,
    setIsFiltered,
    setFilteredProductsList,
    currentOffset,
    setCurrentPage,
    setCurrentOffset,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const filterByCategory = async (categoryId: number): Promise<void> => {
    try {
      setGlobalLoading(true);
      const res = await api.get<iProduct[]>(
        `/products/?categoryId=${categoryId}&offset=0&limit=8`
      );
      setFilteredProductsList(res.data);
      setIsFiltered(true);
      setCurrentPage(1);
      setCurrentOffset(0);
      setCurrentQueryFilter(`categoryId=${categoryId}`);
      setFilterType({
        type: "category",
        name: res.data[0].category.name,
        id: categoryId,
      });
      navigate("/");
    } catch (error) {
      const currentError = error as AxiosError<iErrorResponse>;
      toast.error(currentError.response?.data + "");
    } finally {
      setGlobalLoading(false);
    }
  };

  const filterByTitle = async (productTitle: string): Promise<void> => {
    let query: string = `?title=${productTitle}&offset=0&limit=8`;

    if (Object.keys(filterType).length > 0) {
      if (filterType.type.length !== 0 && filterType.type === "category") {
        query += `&categoryId=${filterType.id}`;
      }
    }

    try {
      setGlobalLoading(true);
      const res = await api.get<iProduct[]>(`/products/${query}`);
      setFilteredProductsList(res.data);
      setIsFiltered(true);
      setCurrentPage(1);
      setCurrentOffset(0);
      setFilterType({ type: "title", name: productTitle, id: undefined });
      setCurrentQueryFilter(query.slice(0, -16));
      navigate("/");
    } catch (error) {
      const currentError = error as AxiosError<iErrorResponse>;
      toast.error(currentError.response?.data + "");
    } finally {
      setGlobalLoading(false);
    }
  };

  const filterByPriceRange = async (
    min: number,
    max: number
  ): Promise<void> => {
    try {
      setGlobalLoading(true);
      const res = await api.get<iProduct[]>(
        `/products/?price_min=${min}&price_max=${max}`
      );
      const sortData = res.data.sort(
        (a: iProduct, b: iProduct) => a.price - b.price
      );
      setFilteredProductsList(sortData);
      setIsFiltered(true);
      setCurrentQueryFilter(`price_min=${min}&price_max=${max}`);
    } catch (error) {
      const currentError = error as AxiosError<iErrorResponse>;
      toast.error(currentError.response?.data + "");
    } finally {
      setGlobalLoading(false);
    }
  };

  const filterByPrice = async (price: number): Promise<void> => {
    try {
      setGlobalLoading(true);
      const res = await api.get<iProduct[]>(`/products/price=${price}`);
      setFilteredProductsList(res.data);
      setIsFiltered(true);
      setCurrentQueryFilter(`price=${price}`);
    } catch (error) {
      const currentError = error as AxiosError<iErrorResponse>;
      toast.error(currentError.response?.data + "");
    } finally {
      setGlobalLoading(false);
    }
  };

  const formatData = (
    price: string,
    rangeMin: string,
    rangeMax: string
  ): string => {
    const arr: string[] = [price, rangeMin, rangeMax];

    let query: string = "";

    console.log("chegou", arr);
    console.log("filterType", filterType);
    if (arr[0].length !== 0) {
      query += `price=${arr[0]}`;
    }

    // The api only accepts the ranges together, so i am checking only one
    if (arr[1].length !== 0) {
      query.length > 0
        ? (query += `&price_min=${arr[1]}&price_max=${arr[2]}`)
        : (query += `price_min=${arr[1]}&price_max=${arr[2]}`);
    }

    if (Object.keys(filterType).length > 0) {
      if (filterType.type.length !== 0 && filterType.type === "category") {
        query.length > 0
          ? (query += `&categoryId=${filterType.id}`)
          : (query += `categoryId=${filterType.id}`);
      }

      if (filterType.type.length !== 0 && filterType.type === "title") {
        query.length > 0
          ? (query += `&title=${filterType.name}`)
          : (query += `title=${filterType.name}`);
      }
    }

    return query;
  };

  const joinFilters = async (
    price: string,
    rangeMin: string,
    rangeMax: string,
    order: boolean
  ): Promise<void> => {
    let query: string = "";

    if (price.length > 0 || rangeMin.length > 0 || rangeMax.length > 0) {
      query = formatData(price, rangeMin, rangeMax);
      setCurrentQueryFilter(`${query}offset=${currentOffset}&limit=8`);
    } else {
      query = "offset=0&limit=8";
    }

    setCurrentQueryFilter(query);
    try {
      setGlobalLoading(true);

      const res = await api.get<iProduct[]>(
        query.length > 0 ? `/products/?${query}` : `/products/?${query}`
      );

      const sortData = res.data.sort((a: iProduct, b: iProduct) =>
        order === true ? a.price - b.price : b.price - a.price
      );

      setCurrentPage(1);
      setCurrentOffset(0);
      setFilteredProductsList(sortData);
      setIsFiltered(true);
    } catch (error) {
      const currentError = error as AxiosError<iErrorResponse>;
      toast.error(currentError.response?.data + "");
    } finally {
      setGlobalLoading(false);
    }
  };

  const clearFilter = (): void => {
    fetchProducts(0);
    setFilteredProductsList([]);
    setIsFiltered(false);
    setCurrentQueryFilter("");
    setFilterType({ type: "", name: "" });
    setCurrentPage(1);
    navigate("/");
  };

  return (
    <FilterContext.Provider
      value={{
        filterByTitle,
        filterByCategory,
        filterByPrice,
        filterByPriceRange,
        clearFilter,
        filterType,
        joinFilters,
      }}>
      {children}
    </FilterContext.Provider>
  );
};
