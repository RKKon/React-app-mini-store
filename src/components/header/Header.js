const Header = () => {
  return (
    <nav style={{ backgroundColor: "#0055df" }} /* className="blue darken-1" */>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Fortnite store
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/RKKon/React-app-mini-store/tree/main"
            >
              Repository
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
