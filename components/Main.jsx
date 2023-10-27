import Script from "next/script";
import Image from "next/image";
const Main = () => {
  return (
    <>
      <Image
        src="/assets/images/profile.png"
        alt="MikeyRG picture."
        width={439}
        height={439}
        className="mikey-picture"
      />
      <div className="presentation-container">
        <span className="hi">Hi,&nbsp;&nbsp; my name is</span>
        <Image
          src="/assets/icons/waving-hand.svg"
          alt="waving-hand"
          width={35}
          height={35}
          className="waving-hand"
        />
        <span className="joserodriguez">Jose Rodriguez</span>
        <span className="and">and</span>
        <span className="iama">I am a</span>
        <span className="fullstack">FULLSTACK</span>
        <span className="web-developer">WEB DEVELOPER</span>
        <span className="and-graphic-designer">& GRAPHIC DESIGNER</span>
        <span className="located-in-dominican-republic">LOCATED IN DOMINICAN REPUBLIC</span>
      </div>


    </>
  );
};

export default Main;
