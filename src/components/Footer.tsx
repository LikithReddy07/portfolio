import { personalInfo } from "../config/data";

export function Footer() {
  return (
    <footer className="px-[var(--gutter)] max-w-[var(--container-max)] mx-auto py-12 border-t border-border">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-body-sm text-text-muted">
          &copy; {new Date().getFullYear()} {personalInfo.name.charAt(0) + personalInfo.name.slice(1).toLowerCase()}. Built with intent.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-sm text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-sm text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-body-sm text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
