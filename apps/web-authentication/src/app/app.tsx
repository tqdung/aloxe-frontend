import {
  Box,
  VStack,
  Center,
  Image,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import { Login } from '../components/Login';
import { Register } from '../components/Register';

import AppIcon from '../assets/taxi.png';
import { useIsAuthenticated } from '@aloxe-frontend/data-application-store';

export function App() {
  const isAuth = useIsAuthenticated();
  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <VStack>
      <Center h="30vh" w="full" bg="green.300">
        <Image src={AppIcon} maxWidth="120px" />
      </Center>
      <Box h="70vh" w="full">
        <Tabs
          marginTop="-24px"
          marginX="16px"
          borderRadius="8px"
          bg="white"
          boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
        >
          <TabList>
            <Tab flex={1} border="none">
              Đăng nhập
            </Tab>
            <Tab flex={1} border="none">
              Đăng ký
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Register />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
}

export default App;
