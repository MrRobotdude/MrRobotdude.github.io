# Doddie Prawarjito — software developer

Career portfolio: **https://mrrobotdude.github.io/**

An editorial portfolio covering business applications, SQL performance, payroll rules, integrations, teaching, and selected academic/personal projects. English and Bahasa Indonesia, project filters and case-study dialogs, downloadable résumés, accessible navigation, and responsive layouts. Project descriptions distinguish delivered work, local demonstrations, ongoing development, and incomplete historical exercises.

## Current curation

Six featured projects lead the site. FisHE, Go Truck and Voila have a separate design/teaching section with independent repositories and live demos. Eight supporting or unfinished projects sit on the learning shelf. FisHE is explicitly a 2026 reconstruction from an earlier brief/logo; Go Truck and Voila are restored HCI designs. See [curation decisions](docs/CURATION.md).

## Run locally

No install or build dependencies. Run `npm run check`, then serve `site/` using any static HTTP server (for example `python -m http.server 3030 --directory site`).

## Company website

The former root ATS company presentation is preserved at **https://mrrobotdude.github.io/ats-company-website/**. Its canonical editable source is `MrRobotdude/ats-kit-react`; `ats-back-go` is the optional contact backend. Next.js ATS variants are documented as earlier experiments. `site/ats/` contains the compiled static company presentation, built with `PUBLIC_URL=/ats`. It uses direct contact links while no API/CAPTCHA configuration is supplied. GitHub Pages cannot host Go, SQL Server, or SMTP.

## Deployment and maintenance

GitHub Actions validates the static site, uploads `site/`, and deploys to GitHub Pages on main. Company edits require rebuilding the canonical frontend and replacing `site/ats/`. Private source repositories stay private. No employer source, client data, backend tokens, or company configuration is included in the portfolio.

Career content was checked against the latest General Experience CV; screenshots use synthetic records or the existing public company presentation. The attendance metric describes stored-procedure execution, approximately 30 minutes to 1 minute for about 4,000 employees. Training is presented separately from professional certification.

## Independent company website

ATS source and deployment are owned by [ats-company-website](https://github.com/MrRobotdude/ats-company-website). This personal repository contains only the career portfolio and its ATS case study/screenshot; it no longer hosts the ATS application.
