// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />
import { useEffect, useRef } from 'react';
import { useGeolocation, useScript } from '@uidotdev/usehooks';
import { Box, Skeleton } from '@chakra-ui/react';
import { BingMapDirections } from './BingMapDirections';

import { environment } from 'environment';
import { useBingMapStore } from '../hooks';

export function BingMap() {
  const { map, setMap } = useBingMapStore();
  const geoLocation = useGeolocation();
  const mapContainer = useRef<HTMLDivElement>({} as HTMLDivElement);

  const scriptLoaded = useScript(
    `http://www.bing.com/api/maps/mapcontrol?key=${environment.bingMapApiKey}`,
    {
      removeOnUnmount: false,
    }
  ) === 'ready';

  useEffect(() => {
    if (scriptLoaded && !geoLocation.loading && !map) {
      setTimeout(() => {
        const center = new Microsoft.Maps.Location(
          geoLocation.latitude,
          geoLocation.longitude
        );
        const map = new Microsoft.Maps.Map(mapContainer.current, {
          credentials: environment.bingMapApiKey,
          zoom: 15,
          center: center,
          mapTypeId: Microsoft.Maps.MapTypeId.road,
          showZoomButtons: false,
          showScalebar: false,
          showDashboard: false,
          showLogo: false,
          showTrafficButton: false,
          showTermsLink: false,
        });
        const pin = new Microsoft.Maps.Pushpin(center);
        map.entities.push(pin);
        setMap(map);
      }, 500);
    }
  }, [map, geoLocation, scriptLoaded, setMap]);

  return (
    <Box
      ref={mapContainer}
      w="full"
      h="full"
      sx={{ '.CopyrightControl': { display: 'none' } }}
    >
      <Skeleton w="full" h="full" />
      <BingMapDirections />
    </Box>
  );
}

export default BingMap;
