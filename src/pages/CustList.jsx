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
import { Toaster, toast } from "react-hot-toast";

const CustList = () => {
  const { dltID, custData } = useSelector((state) => state.counter);
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
    dispatch(setIsUpdate(false));
  }, []);

  const getCustomers = async (token) => {
    try {
      let res = await axios.get(`${BASE_URL}/get-customers/${token}`);
      console.log(res.data, "all customers");
      if (res.data.success) {
        if (res.data.list.length === 0) {
          setLabel("No Customers.");
          toast.error("No Customers.");
        }
        dispatch(setCustData(res.data.list));
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (dltID) {
      handleDelete(dltID);
    }
  }, [dltID]);

  const handleDelete = (id) => {
    console.log(id, "handle dlt");
    const data = custData.filter((cust) => cust.uuid !== id);
    if (data.length === 0) {
      setLabel("No Customers.");
    }
    dispatch(setCustData(data));
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
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
            {custData.map((cust) => {
              // console.log(cust, "cust");
              return <CustomerItem key={cust.uuid} cust={cust} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Toaster
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default CustList;
