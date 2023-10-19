import React from "react";
import "./App.css";
import {Routes , Route} from "react-router-dom";
// import Home from "./components/home";
// import About from "./components/about";
// import parent from "./components/parent";
// import Parent from "./components/parent";
import {BrowserRouter} from "react-router-dom";
import RouteLinks from "./components/routeLinks";
import CenterHeader from "./components/Central-header";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <BrowserRouter>

            <CenterHeader></CenterHeader>
            <RouteLinks></RouteLinks>
            {/*<Links></Links>*/}
        {/*<Parent></Parent>*/}
        </BrowserRouter>
{/*<Routes>*/}
{/*    <Route path = '/' element={<About />}></Route>*/}
{/*    <Route path = '/about' element={<Home />}></Route>*/}
{/*</Routes>*/}
    </div>
  );
}
export default App;
