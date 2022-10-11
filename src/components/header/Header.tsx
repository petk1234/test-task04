import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div>
        <img />
      </div>
      <ul>
        {/* <li>HOME</li> */}
        <Link to="/">Home</Link>
        <li>TOURS</li>
        <li>ABOUT</li>
        <li>HELP</li>
      </ul>
      <Link to="/favourites">Favourites</Link>
    </header>
  );
}
