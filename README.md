# IFA SANBATO - Full-Stack Developer & Software Engineer Portfolio

A modern, responsive, and high-performance portfolio website built for **IFA SANBATO**, Full-Stack Developer and Software Engineer from Dembi, Oromia, Ethiopia.

## 🚀 About the Project

This portfolio showcases professional credentials, academic background, technical skills, and featured software engineering projects. It is engineered with a dark navy aesthetic, glowing cyan and blue highlights, accessible semantics, responsive layouts for all device screens, and interactive project case studies.

### Personal Details
- **Full Name:** IFA SANBATO
- **Title:** Full-Stack Developer and Software Engineer
- **Location:** Dembi, Oromia, Ethiopia
- **Email:** [ifaasanbatoo@gmail.com](mailto:ifaasanbatoo@gmail.com)
- **Phone:** +251 915 241 208
- **Career Goal:** Secure a high-impact web development job

---

## 🛠️ Technology Stack

- **Frontend:** React 19, TypeScript, JavaScript (ES6+), HTML5, CSS3
- **Styling:** Tailwind CSS v4, Custom CSS Variables, Fluid Typography
- **Icons:** Lucide React
- **Architecture Readiness:** Prepared for PHP REST APIs and MySQL relational databases

---

## 📁 Project Folder Structure

├── .vscode/                    # VS Code workspace settings & recommended extensions
│   ├── extensions.json         # ESLint, Tailwind CSS IntelliSense, Prettier
│   └── settings.json           # Format on save and language associations
├── index.html                  # HTML entry point with meta tags & Google Fonts
├── metadata.json               # Application configuration and metadata
├── package.json                # Project dependencies, scripts (dev, build, zip)
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite build setup with Tailwind CSS plugin
├── ifa-sanbato-portfolio-vscode.zip # Complete all-in-one ZIP archive for VS Code
├── scripts/
│   └── create-zip.py           # Packaging utility script for creating clean ZIP
├── README.md                   # Complete documentation and setup guide
└── src/
    ├── main.tsx                # React DOM mount point
    ├── App.tsx                 # Core application layout and section coordinator
    ├── index.css               # CSS Theme Variables (--bg-canvas, --text-primary) & Tailwind v4
    ├── context/
    │   ├── ThemeContext.tsx    # Light/Dark mode theme provider with localStorage persistence
    │   └── LanguageContext.tsx # English & Afaan Oromoo language provider with persistence
    ├── types/
    │   └── portfolio.ts        # TypeScript interfaces for projects, skills, education, testimonials
    ├── data/
    │   ├── portfolioData.ts    # Centralized data store for Ifa Sanbato
    │   └── translations.ts     # Bilingual dictionary (English & Afaan Oromoo)
    ├── assets/
    │   └── images/             # High-resolution screenshots and developer portrait
    └── components/
        ├── Navbar.tsx          # 3-Zone navigation bar with Light/Dark toggle, Language toggle, ZIP download
        ├── Hero.tsx            # Hero section with portrait, CTAs, and quick stats
        ├── About.tsx           # Biography, career objective, and personal details
        ├── Skills.tsx          # Categorized technical skills with proficiency bars
        ├── Education.tsx       # Academic timeline (School, College, B.Sc. Degree)
        ├── Projects.tsx        # Featured works (Agro App, Calculator, School Portal) with category filter
        ├── ProjectModal.tsx    # Interactive architecture modal with live mini-demos
        ├── Testimonials.tsx    # Professional endorsements, mentor feedback & interactive submission modal
        ├── Contact.tsx         # Direct contact cards and validated message form
        ├── CVModal.tsx         # Printable & downloadable Curriculum Vitae
        ├── ScrollToTop.tsx     # Floating smooth scroll-to-top button with circular progress
        ├── SectionReveal.tsx   # Framer Motion scroll viewport reveal animation wrapper
        └── Footer.tsx          # Copyright, navigation links, and back-to-top button
```

---

## ⚡ Quick Start & Installation

### 1. Prerequisites
Ensure you have **Node.js** (version 18 or higher) and **npm** installed on your computer.
Check with:
```bash
node -v
npm -v
```

### 2. Install Dependencies
In the root directory of your project, run:
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

### 4. Open in Your Web Browser
Vite will output a local URL (typically `http://localhost:3000` or `http://localhost:5173`). Open this link in Google Chrome, Firefox, or Safari.

### 5. Build for Production
To create an optimized production build for deployment:
```bash
npm run build
```

---

## 💻 Using with Visual Studio Code (All-in-One ZIP)

