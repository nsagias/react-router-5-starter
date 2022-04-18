import React from "react";
import { useParams } from "react-router-dom"

export default function PageThree (props) {
  let { thirdId } = useParams();
  return (
    <>
      <h1>PageThree ID: {thirdId}</h1>
    </>
  );
}