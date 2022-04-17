import React from "react";
import { useParams } from "react-router-dom"

export default function PageTwo (props) {
  const { secondId } = useParams();
  return (
    <>
      <h1>PageTwo ID {secondId}</h1>
    </>
  );
}