import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import CustList from "./CustList";
// import "./App.css";
import { useState } from "react";
import CreateCust from "./CreateCust";
import { useSelector, useDispatch } from "react-redux";
import { setShowCustList } from "../redux/counter";
export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [label, setLabel] = useState("Create Task");
  // const [showTaskList, setShowTastList] = useState(true);
  const { showCustList } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}></HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={showCustList ? <AddIcon /> : null}
              onClick={() => dispatch(setShowCustList(!showCustList))}
            >
              {showCustList ? "Create Customer" : "Customer List"}
            </Button>
          </Flex>
        </Flex>
      </Box>

      <Box p={4}>{showCustList ? <CustList /> : <CreateCust />}</Box>
    </>
  );
}
