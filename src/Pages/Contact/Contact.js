import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.parent}>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30014.915208003073!2d75.31805981083986!3d19.8879469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3d15bc6652f%3A0xb44413a328dcb453!2sFitness%20Trainer!5e0!3m2!1sen!2sin!4v1681766063489!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={styles.main_container}>
        <div className={styles.first_container}>
          <h1>Get In Touch</h1>
          <h4>
            If you are interested in working with us, please get in touch.
          </h4>
          <div className={styles.line}></div>
          <p>
            Investigationes demonstraverunt lectores legere me lius quod ii
            legunt saepius. Claritas est etiam processus dynamicus, qui sequitur
            mutationem consuetudium lectorum.
          </p>
          <p>
            Investigationes demonstraverunt lectores legere me lius quod ii
            legunt saepius. Claritas est etiam processus dynamicus, qui sequitur
            mutationem consuetudium lectorum.
          </p>
          <p>
            Address: Fitness Trainer Cidco Rd, Kirti Housing Society, Mathura
            Nagar, N-6, Kiradpura, Aurangabad, Maharashtra 43100 Email:
            <span style={{ color: " rgb(186, 14, 43)" }}>hello@albedo.com</span>
          </p>
          <p>
            Monday t Friday from9.00 am to 8.00 pm EST Saturday from 10.00 am to
            6.00 pm EST
          </p>
        </div>
        <div className={styles.second_container}>
          <h1>FeedBack</h1>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your E-mail" />
          <input type="password" placeholder="Subject" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message" />
          <div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
