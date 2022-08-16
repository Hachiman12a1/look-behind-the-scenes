import React from "react";
import MyParagrapgh from "./MyParagraph";

DemoOutput.propTypes = {};

function DemoOutput(props) {
  console.log("DEMO RUNNING");
  return <MyParagrapgh>{props.show ? "This is news!" : ""}</MyParagrapgh>;
}

export default React.memo(DemoOutput);
