import React from "react";
import Styles from "./middleDiv.module.css";
import img from "../Images/img.png";
import { Button } from "react-bootstrap";

function MiddleDiv() {
  return (
    <div className={Styles.maindiv}>
      <img
        src={
          img
            ? img
            : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
        }
        alt=""
        className={img ? Styles.img2 : Styles.img}
      />
      <div className={Styles.diane}>Diane Cooper</div>
      <div className={Styles.mail}>diane.cooper@example.com</div>
      <div className={Styles.partitionDiv}>
        <span
          className={Styles.divInsidePartitionDiv}
          style={{ borderRight: "0.5px solid black" }}
        >
          <div className={Styles.numberInsidePartitionDiv}>15</div>
          <div className={Styles.textInsidePartitionDiv}>Past</div>
        </span>
        <span className={Styles.divInsidePartitionDiv}>
          <div className={Styles.numberInsidePartitionDiv}>02</div>
          <div className={Styles.textInsidePartitionDiv}>Upcoming</div>
        </span>
      </div>
      <Button variant="light" className={Styles.btn}>
        Send Message
      </Button>{" "}
      <div className={Styles.subheading}>Files / Documents</div>
      <Button variant="light" className={Styles.btn2}>
        Check UP Results.pdf
      </Button>
      <Button variant="light" className={Styles.btn2}>
        Check UP Results.pdf
      </Button>
      <Button variant="light" className={Styles.btn2}>
        Medical Prescription.pdf
      </Button>
      <Button variant="light" className={Styles.btn2}>
        Dental X-Ray Results.pdf
      </Button>
    </div>
  );
}

export default MiddleDiv;
