import "./App.css";

import axios from "axios";

function App() {
  const makeReq = async () => {
    console.log("btn clicked");

    try {
      let res = await axios.post("http://localhost:5000/login/", {
        login_id: "test@sunbasedata.com",
        password: "Test@123",
      });
      console.log(res.data);
    } catch (err) {
      console.log(err, "catch err");
    }
  };

  return (
    <>
      {/* <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <button onClick={() => makeReq()}>Btn</button>
    </>
  );
}

export default App;
