import { StateCreator } from 'zustand';

export type MapSlice = {
  map?: Microsoft.Maps.Map;
  setMap: (map: Microsoft.Maps.Map) => void;
};

export const createMapSlice: StateCreator<MapSlice> = (set) => ({
  map: undefined,
  setMap: (map: Microsoft.Maps.Map) => set(() => ({ map })),
});
