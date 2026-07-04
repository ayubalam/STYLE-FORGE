import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <h1 className="text-3xl font-extrabold tracking-wide">
        <span className="text-pink-500">STYLE</span>
        <span className="text-white">-FORGE</span>
      </h1>
    </Link>
  );
}

export default Logo;