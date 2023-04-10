import logo from "../assets/images/Asset 9@4x.png";
import "../assets/css/footer.css";
const Footer = () => {
  return (
    <footer className="container">
      <div className="imgcard">
        <img src={logo} alt="" />
      </div>
      <div className="copyrights">
        <p>&copy; Copyprights Little Lemon</p>
      </div>
    </footer>
  );
};

export default Footer;
