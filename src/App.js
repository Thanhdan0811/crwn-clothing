import "./App.css";
import React from "react";
import Homepage from "./pages/homepage/homepage.compoent";
import { Route } from "react-router-dom";

function App(props) {
  const HatsPage = () => {
    return (
      <div>
        <h1>Hats Page</h1>
      </div>
    );
  };

  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/hats" component={HatsPage} />

      {/* <Homepage /> */}
      {/* 
          component là component mà ta muốn render
          path là đường dẫn cần xác định để render component.
          exact là true hoặc false, path phải chính xác với chuỗi string.
        */}
    </div>
  );
}

export default App;
