import React, {useState} from "react";

function Toggle() {
  const [isOn, setOn] = useState(true);
  const onClick=()=>{
    setOn(!isOn);
    console.log(isOn);
  }
  return <button onClick={onClick}>{isOn ? "ON": "OFF"}</button>;
}

export default Toggle;
