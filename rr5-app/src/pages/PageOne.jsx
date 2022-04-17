import React from "react";
import { useParams } from "react-router-dom"

export default function PageOne (props) {
  const { firstId } = useParams();
  return (
    <>
      <h1>PageOne ID: {firstId}</h1>
    </>
  );
}