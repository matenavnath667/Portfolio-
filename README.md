# Navnath Mate — Developer Portfolio

A responsive, dark-first portfolio built with plain HTML, CSS and JavaScript. It includes responsive navigation, an animated role line, theme toggle, section reveal effects, project filters, an accessible portrait fallback, and a contact form that prepares an email draft rather than falsely claiming server-side delivery.

## Run locally

Open `index.html`, or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Personalize your portfolio

- **Photo:** Your uploaded professional photograph is saved at `assets/navnath-mate.jpg`.
- **Resume:** Your uploaded resume is saved at `assets/navnath-mate-resume.pdf` with working download and view links.
- **Certificates:** Add genuine certificates and verify title, issuer, date and credential URL before publishing them.
- **Projects:** OS Travels is the currently featured source repository. Add other projects only after confirming their implementation status and sharing code, screenshots or a working demo.
- **Education:** CGPA is listed as 6.86 based on the uploaded resume.
- **Contact form:** Uses a `mailto:` draft. It does not send through a web server. To receive submissions without the visitor's email app, configure a secure form service/backend and spam protection.
- **Contact details:** Email and social profile links are included. Phone is included in the PDF resume but not placed on the public contact section.

## GitHub Pages deployment

This repository includes `.github/workflows/static.yml`, a GitHub Actions deployment workflow. Open **Settings → Pages** and confirm the source is **GitHub Actions**. Pushes to `main` should trigger the workflow. Check **Actions** for the latest run and open the published URL shown in the `github-pages` environment after deployment succeeds.

## Vercel deployment

Import this repository into Vercel as a static site. Use the repository root as the output directory and no build command.

## Quality checks

Test on mobile and desktop. Confirm the resume and photo files exist before linking them, verify the OS Travels live deployment before describing it as active, and do not publish unverified credentials or projects.
