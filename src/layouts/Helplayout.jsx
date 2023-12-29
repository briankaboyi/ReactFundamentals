import { NavLink, Outlet } from "react-router-dom";


export default function Helplayout() {
  return (
    <div className="help-layout">
      <h2>website help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        adipisci!
      </p>
      <nav>
        <NavLink to="faq">FAQs</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
