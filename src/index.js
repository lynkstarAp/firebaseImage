import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ImageUpload from "./components/ImageUpload";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ImageUpload />
  </StrictMode>,
  rootElement
);
