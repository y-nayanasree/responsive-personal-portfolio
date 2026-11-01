
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
  --primary: #7957f5;
  --secondary: #a78bfa;
  --dark: #17152d;
  --muted: #77758e;
  --light: #f7f5ff;
  --white: #ffffff;
  --border: #eae6f8;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 85px;
}

body {
  font-family: 'DM Sans', sans-serif;
  color: var(--dark);
  background: var(--white);
  line-height: 1.7;
  overflow-x: hidden;
}

.container {
  width: min(1120px, 90%);
  margin: auto;
}

/* NAVIGATION */

.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(121, 87, 245, 0.1);
}

.navbar {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 27px;
  font-weight: 800;
  letter-spacing: -1px;
  color: var(--dark);
  text-decoration: none;
}

.logo span {
  color: var(--primary);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 29px;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: #55516d;
  font-size: 13px;
  font-weight: 700;
  transition: color 0.25s;
}

.nav-links a:hover {
  color: var(--primary);
}

.menu-toggle {
  display: none;
  background: var(--light);
  border: 0;
  border-radius: 10px;
  padding: 8px 13px;
  font-size: 23px;
  cursor: pointer;
}

/* COMMON SECTIONS */

.section {
  padding: 100px 0;
}

.alternate {
  background: #f8f7ff;
}

.section-heading {
  text-align: center;
  margin-bottom: 55px;
}

.eyebrow {
  color: var(--primary);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
  margin-bottom: 12px;
}

.section-heading h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(32px, 5vw, 43px);
  line-height: 1.25;
  letter-spacing: -1.5px;
}

.section-heading h2 span {
  color: var(--primary);
}

/* HERO */

.hero {
  min-height: 650px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 85% 20%, rgba(167, 139, 250, 0.23), transparent 30%),
    radial-gradient(circle at 10% 90%, rgba(121, 87, 245, 0.10), transparent 35%),
    linear-gradient(135deg, #ffffff, #f6f3ff);
}

.hero-content {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  align-items: center;
  gap: 50px;
}

.hero-text h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(43px, 7vw, 72px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -3px;
  margin: 20px 0;
}

.hero-text h1 span {
  background: linear-gradient(90deg, #7957f5, #b08cff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.hero-text h2 {
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 15px;
}

.hero-text > p:not(.eyebrow) {
  max-width: 540px;
  color: var(--muted);
  font-size: 15px;
  margin-bottom: 27px;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.btn {
  display: inline-block;
  text-decoration: none;
  border-radius: 10px;
  padding: 13px 23px;
  font-size: 13px;
  font-weight: 800;
  transition: all 0.25s ease;
}

.primary-btn {
  background: linear-gradient(120deg, #7957f5, #9976ff);
  color: white;
  border: none;
  box-shadow: 0 8px 20px rgba(121, 87, 245, 0.22);
}

.primary-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 25px rgba(121, 87, 245, 0.35);
}

.outline-btn {
  border: 1px solid #d6ccf8;
  color: var(--primary);
  background: white;
}

.outline-btn:hover {
  background: var(--light);
  transform: translateY(-3px);
}

.hero-note {
  font-size: 12px !important;
  color: #8b879e !important;
  margin-top: 25px;
}

.hero-visual {
  min-height: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.profile-circle {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(145deg, #c2aaff, #7049eb);
  border: 12px solid white;
  box-shadow: 0 25px 65px rgba(102, 69, 208, 0.25);
  position: relative;
}

.profile-circle::before {
  content: "";
  position: absolute;
  inset: -23px;
  border: 1px dashed #bba7fa;
  border-radius: 50%;
}

.profile-circle span {
  font-family: 'Space Grotesk', sans-serif;
  color: white;
  font-size: 78px;
  font-weight: 800;
}

.floating-card {
  position: absolute;
  padding: 13px 17px;
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 12px 30px rgba(50, 35, 100, 0.13);
  border: 1px solid #eee8ff;
  font-size: 12px;
  font-weight: 800;
}

.card-one {
  top: 50px;
  right: -10px;
}

.card-two {
  bottom: 55px;
  left: -20px;
}

/* QUICK HIGHLIGHTS */

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.skill-card {
  background: white;
  padding: 27px 16px;
  border-radius: 17px;
  text-align: center;
  border: 1px solid var(--border);
  box-shadow: 0 8px 25px rgba(60, 40, 120, 0.035);
  transition: 0.3s;
}

.skill-card:hover {
  transform: translateY(-8px);
  border-color: #c7b8ff;
  box-shadow: 0 15px 35px rgba(60, 40, 120, 0.10);
}

.skill-card span {
  display: inline-block;
  font-size: 34px;
  margin-bottom: 12px;
}

.skill-card h3 {
  font-size: 16px;
  margin-bottom: 5px;
}

.skill-card p {
  color: var(--muted);
  font-size: 12px;
}

/* ABOUT */

.about-card {
  max-width: 900px;
  margin: auto;
  padding: 42px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: 0 15px 45px rgba(60, 40, 120, 0.06);
  position: relative;
}

.about-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 30px;
  bottom: 30px;
  width: 5px;
  background: linear-gradient(#7957f5, #b08cff);
  border-radius: 10px;
}

.about-card p {
  color: var(--muted);
  font-size: 15px;
  margin-bottom: 18px;
}

.about-card p:last-child {
  margin-bottom: 0;
}

/* TECHNICAL SKILLS */

#skills .skills-grid {
  grid-template-columns: repeat(4, 1fr);
}

#skills .skill-card {
  padding: 30px 15px;
  border-radius: 18px;
}

#skills .skill-card span {
  font-size: 36px;
}

/* PROJECTS */

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.project-card {
  padding: 32px;
  border: 1px solid var(--border);
  border-radius: 19px;
  background: white;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease;
}

.project-card::after {
  content: "";
  position: absolute;
  width: 110px;
  height: 110px;
  background: #f0ebff;
  border-radius: 50%;
  right: -45px;
  top: -45px;
  transition: 0.3s;
}

.project-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 17px 40px rgba(65, 43, 130, 0.10);
  border-color: #c8b9ff;
}

