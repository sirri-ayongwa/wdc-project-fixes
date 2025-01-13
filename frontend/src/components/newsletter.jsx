import React, { useState } from "react";
import "./style.css";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdayMonth, setBirthdayMonth] = useState("");
  const [birthdayDay, setBirthdayDay] = useState("");

  return (
    <div className="news-letter-container bg-blue-900 text-white p-8 rounded-lg shadow-lg">
      <form
        className="form-news-letter validate"
        action="https://worlddisastercenter.us22.list-manage.com/subscribe/post?u=c90ad2e6157e6eac27328c681&amp;id=a73ca4362c&amp;f_id=0044d6e1f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
      >
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Impact360 Newsletter</h2>
        <p className="text-sm mb-6">
        Stay connected with news, impactful stories, and exclusive insights from the World Disaster Center. Be part of the movement for a safer world.
        </p>

        {/* Input Fields in One Compact Row */}
        <div className="flex flex-wrap gap-4 items-center">
          {/* Email Address */}
          <div className="flex-1">
            <label htmlFor="email-address" className="block text-sm font-semibold mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              value={email}
              name="EMAIL"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              type="email"
              id="email-address"
              required
              className="input-field"
            />
          </div>

          {/* First Name */}
          <div className="flex-1">
            <label htmlFor="first-name" className="block text-sm font-semibold mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              value={firstName}
              name="FNAME"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              type="text"
              id="first-name"
              required
              className="input-field"
            />
          </div>

          {/* Last Name */}
          <div className="flex-1">
            <label htmlFor="last-name" className="block text-sm font-semibold mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              value={lastName}
              name="LNAME"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              type="text"
              id="last-name"
              required
              className="input-field"
            />
          </div>

          {/* Birthday (Compact) */}
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-semibold mb-1">Birthday</label>
            <div className="flex gap-1">
              <input
                type="text"
                pattern="[0-9]*"
                placeholder="MM"
                size="2"
                maxLength="2"
                value={birthdayMonth}
                name="BIRTHDAY[month]"
                onChange={(e) => setBirthdayMonth(e.target.value)}
                className="input-field w-16 text-center"
              />
              <input
                type="text"
                pattern="[0-9]*"
                placeholder="DD"
                size="2"
                maxLength="2"
                value={birthdayDay}
                name="BIRTHDAY[day]"
                onChange={(e) => setBirthdayDay(e.target.value)}
                className="input-field w-16 text-center"
              />
            </div>
          </div>
        </div>

        {/* Subscribe Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-12 py-3 rounded-lg shadow-lg font-bold text-lg hover:bg-blue-700 transition-all"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewsLetter;
