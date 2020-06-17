import React from "react";
import { Child } from "./Child";
import { AnotherChild } from "./AnotherChild";

export const Parent = () => {
  return (
    <div>
      <Child />
      <br />
      <AnotherChild />
    </div>
  );
};
