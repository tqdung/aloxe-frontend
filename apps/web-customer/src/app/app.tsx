import { Box } from '@chakra-ui/react';
import { BingMap } from '@aloxe-frontend/util-bing-map';
import { BookTaxiPopup } from '../components/BookTaxiPopup';

export function App() {
  return (
    <Box position="relative" w="full" h="full">
      <BingMap />
      <BookTaxiPopup />
    </Box>
  );
}

export default App;
