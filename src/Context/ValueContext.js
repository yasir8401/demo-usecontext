import React, { createContext } from "react";

const transactions = [
  {
    id: 1,
    name: "Yasir Nisar",
    salary: 50000,
  },
  {
    id: 2,
    name: "Adnan Hamdani",
    salary: 60000,
  },
  {
    id: 3,
    name: "Faraz Hashmi",
    salary: 80000,
  },
];

const ValueContext = createContext(45, () => {});

export default ValueContext;
