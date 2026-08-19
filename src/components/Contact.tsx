import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { personalInfo } from "../config/data";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${name}`;
    const body = `Hi Likith,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="px-[var(--gutter)] max-w-[var(--container-max)] mx-auto py-[var(--section-gap)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <p className="font-mono text-label uppercase tracking-widest text-text-muted mb-2">
            05
          </p>
          <h2 className="font-display text-display-md text-text-primary mb-6">
            Let's connect
          </h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-[400px]">
            Open to opportunities, collaborations, or just a good conversation
            about distributed systems.
          </p>

          {/* Contact details */}
          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="block text-body-md text-text-secondary hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="block text-body-md text-text-muted hover:text-text-secondary transition-colors duration-200 cursor-pointer"
            >
              {personalInfo.phone}
            </a>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-7"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-body-sm text-text-muted mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-border py-3 text-body-md text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-body-sm text-text-muted mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-border py-3 text-body-md text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors duration-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-body-sm text-text-muted mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border-b border-border py-3 text-body-md text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-accent text-bg font-medium text-body-sm rounded-sm transition-all duration-300 ease-out hover:opacity-90 cursor-pointer"
            >
              Send message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
