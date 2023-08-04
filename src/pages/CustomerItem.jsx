import React, { useEffect, useState } from "react";
import { Box, Button, WrapItem, Checkbox, Tr, Th, Td } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  setDltId,
  setIsUpdate,
  setShowCustList,
  setUpdateID,
  setEditCustObj,
} from "../redux/counter";

import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import axios from "axios";
import BASE_URL from "../constant";

const CustomerItem = ({ cust }) => {
  const dispatch = useDispatch();
  const { showCustList, custData } = useSelector((state) => state.counter);
  const handleDelete = async (uuid) => {
    dispatch(setDltId(uuid));
    console.log(uuid, "delete uuid");
    let token = localStorage.getItem("loginData");
    token = JSON.parse(token);
    token = token.token;

    if (token) {
      try {
        let res = await axios.post(`${BASE_URL}/delete-customer`, {
          uuid,
          token,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Something went wrong!");
    }
  };

  const handleEdit = async (uuid) => {
    console.log(uuid, "edit");
    let custObj = custData.filter((cust) => cust.uuid === uuid);
    // console.log(custObj, "ASdfasdfasdf");
    dispatch(setUpdateID(uuid));
    dispatch(setIsUpdate(true));
    dispatch(setShowCustList(!showCustList));
    dispatch(setEditCustObj(custObj[0]));
  };
  return (
    <Tr>
      <Td>{cust.first_name}</Td>
      <Td>{cust.last_name}</Td>
      <Td>{cust.address ? cust.address : "-"}</Td>
      <Td>{cust.city ? cust.city : "-"}</Td>
      <Td>{cust.state ? cust.state : "-"}</Td>
      <Td>{cust.email ? cust.email : "-"}</Td>
      <Td isNumeric>{cust.phone ? cust.phone : "-"}</Td>
      <Td>
        <Box display="flex" alignItems="center" justifyContent="center" gap="4">
          {" "}
          <WrapItem>
            <Button
              onClick={() => {
                handleDelete(cust.uuid);
              }}
              colorScheme="red"
            >
              <DeleteIcon />
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
              onClick={() => {
                handleEdit(cust.uuid);
              }}
              colorScheme="blue"
            >
              <EditIcon />
            </Button>
          </WrapItem>
        </Box>
      </Td>
    </Tr>
  );
};

export default CustomerItem;
