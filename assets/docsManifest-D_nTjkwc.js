import{Tt as e,wt as t}from"./index-5A-ydog8.js";var n="---\ntitle: agents.json and lockfile\ndescription: Project config, semver ranges, registry URL ref, lock slots per target, and what to commit.\norder: 70\nsection: CLI\n---\n\nNormative schemas: [config-schema](https://github.com/agents-repo/cli/blob/main/specs/config-schema.md) and [lock-schema](https://github.com/agents-repo/cli/blob/main/specs/lock-schema.md).\n\n## agents.json\n\nTypical project fields:\n\n| Field | Purpose |\n| --- | --- |\n| `targets[]` | Install target ids (`cursor`, `github-copilot`, …) |\n| `packages` | Map of package id → semver range |\n| Registry URL / ref | Where to fetch the catalog (org default uses registry-proxy + `v2.x`) |\n\nUse `agents-repo init` and `add-target` to manage targets. Inspect with `agents-repo targets`.\n\n## agents-lock.json\n\nThe lock records **resolved versions**, artifact URLs, integrity hashes, and per-target **`byTarget`** slots. Multi-target projects need a slot for each `(package, target)` pair that `install` or `ci` will apply.\n\n| Command | Updates lock? | Resolves semver? |\n| --- | --- | --- |\n| `install` / `update` | Yes (unless `--no-save`) | Yes |\n| `ci` | No | No — lock only |\n\n## What to commit\n\nCommit `agents.json`, `agents-lock.json`, and extracted files under target paths (for example `.cursor/`, `.github/`, `.claude/`, `.agents/`).\n\n## Environment overrides\n\nThe CLI honors environment variables such as `AGENTS_REPO_REGISTRY_URL` and config path overrides. See cli docs for the full list.\n\n## Related guides\n\n- [Installing packages](/docs/installing-packages)\n- [Install targets](/docs/install-targets)\n- [`doctor`](/docs/cli-doctor) — config/lock alignment checks\n",r="---\ntitle: CLI command reference\ndescription: Subcommands, npm parity, aliases, and links to canonical CLI documentation.\norder: 80\nsection: CLI\n---\n\nBehavior is defined in the [agents-repo/cli](https://github.com/agents-repo/cli) repository. This page is a **summary**; see `docs/commands/` for full flag and exit-code tables.\n\n## Command matrix\n\n| Command | npm analogue | Aliases | Notes |\n| --- | --- | --- | --- |\n| `init` | `npm init` (loose) | — | Create/update `agents.json`; `--targets` |\n| `add-target` | — | — | Append target ids |\n| `install` | `npm install` | `i`, `add`, `inst` | Variadic; updates lock |\n| `ci` | `npm ci` | — | Lock-only install |\n| `doctor` | `npm doctor` (loose) | — | Read-only diagnostics — [doctor doc](/docs/cli-doctor) |\n| `update` | `npm update` | `up`, `upgrade` | Refresh within ranges |\n| `search` | `npm search` | `find`, `s`, `se` | Registry search |\n| `suggest-agents` | — | `suggest` | Local project signals |\n| `list` | `npm list` | `ls` | Installed / lock view |\n| `remove` | `npm uninstall` | `rm`, `uninstall`, `unlink` | Remove packages |\n| `targets` | — | — | Show configured targets |\n\nSource: [npm-cli-parity.md](https://github.com/agents-repo/cli/blob/main/docs/npm-cli-parity.md).\n\n## Global flags (abbreviated)\n\n| Flag | Notes |\n| --- | --- |\n| `-h` / `--help` | Help |\n| `-V` / `--version` | CLI version |\n| `--json` | Machine-readable output |\n| `--verbose` | More detail on multi-target installs |\n| `-y` / `--yes` | Waive dual-definition conflicts with warnings |\n| `--dry-run` | Resolve without writes |\n| `--no-save` | Skip config/lock writes |\n| `--prefer-online` | Bypass local artifact cache |\n\n### `-g` / `--global`\n\nSupported on `init`, `install`, `update`, `remove`, `list`, `targets`. **Not** on `ci` or `doctor` (project scope).\n\n## Per-command docs\n\n| Command | Documentation |\n| --- | --- |\n| `init` | [init.md](https://github.com/agents-repo/cli/blob/main/docs/commands/init.md) |\n| `add-target` | [add-target.md](https://github.com/agents-repo/cli/blob/main/docs/commands/add-target.md) |\n| `install` | [install.md](https://github.com/agents-repo/cli/blob/main/docs/commands/install.md) |\n| `ci` | [ci.md](https://github.com/agents-repo/cli/blob/main/docs/commands/ci.md) |\n| `update` | [update.md](https://github.com/agents-repo/cli/blob/main/docs/commands/update.md) |\n| `remove` | [remove.md](https://github.com/agents-repo/cli/blob/main/docs/commands/remove.md) |\n| `search` | [search.md](https://github.com/agents-repo/cli/blob/main/docs/commands/search.md) |\n| `suggest-agents` | [suggest-agents.md](https://github.com/agents-repo/cli/blob/main/docs/commands/suggest-agents.md) |\n| `list` | [list.md](https://github.com/agents-repo/cli/blob/main/docs/commands/list.md) |\n| `targets` | [targets.md](https://github.com/agents-repo/cli/blob/main/docs/commands/targets.md) |\n| `doctor` | [doctor.md](https://github.com/agents-repo/cli/blob/main/docs/commands/doctor.md) |\n\n## Project setup guides\n\n- [Installing packages](/docs/installing-packages)\n- [Install targets](/docs/install-targets)\n- [agents.json and lockfile](/docs/agents-json-lock)\n",i="---\ntitle: doctor diagnostics\ndescription: Read-only CLI health checks for config, lock, registry reachability, and install paths.\norder: 100\nsection: CLI\n---\n\n`agents-repo doctor` runs **read-only** diagnostics on the project setup. Normative behavior: [doctor command docs](https://github.com/agents-repo/cli/blob/main/docs/commands/doctor.md).\n\n## When to run\n\n- Before debugging failed `install` or `agents:ci` in CI\n- After changing `targets[]` or registry URL settings\n- When lock and on-disk files may have drifted\n\n## Checks (summary)\n\n| Check id | Meaning |\n| --- | --- |\n| `config_schema` | `agents.json` passes schema validation |\n| `targets_configured` | Non-empty `targets[]` |\n| `lock_present` | Valid `agents-lock.json` |\n| `lock_config_sync` | Config/lock package sets and ranges align (like `ci`, no `--force`) |\n| `registry_reachable` | Catalog index fetch succeeds |\n| `install_paths` | Locked artifacts map to paths that exist on disk |\n\nSkipped checks appear when prerequisites fail (for example lock sync when the lock is missing).\n\n## Usage\n\n```bash\nagents-repo doctor\nagents-repo --json doctor\n```\n\nProject scope only; global `doctor -g` is reserved in the CLI.\n\n## If something fails\n\n| Symptom | Try |\n| --- | --- |\n| Missing targets | `agents-repo init --targets …` |\n| Lock drift | `agents-repo install` or `update` |\n| CI failures | Compare with `agents-repo list` warnings vs fatal `ci` errors |\n| Registry errors | Verify registry URL/ref in config or env |\n\nCommand overview: [CLI command reference](/docs/cli-commands).\n",a=`---
title: Contributing packages
description: Policies, specs, and links for registry package authors.
order: 110
section: Contribute
---

Package source lives in the [registry](https://github.com/agents-repo/registry) repository under \`packages/<namespace>/<package-id>/\`.

## Before you start

- Packages must be **maintained** and ready for direct use.
- Declare supported **install targets** in metadata.
- Follow normative specs in [registry/specs](https://github.com/agents-repo/registry/tree/main/specs)
  (package format, \`package-detail-schema.md\`, agent/flow format, metadata,
  manifests, versioning).

## Submission workflow

Most contributors **fork** the registry, work on the fork, and open a pull request to **agents-repo/registry** \`main\`. A tracking issue on upstream is **recommended but not required**.

The suggested authoring path is the in-tree **\`full-package-creation-flow\`** (\`agents-repo/agents-repo-package-creation\`) after the draft pull request. Step-by-step checklist: **[Submit a package](/docs/submitting-a-package)**.

Human-facing requirements and review expectations: [registry CONTRIBUTING](https://github.com/agents-repo/registry/blob/main/.github/CONTRIBUTING.md).

## Corrections

Fixes to published packages use the same fork → upstream pull request model. The [package correction issue template](https://github.com/agents-repo/registry/blob/main/.github/ISSUE_TEMPLATE/package-correction.yml) is optional but recommended. Squash-merge titles use \`fix(package):\`.

## Help

Questions: [Contact](/contact) or registry GitHub Discussions. Package ideas: browse [Home](/) for examples.
`,o=`---
title: Contributing to webapp
description: Branch workflow, validation, and agents-repo workflow packages in this repository.
order: 130
section: Contribute
---

This site is developed in [agents-repo/webapp](https://github.com/agents-repo/webapp).

## Required workflow

1. Open a tracking issue (see \`.github/ISSUE_TEMPLATE/\`).
2. Branch: \`<prefix>/<issue-number>-<slug>\` using the prefix that matches the work:

   | Work type | Prefix | Example |
   | --- | --- | --- |
   | Bug or inconsistency | \`fix/\` | \`fix/42-related-issues-checklist\` |
   | Spec change | \`spec/\` | \`spec/57-pr-policy-clarity\` |
   | Feature proposal | \`feat/\` | \`feat/89-search-refinement\` |
   | Task or chore | \`chore/\` | \`chore/31-sync-workflow-docs\` |
   | Documentation-only work | \`docs/\` | \`docs/88-update-pr-guidance\` |

3. Open a **draft** pull request with \`Closes #<issue>\`.
4. Run validation before handoff; a human maintainer marks the PR ready for review.

Full rules: [webapp CONTRIBUTING](https://github.com/agents-repo/webapp/blob/main/.github/CONTRIBUTING.md), [organization Required Workflow](https://github.com/agents-repo/.github/blob/main/CONTRIBUTING.md#required-workflow), and the [organization branch prefix reference](https://github.com/agents-repo/.github/blob/main/CONTRIBUTING.md#branch-prefix-reference).

## Local validation

\`\`\`bash
npm run env:check
npm run lint:all
npm run test
npm run typecheck
npm run build:pages
npm run test:crawl-files
\`\`\`

For UI changes, also run \`npm run test:a11y\` and \`npm run test:e2e\` when applicable.

PR baseline CI path-filters Chrome/\`slides:check\`, \`agents:ci\`, and Pages/crawl
extras. Local validation still uses the full list. See the organization
[PR baseline extras policy](https://github.com/agents-repo/.github/blob/main/CONTRIBUTING.md#pr-baseline-extras-path-filters).

## Registry workflow packages in this repo

The webapp pins \`agents-repo\` in **devDependencies** and uses:

\`\`\`bash
npm run agents:install
npm run agents:update
npm run agents:ci
\`\`\`

Commit \`agents.json\`, \`agents-lock.json\`, and extracted agent paths. See [Installing packages](/docs/installing-packages).

## Guide content

Site docs live in \`src/content/docs/\`. When CLI or registry workflows change, update the relevant doc pages manually (see [docs/development.md](https://github.com/agents-repo/webapp/blob/main/docs/development.md)).

Repository page: [/repositories/webapp](/repositories/webapp).
`,s=`---
title: Discover packages
description: Find packages from the site catalog, CLI search, and suggest-agents scoring.
order: 40
section: Catalog
---

## On the website

1. Open [Home](/) to read what Agents Repo is, copy CLI install commands, search
   (search navigates to [Packages](/packages)), or browse the most-downloaded slice.
2. Open [Packages](/packages) to search, sort by download window, and filter by category, tags, install
   targets, status, cost band, or Use in chat. Filters apply to the website
   catalog only; they are not CLI search flags.
3. Open a package card (**View** or the title) to read the in-app package page. That page loads \`detail.json\` for the latest snapshot, including README when \`readmeMarkdown\` is present.
4. Copy a CLI install command from the card, use **Use in chat** when it is available, or note the package id (\`namespace/package-id\`). **View on GitHub** on the package page is for source inspection.

See [Using the catalog](/docs/using-the-catalog) for UI details.

## With the CLI

| Command | Purpose |
| --- | --- |
| \`agents-repo search <query>\` | Search the registry index (aliases: \`find\`, \`s\`) |
| \`agents-repo suggest-agents\` | Rank packages from local \`package.json\`, README tokens, and installed ids (no LLM) |

\`suggest-agents\` does not require configured install targets. See the [CLI command reference](/docs/cli-commands) and [upstream suggest-agents docs](https://github.com/agents-repo/cli/blob/main/docs/commands/suggest-agents.md).

## Recommended path

Discover → evaluate on the in-app package page → \`agents-repo install <id>\` (or bulk sync from \`agents.json\`) → commit [agents.json and lockfile](/docs/agents-json-lock).
`,c=`---
title: Ecosystem overview
description: How registry, registry-proxy, webapp, CLI, and organization policies fit together.
order: 20
section: Start
---

The **agents-repo** organization ships a small platform:

| Piece | Role |
| --- | --- |
| [Registry](https://github.com/agents-repo/registry) | Specs, package source, validation, and versioned ZIP artifacts |
| [Registry proxy](https://github.com/agents-repo/registry-proxy) | Cached read-only access to registry files on GitHub |
| [Webapp](https://github.com/agents-repo/webapp) | This site — browse, search, and download |
| [CLI](https://github.com/agents-repo/cli) | Install and manage packages in your project (\`agents.json\`, lockfile) |
| [.github](https://github.com/agents-repo/.github) | Shared contributor workflow and policies |

## Public URLs

- Site: [agents-repo.org](https://agents-repo.org/)
- Per-repo pages: [Repositories](/repositories)
- Deeper diagrams: [organization ecosystem doc](https://github.com/agents-repo/.github/blob/main/docs/ecosystem.md)

## Data vs tooling

The registry is **data-first** (no runtime in the catalog). Webapp and CLI both resolve a catalog ref and load \`packages/index.json\`. The webapp then loads \`packages/<namespace>/<package-id>/detail.json\` for in-app package pages. The CLI install path uses \`versions/manifest.json\`, version-scoped \`metadata.json\`, and target ZIPs. See [How the registry works](/docs/how-the-registry-works) for the read path.
`,l=`---
title: For AI agents
description: Stable markdown URLs, llms.txt, and curl examples for automated readers.
order: 140
section: Agents
---

Agents Repo publishes **raw markdown** for each doc page at predictable URLs. Prefer these over scraping rendered HTML.

## llms.txt

Site root:

\`\`\`text
https://agents-repo.org/llms.txt
\`\`\`

## Doc markdown URLs

Replace the origin if you mirror the site; production uses \`https://agents-repo.org\`.

\`\`\`text
https://agents-repo.org/docs/getting-started.md
https://agents-repo.org/docs/ecosystem-overview.md
https://agents-repo.org/docs/using-the-catalog.md
https://agents-repo.org/docs/discover-packages.md
https://agents-repo.org/docs/how-the-registry-works.md
https://agents-repo.org/docs/installing-packages.md
https://agents-repo.org/docs/agents-json-lock.md
https://agents-repo.org/docs/cli-commands.md
https://agents-repo.org/docs/install-targets.md
https://agents-repo.org/docs/cli-doctor.md
https://agents-repo.org/docs/contributing-packages.md
https://agents-repo.org/docs/submitting-a-package.md
https://agents-repo.org/docs/contributing-to-webapp.md
https://agents-repo.org/docs/for-ai-agents.md
\`\`\`

## Example fetch

\`\`\`bash
curl -fsSL 'https://agents-repo.org/docs/installing-packages.md'
curl -fsSL 'https://agents-repo.org/llms.txt'
\`\`\`

## Catalog data

Registry index (default production ref via proxy — your environment may differ):

\`\`\`bash
curl -fsSL 'https://registry.agents-repo.org/packages/index.json?ref=v2.x'
\`\`\`

Latest-snapshot package detail for in-app pages (replace namespace and package id):

\`\`\`bash
curl -fsSL 'https://registry.agents-repo.org/packages/<namespace>/<package-id>/detail.json?ref=v2.x'
\`\`\`

\`detail.json\` is generated for the latest snapshot and may include \`readmeMarkdown\`. CLI install does not fetch it; it uses \`versions/manifest.json\` and target ZIPs. Normative package rules remain in [registry specs](https://github.com/agents-repo/registry/tree/main/specs).

## HTML routes

Human-readable pages live under \`/docs\` and \`/docs/<slug>\` with the same content as the \`.md\` files.
`,u=`---
title: Getting started
description: What Agents Repo is, how to browse the catalog, and where to go next for installs and contributions.
order: 10
section: Start
---

Agents Repo is the public site for the open **agents-repo** registry: curated **agents** and **flows** you can install into supported IDEs and agent runtimes.

## What you can do here

1. **Browse and search** the catalog on [Home](/). Home also explains the
   project, shows a copyable CLI quickstart, and lists packages most downloaded
   in the last year.
2. **Read how the registry is structured** in [How the registry works](/docs/how-the-registry-works).
3. **Install packages into your project** with the CLI — start at [Installing packages](/docs/installing-packages).
4. **Contribute packages** — see [Submit a package](/docs/submitting-a-package).

## Supported install targets

Packages declare which targets they support (for example GitHub Copilot, Cursor, Claude Code, and OpenAI Codex). The site and CLI use the same target identifiers. See [Install targets](/docs/install-targets).

## Organization context

For repository roles and architecture, read [Ecosystem overview](/docs/ecosystem-overview) or browse [Repositories](/repositories).
`,d="---\ntitle: How the registry works\ndescription: Catalog index, package detail.json, version manifests, ZIP artifacts, and how webapp and CLI fetch data.\norder: 50\nsection: Registry\n---\n\nThe [registry](https://github.com/agents-repo/registry) repository is the **source of truth** for package definitions. Runtime logic stays out of the catalog; consumers read files over HTTP.\n\n## Package identity\n\n- **Package id**: `namespace/package-id` (lowercase kebab-case segments).\n- **Source tree**: `packages/<namespace>/<package-id>/` in the registry repo.\n- **Version artifacts**: semver ZIPs under `versions/` with checksums in `versions/manifest.json`. When a package has a root `README.md` at release, `package:build` copies it to `versions/<version>/README.md`.\n\n## Catalog files\n\n| File | Role |\n| --- | --- |\n| `packages/index.json` | Lists packages and latest versions for browsing |\n| `packages/<namespace>/<package-id>/detail.json` | Generated latest-snapshot aggregate for in-app package pages (optional `readmeMarkdown` from `versions/<latest>/README.md`) |\n| `metadata.json` | Package-level metadata (description, targets, license) |\n| `versions/manifest.json` | Per-version artifact URLs and SHA-256 checksums |\n\nConsumers resolve a **git ref** (for example `v2.x` or a release tag), then fetch index and per-package files for that ref. Contributors MUST NOT author `detail.json`.\n\n## registry-proxy\n\nProduction webapp and many CLI setups use [registry-proxy](https://github.com/agents-repo/registry-proxy) to cache GitHub Raw/contents responses. You can still link to the registry tree on GitHub for human review.\n\n## Webapp vs CLI\n\n- **Webapp**: loads `packages/index.json` for search/UI, then `packages/<namespace>/<package-id>/detail.json` for in-app package pages (latest snapshot, including README via `readmeMarkdown`). Offers Use in chat, downloads, and GitHub browse ([Using the catalog](/docs/using-the-catalog)).\n- **CLI**: loads `packages/index.json`, then `versions/manifest.json` and version-scoped `metadata.json`, verifies ZIP integrity, and extracts `<version>-<target-id>.zip` into install target paths ([Installing packages](/docs/installing-packages)).\n\nNormative formats live in [registry specs](https://github.com/agents-repo/registry/tree/main/specs). This guide does not duplicate spec text.\n",f="---\ntitle: Install targets\ndescription: Canonical target ids, typical on-disk paths, and init/add-target workflows.\norder: 90\nsection: CLI\n---\n\nInstall targets describe **where** package ZIPs are extracted in a consumer project (or global home with `-g`).\n\n## Target matrix\n\n| Target id | Label | Typical project paths (high level) |\n| --- | --- | --- |\n| `github-copilot` | GitHub Copilot | `.github/` agents and instructions |\n| `cursor` | Cursor | `.cursor/rules/`, `.cursor/skills/`, … |\n| `claude-code` | Claude Code | `.claude/agents/`, … |\n| `openai-codex` | OpenAI Codex | `.agents/skills/`, … |\n\nExact paths depend on package content and target adapters. Catalog metadata lists which targets a package supports.\n\n## Configure targets\n\n```bash\nagents-repo init --targets cursor github-copilot claude-code openai-codex\nagents-repo add-target openai-codex\nagents-repo targets\n```\n\n`--target` is an alias for `--targets` on `init`. Use JSON output with `agents-repo --json targets`.\n\n## Multi-target locks\n\nWhen multiple targets are configured, each installed package needs matching `byTarget` entries in `agents-lock.json`. After changing targets or packages, run `install` or `update` locally before enabling `agents:ci` in CI.\n\n## Catalog alignment\n\nThe webapp shows supported targets on package cards. Your project `targets[]` must overlap package support for a successful install.\n\nSee [agents.json and lockfile](/docs/agents-json-lock) and [Installing packages](/docs/installing-packages).\n",p=`---
title: Installing packages
description: Pin the CLI as a devDependency, initialize targets, install from the catalog, and reproduce in CI.
order: 60
section: CLI
---

## Pin the CLI (recommended)

For real projects, add the CLI as a **devDependency** so teammates and CI use the same version:

\`\`\`bash
npm install -D agents-repo@<version>
\`\`\`

Example \`package.json\` scripts (this webapp uses the same pattern):

\`\`\`json
{
  "scripts": {
    "agents:install": "agents-repo install",
    "agents:update": "agents-repo update",
    "agents:ci": "agents-repo ci"
  }
}
\`\`\`

\`npx agents-repo@latest\` is fine for **one-off trials**; pinned installs are better for reproducibility.

## Initialize install targets

\`\`\`bash
npx agents-repo init --targets cursor github-copilot
\`\`\`

See [Install targets](/docs/install-targets) for canonical ids and on-disk layout.

## Install packages

Add ids to \`agents.json\` \`packages\` and run bulk install, or install directly:

\`\`\`bash
npx agents-repo install agents-repo/some-package
\`\`\`

Commit **\`agents.json\`** and **\`agents-lock.json\`** when they change. Details: [agents.json and lockfile](/docs/agents-json-lock).

## CI

\`\`\`bash
npm ci
npm run agents:ci
\`\`\`

\`ci\` installs exactly from the lockfile (npm \`ci\` parity). See [CLI \`ci\` docs](https://github.com/agents-repo/cli/blob/main/docs/commands/ci.md).

## Troubleshooting

Run [\`agents-repo doctor\`](/docs/cli-doctor) before debugging install failures. Full command list: [CLI command reference](/docs/cli-commands). CLI repository: [/repositories/cli](/repositories/cli).
`,m=`---
title: Submit a package
description: Fork-first workflow, optional tracking issue, AI-first package creation with full-package-creation-flow, validation, and squash-merge expectations.
order: 120
section: Contribute
---

Packages are contributed to the [registry](https://github.com/agents-repo/registry) through a pull request to \`main\`. Most contributors **fork** the registry repository, work on the fork, and open a pull request from the fork to **agents-repo/registry**.

This is different from using **Website settings** to preview a fork in the browser — see [Using the catalog](/docs/using-the-catalog).

## 1. Fork and clone

1. On GitHub, fork [agents-repo/registry](https://github.com/agents-repo/registry) to your account or organization.
2. Clone **your fork** (replace \`YOUR_GITHUB_USER\`):

   \`\`\`bash
   git clone https://github.com/YOUR_GITHUB_USER/registry.git
   cd registry
   \`\`\`

3. Add the upstream remote and fetch:

   \`\`\`bash
   git remote add upstream https://github.com/agents-repo/registry.git
   git fetch upstream
   git checkout main
   git merge upstream/main
   \`\`\`

Before starting a long-running branch, sync \`main\` from \`upstream\` again so your fork stays current.

## 2. Optional tracking issue

Opening a tracking issue on **upstream** (\`agents-repo/registry\`, not your fork) is **recommended but not required**.

Use the [package submission issue form](https://github.com/agents-repo/registry/blob/main/.github/ISSUE_TEMPLATE/package-submission.yml) when you want maintainer feedback before heavy work, when scope is unclear, or when you prefer a linked discussion thread.

You may skip the issue for small, self-contained pull requests. When you do open one, note the issue number for branch naming and include \`Closes #<issue-number>\` in the pull request \`## Related Issues\` section.

## 3. Branch on your fork

Create a branch from updated \`main\`:

| Situation | Branch pattern | Example |
| --- | --- | --- |
| With tracking issue | \`package/<issue-number>-<slug>\` | \`package/56-my-package\` |
| Without tracking issue | \`package/<slug>\` | \`package/my-package\` |

\`<slug>\` is a short lowercase kebab-case package id or descriptor.

\`\`\`bash
git checkout -b package/my-package
\`\`\`

Org members with write access to **agents-repo/registry** may branch on the upstream repository directly; the fork flow is still recommended for isolation.

## 4. Open a draft pull request (early)

Open a **draft** pull request from your fork **before** substantive implementation commits. An empty scaffold commit is enough to open the PR if you have no file changes yet.

- **Base repository:** \`agents-repo/registry\`
- **Base branch:** \`main\`
- **Head repository:** your fork
- **Compare branch:** your task branch

In the GitHub UI: choose **compare across forks**, set the base to \`agents-repo/registry\` \`main\`, and set the head to \`YOUR_GITHUB_USER:package/my-package\`.

With the GitHub CLI, push a scaffold commit so the branch head differs from
\`main\`, then open the draft pull request:

\`\`\`bash
git commit --allow-empty -m "chore: scaffold draft package PR"
git push -u origin package/my-package

cat > pr-body.md <<'EOF'
## Summary

Draft package submission scaffold.

## Related Issues

Describe the package (namespace/package-id and intent). When a tracking issue
exists, replace this section with \`Closes #<issue-number>\`.
EOF

gh pr create --repo agents-repo/registry --draft \\
  --head YOUR_GITHUB_USER:package/my-package \\
  --base main \\
  --title "feat(package): add my-package" \\
  --body-file pr-body.md
\`\`\`

When a tracking issue exists, include \`Closes #<issue-number>\` in \`## Related Issues\`. Otherwise, describe the package in that section.

## 5. Create the package

Package creation is **AI-first**. After the draft pull request is open, create
package source on the task branch. The registry clone already includes
[\`agents-repo/agents-repo-package-creation\`](https://github.com/agents-repo/registry/tree/main/packages/agents-repo/agents-repo-package-creation)
(extracted skills and agents for GitHub Copilot, Cursor, Claude Code, and OpenAI
Codex). You do not need a separate CLI install. See
[registry README — IDE Setup](https://github.com/agents-repo/registry/blob/main/README.md#ide-setup)
for where those files live.

### Suggested: invoke \`full-package-creation-flow\`

The flow runs registry npm scripts. Complete
[registry README — Development Environment](https://github.com/agents-repo/registry/blob/main/README.md#development-environment)
setup first (\`npm ci\` and \`npm run env:check\` with the pinned Node/npm).

In your IDE, invoke the **\`full-package-creation-flow\`** flow (skill or agent,
depending on the install target). Describe the package you want. The flow
scaffolds with \`package:create\`, authors agents/flows and metadata, reviews for
submission readiness, then runs \`package:validate\`, \`package:build\`, and
\`package:validate-artifacts\` when it completes. If you leave the flow after
authoring and review but before those validation scripts run, finish the
pipeline in the next section.

Do not edit files under \`versions/\` by hand, and do not author \`detail.json\`. The flow uses \`package:build\` for version snapshots and generated package detail. If the package has a root \`README.md\`, build copies it into the new snapshot.

Push commits to your fork branch; the draft pull request updates automatically.

### Alternative: author files yourself

Add or update \`packages/<namespace>/<package-id>/\` with agents/flows and
\`metadata.json\` per [registry specs](https://github.com/agents-repo/registry/tree/main/specs).
Never create or modify files under \`versions/\` by hand, and do not author
\`detail.json\`; \`package:build\` generates those artifacts. Optional package-root
\`README.md\` is copied into the snapshot at build time.

Then run the commands in the next section.

## 6. Validate locally

From your local clone, use the pinned Node/npm in
[registry README — Development Environment](https://github.com/agents-repo/registry/blob/main/README.md#development-environment)
(\`npm ci\` and \`npm run env:check\`).

If the suggested flow finished through artifact validation, confirm CI on the
draft pull request. If you authored files yourself or the flow stopped early,
run this pipeline:

\`\`\`bash
npm run package:validate -- --package <namespace>/<package-id>
npm run package:build -- --package <namespace>/<package-id>
npm run package:validate-artifacts -- --package <namespace>/<package-id> --version <version>
\`\`\`

## 7. Ready for review and merge

Mark the pull request **ready for review** only after local validation and CI pass. Maintainers squash-merge with **\`feat(package): …\`** for new packages or versions, or **\`fix(package): …\`** for corrections so registry release tags publish.

## Keep your fork updated

While work is in progress, periodically sync from upstream:

\`\`\`bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
git checkout package/my-package
git merge main
\`\`\`

Resolve conflicts before your final push.

## Package corrections

For fixes to existing catalog entries, use the same fork → upstream pull request model. The [package correction template](https://github.com/agents-repo/registry/blob/main/.github/ISSUE_TEMPLATE/package-correction.yml) is optional but recommended.

## Related

- [Contributing packages](/docs/contributing-packages) — policies and specs index
- [How the registry works](/docs/how-the-registry-works) — catalog layout
`,h=`---
title: Using the catalog
description: Search, package cards, in-app package pages, Use in chat, downloads, CLI commands from the UI, website settings, and PWA install.
order: 30
section: Catalog
---

[Home](/) is an end-user landing page: a value-focused hero with search,
explainer blocks (supported tools, what you gain, how it works), a copyable CLI
quickstart, a Use in chat callout, then a first slice of packages most
downloaded in the last year, and a short contribute CTA. **View all packages**
links go to the crawlable [Packages](/packages) index (one in the results
heading row, and a larger button below the package cards or empty-catalog
message). Catalog schema version is shown in
**Website settings**, not on Home or Packages listings. Each card shows metadata, status, supported
install targets, download counts, and actions. Footer actions use short labels (**CLI**, **Use in chat**, **Download**, **View**). **View** and the package title open the in-app
package page. **View on GitHub** is on that page. On narrow screens those labels stay visible; on medium and larger screens they stay collapsed (icon-first) until you hover or keyboard-focus that control, or until a menu or dialog from that control is open.

## Search and filters

[Home](/) search (hero and sticky header) navigates to [Packages](/packages)
with the query in the URL. An empty query stays on Home. Search matches
package name, owner, description, and tags. Filtering a card by owner from
Home opens Packages with \`q=@owner\`. The crawlable [Packages](/packages) index
uses the same search fields plus category, and adds store-style filters for
category, tags, install targets, status, cost band, and Use in chat. Selected
search, filters, download-window sort, and result page are stored in the page
URL so you can reload or share the view. The packages index and namespace
listings show numbered page navigation when more than 9 packages match. Each
page has 9 cards. \`page\` is omitted when you are on page 1. Changing search,
filters, or download-window sort returns to page 1. Home stays an unpaginated
popular slice.

On [Packages](/packages) and namespace listings, sort packages by download
window (**Downloads (All time)**, **Downloads (Last 7 days)**,
**Downloads (Last 30 days)**, **Downloads (Last 365 days)**). The default is
all time. Sorting does not hide packages. Popular category and tag chips sit
above the cards. The full checkbox groups are in a collapsible sidebar on
large screens (Hide filters / Show filters) and in a Filters panel on smaller
screens. Facet groups that already have a selected value in the URL start
expanded. Yanked packages stay hidden on those listings.

Use the header search on large screens to filter packages by name or
description. Review status badges and target compatibility before installing.

Package cards show the all-time download count under the status badge. Hover,
keyboard-focus, or click that count for last 7, 30, and 365 day windows (click
or tap keeps the panel open until you press Escape, click outside, or click
the count again). If you prefer reduced motion, hover does not open the
panel; focus, click, and keyboard still do. The package page shows those four
windows in a **Downloads** section beside **Versions**, with each window label
and count on the same line.

## Download and CLI actions

Package cards may offer:

- **Use in chat** when the registry marks the package as chat-web ready
  (\`chatWeb\`). This opens a dialog to copy instruction URLs (latest and
  pinned), instruction markdown with a short kind-aware preamble, and a
  starter prompt for ChatGPT, Grok, Gemini, or Microsoft Copilot in the
  browser. The ChatGPT tab includes **Open in ChatGPT**, and the Grok tab
  includes **Open in Grok**. Each opens a new tab with the starter prompt
  (latest instruction URLs). You must be signed in; ChatGPT or Grok may send
  the prompt automatically. Web chats may fail to fetch those URLs; if they
  cannot load a URL, copy the instruction markdown and paste it into the
  chat. Copying markdown for a flow includes the flow and its related agent
  files. Gemini and Microsoft Copilot remain copy-paste.
- **Direct download** links for version ZIPs per install target (when the registry publishes artifacts).
- **Copy CLI install** commands (\`npx agents-repo install …\`) for quick trials.
  The CLI popover stays inside the viewport: it flips below the button when
  there is not enough room above, and the panel scrolls if it is taller than
  the window.
- **View** opens the in-app package page (\`/packages/<namespace>/<package-id>\`).
  That page repeats CLI, Use in chat, and Download, and adds **View on GitHub**
  to inspect package source in the registry repository. The README on that page
  is the latest snapshot, loaded from \`detail.json\` (\`readmeMarkdown\`). README
  and expanded agent or flow markdown render GitHub Flavored Markdown. Closed
  YAML frontmatter whose root is a mapping is shown as nested metadata tables
  (the same structure GitHub’s file view uses for \`.agent.md\` files).

For reproducible projects, prefer pinning the CLI in \`devDependencies\` and using project scripts — see [Installing packages](/docs/installing-packages).

## Website settings

Use **Website settings** in the header to point the browser at a different registry base URL or ref (for example a fork or tag). The modal also shows catalog source status, including the loaded catalog schema version. This affects catalog loading in your session only; it does not change CLI config in your repositories. **Clear cache and reload catalog** drops locally cached registry JSON and markdown in this browser (IndexedDB) and reloads the catalog. It does not delete ZIP downloads or change analytics, theme, or catalog filter sidebar preferences.

## Install the site (PWA)

You can add agents-repo.org as an installed web app when the browser supports it:

- **Chrome, Edge, and other Chromium browsers:** use **Install app** in the header, or the install icon in the address bar, after the site meets install criteria.
- **Safari on iPhone or iPad:** open Share and choose Add to Home Screen.
- **Safari on Mac:** choose File, then Add to Dock.
- **Firefox on Android:** open the browser menu and choose Install.
- **Firefox on desktop:** there is no native install from the web app manifest. The header **How to install this site** control explains this. Windows Firefox may offer Taskbar Tabs, which is not a PWA. A third-party extension can add Firefox desktop install, but it is not part of this site.

The header install control is hidden when the site is already running as an installed app.

## Next steps

- [Discover packages](/docs/discover-packages) — search and \`suggest-agents\` workflows
- [Install targets](/docs/install-targets) — what target ids mean on disk
`;function g(e){if(!e.startsWith(`---`))return{frontmatter:``,body:e.trim()};let t=e.indexOf(`
---`,3);if(t===-1)throw Error(`Docs markdown frontmatter is not closed with ---`);return{frontmatter:e.slice(4,t).trim(),body:e.slice(t+4).trim()}}function _(e,t){let n=`${t}:`;for(let t of e.split(`
`))if(t.startsWith(n))return t.slice(n.length).trim();return``}var v=Object.assign({"../../../../content/docs/agents-json-lock.md":n,"../../../../content/docs/cli-commands.md":r,"../../../../content/docs/cli-doctor.md":i,"../../../../content/docs/contributing-packages.md":a,"../../../../content/docs/contributing-to-webapp.md":o,"../../../../content/docs/discover-packages.md":s,"../../../../content/docs/ecosystem-overview.md":c,"../../../../content/docs/for-ai-agents.md":l,"../../../../content/docs/getting-started.md":u,"../../../../content/docs/how-the-registry-works.md":d,"../../../../content/docs/install-targets.md":f,"../../../../content/docs/installing-packages.md":p,"../../../../content/docs/submitting-a-package.md":m,"../../../../content/docs/using-the-catalog.md":h});function y(e){let t=/\/([^/]+)\.md$/.exec(e);if(!t?.[1])throw Error(`Invalid doc module path: ${e}`);return t[1]}function b(){let n=[];for(let[t,r]of Object.entries(v)){if(typeof r!=`string`)throw TypeError(`Doc module ${t} did not load as raw text`);let i=y(t),a=e(i);if(!a)throw Error(`Doc markdown ${i} is missing from docsCatalog.ts`);let{frontmatter:o,body:s}=g(r),c=_(o,`title`),l=_(o,`description`),u=_(o,`section`),d=Number(_(o,`order`));if(c!==a.title||l!==a.description||u!==a.section||d!==a.order)throw Error(`Doc ${i} frontmatter does not match docsCatalog.ts`);n.push({...a,bodyMarkdown:s})}if(n.length!==t.length)throw Error(`Doc markdown file count does not match docsCatalog.ts`);return n.sort((e,t)=>e.order-t.order||e.title.localeCompare(t.title))}var x=b(),S=new Map(x.map(e=>[e.slug,e]));function C(){return x}function w(e){return S.get(e)}function T(){let e=[],t=new Map;for(let n of x)t.has(n.section)||(t.set(n.section,[]),e.push(n.section)),t.get(n.section)?.push(n);return e.map(e=>({section:e,entries:t.get(e)??[]}))}export{C as n,T as r,w as t};