This project has been packaged specifically for VS Code developers:

1. **Download the ZIP**:
   - Download `ifa-sanbato-portfolio-vscode.zip` from the top navigation bar, footer link, or directly from the project directory.
2. **Unzip & Open**:
   ```bash
   unzip ifa-sanbato-portfolio-vscode.zip -d ifa-sanbato-portfolio
   cd ifa-sanbato-portfolio
   code .
   ```
3. **Workspace Configuration Included**:
   - `.vscode/extensions.json`: Recommends ESLint, Tailwind CSS IntelliSense, Prettier, and Auto Rename Tag.
   - `.vscode/settings.json`: Configures auto-formatting on save and CSS associations for Tailwind v4.
4. **Install & Run**:
   ```bash
   npm install
   npm run dev
   ```
5. **Re-generate ZIP Anytime**:
   ```bash
   npm run zip
   ```

---

## 🌟 Key Features

1. **Bilingual Language Toggle (English & Afaan Oromoo)**:
   - Dedicated toggle in the Navbar (`Globe` icon) switching content between English and **Afaan Oromoo** (Oromo language).
   - Provides full native coverage across navigation links, hero headlines, career objective, personal info, technical skills, academic timeline, project details, testimonials, and contact form.
   - Syncs the document HTML `lang` attribute (`lang="om"` / `lang="en"`) and persists selection in `localStorage`.

2. **Testimonials & Professional Endorsements**:
   - Comprehensive endorsements from academic faculty, engineering collaborators, and regional client stakeholders.
   - Includes 5-star rating displays, verified recommendation badges, and category filters (Clients, Mentors, Peers).
   - Features an interactive **"Endorse / Leave Feedback"** modal with live submission and preview.

3. **Floating 'Scroll to Top' Button**:
   - Smoothly slides into view with cubic-bezier spring animation when scrolling past the hero section.
   - Features an integrated circular SVG scroll progress ring and smooth click-to-top transition.

4. **All-in-One VS Code ZIP Distribution**:
   - Complete project source with pre-configured `.vscode` workspace settings and extension recommendations.
   - One-click download available directly from the Navbar and Footer.

5. **Light / Dark Mode Switcher**:
   - Seamlessly toggle between dark navy (electric cyan/blue) and light modes via the Navbar switch.
   - Preserves custom CSS theme variables (`--bg-canvas`, `--bg-card`, etc.) and persists user preference in `localStorage`.

6. **Reading Scroll Progress Bar**:
   - High-precision gradient progress indicator situated at the very top of the Navbar that tracks user scrolling relative to total page height.

7. **Framer Motion Viewport Scroll Animations**:
   - Smooth cubic-bezier slide-up and fade-in animations trigger naturally as main sections enter the viewport (`SectionReveal`).

8. **Circular Developer Portrait**:
   - Modern circular profile frame featuring a multi-layered radiant glow, hover zoom effects, and "Available for Hire" status tag.

9. **Project Category Filtering**:
   - Segmented buttons for filtering between All, Web Applications, Mobile & Responsive, and APIs & Backend with live item counters and quick reset.

10. **Working CV Download & Print**:
    - Click the **"Download CV"** button anywhere on the site.
    - Choose **"Print / Save as PDF"** for a clean, professional print-ready resume.
    - Choose **"Download CV File"** to save an offline standalone `.html` CV document.

11. **Interactive Project Demos**:
    - **Agro App:** Includes a live Ethiopian commodity price estimator (Teff, Coffee, Wheat, Maize) with quintal calculator.
    - **Interactive Calculator:** A fully functional digital calculator widget inside the project case study.
    - **School Management System:** An interactive student roster filter simulation by grade level.

12. **Accessible & Validated Contact Form**:
    - Real-time input validation (email format, character counts).
    - Clear error messages.
    - Option to open the drafted message directly in your local email client (`mailto:`).

13. **One-Click Clipboard Actions**:
    - Instant copy for Email address and Phone number with visual checkmark feedback.

---

## 🔧 Troubleshooting Common Issues

- **Issue:** `Command not found: vite` or packages missing.
  - **Fix:** Run `npm install` to download dependencies into `node_modules`.
- **Issue:** Port 3000 already in use.
  - **Fix:** Vite will automatically suggest port 3001 or you can kill the process on port 3000.
- **Issue:** Styles not applying properly.
  - **Fix:** Ensure `@import "tailwindcss";` is present at the top of `src/index.css` and that Vite has `@tailwindcss/vite` configured in `vite.config.ts`.

---

## 📄 License
© 2026 IFA SANBATO. All rights reserved.
