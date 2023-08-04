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
import Tasks from "./component/Tasks";
import "./App.css";
import { useState } from "react";
import CreateTask from "./component/CreateTask";
// import { useSelector, useDispatch } from "react-redux";
// import { setShowTastList } from "./redux/counter";
export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [label, setLabel] = useState("Create Task");
  // const [showTaskList, setShowTastList] = useState(true);
  const { showTaskList } = useSelector((state) => state.counter);

  // const dispatch = useDispatch();

  const createTask = () => {
    setLabel("Task List");
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}></HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={showTaskList ? <AddIcon /> : null}
              onClick={() => dispatch(setShowTastList(!showTaskList))}
            >
              {showTaskList ? "Create Tast" : "Task List"}
            </Button>
          </Flex>
        </Flex>
      </Box>

      <Box p={4}>{showTaskList ? <Tasks /> : <CreateTask />}</Box>
    </>
  );
}
