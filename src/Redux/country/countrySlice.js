import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://restcountries.com/v3.1/all';

export const countriesItems = createAsyncThunk('country', async () => {
  const response = await fetch(url);
  const result = await response.json();

  const countryItemsData = result.map((item) => ({
    name: item.name.common,
    capital: item.capital,
    continent: item.continents[0],
    flag: item.flags.png,
    population: item.population,
    map: item.maps.googleMaps,
    area: item.area,

  }));

  return countryItemsData;
});

const initialState = {
  myCountryData: [],
  loading: false,
  error: null,
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(countriesItems.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(countriesItems.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        myCountryData: action.payload,
      }))
      .addCase(countriesItems.rejected, (state) => ({
        ...state,
        loading: true,
      }));
  },
});

export default countrySlice.reducer;
