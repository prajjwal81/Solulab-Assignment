import React from "react";
import { Data } from "../Utils/constants";
import logo from "../Images/logo.png";
import Styles from "./Sidenav.module.css";

function Sidenav() {
  return (
    <div style={{ padding: "0 auto", borderRight: "2px solid #F5F5F5" }}>
      <div className={Styles.imgDiv}>
        <img
          src={
            logo
              ? logo
              : "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          }
          alt=""
          className={logo ? Styles.img2 : Styles.img}
        />
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
