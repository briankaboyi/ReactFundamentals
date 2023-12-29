import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusamus cum culpa dolores quia modi porro quam, nam expedita optio ea voluptas illum!</p>
      <p>Go To The<Link to="/">Homepage</Link>.</p>
    </div>
  )
}
