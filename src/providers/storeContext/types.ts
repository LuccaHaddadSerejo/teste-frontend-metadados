import React from "react";

export interface iStoreContextProps {
  children: React.ReactNode;
}

export interface iCategory {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface iProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: iCategory;
}

export interface iErrorData {
  data: string;
}

export interface iErrorResponse {
  response: iErrorData;
}

export interface iStoreContextValue {
  productsList: iProduct[];
  product: iProduct;
  fetchProductById: (productId: number) => void;
  fetchProducts: (offset: number) => void;
  globalLoading: boolean;
  goNextPage: () => void;
  goBackPage: () => void;
  currentOffset: number;
  currentPage: number;
  checkIfNextPageExists: (productsList: iProduct[]) => boolean;
  fetchCategories: () => void;
  categoriesList: iCategory[];
  setProductsList: React.Dispatch<React.SetStateAction<iProduct[]>>;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  currentQueryFilter: string;
  setCurrentQueryFilter: React.Dispatch<React.SetStateAction<string>>;
  isFiltered: boolean;
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredProductsList: React.Dispatch<React.SetStateAction<iProduct[]>>;
  filteredProductsList: iProduct[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentOffset: React.Dispatch<React.SetStateAction<number>>;
}
