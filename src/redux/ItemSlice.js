import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const itemsUrl = 'https://api.exchangerate.host/symbols';
const detailsUrl = 'https://api.exchangerate.host/timeseries?start_date=2023-04-16&end_date=2023-04-20';

export const getItems = createAsyncThunk('items/getItems', async () => {
  const response = await fetch(itemsUrl, {
    method: 'GET',
  });

  return response.json();
});

export const getDetails = createAsyncThunk('details/getDetails', async () => {
  const response = await fetch(detailsUrl, {
    method: 'GET',
  });

  return response.json();
});

const initialState = {
  items: [],
  details: [],
  selected: [],
  filtered: [],
  isLoading: true,
  field: false,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    selectCurrency: (state, action) => ({
      ...state,
      selected: action.payload,
    }),
    filter: (state, action) => ({
      ...state,
      field: true,
      filtered: state.items.filter((item) => item.code.toLowerCase()
        .includes(action.payload.toLowerCase()) || item.description.toLowerCase()
        .includes(action.payload.toLowerCase())),
    }),
    clearField: (state) => ({
      ...state,
      field: false,
      filtered: state.items,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, (state) => ({
        ...state,
        isLoading: true,
      }))

      .addCase(getItems.fulfilled, (state, action) => {
        const item = action.payload.symbols;
        const itemList = [];
        let idKey = 0;
        Object.keys(item).forEach((key) => {
          itemList.push({ ...item[key], id: idKey += 1 });
        });
        return ({
          ...state,
          isLoading: false,
          items: itemList,
        });
      })
      .addCase(getDetails.fulfilled, (state, action) => {
        const detail = action.payload.rates;
        const detailList = [];
        Object.keys(detail).forEach((key) => {
          detailList.push({ key, ...detail[key] });
        });
        return ({
          ...state,
          isLoading: false,
          details: detailList,
        });
      });
  },
});
export const { selectCurrency, filter, clearField } = itemsSlice.actions;
export default itemsSlice.reducer;
