"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xbgjoyog");
  const router = useRouter();

  useEffect(() => {
    if (state.succeeded) {
      router.replace("/thanks");
    }
  }, [router, state.succeeded]);

  if (state.succeeded || state.submitting) {
    return (
      <div
        className="contact-form contact-success"
        role="status"
        aria-live="polite"
      >
        <span className="form-status">
          {state.succeeded ? "MESSAGE RECEIVED" : "SENDING MESSAGE"}
        </span>
        <p>
          {state.succeeded
            ? "Taking you to the confirmation page..."
            : "Sending your message securely..."}
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>YOUR NAME</span>
        <input name="name" type="text" placeholder="NAME" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </label>
      <label>
        <span>YOUR EMAIL</span>
        <input
          name="email"
          type="email"
          placeholder="EMAIL@EXAMPLE.COM"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </label>
      <label>
        <span>MESSAGE</span>
        <textarea
          name="message"
          placeholder="TELL ME ABOUT THE SYSTEM"
          rows={5}
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </label>
      <ValidationError errors={state.errors} />
      <div className="contact-form-footer">
        <button className="action" type="submit" disabled={state.submitting}>
          {state.submitting ? "SENDING..." : "SEND MESSAGE \u2192"}
        </button>
      </div>
    </form>
  );
}
