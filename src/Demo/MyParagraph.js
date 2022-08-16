import React from "react";

MyParagrapgh.propTypes = {};

function MyParagrapgh(props) {
  console.log("MyParagrapgh RUNNING");
  return <p>{props.children}</p>;
}

export default MyParagrapgh;
