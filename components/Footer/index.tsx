import { FC } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaDribbble,
} from "react-icons/fa";
import Container from "components/UI/Container";
import Image from "next/image";
import styles from "@modules/Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.firstRow}>
          <div className={styles.logo}>
            <Image
              src={"https://i.ibb.co/FBYXxN6/res-logo.webp"}
              width={128}
              height={128}
              alt="logo.webp"
              draggable={false}
            />
            <h4>Tasty Treat</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              quod veniam.
            </p>
          </div>
          <div className={styles.schedule}>
            <h4>Delivery Time</h4>
            <div>
              <div>
                <h5>Sunday - Thursday</h5>
                <p>10:00am - 11:00pm</p>
              </div>
              <div>
                <h5>Friday - Saturday</h5>
                <p>Off day</p>
              </div>
            </div>
          </div>
          <div className={styles.contact}>
            <h4>Contact</h4>
            <div>
              <p>Location: ZindaBazar Sylhet-3100, Bangdalesh</p>
            </div>
            <div>
              <h5>Phone: 01712345678</h5>
              <h5>Email: example@mail.com</h5>
            </div>
          </div>
          <div className={styles.newsletter}>
            <h4>Newsletter</h4>
            <p>Subscribe to our Newsletter</p>
            <form>
              <input type="email" required placeholder="Enter your email..." />
              <button>
                <RiSendPlaneLine size={18} />
              </button>
            </form>
          </div>
        </div>
        <div className={styles.lastRow}>
          <div>
            <p>&#169;Tasty Treats. All rights reserved.</p>
          </div>
          <div>
            <p>Follow:</p>
            <ul className={styles.socials}>
              <li>
                <button>
                  <FaFacebookF size={16} />
                </button>
              </li>
              <li>
                <button>
                  <FaInstagram size={16} />
                </button>
              </li>
              <li>
                <button>
                  <FaTwitter size={16} />
                </button>
              </li>
              <li>
                <button>
                  <FaDribbble size={16} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
