import React, {
  useState,
  FormEvent,
  ChangeEvent,
  useRef,
  useEffect,
} from "react";
import "../style/responsive.scss";
import "../style/blocks/contact.scss";
import LinkIcon from "../assets/icons/arrow-next-small-svgrepo-com.svg";

import { SocialIcons } from "../utils/Icons";
import { useDarkMode } from "./ThemeContext";
import emailjs from "@emailjs/browser";
import Success from "../assets/icons/success.svg";
import Error from "../assets/icons/fail.svg";

interface FormData {
  from_name: string;
  from_email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { darkMode } = useDarkMode();
  const LightIcons = SocialIcons.filter((item) => item.mode === "light").map(
    (item) => item.icon
  );
  const DarkIcons = SocialIcons.filter((item) => item.mode === "dark").map(
    (item) => item.icon
  );

  const [emailAlert, setEmailAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    // Clear alert message after 5 seconds
    if (emailAlert) {
      const timer = setTimeout(() => {
        setEmailAlert(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [emailAlert]);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current !== null) {
      emailjs
        .sendForm(
          "service_avd5b17",
          "template_90uiro5",
          form.current,
          "_HGpmxnhaQ08Arn1l"
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormData({
              from_name: "",
              from_email: "",
              message: "",
            });
            setEmailAlert({
              message: "Email sent successfully!",
              type: "success",
            });
          },
          (error) => {
            console.log(error.text);
            setEmailAlert({
              message: "Failed to send email. Please try again.",
              type: "error",
            });
          }
        );
    }
  };

  const [formData, setFormData] = useState<FormData>({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSumbit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  return (
    <section className="contact-section" id="contact-section">
      <div className="about-head">
        <p className="content-text">Talk to me</p>
        <h2 className="sec-head">Contact</h2>
      </div>
      <div className="contact-container">
        <section className="contact-details">
          <ul className="contact-list">
            <li className="contact-item">
              <figure className="contact-icon">
                <img
                  src={darkMode ? LightIcons[0] : DarkIcons[0]}
                  alt="Email loading"
                  style={{ width: 23, height: 23 }}
                />
                <figcaption>Email</figcaption>
              </figure>

              <p>thirusakthi.dev@gmail.com</p>
              <a
                href="mailto:thirusakthi.dev@gmail.com"
                target="_blank"
                className="contact-link"
              >
                Write Me
              </a>
            </li>
            <li className="contact-item">
              <figure className="contact-icon">
                <img
                  src={darkMode ? LightIcons[1] : DarkIcons[1]}
                  alt="LinkedIn loading"
                  style={{ width: 23, height: 23 }}
                />
                <figcaption>Linked In</figcaption>
              </figure>
              <p>thirusakthi-dev</p>

              <a
                href="https://www.linkedin.com/in/thirusakthi-dev"
                target="_blank"
                className="contact-link"
              >
                <p>Reach Me</p>
              </a>
            </li>

            <li className="contact-item">
              <figure className="contact-icon">
                <img
                  src={darkMode ? LightIcons[3] : DarkIcons[3]}
                  alt="Phone loading"
                  style={{ width: 23, height: 23 }}
                />
                <figcaption>Phone</figcaption>
              </figure>

              <p>6369594529</p>
              <a href="tel:+916369594529" className="contact-link">
                Contact
              </a>
            </li>
          </ul>
        </section>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              value={formData.from_name}
              onChange={handleOnChange}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email ID</label>
            <input
              type="text"
              id="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleOnChange}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleOnChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>

          {emailAlert && (
            <div className="emailAlert" id="emailAlert">
              <img
                src={emailAlert.type === "success" ? Success : Error}
                style={{ width: 30, height: 30 }}
              ></img>
              <p>{emailAlert.message}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
