import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from 'react-service-worker';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Store,
  About,
  Contacts,
  LogIn,
} from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

registerServiceWorker.unregister();
