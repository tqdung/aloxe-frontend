import { StoreApi, create } from 'zustand';
import { MapSlice, createMapSlice } from './slices/map.slice';
import {
  DirectionsSlice,
  createDirectionsSlice,
} from './slices/directions.slice';

export type BingMapStore = MapSlice & DirectionsSlice;

export const useBingMapStore = create<BingMapStore>()(
  (set, get, api): BingMapStore => ({
    ...createMapSlice(
      set as StoreApi<MapSlice>['setState'],
      get as StoreApi<MapSlice>['getState'],
      api as StoreApi<MapSlice>
    ),
    ...createDirectionsSlice(
      set as StoreApi<DirectionsSlice>['setState'],
      get as StoreApi<DirectionsSlice>['getState'],
      api as StoreApi<DirectionsSlice>
    ),
  })
);
