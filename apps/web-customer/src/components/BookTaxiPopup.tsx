import { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { SelectCarType } from './SelectCarType';
import {
  AutoCompleteAddress,
  useBingMapStore,
} from '@aloxe-frontend/util-bing-map';
import { useBooking, useUserProfile } from '@aloxe-frontend/data-application-store';
import { VehicleType } from '@aloxe-frontend/aloxe-api';

export function BookTaxiPopup() {
  const [vehicleType, setVehicleType] = useState<VehicleType>(
    VehicleType.FOUR_SEAT
  );
  const profile = useUserProfile();
  const { directions, setDirections } = useBingMapStore();
  const { createBooking } = useBooking();

  return (
    <Box
      position="absolute"
      bottom="0"
      left="0"
      w="full"
      padding="16px"
      borderRadius="8px"
      background="white"
      id="container"
    >
      <AutoCompleteAddress
        id="autoSuggestFrom"
        marginBottom="16px"
        onChange={(from) => setDirections({ from })}
      />
      <AutoCompleteAddress
        id="autoSuggestTo"
        marginBottom="16px"
        onChange={(to) => setDirections({ to })}
      />
      <SelectCarType vehicleType={vehicleType} setVehicleType={setVehicleType}/>
      <Button
        w="full"
        borderRadius="100"
        colorScheme="whatsapp"
        isDisabled={!vehicleType || !directions?.from || !directions.to}
        onClick={() =>
          createBooking({
            customerId: profile?.customerId || '',
            startTime: new Date(),
            orderDetail: {
              vehicleType: vehicleType,
              pickupLatitude: directions?.from?.location.latitude || 0,
              pickupLongitude: directions?.from?.location.longitude || 0,
              returnLatitude: directions?.to?.location.latitude || 0,
              returnLongitude: directions?.to?.location.longitude || 0,
              pickupLocation: directions?.from?.title || '',
              returnLocation: directions?.to?.title || '',
            },
          })
        }
      >
        Tìm tài xế
      </Button>
    </Box>
  );
}
