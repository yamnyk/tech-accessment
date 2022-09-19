import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import Entity from "../../types/Entity";
import Storage from "../../utils/localStorage";
import { fetchCards } from "./cardListAPI";

export interface CardsState {
  value: Entity[];
  current: Entity | null;
  status: "idle" | "loading" | "failed";
}

const initialState: CardsState = {
  value: Storage.get("cards") || [],
  current: null,
  status: "idle",
};

export const fetchAllCards = createAsyncThunk(
  "counter/fetchAll",
  async (_, { getState }: any) => {
    if (getState().cards.value.length === 0) {
      const response = await fetchCards();
      return response;
    }

    return getState().cards.value;
  }
);

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    fetchAll: (state, action) => {
      state.value = action.payload;
    },
    makeChoice: (state, action) => {
      state.current = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCards.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(fetchAllCards.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { fetchAll, makeChoice } = cardsSlice.actions;

export const selectCount = (state: RootState) => state.cards;

export default cardsSlice.reducer;
