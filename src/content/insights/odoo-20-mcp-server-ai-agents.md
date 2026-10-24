---
title: 'Odoo 20 MCP server and AI agents: what they do and how to turn them on safely'
metaTitle: 'Odoo 20 MCP server and AI agents: a safe rollout guide'
description: 'What the Odoo 20 MCP server and AI agents really do, what AI credits cost, and the checklist I use to switch them on safely in a live company.'
publishDate: 2026-10-25
topic: 'AI & Automation'
readingTime: '7 min'
draft: true
---

Odoo 20 is the first version where outside AI tools like Claude or ChatGPT can talk to your database through an official door, and where Odoo's own AI agents can change records instead of only answering questions. That is useful. It is also the moment an ERP stops being a place where only people make changes.

Below I explain what the new pieces do, using only Odoo's own release notes and docs, then give the checklist I would follow before switching them on. Where Odoo has not published something yet, I say so.

## What changed from Odoo 19 to Odoo 20

In Odoo 19 the AI app already had agents, AI fields, AI in server actions and natural-language search. The [Odoo 19 release notes](https://www.odoo.com/odoo-19-release-notes) describe agents that "can learn from your documents and perform actions", but the main use was reading and drafting. The [Odoo 20 release notes](https://www.odoo.com/odoo-20-release-notes) go much further.

| Area | Odoo 19 | Odoo 20 |
|---|---|---|
| External AI tools (Claude, ChatGPT and others) | No official MCP connection | Built-in MCP server at `<your-database-url>/mcp` |
| What agents can do | Answer, draft, fill fields, create leads from live chat | Also create and update records, including from an uploaded PDF of instructions |
| Grouping of agent abilities | Topics | Renamed to skills |
| Agent asks before acting | Not described | Users answer permission requests with buttons |
| Agents in automation | AI inside server actions | Agents can be called by automated and scheduled actions |
| Paying for AI | Credits not mentioned in the notes | All AI features need credits bought through IAP |

Odoo 20 also changes access rights: the release notes say record rules were removed and a domain was added directly on each access right. This matters for AI, because the agent works with the same rights as the user it runs as. At the time of writing, the Odoo 20 [access rights page](https://www.odoo.com/documentation/20.0/applications/general/users/access_rights.html) still describes the old Record Rules tab, so check the screens in your own database rather than the docs.

## What the MCP server is, in one paragraph

MCP (Model Context Protocol) is an open standard that lets an AI assistant call tools in another system. In Odoo 20 your database acts as an MCP server: you add `<your-database-url>/mcp` to Claude, ChatGPT, Grok, Codex or another MCP client, you ask a question in plain language, and the client calls Odoo tools in the background to read or change data ([MCP server docs](https://www.odoo.com/documentation/20.0/applications/productivity/ai/mcp_server.html)). Internal users sign in with OAuth, which Odoo recommends. Portal users must use an API key, created under My Preferences, Security tab, with the MCP scope and an expiry date. The admin decides which tools are exposed. By default only five read tools are on: Get Fields, Get Models, MCP Retrieve initial context, Search and Read group. Everything else, including Create Records and Update Records, stays hidden until an admin ticks "Available in MCP" on that server action ([list of MCP tools](https://www.odoo.com/documentation/20.0/applications/productivity/ai/mcp_server/mcp_tools.html)).

One detail is easy to misread. The "Readonly Tool" checkbox does not hide or block a tool. Odoo's note says it only tells the client the tool is safe to run without asking the user first. So never tick it on a tool that writes.

## What AI agents and skills can now do

Inside Odoo, an agent is an assistant with a system prompt, a response style, sources (PDFs, links, Documents files, Knowledge articles) and skills ([AI agents docs](https://www.odoo.com/documentation/20.0/applications/productivity/ai/agents.html)). Skills are bundles of instructions and tools. Ready-made ones include Information retrieval, Create Records, Update Records, Web Search, Website Builder and Create Leads. The docs are clear that an agent with no skills can only give information and cannot change the database.

From the Odoo 20 release notes, agents can now:

- create and update records when you ask them to;
- ask you questions and permission requests that you answer with a button;
- stop and ask for confirmation when they reach their tool call limit;
- be called by automated actions and scheduled actions.

That last point matters most for operations: an agent can now run without anyone typing a prompt. The [AI server actions page](https://www.odoo.com/documentation/20.0/applications/productivity/ai/server-actions.html) explains the split: the AI picks a tool and its arguments, and the tool (a normal server action) does the write. A chosen tool runs "unconditionally, unless the code itself prevents it", so your business rules must live in the tool's code.

Not documented yet: which actions trigger a permission request, and whether an agent called from a scheduled action can ask anyone at all. I would assume it cannot and design for that.

## What it costs: AI credits

The release notes say "All AI features now need credits". On the [Odoo AI IAP page](https://iap.odoo.com/iap/in-app-services/867) credits cost 1 euro each, in packs of 10, 100, 500 and 1,000. The page lists 20 free credits. Credits belong to one database, do not expire, can be auto-refilled, and unused credits can be refunded on request within 30 days. When the balance runs out, the AI feature stops and named users get a warning email before that.

What is not published: how many credits each feature or request uses. Odoo only says usage depends on the feature, the task and the size of the request. It is also not documented whether MCP calls from your own Claude or ChatGPT account use Odoo credits, since the language model runs on the client side. Test this on a copy database and watch the balance.

One more cost point: the [AI app page](https://www.odoo.com/documentation/20.0/applications/productivity/ai.html) says installing it on the Standard plan triggers an upsell to the Custom plan.

## The safe rollout checklist I would use

1. **Test on a copy database first.** Restore a recent copy, neutralise it, and run every step below there before production.
2. **Start read-only.** Keep only the five default MCP tools for the first weeks. Reporting and lookups already give most of the value.
3. **Expose few tools, on purpose.** Add Create Records or Update Records only for a named use case, and write down why each tool is on.
4. **Use a dedicated integration user.** Give the agent or MCP connection its own internal user with narrow rights and access-right domains, not an admin login. The AI can only see and do what that user can.
5. **Keep approval on writes.** Never mark a writing tool as Readonly Tool. For automated flows, put the checks inside the tool's code, and have the agent prepare a draft for a person to confirm.
6. **Short-lived access.** Choose a short duration on the OAuth grant screen and an expiry date on API keys. Every connection shows up as a key under My Preferences, Security, and deleting it revokes access.
7. **Leave Dynamic Client Registration off.** Odoo warns that enabling DCR "allows any application to register as a client". Approve known clients by their CIMD URL instead. If DCR was used, archive unknown clients under Settings, Technical, OAuth Clients.
8. **Review agent chats and changes.** Conversations are kept for up to 30 days after the last message, per the release notes. A separate audit log of MCP calls is not documented yet, so check the chatter and record history of anything the AI changed.
9. **Set a credit budget.** Buy a small pack, set the warning threshold, and turn auto-refill off until you know your real usage.

## Where native stops and custom work starts

The built-in tools work on data inside Odoo. A few things still need proper engineering:

- **External systems.** Your telecom billing platform, bank, warehouse system or a custom portal are not reached by Odoo's MCP tools. They need an integration, and the AI should call that integration rather than guess.
- **WhatsApp conversations.** Odoo 20 improves the WhatsApp app (templates, number blocking and more), but I found nothing in the release notes about AI agents answering customers on WhatsApp. That still means custom work.
- **Country compliance.** E-invoicing such as ZATCA must stay deterministic: fixed rules, signed XML, clear errors. An AI can explain a rejected invoice to a user. It should not decide what gets reported to a tax authority.
- **Business rules.** Approval limits, credit checks and pricing logic belong in the tools' code, not in a prompt.

## FAQ

**Can I connect Claude to Odoo 20?**
Yes. Add `<your-database-url>/mcp` as a remote MCP server in Claude or Claude Code. Internal users sign in through OAuth in the browser. Odoo's docs include setup steps for Claude, ChatGPT, Grok, Antigravity and Codex.

**Can the AI change my data?**
Only through tools you expose and only within the rights of the user it signs in as. The five default MCP tools only read. Writing tools must be switched on by an admin.

**How much do Odoo 20 AI credits cost?**
1 euro per credit, sold in packs from 10 to 1,000. Odoo has not published how many credits each action uses, so measure it on a test database.

---

*Planning to switch on Odoo 20 AI in your company? See my [AI and automation services](/services/ai-odoo/) or [get in touch](/contact/).*
