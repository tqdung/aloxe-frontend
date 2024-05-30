import { useEffect, useId, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { useBingMapStore } from '../hooks';

export function BingMapDirections() {
  const id = useId();
  const { map, directions } = useBingMapStore();
  const directionsManager =
    useRef<Microsoft.Maps.Directions.DirectionsManager>();

  useEffect(() => {
    if (map && directions?.from && directions?.to) {
      map.entities.clear();
      Microsoft.Maps.loadModule('Microsoft.Maps.Directions', () => {
        const seattleWaypoint = new Microsoft.Maps.Directions.Waypoint({
          address: directions.from?.title,
          location: directions.from?.location,
        });
        const workWaypoint = new Microsoft.Maps.Directions.Waypoint({
          address: directions.to?.title,
          location: directions.to?.location,
        });
        if (!directionsManager.current) {
          // Create an instance of the directions manager.
          directionsManager.current =
            new Microsoft.Maps.Directions.DirectionsManager(map, [
              seattleWaypoint,
              workWaypoint,
            ]);
        }
        else {
          directionsManager.current.clearAll();
          directionsManager.current.addWaypoint(seattleWaypoint);
          directionsManager.current.addWaypoint(workWaypoint);
        }
        //Calculate directions.
        directionsManager.current.calculateDirections();
      });
    }
  }, [map, directions]);
  return <Box id={id} />;
}

export default BingMapDirections;
