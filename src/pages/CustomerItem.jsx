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
  // const dispatch = useDispatch();
  // const [checked, setChecked] = useState(false);
  const { showCustList } = useSelector((state) => state.counter);

  // useEffect(() => {
  //   setChecked(task.status);
  // }, [task.status]);

  const handleDelete = async (uuid) => {
    // dispatch(setDltId(id));
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
    // dispatch(setDltId(id));
    console.log(id, "edit");

    // try {
    //   let res = await axios.get(`http://localhost:5000/api/task/${id}`);
    //   // console.log(res.data);
    //   if (res.data.success) {
    //     // dispatch(setEditTaskObj(res.data.task));
    //     // dispatch(setUpdateID(id));
    //     // dispatch(setIsUpdate(true));
    //     // dispatch(setShowTastList(!showTaskList));
    //   } else {
    //     toast.error("Something went wrong!");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const handleStatus = async (id, status) => {
    // try {
    //   let res = await axios.put(`http://localhost:5000/api/set-status/`, {
    //     id: id,
    //     status: status,
    //   });
    //   console.log(res.data);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    // <div
    //   id={task._id}
    //   style={{
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     width: "90%",
    //     marginBottom: "2em",
    //     padding: "1em",
    //     backgroundColor: "#d697ff",
    //     boxSizing: "border-box",
    //     borderRadius: "1em",
    //   }}
    // >
    //   <div>
    //     <p className={checked ? "lineThrough" : ""}>
    //       <span>Title:</span> {task.title}
    //     </p>
    //     <p>
    //       <span>Description:</span> {task.description}
    //     </p>
    //     <p>
    //       <span>Status:</span> {checked ? "Completed" : "Incomplete"}
    //     </p>
    //   </div>
    //   <Box display="flex" alignItems="center" justifyContent="center" gap="4">
    //     <Checkbox
    //       size={"lg"}
    //       isChecked={checked}
    //       onChange={(e) => {
    //         setChecked(e.target.checked);
    //         handleStatus(task._id, e.target.checked);
    //       }}
    //     />
    //     <WrapItem>
    //       <Button
    //         onClick={() => {
    //           handleDelete(task._id);
    //         }}
    //         colorScheme="red"
    //       >
    //         <DeleteIcon />
    //       </Button>
    //     </WrapItem>
    //     <WrapItem>
    //       <Button
    //         onClick={() => {
    //           handleEdit(task._id);
    //         }}
    //         colorScheme="blue"
    //       >
    //         <EditIcon />
    //       </Button>
    //     </WrapItem>
    //   </Box>
    //   <Toaster
    //     toastOptions={{
    //       // Define default options
    //       className: "",
    //       duration: 3000,
    //       style: {
    //         background: "#363636",
    //         color: "#fff",
    //       },
    //     }}
    //   />
    // </div>
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
