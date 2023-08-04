import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { appendTasksData, setIsUpdate } from "../redux/counter";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { SimpleGrid } from "@chakra-ui/react";

const CreateCust = () => {
  const dispatch = useDispatch();
  const { isUpdate, updateID, editCustObj } = useSelector(
    (state) => state.counter
  );

  const [fName, setfName] = useState(isUpdate ? editCustObj.fname : "");
  const [lName, setlName] = useState(isUpdate ? editCustObj.lName : "");
  const [address, setAddress] = useState(isUpdate ? editCustObj.address : "");
  const [city, setCity] = useState(isUpdate ? editCustObj.city : "");
  const [street, setStreet] = useState(isUpdate ? editCustObj.street : "");
  const [phone, setPhone] = useState(isUpdate ? editCustObj.phone : "");
  const [state, setState] = useState(isUpdate ? editCustObj.state : "");
  const [email, setEmail] = useState(isUpdate ? editCustObj.email : "");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (fName.trim() === "" || lName.trim() === "") {
      toast.error("Fields can not be empty.");
      setfName("");
      setlName("");

      return;
    }

    let token = localStorage.getItem("loginData");
    token = JSON.parse(token);
    token = token.token;

    try {
      console.log(
        token,
        fName,
        lName,
        address,
        city,
        street,
        phone,
        state,
        email
      );
      let res = await axios.post("http://localhost:5000/create-customer/", {
        token,
        fName,
        lName,
        address,
        city,
        street,
        phone,
        state,
        email,
      });
      console.log(res.data);
      if (res.data.success) {
        const task = {
          _id: res.data.task._id,
          title: res.data.task.title,
          description: res.data.task.description,
          status: res.data.task.status,
        };
        dispatch(appendTasksData(task));
        toast.success("Customer created.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong.");
    }

    setfName("");
    setlName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setStreet("");
    setState("");
    setCity("");
  };

  const handleUpdateTask = async (event) => {
    console.log("update clicked");
    event.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      toast.error("Fields can not be empty.");
      setTitle(title.trim());
      setDescription(description.trim());

      return;
    }
    try {
      let res = await axios.put(
        `http://localhost:5000/api/update-task/${updateID}`,
        {
          title,
          description,
        }
      );
      console.log(res.data);
      if (res.data.success) {
        toast.success("Task updated.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!.");
    }
    setTitle("");
    setDescription("");
    dispatch(setIsUpdate(false));
    dispatch(setIsUpdate(null));
  };

  return (
    <div className="container">
      <div className="fw-bold fs-2 text-center m-4 ">Create Task</div>
      <form
        className="w-50 m-auto"
        onSubmit={isUpdate ? handleUpdateTask : handleFormSubmit}
      >
        <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
          <div className="mb-3">
            <input
              type="text"
              className="form-control outline-input"
              id="fName"
              name="fName"
              value={fName}
              placeholder="Enter First Name"
              required
              onChange={(e) => setfName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control outline-input"
              id="lName"
              name="lName"
              value={lName}
              placeholder="Enter Last Name"
              required
              onChange={(e) => setlName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control outline-input"
              id="street"
              name="street"
              value={street}
              placeholder="Enter Street"
              required
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control outline-input"
              id="addesss"
              name="address"
              value={address}
              placeholder="Enter Address"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control outline-input"
              id="city"
              name="city"
              value={city}
              placeholder="Enter City"
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control outline-input"
              id="state"
              name="state"
              value={state}
              placeholder="Enter State"
              required
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control outline-input"
              id="email"
              name="email"
              value={email}
              placeholder="Enter Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control outline-input"
              id="phone"
              name="phone"
              value={phone}
              placeholder="Enter Phone"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </SimpleGrid>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            {isUpdate ? "Update" : "Submit"}
          </button>
        </div>
      </form>
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

export default CreateCust;
