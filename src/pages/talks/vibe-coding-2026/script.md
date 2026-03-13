---
title: Talk Script
description: Planned script for the Vibe Coding with Shawn talk.
layout: layouts/base.njk
permalink: /talks/vibe-coding-2026/script/
date: 2026-03-13
---

# Talk Script

## The computer setup

### Big monitor

- Obsidian (notes)
- Edge with Word doc open
- Teams

### Laptop

- Edge (ChatGPT, work example, GitHub)
- VS Code
- Terminal

---

## The presentation

### 1. Opening: setting expectations

Before we begin: yes, I’m reading from a script that Brody — with a little help from his brother Claude — helped me write to keep me focused. Those of you who know me know that without a script, this talk could slowly drift into three other talks before we even start coding.

**[Pause]**

You might notice that I scroll fairly quickly when I’m switching between tools.

If fast movement on screen is uncomfortable, feel free to minimize the shared screen or look away for a moment. I just wanted to give a quick heads-up before we start.

**[Pause]**

This is **not** a talk about AI replacing developers.  

It’s not a productivity flex.  

And it’s definitely not a best-practices presentation.

What you’re about to see and hear is how I actually work on a normal day, using tools that help me think in conversation instead of keeping everything in my head.

After the meeting, I’ll send out a cleaned-up version of the AI chats from the session, with a bit of help from Brody, so you don’t have to capture everything live.

### Accessibility note: live text and transcript

For accessibility, I’ll be pasting the AI responses into a shared Word document during the session.

**[Action: paste link to document in chat]**

[AI Chat Transcript](/talks/vibe-coding-2026/ai-transcript/)

This works best in the browser to see live updates, please don’t edit the file.

That document is there for anyone who can’t hear the audio from my Spoken Content, can’t easily follow the screen, or just prefers reading at their own pace.

It may lag slightly behind what you hear, and that’s okay. After the meeting, I’ll send out a cleaned-up transcript of the full AI conversation so no one has to rely on the live version.

### 2. Naming the characters

I work with two AI tools, and I think of them as two different coworkers.

Brody is ChatGPT in the browser. Brody helps me think. Planning, naming things, untangling ideas, talking through decisions.

Hunter is GitHub Copilot in VS Code. Hunter helps me type. Boilerplate, patterns, filling in the boring parts while I stay focused.

Brody plans. Hunter types. I make the decisions.

### 3. Defining vibe coding

When I say “vibe coding,” I just mean pair programming with AI.

I don’t prompt once and accept whatever comes out. I talk, I push back, I clarify, and I change my mind mid-sentence.

The “vibe” part is staying conversational instead of switching into a formal prompt-writing mode.

If you’ve ever explained a problem out loud and solved it halfway through the explanation, this is that, but interactive.

### 4. Spoken Content and audio

You’ll hear me use Spoken Content and read along with it. That combination helps me retain information better, so it’s how I work day to day.

I’ll be sharing my audio so those who can hear can follow along, and everything on screen will still be visible for anyone who can’t.

For me, hearing and reading at the same time slows things down just enough to catch mistakes and actually absorb what’s being said.

### 5. Setting expectations for the live demo

This is a live build, and things will go wrong. That’s intentional.

**[Pause]**

You’ll see me correct the AI, ignore suggestions, delete things, and change direction partway through. That’s just part of how this works.

I’m not showing the best or cleanest way to build something. I’m showing the real way I get from nothing to something that works.

If something breaks or doesn’t land, we’ll deal with it together and keep moving.

### 6. Control, agency, and staying in charge

The important part for me is that I stay in charge.

The AI doesn’t decide architecture, priorities, or tradeoffs. It doesn’t know the constraints unless I explain them.

Sometimes it’s very helpful. Sometimes it’s confidently wrong. Part of the job is knowing which is which.

I treat it like a fast junior teammate who’s good at patterns, bad at context, and needs supervision.

### 7. Transition into the demo

You don’t need to follow along or take notes. It’s completely fine to just sit back.

We’ll do questions at the end if there’s time, and you can always message me after if something comes up later.

If we don’t finish the app in an hour, I’ll finish it and share the link with you all.

Alright. Let’s try to vibe code something.

## Prompt

**[Action: copy into Brody]**

I’m doing a live coding demo right now.

I want to build a small web app.

The idea is: **custom dice roller to play Dungeons And Dragons in the browser**.

Using the stack you know I prefer, help me plan this.

Start by asking a few clarifying questions so we can shape it together, beginning with the purpose of the app and who it’s for.

Then propose:

- Must-have features
- Nice-to-have features
- Optional polish touches

Keep it realistic for something that can be meaningfully started in one hour.

Do not generate implementation code yet. We’re only planning.

Later, I’ll ask you to help me generate a prompt for GitHub Copilot to begin building it.

## Working with Brody

**If no accessibility or bilingual is mentioned ask:**

> “Given how I usually build things, what else might we consider?”

**If asked about authentication:**
> “For today, let’s assume no authentication and local storage only.”

## Transition: Brody Plans → Brody Writes the Prompt for Hunter

**After Brody gives you the feature tiers**

“That should be enough to get started.”

Brody just planned out what we’re building. Now here’s something I do all the time that saves me a ton of mental energy...

Instead of me translating this plan into instructions for Copilot, I’m going to ask Brody to do it for me.

**Turn back to ChatGPT**

> Can you write me a prompt I can give to GitHub Copilot to start building this? Include the key structure and first features to implement.

**Wait for response**

See what just happened? Brody knows how I work, knows I’m about to switch tools, and can translate its own plan into instructions optimized for a *different AI*.

This is peak vibe coding: having one AI prep the work for another AI, while I stay in the driver’s seat deciding what actually gets built.

**Create working environment**

1. switch to terminal
2. `cd _git`
3. `cd shawnthompson`
4. `mkdir project_name`
5. `cd project_name`
6. `code .`

**Copy the prompt from ChatGPT**

Now I’ll take this prompt, open VS Code, and paste it as a comment at the top of my file. Hunter will read it and start suggesting code based on these instructions.

**Initiate git**

Before we write code, I always initialize version control. Let’s have Hunter set that up.

**Start coding**

If this goes completely sideways, that’s fine. The goal isn’t to ship something perfect in an hour. It’s to show how I think.

Alright Hunter, let’s start building this thing...

**Make first commit**

**Closing**

As you can see Brody helps me think. Hunter helps me type. I stay in charge.

## Related materials

- [Talk overview](/talks/vibe-coding-2026/)
- [AI chat transcript](/talks/vibe-coding-2026/ai-transcript/)
- [Session transcript](/talks/vibe-coding-2026/transcript/)
- [Original invitation](/talks/vibe-coding-2026/invitation/)