.project-card:hover::after {
  transform: scale(1.5);
}

.project-icon {
  font-size: 38px;
  margin-bottom: 18px;
}

.project-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  margin-bottom: 12px;
}

.project-card p {
  font-size: 14px;
  color: var(--muted);
  margin-bottom: 22px;
}

.project-tag {
  display: inline-block;
  background: #f1edff;
  color: #6948d4;
  padding: 7px 13px;
  border-radius: 30px;
  font-size: 11px;
  font-weight: 800;
}

/* EDUCATION TIMELINE */

.timeline {
  max-width: 800px;
  margin: auto;
  border-left: 2px solid #d8cefa;
  padding-left: 35px;
}

.timeline-item {
  position: relative;
  padding: 0 0 42px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -43px;
  top: 5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--primary);
  border: 4px solid #e9e2ff;
  box-shadow: 0 0 0 4px white;
}

.timeline-item > div {
  background: white;
  border: 1px solid var(--border);
  border-radius: 15px;
  padding: 25px;
  transition: 0.3s;
}

.timeline-item > div:hover {
  transform: translateX(6px);
  box-shadow: 0 10px 25px rgba(70, 45, 150, 0.08);
}

.timeline-date {
  color: var(--primary);
  font-size: 12px;
  font-weight: 800;
  margin-bottom: 8px;
}

.timeline-item h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 19px;
  margin-bottom: 8px;
}

.timeline-item p:not(.timeline-date) {
  font-size: 13px;
  color: var(--muted);
}

/* CONTACT */

.contact-card {
  max-width: 790px;
  margin: auto;
  padding: 42px;
  border-radius: 22px;
  text-align: center;
  background: linear-gradient(135deg, #f0ebff, #f6f5ff);
  border: 1px solid #e5dcff;
}

.contact-card > p {
  color: var(--muted);
  font-size: 14px;
  margin-bottom: 25px;
}

.contact-form {
  max-width: 520px;
  margin: 0 auto 30px;
  text-align: left;
}

.contact-form label {
  display: block;
  margin: 14px 0 7px;
  font-size: 13px;
  font-weight: 800;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 14px;
  border: 1px solid #ddd6f3;
  border-radius: 10px;
  background: white;
  font-family: inherit;
  font-size: 14px;
  outline: none;
  transition: 0.2s;
  resize: vertical;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(121, 87, 245, 0.12);
}

.form-error {
  display: block;
  min-height: 17px;
  margin-top: 4px;
  color: #c62828;
  font-size: 11px;
}

.contact-form button {
  margin-top: 15px;
  cursor: pointer;
}

#formStatus {
  min-height: 24px;
  margin-top: 12px;
  text-align: center;
  color: #21864a;
  font-size: 13px;
  font-weight: 800;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 13px;
}

.contact-links a {
  text-decoration: none;
  background: white;
  color: var(--primary);
  border: 1px solid #ded5fa;
  border-radius: 10px;
  padding: 12px 19px;
  font-size: 13px;
  font-weight: 800;
  transition: 0.25s;
}

.contact-links a:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-3px);
}

/* FOOTER */

.footer {
  padding: 28px 15px;
  background: #17152d;
  color: #e3def6;
  text-align: center;
  font-size: 13px;
}

.footer p + p {
  margin-top: 5px;
  color: #aaa4c6;
  font-size: 11px;
}

/* ACCESSIBILITY */

a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 3px solid #a995ff;
  outline-offset: 4px;
}

/* TABLET */

@media (max-width: 850px) {
  .nav-links {
    gap: 15px;
  }

  .nav-links a {
    font-size: 12px;
  }

  .hero-content {
    gap: 20px;
  }

  .profile-circle {
    width: 220px;
    height: 220px;
  }

  .skills-grid,
  #skills .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* MOBILE */

@media (max-width: 650px) {
  .navbar {
    position: relative;
  }

  .menu-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 76px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 12px 22px;
    background: white;
    border: 1px solid var(--border);
    border-radius: 0 0 15px 15px;
    box-shadow: 0 12px 25px rgba(50, 35, 100, 0.10);
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links a {
    display: block;
    padding: 12px 0;
    font-size: 14px;
  }

  .section {
    padding: 70px 0;
  }

  .hero {
    min-height: auto;
    padding: 75px 0 45px;
  }

  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-text h1 {
    font-size: 48px;
    letter-spacing: -2px;
  }

  .hero-text > p:not(.eyebrow) {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-visual {
    min-height: 300px;
  }

  .profile-circle {
    width: 195px;
    height: 195px;
  }

  .profile-circle span {
    font-size: 60px;
  }

  .card-one {
    right: 0;
    top: 20px;
  }

  .card-two {
    left: 0;
    bottom: 20px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .about-card,
  .contact-card {
    padding: 27px;
  }

  .timeline {
    padding-left: 25px;
  }

  .timeline-dot {
    left: -33px;
  }
}

/* SMALL MOBILE */

@media (max-width: 400px) {
  .skills-grid,
  #skills .skills-grid {
    grid-template-columns: 1fr;
  }

  .hero-text h1 {
    font-size: 40px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .btn {
    text-align: center;
  }

  .project-card {
    padding: 24px;
  }

  .contact-card {
    padding: 20px;
  }
}

/* REDUCED MOTION */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
