import React from "react";
import { useParams } from "react-router-dom"

export default function PageTwo (props) {
  const { secondId } = useParams();
  const { subSecondId } = useParams();

  return (
    <>
      <h1>PageTwo Second ID: {secondId && secondId}</h1>
      <h1>PageTwo Sub User ID: {subSecondId}</h1>
    </>
  );
}