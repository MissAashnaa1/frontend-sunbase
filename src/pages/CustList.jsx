import React, { useState, useEffect } from "react";
import TaskItem from "./CustomerItem";
import { useSelector, useDispatch } from "react-redux";
import { setCustData, setIsUpdate } from "../redux/counter";
import axios from "axios";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import CustomerItem from "./CustomerItem";
import BASE_URL from "../constant";

const CustList = () => {
  const { custData } = useSelector((state) => state.counter);
  // const [tasks, setTasks] = useState(tasksData);
  const [label, setLabel] = useState("Please wait...");

  const dispatch = useDispatch();

  useEffect(() => {
    const lsData = localStorage.getItem("loginData");
    let token;
    if (lsData) {
      token = JSON.parse(lsData);
      console.log(token);
    }

    getCustomers(token.token);
    // dispatch(setIsUpdate(false));
  }, []);

  const getCustomers = async (token) => {
    try {
      let res = await axios.get(`${BASE_URL}/get-customers/${token}`);
      console.log(res.data, "all customers");
      if (res.data.success) {
        if (res.data.list.length === 0) {
          setLabel("No Customers.");
        }
        dispatch(setCustData(res.data.list));
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (dltID) {
  //     handleDelete(dltID);
  //   }
  // }, [dltID]);

  const handleDelete = (id) => {
    console.log(id, "handle dlt");
    const data = tasksData.filter((tasks) => tasks._id !== id);
    if (data.length === 0) {
      setLabel("No tasks.");
    }
    // dispatch(setTasksData(data));
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {/* {tasksData.length > 0 ? (
        tasksData.map((task) => {
          return <TaskItem key={task._id} task={task} />;
        })
      ) : (
        <h1>{label}</h1>
      )} */}
      <h1>Customer List</h1>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Address</Th>
              <Th>City</Th>
              <Th>State</Th>
              <Th>Email</Th>
              <Th isNumeric>Phone</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {custData.map((cust, i) => {
              return <CustomerItem key={i} cust={cust} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustList;
