import React from "react";
import { Outlet } from "react-router-dom";

function Site() {
  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">Principal page</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Site;