# agents-repo-package-creation

Agents and flow for creating, reviewing, and validating new registry packages for agents-repo from requirements to submission-ready source.

- Package: `agents-repo/agents-repo-package-creation`
- Version: `1.0.2`
- HTML page: https://agents-repo.org/packages/agents-repo/agents-repo-package-creation/
- Markdown: https://agents-repo.org/packages/agents-repo/agents-repo-package-creation.md

## Agents

- **package-creator**: Authors and revises registry package source definitions after scaffolding, producing agent and flow files with matching metadata sidecars and package-root README.md.
- **package-release-gate**: Executes artifact validation scripts and decides release gate pass or fail with blocking issue summaries.
- **package-requirements-analyst**: Translates user intent into a script-ready package blueprint with naming, metadata, and scaffold arguments for package creation.
- **package-script-runner**: Executes package creation, source validation, and build scripts, returning structured command results and next actions.
- **package-submission-reviewer**: Reviews a drafted package for human-facing quality, usability, and submission readiness, producing structured feedback and a readiness verdict.

## Flows

- **full-package-creation-flow**: Orchestrates package creation through script-driven scaffold, authoring, validation, build, and artifact gate stages.

## README

# agents-repo-package-creation

Agents and a flow for creating, reviewing, and validating new registry packages
for agents-repo from requirements to submission-ready source.

## Install

Install with the [agents-repo CLI](https://github.com/agents-repo/cli):

```bash
npx agents-repo@1.13.0 init --targets github-copilot claude-code cursor openai-codex
npx agents-repo@1.13.0 install agents-repo/agents-repo-package-creation
```

Commit `agents.json`, `agents-lock.json`, and extracted paths after install.
All four supported IDE targets receive the package content (rendered per target).

This README documents the package on the registry catalog. Installed content
comes from the versioned ZIPs pinned in your `agents-lock.json`.

## Usage

Invoke the **`full-package-creation-flow`** flow when you need end-to-end package
scaffolding, authoring, validation, build, and submission review. Individual
agents are available for single steps (requirements analysis, script execution,
release gate, and submission review).

Do not author `detail.json` or any files under `versions/`. `package:build`
copies package-root `README.md` into the new snapshot when present and writes
generated `detail.json`.

## Package contents

| Asset | Role |
| --- | --- |
| `full-package-creation-flow` (flow) | End-to-end package creation pipeline |
| `package-requirements-analyst` | Blueprint from user intent |
| `package-creator` | Author agent and flow source files and revise README |
| `package-script-runner` | Run registry package scripts |
| `package-release-gate` | Artifact validation gate |
| `package-submission-reviewer` | Human-facing submission readiness review |

## Validate and build

From the registry repository root:

```bash
PKG=agents-repo/agents-repo-package-creation
npm run package:validate -- --package "$PKG"
npm run package:build -- --package "$PKG"
npm run package:validate-artifacts -- --package "$PKG" --version 1.0.2
```
