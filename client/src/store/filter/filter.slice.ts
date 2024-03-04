import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FilterState {
  allProducts: string[];
  sortedValue: string;
  updatedBrandsMenu: {
    id: number;
    label: string;
    checked: boolean;
  };
  updatedCategoryMenu: {
    id: number;
    label: string;
    checked: boolean;
  };
  selectedPrice: {
    price: number;
    minPrice: number;
    maxPrice: number;
  };
  mobFilterBar: {
    isMobSortVisible: boolean;
    isMobFilterVisible: boolean;
  };
}

const initialState: FilterState = {
  allProducts: [],
  sortedValue: '',
  updatedBrandsMenu: { id: 0, label: '', checked: false },
  updatedCategoryMenu: { id: 0, label: '', checked: false },
  selectedPrice: {
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  },
  mobFilterBar: {
    isMobSortVisible: false,
    isMobFilterVisible: false,
  },
};

export const filterSlice = createSlice({
  name: 'FILTER',
  initialState,
  reducers: {
    loadAllProducts: (draftState: FilterState, action) => {
      const { products, minPrice, maxPrice } = action.payload;

      draftState.allProducts = products;

      draftState.selectedPrice.minPrice = minPrice;
      draftState.selectedPrice.price = maxPrice;
    },
    setSortedValue: (draftState: FilterState, action) => {
      draftState.sortedValue = action.payload;
    },
  },
});

export const { loadAllProducts } = filterSlice.actions;

export default filterSlice.reducer;
