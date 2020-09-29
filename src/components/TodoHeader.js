import React from "react";

export const TodoHeader = (props) => (
  <div className="row">
    <div className="col-md-8">
      <h5 className="float-left">List of Pending Todos</h5>
    </div>
    <div className="col-md-4">
      {props.children}
    </div>
  </div>
);
