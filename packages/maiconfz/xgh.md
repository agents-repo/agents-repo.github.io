# xgh

Satirical XGH toolkit: first-idea coding, rubber-stamp review, and ship-it pep talks. Original parody of Brazilian developer folklore. Not affiliated with any XGH brand. Replies match the user's language.

- Package: `maiconfz/xgh`
- Version: `1.0.1`
- HTML page: https://agents-repo.org/packages/maiconfz/xgh/
- Markdown: https://agents-repo.org/packages/maiconfz/xgh.md

## Agents

- **xgh-ai**: Vibe-coding XGH persona: prompt first, blame the model, treat short memory as a feature. Original parody, not affiliated with XGH-AI sites. Matches the user's language. Refuses force-push, secrets, and data destruction.
- **xgh-chat**: Conversational XGH persona for excuses and ship-it pep talks. Does not edit the working tree unless the user insists. Original parody; does not quote third-party axiom lists. Matches the user's language.
- **xgh-coder**: Implements the first idea that compiles. Skips tests, leaves TODOs, and does not clean working mess. Matches the user's language. Refuses force-push, secrets, and data destruction.
- **xgh-project-analyzer**: Reactive project read: unnoticed issues are not issues. Prefers shipping over architecture. Matches the user's language. Refuses force-push, secrets, and data destruction.
- **xgh-reviewer**: Rubber-stamp review if it seems to run. Skips test demands and assigns creative blame. Still blocks secrets, force-push, and data destruction. Matches the user's language.

## Flows

- **xgh-ship-it**: Chains xgh-project-analyzer, xgh-coder, then xgh-reviewer to ship the first compiling idea. Does not invoke xgh-chat or xgh-ai.

## README

# xgh

Satirical XGH toolkit: first-idea coding, rubber-stamp review, and ship-it pep
talks. Original parody of Brazilian developer folklore. Not a real methodology
and **not affiliated** with any XGH brand or site.

Catalog copy is English. Installed agents reply, comment, and summarize in the
**language the user used** (English if mixed or unclear).

This is a `maiconfz` community package, not an official agents-repo product.

## Disclaimer

Definitions in this package are original parody. They do not copy third-party
axiom lists or manifests. Do not treat the instructions as permission to
force-push protected branches, leak secrets, destroy data, disable security,
rewrite git history, or turn off CI and git hooks. Host-agent safety rules
still win.

## Install

Prefer the official [agents-repo CLI](https://github.com/agents-repo/cli).

Greenfield (no usable `agents.json` targets yet):

```bash
npx agents-repo@latest init --targets github-copilot claude-code cursor openai-codex
npx agents-repo@latest install maiconfz/xgh
```

Already configured (targets present in `agents.json`):

```bash
npx agents-repo@latest install maiconfz/xgh
```

Commit `agents.json`, `agents-lock.json`, and extracted paths after install.
All four supported IDE targets receive the package content (rendered per
target). Installed content comes from the versioned ZIPs pinned in your
`agents-lock.json`.

## Usage

- `xgh-chat` — talk only: excuses and ship-it pep talks.
- `xgh-project-analyzer` — reactive read; unnoticed issues are not issues.
- `xgh-coder` — implement the first compiling idea; skip tests; leave TODOs.
- `xgh-ai` — same messy implementation, vibe/prompt theater, blame the model.
- `xgh-reviewer` — local rubber-stamp if it seems to run (not `gh` triage).
- `xgh-ship-it` — analyzer → coder → reviewer. Does not call chat or xgh-ai.

## Package contents

| Asset | Role |
| --- | --- |
| `xgh-chat` | Conversational persona |
| `xgh-project-analyzer` | Ship-first analysis |
| `xgh-coder` | First-idea implementation |
| `xgh-ai` | Vibe-coding implementation |
| `xgh-reviewer` | Local rubber-stamp review |
| `xgh-ship-it` (flow) | Analyze, code, stamp |

## Chat-web consumption

This package opts into the chat-web channel via
`compatibility.consumption` with `{ "id": "chat-web", "status": "supported" }`.
Every agent and the flow sets `chatWeb: "included"`. None are excluded.

Chat-web opens `xgh-chat` by default via `defaultInstruction`.

After `package:build`, the instruction manifest for a released version lives
at:

```text
packages/maiconfz/xgh/versions/<version>/instructions.json
```

Registry artifacts use **path-only** `/pkg/...` strings. WebApp consumers
join the registry-proxy origin with those paths per
[`specs/chat-consumption.md`](https://github.com/agents-repo/registry/blob/main/specs/chat-consumption.md):

- **Origin:** `https://registry-proxy.maiconfz.workers.dev`

Illustrative absolute fetch URLs for version `1.0.1`:

```text
https://registry-proxy.maiconfz.workers.dev/pkg/maiconfz/xgh/1.0.1/instructions.json
https://registry-proxy.maiconfz.workers.dev/pkg/maiconfz/xgh/1.0.1/agents/xgh-chat.agent.md
https://registry-proxy.maiconfz.workers.dev/pkg/maiconfz/xgh/1.0.1/flows/xgh-ship-it.agent.md
```

The `xgh-ship-it` flow lists step agents in frontmatter/metadata `agents[]`;
`package:build` maps that ordered list to `agentInstructions` in
`instructions.json`.

## Validate and build

From the registry repository root:

```bash
PKG=maiconfz/xgh
npm run package:validate -- --package "$PKG"
npm run package:build -- --package "$PKG"
npm run package:validate-artifacts -- --package "$PKG" --version 1.0.1
```

Do not author `detail.json` or any files under `versions/`.
