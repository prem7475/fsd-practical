import { useTheme } from "./context/ThemeContext.jsx";
import { useClipboard } from "./hooks/useClipboard.js";
import { useDocumentTitle } from "./hooks/useDocumentTitle.js";

const linkedinUrl = "https://www.linkedin.com/in/premnarayani/";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { copy, copied, error: copyError } = useClipboard();
  const isDark = theme === "dark";

  useDocumentTitle("Prem Narayani | Personal Resume");

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Prem Narayani, home">
          PN<span>.</span>
        </a>
        <nav className="navigation" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#interests">Interests</a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
          aria-pressed={isDark}
        >
          <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
          {isDark ? "Light" : "Dark"}
        </button>
      </header>

      <main id="home" className="resume">
        <section className="intro" aria-labelledby="name">
          <p className="eyebrow">MY RESUME</p>
          <h1 id="name">Prem Narayani</h1>
          <p className="intro-copy">
            Implementing React Hooks for FSD Exam.
          </p>
          <div className="intro-actions">
            <a
              className="profile-link"
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn profile <span aria-hidden="true">↗</span>
            </a>
            <button
              className="copy-button"
              type="button"
              onClick={() => copy(linkedinUrl)}
            >
              {copied ? "Copied!" : "Copy profile link"}
            </button>
          </div>
          <p
            className="copy-feedback"
            role={copyError ? "alert" : "status"}
            aria-live="polite"
          >
            {copyError || (copied ? "LinkedIn profile link copied." : "")}
          </p>
        </section>

        <section id="about" className="resume-section" aria-labelledby="about-title">
          <div className="section-heading">
            <span className="section-number">01</span>
            <h2 id="about-title">About</h2>
          </div>
          <p className="section-copy">
            I’m learning to create clear, useful web experiences and strengthening
            my skills through hands-on projects.
          </p>
        </section>

        <section
          id="education"
          className="resume-section"
          aria-labelledby="education-title"
        >
          <div className="section-heading">
            <span className="section-number">02</span>
            <h2 id="education-title">Education</h2>
          </div>
          <div className="detail-card">
            <div>
              <h3>Student</h3>
              <p>Class D15C</p>
            </div>
            <span className="detail-meta">Roll no. 70</span>
          </div>
        </section>

        <section
          id="interests"
          className="resume-section"
          aria-labelledby="interests-title"
        >
          <div className="section-heading">
            <span className="section-number">03</span>
            <h2 id="interests-title">Currently exploring</h2>
          </div>
          <ul className="interest-list">
            <li>React and hooks</li>
            <li>JavaScript</li>
            <li>Web interface design</li>
          </ul>
        </section>

        <footer className="resume-footer">
          <span>Prem Narayani</span>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            Connect on LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </footer>
      </main>
    </div>
  );
}
