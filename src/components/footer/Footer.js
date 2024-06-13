import facebook from "../../icons/Facebook.svg";
import telegram from "../../icons/telegram.svg";
import instagram from "../../icons/instagram.svg";
import whatsApp from "../../icons/whatsApp.jpg";
import linkedin from "../../icons/Linkedin.png";
const Footer = () => {
  return (
    <footer className="page-footer footer_color darken-1">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright RKKon
          <span style={{ marginLeft: "250px" }}>
            <span style={{ marginRight: "15px" }}>My contacts:</span>
            <a
              style={{ marginRight: "15px" }}
              target="_blank"
              href="https://t.me/rkfrostmorn"
              rel="noreferrer"
            >
              <img src={telegram} alt="Telegram" />
            </a>
            <a
              style={{ marginRight: "15px" }}
              target="_blank"
              href="https://www.facebook.com/andrey.suboch.1"
              rel="noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              style={{ marginRight: "15px" }}
              target="_blank"
              href="https://www.instagram.com/konkon1067/"
              rel="noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>
            <a
              style={{ marginRight: "15px" }}
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=375299994147&text&type=phone_number&app_absent=0"
              rel="noreferrer"
            >
              <img style={{ width: "25px" }} src={whatsApp} alt="WhatsApp" />
            </a>
            <a
              style={{ marginRight: "15px" }}
              target="_blank"
              href="https://www.linkedin.com/in/andrei-subach-17b29887/"
              rel="noreferrer"
            >
              <img style={{ width: "25px" }} src={linkedin} alt="linkedin" />
            </a>
          </span>
          <a
            target="_blank"
            rel="noreferrer"
            className="grey-text text-lighten-4 right"
            href="https://github.com/RKKon/React-mini-app-movies"
          >
            My Repository
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
