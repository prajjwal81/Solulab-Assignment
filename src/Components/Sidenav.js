import React from "react";
import { Data } from "../Utils/constants";
import logo from "../Images/logo.png";
import Styles from "./Sidenav.module.css";

function Sidenav() {
  return (
    <div style={{ padding: "0 auto", borderRight: "1px solid #F5F5F5" }}>
      <div className={Styles.imgDiv}>
        <img src={logo} alt="" className={Styles.img} />
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "4vh",
        }}
      >
        {Data.map((data) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
              }}
            >
              <div>{data.Logo}</div>
              <div className={Styles.name}>{data.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidenav;
