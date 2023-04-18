import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d8d88b5eba9d5ff44de602d5c825e6f0';
const itemsUrl = 'https://api.exchangerate.host/symbols';
const detailsUrl = 'https://api.exchangerate.host/timeseries?start_date=2023-04-01&end_date=2023-04-18';
// const url = 'https://coronavirus.m.pipedream.net/';

// export const getItems = createAsyncThunk('items/getItems', async (thunkAPI) => {
//   try {
//     const resp = await fetch(url);
//     return resp.json();
//   } catch (error) {
//     return thunkAPI.rejectWithValue('Thunk Error');
//   }
// });

export const getItems = createAsyncThunk('items/getItems', async () => {
  const response = await fetch(itemsUrl, {
    method: 'GET',
  });

  return response.json();
});

export const getDetails = createAsyncThunk('details/getDetails', async () => {
  const response = await fetch(detailsUrl, {
  // const response = await fetch(`${detailsUrl}&symbols=${}`, {
    method: 'GET',
  });

  return response.json();
});

const initialState = {
  items: [],
  details: [],
  selected: [],
  isLoading: true,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    selectCurrency: (state, action) => ({
      ...state,
      selected: action.payload,
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
        // let idDKey = 0;
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
export const { selectCurrency } = itemsSlice.actions;
export default itemsSlice.reducer;
