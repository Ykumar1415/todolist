import axios from "axios";
import React from "react";

// import  FontAwesomeIcon  from "react-icons/fa";
function item(props) {
  const deleteTodo = async () => {
    console.log(props.id);
    try {
      const post = await axios.post("http://localhost:8000/deleteList", {
        id: props.id,
      });
      if (post) {
        console.log("success");
      }
    } catch (e) {
      console.log(e);
    }
  };
  // const updatehandler = () => {
  //   props.listtxthandler(props.name);
  //   props.setmethod("update");
  //   props.listidhandler(props.id);
  // };

  return (
    <div className="item">
      <h3>{props.name}</h3>
      <div className="icons" style={{ color: "grey" }}>
        <i
          onClick={() => {
            props.setlisttxt(props.name);
            props.setmethod("update");
            props.setlistid(props.id);
          }}
          className="ri-edit-fill"
        ></i>
        <i onClick={deleteTodo} className="ri-delete-bin-5-fill"></i>
      </div>
    </div>
  );
}

export default item;
