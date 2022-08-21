const Footer = () => {
  return (
    <footer className="page-footer teal darken-1">
      <div className="footer-copyright">
        <div className="container">
        © {new Date().getFullYear()} Copyright Text
        <a target='_blank' rel="noreferrer" className="grey-text text-lighten-4 right" href="https://github.com/RKKon/React-app-mini-store/tree/main">My Repository</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;