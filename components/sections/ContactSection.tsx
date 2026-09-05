"use client";

import type { FormEvent } from "react";

import Reveal from "@/components/ui/Reveal";
import { contacts } from "@/data/portfolio";
import useSendEmail from "@/hooks/sendEmail";

import type { EmailItem } from "@/types/emails";

const fieldClasses =
  "w-full border border-cream/15 bg-nav/20 px-4 py-3.5 text-cream outline-none placeholder:text-muted focus:border-muted";

export default function ContactSection() {
  const {
    sendEmail,
    loading,
    error,
    success,
  } = useSendEmail();

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data: EmailItem = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    const result = await sendEmail(data);

    // Clear form only when email was sent successfully
    if (result.success) {
      form.reset();
    }
  };

  return (
    <section
      id="contact"
      className="section-anchor bg-section-odd px-5 py-24 md:px-8 lg:px-12 lg:py-32 xl:px-20"
    >
      <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[55%_45%]">
        <Reveal side="left">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-muted">
            Contact
          </p>

          <h2 className="mb-10 text-5xl font-semibold leading-[0.95] text-cream md:text-7xl">
            Let&apos;s build
            <br />
            something useful.
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-cream/80">
                Name

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  disabled={loading}
                  className={fieldClasses}
                />
              </label>

              <label className="grid gap-2 text-sm text-cream/80">
                Email

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  disabled={loading}
                  className={fieldClasses}
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm text-cream/80">
              Subject

              <input
                type="text"
                name="subject"
                placeholder="What would you like to discuss?"
                required
                disabled={loading}
                className={fieldClasses}
              />
            </label>

            <label className="grid gap-2 text-sm text-cream/80">
              Message

              <textarea
                name="message"
                rows={6}
                placeholder="Write your message..."
                required
                disabled={loading}
                className={`${fieldClasses} resize-none`}
              />
            </label>

            {error && (
              <p className="text-sm text-red-400">
                {error}
              </p>
            )}

            {success && (
              <p className="text-sm text-green-400">
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-fit border border-cream/30 bg-cream px-6 py-3 text-sm font-semibold text-nav hover:border-muted hover:bg-muted disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Reveal>

        <Reveal
          side="right"
          delayMs={100}
          className="flex items-end"
        >
          <div className="grid w-full gap-3">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={
                  contact.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  contact.href.startsWith("http")
                    ? "noreferrer"
                    : undefined
                }
                className="group flex items-center justify-between gap-6 border border-cream/10 bg-nav/15 px-5 py-5"
              >
                <span className="text-sm text-muted">
                  {contact.label}
                </span>

                <span className="text-right text-sm text-cream group-hover:text-muted md:text-base">
                  {contact.value}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}