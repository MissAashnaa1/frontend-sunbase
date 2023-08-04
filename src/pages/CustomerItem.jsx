import React, { useEffect, useState } from "react";
import { Box, Button, WrapItem, Checkbox, Tr, Th, Td } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
// import {
//   setDltId,
//   setIsUpdate,
//   setShowTastList,
//   setUpdateID,
//   setEditTaskObj,
// } from "../redux/counter";

import toast, { Toaster } from "react-hot-toast";

import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import axios from "axios";

const CustomerItem = ({ cust }) => {
  // const dispatch = useDispatch();
  // const [checked, setChecked] = useState(false);
  const { showCustList } = useSelector((state) => state.counter);

  // useEffect(() => {
  //   setChecked(task.status);
  // }, [task.status]);

  const handleDelete = async (id) => {
    // dispatch(setDltId(id));
    console.log(id, "adsfasdff");

    // try {
    //   let res = await axios.delete(
    //     `http://localhost:5000/api/delete-task/${id}`
    //   );
    //   console.log(res.data);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const handleEdit = async (id) => {
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
      <Td>btn1,btn2</Td>
    </Tr>
  );
};

export default CustomerItem;
