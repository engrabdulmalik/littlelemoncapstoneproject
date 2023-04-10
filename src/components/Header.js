import logo from "../assets/images/logo.png";
import "../assets/css/header.css";
const Header = () => {
  return (
    <header className="container">
      <img src={logo} alt="Little Lemon Logo" />
    </header>
  );
};

export default Header;
