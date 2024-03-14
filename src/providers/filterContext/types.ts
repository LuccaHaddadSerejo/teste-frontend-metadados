import React from "react";

export interface iFilterContextProps {
  children: React.ReactNode;
}

export interface iFilterType {
  type: string;
  name: string;
  id?: number;
}

export interface iFilterContextValue {
  filterByCategory: (categoryId: number) => void;
  filterByPrice: (price: number) => void;
  filterByPriceRange: (min: number, max: number) => void;
  filterByTitle: (productTitle: string) => void;
  clearFilter: () => void;
  filterType: iFilterType;
  joinFilters: (
    price: string,
    rangeMin: string,
    rangeMax: string,
    isAscending: boolean
  ) => void;
}
