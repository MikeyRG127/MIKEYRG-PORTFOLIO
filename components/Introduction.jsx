const Introduction = () => {
  return (
    <section className="introduction">
      
      <div className="country-location">
        <svg className="location-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
        </svg>
        <span className="country-name">DOMINICAN REPUBLIC</span>
        <span className="dots">
          
          <svg className="dots-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
          </svg>
          <svg className="dots-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
          </svg>
          <svg className="dots-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
          </svg>
        </span>
      </div>

      <div className="mikey-picture">
        <img
          className="mikey-picture"
          src="/assets/images/mikey-picture.png"
          alt="mikey-picture"
        />
      </div>

      <div className="presentation">
        <span className="presentation-line-1">Hello, My name is</span>
        <span className="presentation-line-2">JOSE ALBERTO</span>
        <span className="presentation-line-3">RODRIGUEZ GUZMAN</span>
      </div>
      <div className="stacks">
        <span>FullStack Web Developer</span>
        <span>UX/UI</span>
        <span>Problem Solver</span>
      </div>

      <div className="nickname">
        <span className="nickname-line-1">but call me</span>
        <span className="nickname-line-2">Mikey</span>
        <span className="nickname-line-3">READ STORY</span>
      </div>

      
    </section>
  );
};

export default Introduction;
