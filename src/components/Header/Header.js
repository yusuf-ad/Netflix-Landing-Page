import "./Header.scss";

export default function Header() {
  return (
    <header className="showcase">
      <div className="showcase__top">
        <img
          src="https://i.ibb.co/r5krrdz/logo.png"
          className="logo"
          alt="netflix logo"
        />
        <button className="btn btn--sm">Sign In</button>
      </div>
      <div className="showcase__content">
        <h1>See what's next</h1>
        <p>Watch anywhere. Cancel Anytime</p>
        <button className="btn btn--lg">Watch Free For 30 Days</button>
      </div>
    </header>
  );
}
