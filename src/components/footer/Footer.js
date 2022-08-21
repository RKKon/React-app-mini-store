const Footer = () => {
  return (
    <footer className="page-footer teal darken-1">
      <div className="footer-copyright">
        <div className="container">
        © {new Date().getFullYear()} Copyright Text
        <a className="grey-text text-lighten-4 right" href="#">My Repository</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;