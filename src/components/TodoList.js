import React, { useContext } from "react";
import Store from "../context/context";
import { TodoHeader } from "./TodoHeader";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TodoList() {
  const { state, dispatch } = useContext(Store);

  const label = count =>
    count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`;

  let header =
    state.todos.length === 0 ? (
      <h4>Yeah! All todos are done! I am free now..!!</h4>
    ) : (
      <TodoHeader>
        <span className="float-right">{label(state.todos.length)}</span>
      </TodoHeader>
    );
    const notify = () => toast.warn('Feature Yet to be activated..!!', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
            {header}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {state.todos.map(item => (
                <li key={item} className="list-group-item">
                  {item}
                  <button
                    className="float-right btn btn-danger btn-sm"
                    style={{ marginLeft: 10 }}
                    onClick={() => dispatch({ type: "COMPLETE", payload: item })}
                  >
                    Complete
                  </button>
                  
                  <button
                    className="float-right btn btn-info btn-sm"
                    style={{ marginLeft: 10 }}
                    onClick={notify }
                  >
                    Edit
                  </button>
                  <ToastContainer/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
