import { Booking } from '@aloxe-frontend/aloxe-api';
import { merge } from 'lodash';
import { StateCreator } from "zustand";

export type BookingSlice = {
  bookingData?: Booking;
  setBooking: (booking?: Booking) => void;
  updateBooking: (value: Partial<Booking>) => void;
  clearBooking: () => void;
};

export const createBookingSlice: StateCreator<BookingSlice> = (
  set,
  _get,
  api
) => ({
  bookingData: undefined,
  setBooking: (bookingData?: Booking) => set(() => ({ bookingData })),
  updateBooking: (value: Partial<Booking>) =>
    api.setState((previous) => ({
      ...previous,
      bookingData: merge<Booking | undefined, Partial<Booking>>(previous.bookingData, value),
    })),
  clearBooking: () => set(() => ({ bookingData: undefined })),
});
