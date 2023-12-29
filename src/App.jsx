import { useState } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Display from "./components/Display";
import Input from "./components/Input";
import useHandleChange from "./hooks/useHandleChange";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Type from "./pages/Type";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import Notfound from "./pages/Notfound";
import Career, { careersLoader } from "./pages/careers/Career";
// layouts
import Rootlayout from "./layouts/Rootlayout";
import Helplayout from "./layouts/Helplayout";
import Careerlayouts from "./layouts/Careerlayouts";
import Mydata from "./pages/Mydata";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="type" element={<Type />} />

        <Route path="help" element={<Helplayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="careers" element={<Careerlayouts />}>
          <Route
           index
          element={<Career />}
          loader={careersLoader} />
        </Route>

        <Route path="*" element={<Notfound />} />

        <Route path="mydata" element={<Mydata/>}/>
      </Route>
    )
  );

  return (
    // <BrowserRouter>

    // <main>
    //   <Routes>
    //     <Route index element={<Home/>}/>
    //     <Route path="about" element={<About/>}/>
    //     <Route path="type" element={<Type/>}/>
    //   </Routes>
    //     {/* <Display content={content} />
    //     <Input handleChange={handleChange} /> */}
    // </main>
    // </BrowserRouter>
    // <header>
    //   <nav>
    //     <h1>Jobarouter</h1>

    //     <NavLink to='/'>Home</NavLink>
    //     <NavLink to="about">About</NavLink>
    //     <NavLink to="display">Display</NavLink>
    //   </nav>
    // </header>
    <RouterProvider router={routes} />
  );
}

export default App;
