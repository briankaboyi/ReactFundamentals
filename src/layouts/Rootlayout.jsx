import { NavLink, Outlet } from "react-router-dom";

export default function Rootlayout(){
    return(
        <div className="root-layout">
            <header>
                <nav>
                    <h1>JobARouter</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="type">Type</NavLink>
                    <NavLink to="help">Help</NavLink>
                    <NavLink to="careers">Careers</NavLink>
                    <NavLink to="mydata">My Data</NavLink>
                </nav>
            </header>
            <main className="main">
                <Outlet/>
            </main>
        </div>
    )
}