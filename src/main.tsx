import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

const root = document.querySelector("#dashboard");

const dashboardRoot = document.createElement("dashboard-root");
if (root) {
	root.prepend(dashboardRoot);
}

ReactDOM.render(<App />, dashboardRoot);
