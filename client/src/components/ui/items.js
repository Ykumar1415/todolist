import React from 'react'
import './items.css'
import Item from "./item"
// import axios from 'axios'; 
function Items(props) {
  
  return (
    <div>
      <div className="card">
        {props.list.map((item) => (
          <Item
            key={item._id}
            id={item._id}
            name={item.text}
            // update={props.update}
            setlisttxt={props.setlisttxt}
            setlistid={props.setlistid}
            setmethod = {props.setmethod}
            setupdater={props.setupdater}
            itemid={props.itemid}
          /> ))}

      </div>
    </div>
  )
}

export default Items
