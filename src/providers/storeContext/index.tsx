import { createContext, useState } from "react";
import {
  iProduct,
  iStoreContextProps,
  iStoreContextValue,
  iErrorResponse,
  iCategory,
} from "./types";
import { api } from "../../services/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const StoreContext = createContext({} as iStoreContextValue);

export const StoreProvider = ({ children }: iStoreContextProps) => {
  const [globalLoading, setGlobalLoading] = useState<boolean>(false);
  const [productsList, setProductsList] = useState<iProduct[]>([]);
  const [filteredProductsList, setFilteredProductsList] = useState<iProduct[]>(
    []
  );
  const [product, setProduct] = useState<iProduct>({} as iProduct);
  const [currentOffset, setCurrentOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [categoriesList, setCategoriesList] = useState<iCategory[]>([]);
  const [currentQueryFilter, setCurrentQueryFilter] = useState<string>("");
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  const fetchProducts = async (offset: number): Promise<void> => {
    try {
      setGlobalLoading(true);
      const res = await api.get<iProduct[]>(
        `/products?offset=${offset}&limit=8`
      );
      setProductsList(res.data);
      setCurrentOffset(offset);
    } catch (error) {
      const currentError = error as AxiosError<iErrorResponse>;
      toast.error(currentError.response?.data + "");
    } finally {
      setGlobalLoading(false);
    }
  };

  const fetchProductById = async (productId: number): Promise<void> => {
    try {
      setGlobalLoading(true);
      const res = await api.get<iProduct>(`/products/${productId}`);
      setProduct(res.data);
    } catch (error) {
      const currentError = error as AxiosError<iErrorResponse>;
      toast.error(currentError.response?.data + "");
    } finally {
      setGlobalLoading(false);
    }
  };

  const fetchCategories = async (): Promise<void> => {
    try {
      const res = await api.get<iCategory[]>(`/categories`);
      setCategoriesList(res.data);
    } catch (error) {
      const currentError = error as AxiosError<iErrorResponse>;
      toast.error(currentError.response?.data + "");
    }
  };

  const checkIfNextPageExists = (productList: iProduct[]): boolean => {
    if (productList.length < 8) {
      return false;
    }
    return true;
  };

  const goNextPage = async (): Promise<void> => {
    const updatedOffset = currentOffset + 8;
    setCurrentPage(currentPage + 1);

    let query: string = "";

    if (currentQueryFilter.length !== 0) {
      query = `${currentQueryFilter}&offset=${updatedOffset}&limit=8`;
    } else {
      query = `offset=${updatedOffset}&limit=8`;
    }

    try {
      setGlobalLoading(true);
      const res = await api.get<iProduct[]>(`/products?${query}`);

      if (!isFiltered) {
        setProductsList(res.data);
      } else {
        setFilteredProductsList(res.data);
      }

      setCurrentOffset(updatedOffset);
    } catch (error) {
      const currentError = error as AxiosError<iErrorResponse>;
      toast.error(currentError.response?.data + "");
    } finally {
      setGlobalLoading(false);
    }
  };

  const goBackPage = async (): Promise<void> => {
    const updatedOffset = currentOffset - 8;
    setCurrentPage(currentPage - 1);

    let query: string = "";

    if (currentQueryFilter.length > 0) {
      query = `${currentQueryFilter}&offset=${updatedOffset}&limit=8`;
    } else {
      query = `offset=${updatedOffset}&limit=8`;
    }

    try {
      setGlobalLoading(true);
      const res = await api.get<iProduct[]>(`/products?${query}`);

      if (!isFiltered) {
        setProductsList(res.data);
      } else {
        setFilteredProductsList(res.data);
      }

      setCurrentOffset(updatedOffset);
    } catch (error) {
      const currentError = error as AxiosError<iErrorResponse>;
      toast.error(currentError.response?.data + "");
    } finally {
      setGlobalLoading(false);
    }
  };

  return (
    <StoreContext.Provider
      value={{
        productsList,
        product,
        globalLoading,
        fetchProducts,
        fetchProductById,
        fetchCategories,
        categoriesList,
        goNextPage,
        goBackPage,
        currentOffset,
        currentPage,
        checkIfNextPageExists,
        setProductsList,
        setGlobalLoading,
        currentQueryFilter,
        setCurrentQueryFilter,
        isFiltered,
        setIsFiltered,
        setFilteredProductsList,
        filteredProductsList,
        setCurrentPage,
        setCurrentOffset,
      }}>
      {children}
    </StoreContext.Provider>
  );
};
