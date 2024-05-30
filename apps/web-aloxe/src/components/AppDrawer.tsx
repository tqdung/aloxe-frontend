import { useRef } from "react";
import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useAuthentication, useUserProfile } from "@aloxe-frontend/data-application-store";

export function AppDrawer() {
  const { logout } = useAuthentication();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useUserProfile();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        position="absolute"
        top="0"
        left="0"
        zIndex="999"
        aria-label="drawer button"
        icon={<HamburgerIcon />}
        bg="transparent"
        w="32px"
        h="32px"
        p="0"
        minW="unset"
        onClick={onOpen}
        ref={btnRef}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontWeight="bold" fontSize="medium">
                {user?.fullName}
              </Text>
              <Avatar name={user?.fullName} size="sm"/>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={logout}>
              Đăng xuất
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AppDrawer;
