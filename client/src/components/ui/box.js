import React, { useEffect, useState } from "react";
import "./box.css";
import Items from "./items";
import axios from "axios";
function Box() {
  const [list, setList] = useState([]);
  // const [updater, setUpdater] = useState(false);
  // const methodhandler = (x) => {
  //   console.log(method);
  //   if (x === 1) {
  //     setmethod("update");
  //   } else if (x === 0) {
  //     setmethod("add");
  //   }
   
  // };
  useEffect(() => {
    const getList = async () => {
      try {
        const get = await axios.get("http://localhost:8000/getList");
        if (get) {
          setList(get.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getList();
  });
  let [listid, setlistid] = useState("");
  let [listtxt, setlisttxt] = useState("");
  const [data, setData] = useState("");
  const [method, setmethod] = useState("add");
  const datachangehandler = (e) => {
    setData(e.target.value);
    console.log(data);
  };

  const clickHandler = async () => {
    let id;
    console.log(method, listid, listtxt);
    if (listtxt !== "" && listid !== "") {
      id = listid;
    }
    if (method === "update") {
      try {
        const post = await axios.post("http://localhost:8000/updateList", {
          text: listtxt,
          id: id,
        });
        if (post) {
          console.log("success");
        }
        // setUpdater(false);
        setmethod("add");
        setlistid("");
        setlisttxt("");

        // setUvalue("");
      } catch (e) {
        console.log(e);
      }
    } else if (method === "add") {
      try {
        const post = await axios.post("http://localhost:8000/saveList", {
          text: data,
        });
        if (post) {
          console.log("success");
        }
        setData("");
      } catch (e) {
        console.log("error");
      }
    }
  };

  // const listidhandler = (x) => {
  //   console.log(x);
  //   setlistid(x);
   
  // };
  // const listtxthandler = (x) => {
  //   console.log(x); if (method === "update") setData(x);
  //   setlisttxt(x);
    
    
  // };
  const listtxtchangehandler = (e) => {
    setlisttxt(e.target.value);
  };
 
  return (
    <>
      <div className="box">
        <h1>TODO LIST</h1>
        <div className="inputButton">
          <input
            type="text"
            onChange={method === "add" ? datachangehandler : listtxtchangehandler}
            placeholder="Input Item"
            value={(method==="update") ? listtxt: data}
          />
          <button type="button" onClick={clickHandler}>
            {method === "update" ? "Update" : "Add"}
          </button>
        </div>
      </div>
      <Items
        list={list}
        setlisttxt = {setlisttxt}
        setmethod={setmethod}
        setlistid={setlistid}
      ></Items>
    </>
  );
}

export default Box;
