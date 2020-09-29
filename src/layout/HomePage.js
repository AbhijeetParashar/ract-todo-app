import React, { useContext, useReducer } from "react";
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import TopBar from '../core/TopBar';

import Store from "../context/context";
import reducer from "../reducer/reducer";
import { usePersistedContext, usePersistedReducer } from "../context/persist";

function HomePage() {
    
  const globalStore = usePersistedContext(useContext(Store), "state");

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" // The localStorage key
  );
    return (
        <div className="home-page">
            <TopBar title="Todo App - Built Using React Context and Hooks" />
            <div className="container">
            <Store.Provider value={{ state, dispatch }}>
                <TodoForm />
                <TodoList />
            </Store.Provider>
            </div>
            
        </div>
    )
}

export default HomePage

