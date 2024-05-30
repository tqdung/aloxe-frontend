import { StateCreator } from 'zustand';

export type Directions = {
  from?: Microsoft.Maps.ISuggestionResult;
  to?: Microsoft.Maps.ISuggestionResult;
};

export type DirectionsSlice = {
  directions?: Directions;
  setDirections: (directions?: Directions) => void;
};

export const createDirectionsSlice: StateCreator<DirectionsSlice> = (set) => ({
  directions: undefined,
  setDirections: (value?: Directions) =>
    set((state) => ({
      directions: {
        ...state.directions,
        ...value,
      },
    })),
});
