import React from "react";

const Store = React.createContext({
  todos: [
    // Initial Data
    "Join Fragmadata",
    "Know about projects",
    "Gel with Team"
  ]
});

export default Store;