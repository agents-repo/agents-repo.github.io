import{h as e,p as t}from"./index-B8sDCu8f.js";var n="---\ntitle: agents.json and lockfile\ndescription: Project config, semver ranges, registry URL ref, lock slots per target, and what to commit.\norder: 70\nsection: CLI\n---\n\nNormative schemas: [config-schema](https://github.com/agents-repo/cli/blob/main/specs/config-schema.md) and [lock-schema](https://github.com/agents-repo/cli/blob/main/specs/lock-schema.md).\n\n## agents.json\n\nTypical project fields:\n\n| Field | Purpose |\n| --- | --- |\n| `targets[]` | Install target ids (`cursor`, `github-copilot`, …) |\n| `packages` | Map of package id → semver range |\n| Registry URL / ref | Where to fetch the catalog (org default uses registry-proxy + `v2.x`) |\n\nUse `agents-repo init` and `add-target` to manage targets. Inspect with `agents-repo targets`.\n\n## agents-lock.json\n\nThe lock records **resolved versions**, artifact URLs, integrity hashes, and per-target **`byTarget`** slots. Multi-target projects need a slot for each `(package, target)` pair that `install` or `ci` will apply.\n\n| Command | Updates lock? | Resolves semver? |\n| --- | --- | --- |\n| `install` / `update` | Yes (unless `--no-save`) | Yes |\n| `ci` | No | No — lock only |\n\n## What to commit\n\nCommit `agents.json`, `agents-lock.json`, and extracted files under target paths (for example `.cursor/`, `.github/`, `.claude/`, `.agents/`).\n\n## Environment overrides\n\nThe CLI honors environment variables such as `AGENTS_REPO_REGISTRY_URL` and config path overrides. See cli docs for the full list.\n\n## Related guides\n\n- [Installing packages](/guide/installing-packages)\n- [Install targets](/guide/install-targets)\n- [`doctor`](/guide/cli-doctor) — config/lock alignment checks\n",r="---\ntitle: CLI command reference\ndescription: Subcommands, npm parity, aliases, and links to canonical CLI documentation.\norder: 80\nsection: CLI\n---\n\nBehavior is defined in the [agents-repo/cli](https://github.com/agents-repo/cli) repository. This page is a **summary**; see `docs/commands/` for full flag and exit-code tables.\n\n## Command matrix\n\n| Command | npm analogue | Aliases | Notes |\n| --- | --- | --- | --- |\n| `init` | `npm init` (loose) | — | Create/update `agents.json`; `--targets` |\n| `add-target` | — | — | Append target ids |\n| `install` | `npm install` | `i`, `add`, `inst` | Variadic; updates lock |\n| `ci` | `npm ci` | — | Lock-only install |\n| `doctor` | `npm doctor` (loose) | — | Read-only diagnostics — [guide](/guide/cli-doctor) |\n| `update` | `npm update` | `up`, `upgrade` | Refresh within ranges |\n| `search` | `npm search` | `find`, `s`, `se` | Registry search |\n| `suggest-agents` | — | `suggest` | Local project signals |\n| `list` | `npm list` | `ls` | Installed / lock view |\n| `remove` | `npm uninstall` | `rm`, `uninstall`, `unlink` | Remove packages |\n| `targets` | — | — | Show configured targets |\n\nSource: [npm-cli-parity.md](https://github.com/agents-repo/cli/blob/main/docs/npm-cli-parity.md).\n\n## Global flags (abbreviated)\n\n| Flag | Notes |\n| --- | --- |\n| `-h` / `--help` | Help |\n| `-V` / `--version` | CLI version |\n| `--json` | Machine-readable output |\n| `--verbose` | More detail on multi-target installs |\n| `-y` / `--yes` | Waive dual-definition conflicts with warnings |\n| `--dry-run` | Resolve without writes |\n| `--no-save` | Skip config/lock writes |\n| `--prefer-online` | Bypass local artifact cache |\n\n### `-g` / `--global`\n\nSupported on `init`, `install`, `update`, `remove`, `list`, `targets`. **Not** on `ci` or `doctor` (project scope).\n\n## Per-command docs\n\n| Command | Documentation |\n| --- | --- |\n| `init` | [init.md](https://github.com/agents-repo/cli/blob/main/docs/commands/init.md) |\n| `add-target` | [add-target.md](https://github.com/agents-repo/cli/blob/main/docs/commands/add-target.md) |\n| `install` | [install.md](https://github.com/agents-repo/cli/blob/main/docs/commands/install.md) |\n| `ci` | [ci.md](https://github.com/agents-repo/cli/blob/main/docs/commands/ci.md) |\n| `update` | [update.md](https://github.com/agents-repo/cli/blob/main/docs/commands/update.md) |\n| `remove` | [remove.md](https://github.com/agents-repo/cli/blob/main/docs/commands/remove.md) |\n| `search` | [search.md](https://github.com/agents-repo/cli/blob/main/docs/commands/search.md) |\n| `suggest-agents` | [suggest-agents.md](https://github.com/agents-repo/cli/blob/main/docs/commands/suggest-agents.md) |\n| `list` | [list.md](https://github.com/agents-repo/cli/blob/main/docs/commands/list.md) |\n| `targets` | [targets.md](https://github.com/agents-repo/cli/blob/main/docs/commands/targets.md) |\n| `doctor` | [doctor.md](https://github.com/agents-repo/cli/blob/main/docs/commands/doctor.md) |\n\n## Project setup guides\n\n- [Installing packages](/guide/installing-packages)\n- [Install targets](/guide/install-targets)\n- [agents.json and lockfile](/guide/agents-json-lock)\n",i="---\ntitle: doctor diagnostics\ndescription: Read-only CLI health checks for config, lock, registry reachability, and install paths.\norder: 100\nsection: CLI\n---\n\n`agents-repo doctor` runs **read-only** diagnostics on the project setup. Normative behavior: [doctor command docs](https://github.com/agents-repo/cli/blob/main/docs/commands/doctor.md).\n\n## When to run\n\n- Before debugging failed `install` or `agents:ci` in CI\n- After changing `targets[]` or registry URL settings\n- When lock and on-disk files may have drifted\n\n## Checks (summary)\n\n| Check id | Meaning |\n| --- | --- |\n| `config_schema` | `agents.json` passes schema validation |\n| `targets_configured` | Non-empty `targets[]` |\n| `lock_present` | Valid `agents-lock.json` |\n| `lock_config_sync` | Config/lock package sets and ranges align (like `ci`, no `--force`) |\n| `registry_reachable` | Catalog index fetch succeeds |\n| `install_paths` | Locked artifacts map to paths that exist on disk |\n\nSkipped checks appear when prerequisites fail (for example lock sync when the lock is missing).\n\n## Usage\n\n```bash\nagents-repo doctor\nagents-repo --json doctor\n```\n\nProject scope only; global `doctor -g` is reserved in the CLI.\n\n## If something fails\n\n| Symptom | Try |\n| --- | --- |\n| Missing targets | `agents-repo init --targets …` |\n| Lock drift | `agents-repo install` or `update` |\n| CI failures | Compare with `agents-repo list` warnings vs fatal `ci` errors |\n| Registry errors | Verify registry URL/ref in config or env |\n\nCommand overview: [CLI command reference](/guide/cli-commands).\n",a=`---
title: Contributing packages
description: Policies, specs, and links for registry package authors.
order: 110
section: Contribute
---

Package source lives in the [registry](https://github.com/agents-repo/registry) repository under \`packages/<namespace>/<package-id>/\`.

## Before you start

- Packages must be **maintained** and ready for direct use.
- Declare supported **install targets** in metadata.
- Follow normative specs in [registry/specs](https://github.com/agents-repo/registry/tree/main/specs) (package format, agent/flow format, metadata, manifests, versioning).

## Submission workflow

Step-by-step checklist: **[Submit a package](/guide/submitting-a-package)**.

Human-facing requirements and review expectations: [registry CONTRIBUTING](https://github.com/agents-repo/registry/blob/main/.github/CONTRIBUTING.md).

## Corrections

Fixes to published packages use the [package correction issue template](https://github.com/agents-repo/registry/blob/main/.github/ISSUE_TEMPLATE/package-correction.yml) and \`fix(package):\` squash-merge titles.

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
2. Branch: \`<prefix>/<issue-number>-<slug>\` (for example \`feat/112-guide-sidebar-markdown\`).
3. Open a **draft** pull request with \`Closes #<issue>\`.
4. Run validation before handoff; a human maintainer marks the PR ready for review.

Full rules: [webapp CONTRIBUTING](https://github.com/agents-repo/webapp/blob/main/.github/CONTRIBUTING.md) and [organization Required Workflow](https://github.com/agents-repo/.github/blob/main/CONTRIBUTING.md#required-workflow).

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

## Registry workflow packages in this repo

The webapp pins \`agents-repo\` in **devDependencies** and uses:

\`\`\`bash
npm run agents:install
npm run agents:update
npm run agents:ci
\`\`\`

Commit \`agents.json\`, \`agents-lock.json\`, and extracted agent paths. See [Installing packages](/guide/installing-packages).

## Guide content

Site guides live in \`src/content/guide/\`. When CLI or registry workflows change, update the relevant guide pages manually (see [docs/development.md](https://github.com/agents-repo/webapp/blob/main/docs/development.md)).

Repository page: [/repositories/webapp](/repositories/webapp).
`,s=`---
title: Discover packages
description: Find packages from the site catalog, CLI search, and suggest-agents scoring.
order: 40
section: Catalog
---

## On the website

1. Open [Home](/) and search or scroll the catalog.
2. Open a package’s GitHub tree link to read agents, flows, and \`metadata.json\`.
3. Copy a CLI install command from the card or note the package id (\`namespace/package-id\`).

See [Using the catalog](/guide/using-the-catalog) for UI details.

## With the CLI

| Command | Purpose |
| --- | --- |
| \`agents-repo search <query>\` | Search the registry index (aliases: \`find\`, \`s\`) |
| \`agents-repo suggest-agents\` | Rank packages from local \`package.json\`, README tokens, and installed ids (no LLM) |

\`suggest-agents\` does not require configured install targets. See the [CLI command reference](/guide/cli-commands) and [upstream suggest-agents docs](https://github.com/agents-repo/cli/blob/main/docs/commands/suggest-agents.md).

## Recommended path

Discover → evaluate source on GitHub → \`agents-repo install <id>\` (or bulk sync from \`agents.json\`) → commit [agents.json and lockfile](/guide/agents-json-lock).
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

The registry is **data-first** (no runtime in the catalog). The webapp and CLI are **consumers** that read the same catalog index and manifests. See [How the registry works](/guide/how-the-registry-works) for the read path.
`,l=`---
title: For AI agents
description: Stable markdown URLs, llms.txt, and curl examples for automated readers.
order: 140
section: Agents
---

Agents Repo publishes **raw markdown** for each guide page at predictable URLs. Prefer these over scraping rendered HTML.

## llms.txt

Site root:

\`\`\`text
https://agents-repo.org/llms.txt
\`\`\`

## Guide markdown URLs

Replace the origin if you mirror the site; production uses \`https://agents-repo.org\`.

\`\`\`text
https://agents-repo.org/guide/getting-started.md
https://agents-repo.org/guide/ecosystem-overview.md
https://agents-repo.org/guide/using-the-catalog.md
https://agents-repo.org/guide/discover-packages.md
https://agents-repo.org/guide/how-the-registry-works.md
https://agents-repo.org/guide/installing-packages.md
https://agents-repo.org/guide/agents-json-lock.md
https://agents-repo.org/guide/cli-commands.md
https://agents-repo.org/guide/install-targets.md
https://agents-repo.org/guide/cli-doctor.md
https://agents-repo.org/guide/contributing-packages.md
https://agents-repo.org/guide/submitting-a-package.md
https://agents-repo.org/guide/contributing-to-webapp.md
https://agents-repo.org/guide/for-ai-agents.md
\`\`\`

## Example fetch

\`\`\`bash
curl -fsSL 'https://agents-repo.org/guide/installing-packages.md'
curl -fsSL 'https://agents-repo.org/llms.txt'
\`\`\`

## Catalog data

Registry index (default production ref via proxy — your environment may differ):

\`\`\`bash
curl -fsSL 'https://registry-proxy.maiconfz.workers.dev/packages/index.json?ref=v2.x'
\`\`\`

Normative package rules remain in [registry specs](https://github.com/agents-repo/registry/tree/main/specs).

## HTML routes

Human-readable pages live under \`/guide\` and \`/guide/<slug>\` with the same content as the \`.md\` files.
`,u=`---
title: Getting started
description: What Agents Repo is, how to browse the catalog, and where to go next for installs and contributions.
order: 10
section: Start
---

Agents Repo is the public site for the open **agents-repo** registry: curated **agents** and **flows** you can install into supported IDEs and agent runtimes.

## What you can do here

1. **Browse and search** the catalog on [Home](/).
2. **Read how the registry is structured** in [How the registry works](/guide/how-the-registry-works).
3. **Install packages into your project** with the CLI — start at [Installing packages](/guide/installing-packages).
4. **Contribute packages** — see [Submit a package](/guide/submitting-a-package).

## Supported install targets

Packages declare which targets they support (for example GitHub Copilot, Cursor, Claude Code, and OpenAI Codex). The site and CLI use the same target identifiers. See [Install targets](/guide/install-targets).

## Organization context

For repository roles and architecture, read [Ecosystem overview](/guide/ecosystem-overview) or browse [Repositories](/repositories).
`,d=`---
title: How the registry works
description: Catalog index, package metadata, version manifests, ZIP artifacts, and how webapp and CLI fetch data.
order: 50
section: Registry
---

The [registry](https://github.com/agents-repo/registry) repository is the **source of truth** for package definitions. Runtime logic stays out of the catalog; consumers read files over HTTP.

## Package identity

- **Package id**: \`namespace/package-id\` (lowercase kebab-case segments).
- **Source tree**: \`packages/<namespace>/<package-id>/\` in the registry repo.
- **Version artifacts**: semver ZIPs under \`versions/\` with checksums in \`versions/manifest.json\`.

## Catalog files

| File | Role |
| --- | --- |
| \`packages/index.json\` | Lists packages and latest versions for browsing |
| \`metadata.json\` | Package-level metadata (description, targets, license) |
| \`versions/manifest.json\` | Per-version artifact URLs and SHA-256 checksums |

Consumers resolve a **git ref** (for example \`v2.x\` or a release tag), then fetch index and per-package files for that ref.

## registry-proxy

Production webapp and many CLI setups use [registry-proxy](https://github.com/agents-repo/registry-proxy) to cache GitHub Raw/contents responses. You can still link to the registry tree on GitHub for human review.

## Webapp vs CLI

- **Webapp**: loads the index for search/UI; offers downloads and browse links ([Using the catalog](/guide/using-the-catalog)).
- **CLI**: resolves versions, verifies ZIP integrity, and extracts into install target paths ([Installing packages](/guide/installing-packages)).

Normative formats live in [registry specs](https://github.com/agents-repo/registry/tree/main/specs). This guide does not duplicate spec text.
`,f="---\ntitle: Install targets\ndescription: Canonical target ids, typical on-disk paths, and init/add-target workflows.\norder: 90\nsection: CLI\n---\n\nInstall targets describe **where** package ZIPs are extracted in a consumer project (or global home with `-g`).\n\n## Target matrix\n\n| Target id | Label | Typical project paths (high level) |\n| --- | --- | --- |\n| `github-copilot` | GitHub Copilot | `.github/` agents and instructions |\n| `cursor` | Cursor | `.cursor/rules/`, `.cursor/skills/`, … |\n| `claude-code` | Claude Code | `.claude/agents/`, … |\n| `openai-codex` | OpenAI Codex | `.agents/skills/`, … |\n\nExact paths depend on package content and target adapters. Catalog metadata lists which targets a package supports.\n\n## Configure targets\n\n```bash\nagents-repo init --targets cursor github-copilot claude-code openai-codex\nagents-repo add-target openai-codex\nagents-repo targets\n```\n\n`--target` is an alias for `--targets` on `init`. Use JSON output with `agents-repo --json targets`.\n\n## Multi-target locks\n\nWhen multiple targets are configured, each installed package needs matching `byTarget` entries in `agents-lock.json`. After changing targets or packages, run `install` or `update` locally before enabling `agents:ci` in CI.\n\n## Catalog alignment\n\nThe webapp shows supported targets on package cards. Your project `targets[]` must overlap package support for a successful install.\n\nSee [agents.json and lockfile](/guide/agents-json-lock) and [Installing packages](/guide/installing-packages).\n",p=`---
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

See [Install targets](/guide/install-targets) for canonical ids and on-disk layout.

## Install packages

Add ids to \`agents.json\` \`packages\` and run bulk install, or install directly:

\`\`\`bash
npx agents-repo install agents-repo/some-package
\`\`\`

Commit **\`agents.json\`** and **\`agents-lock.json\`** when they change. Details: [agents.json and lockfile](/guide/agents-json-lock).

## CI

\`\`\`bash
npm ci
npm run agents:ci
\`\`\`

\`ci\` installs exactly from the lockfile (npm \`ci\` parity). See [CLI \`ci\` docs](https://github.com/agents-repo/cli/blob/main/docs/commands/ci.md).

## Troubleshooting

Run [\`agents-repo doctor\`](/guide/cli-doctor) before debugging install failures. Full command list: [CLI command reference](/guide/cli-commands). CLI repository: [/repositories/cli](/repositories/cli).
`,m=`---
title: Submit a package
description: Issue, branch, validation, build, draft PR, and squash-merge expectations for registry packages.
order: 120
section: Contribute
---

## 1. Open a tracking issue

Use the [package submission issue form](https://github.com/agents-repo/registry/blob/main/.github/ISSUE_TEMPLATE/package-submission.yml) on **agents-repo/registry**.

## 2. Create a branch

\`\`\`text
package/<issue-number>-<short-slug>
\`\`\`

## 3. Author under packages/

Add or update \`packages/<namespace>/<package-id>/\` with agents/flows, \`metadata.json\`, and version artifacts per [registry specs](https://github.com/agents-repo/registry/tree/main/specs).

## 4. Validate locally

From the registry repository (see CONTRIBUTING for pinned Node/npm):

\`\`\`bash
npm run package:validate -- --package <namespace>/<package-id>
npm run package:build -- --package <namespace>/<package-id>
npm run package:validate-artifacts -- --package <namespace>/<package-id> --version <version>
\`\`\`

## 5. Open a draft pull request

- Target \`main\` on **agents-repo/registry**
- Include \`Closes #<issue>\` in the PR body
- Mark ready for review only after CI and maintainer checklist pass

## 6. Squash merge title

Use **\`feat(package): …\`** for new packages or versions, or **\`fix(package): …\`** for corrections so registry release tags publish.

## Package corrections

For fixes to existing catalog entries, use the [package correction template](https://github.com/agents-repo/registry/blob/main/.github/ISSUE_TEMPLATE/package-correction.yml).

## Related

- [Contributing packages](/guide/contributing-packages) — policies and specs index
- [How the registry works](/guide/how-the-registry-works) — catalog layout
`,h=`---
title: Using the catalog
description: Search, package cards, downloads, CLI commands from the UI, and website settings.
order: 30
section: Catalog
---

The catalog on [Home](/) lists packages from the registry index. Each card shows metadata, status, supported install targets, and actions.

## Search and filters

Use the header search on large screens to filter packages by name or description. Review status badges and target compatibility before installing.

## Download and CLI actions

Package cards may offer:

- **Direct download** links for version ZIPs per install target (when the registry publishes artifacts).
- **Copy CLI install** commands (\`npx agents-repo install …\`) for quick trials.
- **Browse on GitHub** links to inspect package source in the registry repository.

For reproducible projects, prefer pinning the CLI in \`devDependencies\` and using project scripts — see [Installing packages](/guide/installing-packages).

## Website settings

Use **Website settings** in the header to point the browser at a different registry base URL or ref (for example a fork or tag). This affects catalog loading in your session only; it does not change CLI config in your repositories.

## Install the site (PWA)

When your browser supports it, use **Install app** in the header to add agents-repo.org as an installed web app.

## Next steps

- [Discover packages](/guide/discover-packages) — search and \`suggest-agents\` workflows
- [Install targets](/guide/install-targets) — what target ids mean on disk
`;function g(e){if(!e.startsWith(`---`))return{frontmatter:``,body:e.trim()};let t=e.indexOf(`
---`,3);if(t===-1)throw Error(`Guide markdown frontmatter is not closed with ---`);return{frontmatter:e.slice(4,t).trim(),body:e.slice(t+4).trim()}}function _(e,t){return new RegExp(String.raw`^${t}:\s*(.+)$`,`m`).exec(e)?.[1]?.trim()??``}var v=Object.assign({"../../../../content/guide/agents-json-lock.md":n,"../../../../content/guide/cli-commands.md":r,"../../../../content/guide/cli-doctor.md":i,"../../../../content/guide/contributing-packages.md":a,"../../../../content/guide/contributing-to-webapp.md":o,"../../../../content/guide/discover-packages.md":s,"../../../../content/guide/ecosystem-overview.md":c,"../../../../content/guide/for-ai-agents.md":l,"../../../../content/guide/getting-started.md":u,"../../../../content/guide/how-the-registry-works.md":d,"../../../../content/guide/install-targets.md":f,"../../../../content/guide/installing-packages.md":p,"../../../../content/guide/submitting-a-package.md":m,"../../../../content/guide/using-the-catalog.md":h});function y(e){let t=/\/([^/]+)\.md$/.exec(e);if(!t?.[1])throw Error(`Invalid guide module path: ${e}`);return t[1]}function b(){let n=[];for(let[e,r]of Object.entries(v)){if(typeof r!=`string`)throw TypeError(`Guide module ${e} did not load as raw text`);let i=y(e),a=t(i);if(!a)throw Error(`Guide markdown ${i} is missing from guideCatalog.ts`);let{frontmatter:o,body:s}=g(r),c=_(o,`title`),l=_(o,`description`),u=_(o,`section`),d=Number(_(o,`order`));if(c!==a.title||l!==a.description||u!==a.section||d!==a.order)throw Error(`Guide ${i} frontmatter does not match guideCatalog.ts`);n.push({...a,bodyMarkdown:s})}if(n.length!==e.length)throw Error(`Guide markdown file count does not match guideCatalog.ts`);return n.sort((e,t)=>e.order-t.order||e.title.localeCompare(t.title))}var x=b(),S=new Map(x.map(e=>[e.slug,e]));function C(){return x}function w(e){return S.get(e)}function T(){let e=[],t=new Map;for(let n of x)t.has(n.section)||(t.set(n.section,[]),e.push(n.section)),t.get(n.section)?.push(n);return e.map(e=>({section:e,entries:t.get(e)??[]}))}export{C as n,T as r,w as t};