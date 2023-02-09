import React from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import Styles from "./RightDiv.module.css";
import { TbNotes } from "react-icons/tb";

function RightDiv() {
  return (
    <div>
      <Stack gap={5} style={{ marginTop: "10%" }}>
        <Row>
          <Col className={Styles.columnStyle}>
            <span>
              <div className={Styles.smallText}>Gender</div>
              <div className={Styles.largeText}>Female</div>{" "}
            </span>
          </Col>
          <Col className={Styles.columnStyle}>
            <span>
              <div className={Styles.smallText}>Birthday</div>
              <div className={Styles.largeText}>Feb24, 1997</div>{" "}
            </span>
          </Col>
          <Col className={Styles.columnStyle}>
            <span>
              <div className={Styles.smallText}>Phone Number</div>
              <div className={Styles.largeText}> 084332- 17233</div>{" "}
            </span>
          </Col>
          <Col className={Styles.columnStyle}>
            <span>
              <div className={Styles.smallText}>Registered Day</div>
              <div className={Styles.largeText}>Feb24, 1997</div>{" "}
            </span>
          </Col>
        </Row>
        <Row>
          <Col className={Styles.columnStyle}>
            <span>
              <div className={Styles.smallText}>Street Address</div>
              <div className={Styles.largeText}>Diponigoro NO.12</div>{" "}
            </span>
          </Col>
          <Col className={Styles.columnStyle}>
            <span>
              <div className={Styles.smallText}>City</div>
              <div className={Styles.largeText}>Cila Cap</div>{" "}
            </span>
          </Col>
          <Col className={Styles.columnStyle}>
            <span>
              <div className={Styles.smallText}>ZipCode</div>
              <div className={Styles.largeText}>655890</div>{" "}
            </span>
          </Col>
          <Col className={Styles.columnStyle}>
            <span>
              <div className={Styles.smallText}>Member Status</div>
              <div className={Styles.largeText}>Active Member</div>{" "}
            </span>
          </Col>
        </Row>
      </Stack>
      <div>
        <Stack direction="horizontal" gap={5} className={Styles.subheading}>
          <Button variant="light" className={Styles.largeText}>
            UpComing Appointment
          </Button>
          <Button variant="light" className={Styles.largeText}>
            Past Appointment
          </Button>
          <Button variant="light" className={Styles.largeText}>
            Medical Records
          </Button>
        </Stack>
      </div>

      <div style={{ background: "#F8F8F8", borderRadius: "10px" }}>
        <Stack
          direction="horizontal"
          gap={5}
          style={{
            justifyContent: "space-between",
            borderBottom: "1px solid #6B6B6B",
            height: "80px",
          }}
        >
          <Button variant="light" className={Styles.largeText}>
            Root Canal Treatment
          </Button>
          <Button variant="light" className={Styles.largeText}>
            {" "}
            Show Previous Statment
          </Button>
        </Stack>
        <Stack style={{ padding: "3%" }}>
          <div className={Styles.whiteDivInsideTheRootCanal}>
            <Row>
              <Col>
                <div
                  className={Styles.smallText}
                  style={{ fontSize: "xx-large", color: "black" }}
                >
                  26 Nov '19
                </div>
                <div className={Styles.largeText}>09.00 - 10.00</div>
              </Col>
              <Col>
                <div className={Styles.smallText}>Treatment</div>
                <div className={Styles.largeText}>Open Access</div>
              </Col>
              <Col>
                <div className={Styles.smallText}>Dentist </div>
                <div className={Styles.largeText}>DRG Adam H.</div>
              </Col>
              <Col>
                <div className={Styles.smallText}>Nurse </div>
                <div className={Styles.largeText}>Jessicamilla</div>
              </Col>
              <Col>
                <span>
                  {" "}
                  <TbNotes style={{ color: "blue", marginBottom: "3%" }} />
                  <span className={Styles.largeText} style={{ color: "blue" }}>
                    Note{" "}
                  </span>
                </span>
              </Col>
            </Row>
          </div>
          <div className={Styles.whiteDivInsideTheRootCanal}>
            <Row>
              <Col>
                <div
                  className={Styles.smallText}
                  style={{ fontSize: "xx-large", color: "black" }}
                >
                  12 Nov '19
                </div>
                <div className={Styles.largeText}>09.00 - 10.00</div>
              </Col>
              <Col>
                <div className={Styles.smallText}>Treatment</div>
                <div className={Styles.largeText}>Root Canal</div>
              </Col>
              <Col>
                <div className={Styles.smallText}>Dentist </div>
                <div className={Styles.largeText}>DRG Adam H.</div>
              </Col>
              <Col>
                <div className={Styles.smallText}>Nurse </div>
                <div className={Styles.largeText}>Jessicamilla</div>
              </Col>
              <Col>
                <span>
                  {" "}
                  <TbNotes style={{ color: "blue", marginBottom: "3%" }} />
                  <span className={Styles.largeText} style={{ color: "blue" }}>
                    Note{" "}
                  </span>
                </span>
              </Col>
            </Row>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default RightDiv;
