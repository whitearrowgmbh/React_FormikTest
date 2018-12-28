import * as React from "react";
import { render } from "react-dom";
import UserSearchForm from "./UserSearchForm.tsx";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <UserSearchForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
