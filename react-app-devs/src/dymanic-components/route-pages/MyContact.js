import React from "react";

export default function MyContact() {
  return (
    <>
      <h1>Contact</h1>

      <ul className="contact-list">
        <li>
          <strong>Email</strong>{" "}
          <a href="mailto:you@example.com">you@example.com</a>
        </li>
        <li><strong>Phone</strong> +91 90000 00000</li>
        <li><strong>Location</strong> Ghaziabad, Uttar Pradesh, India</li>
        <li>
          <strong>LinkedIn</strong>{" "}
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
            linkedin.com/in/your-profile
          </a>
        </li>
        <li>
          <strong>GitHub</strong>{" "}
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
            github.com/your-username
          </a>
        </li>
      </ul>

      <a className="btn" href="mailto:you@example.com">Send Email</a>
    </>
  );
}