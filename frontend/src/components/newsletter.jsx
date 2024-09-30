import React, { useState } from "react";
import "./style.css";

function NewsLetter() {
  const [email, setEmail] = useState("");
  return (
    <div className="news-letter-container">
      <form
        className="form-news-letter validate"
        action="https://worlddisastercenter.us22.list-manage.com/subscribe/post?u=c90ad2e6157e6eac27328c681&amp;id=a73ca4362c&amp;f_id=0044d6e1f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
      >
        <span className="title">Subscribe to our newsletter.</span>
        <p className="description">
          Enter your email address below and join our growing community. We
          promise not to spam you and you can unsubscribe at any time.
        </p>
        <div>
          <input
            value={email}
            name="EMAIL"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            type="email"
            id="email-address"
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
}

export default NewsLetter;
