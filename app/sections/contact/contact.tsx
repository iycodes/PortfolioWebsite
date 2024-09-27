"use client";
import React, { FormEvent, useRef, useState } from "react";
import styles from "./contact.module.scss";
import { FaPaperPlane } from "react-icons/fa6";
import {
  FaEnvelope,
  FaFacebook,
  FaFacebookF,
  FaGithubAlt,
  FaMapMarker,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { RiMailAddLine } from "react-icons/ri";
import { send_email } from "@/app/helpers/sendEmail";
// import Lottie, { LottieProps } from "react-lottie";
import paper_plane from "@/public/lottie/paper_plane.json";
import loading from "@/public/lottie/loading.json";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

function Contact({}: Props) {
  const formResetBtn = useRef<HTMLButtonElement>(null);
  const [isSending, setIsSending] = useState(false);

  async function submit_form(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);

    try {
      const res: Response = await send_email(e);
      setIsSending(false);
      if (res.status != 200) {
        console.log("failing over");
      }
      myToasts("success", "MESSAGE SENT!");
      formResetBtn.current?.click();
    } catch (error) {
      console.error(error);
      myToasts("error", "AN ERROR OCCURED");
    }
  }
  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.title}>CONTACT</div>
      <form className={styles.form} onSubmit={(e) => submit_form(e)}>
        <button ref={formResetBtn} hidden type="reset"></button>
        <input type="text" placeholder="NAME" name="name" required />
        <input type="text" placeholder="EMAIL" name="email" required />
        <textarea rows={10} placeholder="MESSAGE" name="message" required />
        <button
          className={styles.send_button}
          id="submit"
          type="submit"
          value="SEND"
        >
          {isSending ? (
            // <Lottie
            //   isClickToPauseDisabled
            //   options={defaultOptions}
            //   width={200}
            // />
            <div>sending</div>
          ) : (
            <div className={styles.alt_send_button}>
              <div className={styles.send_icon}>
                <FaPaperPlane />
              </div>
              <div className={styles.send_text}>SEND</div>
            </div>
          )}
        </button>
      </form>
      <div className={styles.more}>
        <div>
          <span>
            <FaMapMarker />
          </span>
          <span>City, State</span>
        </div>
        <div>
          <span>
            <FaPhone />
          </span>
          <span>+2340000000000</span>
        </div>
        <div className={styles.info}>
          <span>
            <FaEnvelope />
          </span>
          <span>admin@iycodes.com</span>
        </div>

        <div className={styles.line}></div>
        <div className={styles.socials_container}>
          <div className={styles.socials}>
            <a href="#">
              <FaFacebookF className={styles.abc} />
              <span>Facebook</span>
            </a>
            <a href="#">
              <FaTwitter />
              <span>Twitter</span>
            </a>
            <a href="#">
              <FaGithubAlt />
              <span>Github+</span>
            </a>
            <a href="#">
              <IoDocumentTextSharp />
              <span>Resumè</span>
            </a>
            <a href="mailto:admin@iycodes.com">
              <RiMailAddLine />
              <span>Email</span>
            </a>
            {/* <a href="#">
            <span>CodePen</span>
          </a> */}
          </div>
          {/* <div className={styles.copyright}>© ALL OF THE RIGHTS RESERVED</div> */}
        </div>
        {/* <div className={styles.line}></div> */}
      </div>
    </div>
  );
}

export default Contact;

const defaultOptions = {
  loop: true,

  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function myToasts(key: string, msg: string) {
  const toastOptions: ToastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    theme: "dark",
  };
  switch (key) {
    case "success":
      toast.success(msg || "success!", toastOptions);
      break;
    case "error":
      toast.error(msg || "An error occured!", toastOptions);
      break;
    default:
      toast("someomeomoem", toastOptions);
      (function () {
        console.log("na me run");
      })();
      break;
  }
}
