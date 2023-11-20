import React, { useEffect } from "react";

const Addi = () => {
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unMounted");
    };
  }, []);

  return <div style={{ color: "white" }}>addi</div>;
};

export default Addi;
