import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Image
        src="/assets/icons/mikey.png"
        alt="Picture of the author"
        width={70}
        height={80}
        className="mikey-logo"
      />

      <div className="navbar-menu">
        <button className="nav-sections selected">HOME</button>
        <button className="nav-sections">ABOUT</button>
        <button className="nav-sections">WORK</button>
        <div className="language-selection">
          <but className="language-spanish ">ESP</but>
          <span className="language-english selected">EN</span>
        </div>
        <button className="button-get-in-touch">GET IN TOUCH</button>
      </div>
    </nav>
  );
};

export default Navbar
