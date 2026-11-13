# recruiting-tools

Professional recruiting chat tools: job post quality, resume screening, and structured interview planning. Chat-only; not legal or HR advice.

- Package: `maiconfz/recruiting-tools`
- Version: `1.0.0`
- HTML page: https://agents-repo.org/packages/maiconfz/recruiting-tools/
- Markdown: https://agents-repo.org/packages/maiconfz/recruiting-tools.md

## Agents

- **interview-planning-chat**: Structured interview guide with competencies, behavioral questions, and STAR probes. Emits interview-plan-report. Not a hire decision.
- **job-post-quality-chat**: Review a job posting for clarity, required vs preferred criteria, and screening matrix. Emits job-post-quality-report. Not legal advice.
- **resume-screening-chat**: Screen pasted or uploaded CVs against a job description or screening matrix. Emits resume-screening-report. Assistive only; not a hire decision.

## README

# recruiting-tools

Professional **recruiting** chat tools: improve job postings, screen
resumes against criteria, and plan structured interviews. Chat-only;
assistive reports — not hiring decisions or legal advice.

This is a `maiconfz` community package, not an official agents-repo product.
Installed agents reply in the **language the user used** (English if mixed
or unclear).

## What this package is

- Job post quality review and screening matrix draft
- CV screening from **paste** or **PDF/DOC/DOCX** upload
- Structured interview guide (competencies, questions, probes, checklist)

## What this package is not

- **Not** [`maiconfz/roast-my-project`](https://github.com/agents-repo/registry/tree/main/packages/maiconfz/roast-my-project)
  or other satire packages
- **Not** an ATS replacement, **not** an automated hire/reject engine
- **Not** legal, employment, or compliance advice for your jurisdiction

## Terminology

| Term | Meaning |
| --- | --- |
| **JD** | Job description (posting text) |
| **ATS** | Applicant tracking system (resume screening and hiring workflow software) |
| **CV** | Curriculum vitae (resume) |
| **STAR** | Situation, Task, Action, Result (behavioral interview format) |
| **HR** | Human resources |

## Install

```bash
npx agents-repo@latest install maiconfz/recruiting-tools
```

## Chat agents

| Agent | Purpose |
| --- | --- |
| `job-post-quality-chat` | Review and improve a job posting (default) |
| `resume-screening-chat` | Screen CVs against JD or matrix |
| `interview-planning-chat` | Interviewer guide from JD or matrix |

## Workflow

1. Run `job-post-quality-chat` on your posting; copy the screening matrix.
2. Use `resume-screening-chat` with the matrix and each CV.
3. Use `interview-planning-chat` with the same JD or matrix.

Process only candidate data you are authorized to use. Document job-related
screening reasons consistently.
