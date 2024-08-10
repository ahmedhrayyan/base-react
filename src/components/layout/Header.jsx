import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container flex py-8">
      <Link className="text-xl">Furniro</Link>
      <nav className="container">
        <ul className="flex justify-end gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
