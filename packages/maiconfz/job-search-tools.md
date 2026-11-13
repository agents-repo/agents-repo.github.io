# job-search-tools

Professional job-search chat tools: job post audit, resume analysis, and interview prep. Chat-only; career-center style reports. Not legal advice.

- Package: `maiconfz/job-search-tools`
- Version: `1.0.0`
- HTML page: https://agents-repo.org/packages/maiconfz/job-search-tools/
- Markdown: https://agents-repo.org/packages/maiconfz/job-search-tools.md

## Agents

- **interview-prep-chat**: Interview questions to ask, STAR story outlines, and offer clarification prep from JD and resume. Emits interview-prep-report. Not legal advice.
- **job-post-audit-chat**: Audit a pasted job description for fit, keywords, scam signals, and next steps. Emits job-post-audit-report. Not legal advice.
- **resume-analyzer-chat**: Analyze pasted or uploaded resume or CV with optional JD tailoring. Emits resume-audit-report. Not legal advice.

## README

# job-search-tools

Professional **job search** chat tools for candidates: audit job postings,
analyze resumes, and prepare for interviews. Chat-only; structured reports
in a career-center voice.

This is a `maiconfz` community package, not an official agents-repo product.
Installed agents reply in the **language the user used** (English if mixed
or unclear).

## What this package is

- Job posting audit (keywords, fit, scam-awareness)
- Resume/CV analysis from **paste** or **PDF/DOC/DOCX** upload
- Interview prep: questions to ask, STAR outlines, offer clarification prompts

## What this package is not

- **Not** [`maiconfz/roast-my-project`](https://github.com/agents-repo/registry/tree/main/packages/maiconfz/roast-my-project)
  or other satire packages
- **Not** an ATS, not a hiring decision, **not** legal or employment advice
- **Not** live mock interviews or deep salary negotiation coaching

For employer due diligence, see
[`maiconfz/consulting-employer-check`](https://github.com/agents-repo/registry/tree/main/packages/maiconfz/consulting-employer-check).

## Terminology

| Term | Meaning |
| --- | --- |
| **JD** | Job description (posting text) |
| **ATS** | Applicant tracking system (employer resume screening software) |
| **CV** | Curriculum vitae (resume) |
| **STAR** | Situation, Task, Action, Result (behavioral interview story format) |

## Install

```bash
npx agents-repo@latest install maiconfz/job-search-tools
```

## Chat agents

| Agent | Purpose |
| --- | --- |
| `job-post-audit-chat` | Analyze a pasted job description (default) |
| `resume-analyzer-chat` | Resume critique; optional JD for tailoring |
| `interview-prep-chat` | Questions to ask, STAR prep, offer checks |

## Usage tips

- Paste the job description into `job-post-audit-chat`, then use outputs in
  `resume-analyzer-chat` and `interview-prep-chat`.
- For resumes, prefer **DOCX** or text-based **PDF** when uploading.
- Redact others' personal data you are not authorized to share.
