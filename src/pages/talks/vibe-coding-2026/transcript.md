---
title: Session Transcript
description: Speaker-structured transcript of the Vibe Coding with Shawn session.
layout: layouts/base.njk
permalink: /talks/vibe-coding-2026/transcript/
date: 2026-03-13
---

# Session Transcript

**Date:** March 13, 2026

This is a reader-friendly transcript of the session. It is based on the meeting captions and chat log, lightly cleaned for readability. Speaker names have been replaced with role labels, obvious transcription errors have been corrected where the meaning was clear, and relevant audience questions and chat comments have been placed near the point where they happened.

## Opening

Thank you very much, Sean.

Okay, so here we go. Welcome to my little show and tell. This is really just me showing how I work.

Before we begin: yes, I’m reading from a script that Brody and I — with a little help from his brother Claude — helped write to keep me focused. Those of you who know me know that without a script, this talk could slowly drift into three different talks before we even start coding.

You might also notice that I scroll fairly quickly when switching between tools and reading. If movement on screen is uncomfortable, feel free to minimize the shared screen or look away for a moment. I’ll try to give a heads-up when things slow down again.

This is not a talk about AI replacing developers. I still have a job, hopefully.

It’s not a productivity flex.

And it’s definitely not a best-practices presentation.

What you’re about to see is how I actually work day to day, using tools that help me think in conversation instead of keeping everything in my head.

After the meeting, I’ll send out a cleaned-up version of the AI chats from the session, with a bit of help from Brody, so you don’t have to capture everything live.

For accessibility, I’ll be pasting the AI responses into a shared Word document during the session. I’ll paste the link in the chat now. It’s also in the meeting invitation.

It’s best to open it in the browser so you can see the live updates. I had to make it writable for everyone, so please don’t edit the file while I’m copying into it. That sounds like something I would do, but please don’t do that.

The document is there for anyone who can’t hear the audio from my Spoken Content, can’t easily follow what’s on screen, or just prefers reading at their own pace. It may lag slightly behind what you hear, and that’s okay. After the meeting, I’ll send out a cleaned-up transcript of the full AI conversation so no one has to rely on the live version.

I work with two AI tools, and I think of them as different coworkers.

Brody is ChatGPT in the browser. Brody helps me think: planning, naming things, untangling ideas, and talking through decisions.

Hunter is GitHub Copilot. Hunter helps me type: boilerplate, patterns, and filling in the boring parts while I try to stay focused.

Brody plans. Hunter types. I make the decisions. And sometimes Brody tells me the decision I made wasn’t the best one, which is exactly what I need.

When I say “vibe coding,” I just mean pair programming with AI.

I don’t prompt once and accept whatever comes out. I talk, I push back, I clarify, and I change my mind mid-sentence.

The vibe part is staying conversational instead of switching into formal prompt-writing mode. If you’ve ever explained a problem out loud and solved it halfway through the explanation, this is that — but interactive.

Personally, I use text-to-speech through Spoken Content. You’ll hear it read along with me. That combination helps me retain information better, so that’s how I work day to day.

I’ll be sharing my screen audio so those who can hear can follow along, and everything on screen will still be visible for everyone else.

For me, hearing and reading at the same time slows things down just enough to help me catch mistakes and absorb what’s being said.

I’m not going to slow down my text-to-speech. It’s going to speak at the speed I’m comfortable with, which might not be the speed you’re comfortable with, and I apologize for that. I’ll use it as much as I need to, and we’ll work from there.

This is a live build. Things will go wrong. That’s intentional.

You’ll see me correct the AI, ignore suggestions, delete things, and change direction partway through. That’s just part of how this works.

I’m not showing the best or cleanest way to build something. I’m showing the real way I get something working.

If something breaks or doesn’t land, we’ll deal with it together and keep moving.

The important part for me is that I stay in charge.

The AI doesn’t decide architecture, priorities, or tradeoffs. It doesn’t know the constraints unless I explain them.

Sometimes it’s helpful. Sometimes it’s confidently wrong. Part of the job is knowing which is which.

I treat it like a fast junior teammate who’s good at patterns, bad at context, and needs supervision.

You don’t need to follow along or take notes. It’s fine to just sit back and watch me struggle.

We’ll do questions at the end if there’s time. You can always message me later if something comes up after the session.

If we don’t finish the app in an hour, that’s fine too. I’ll finish it and share the link afterward.

All right — let’s vibe code something.

## Early accessibility hiccup

A few minutes in, it turned out the shared Word document did not have the right permissions for everyone.

### Audience comment

The Word document wasn’t accessible to everyone yet.

### Response

You should have access. Did you click the link? ... Okay, let me fix the sharing first.

A few minutes later, access was expanded more broadly and the document started working for the people who needed it.

### Audience comment

It works now.

### Response

Perfect. Good stuff.

## Planning the app in ChatGPT

I loaded ChatGPT in the browser. It’s my planning partner. That’s why I really like it.

I had created a prompt for this specific demo, but normally I don’t use a preset prompt. I usually just talk to it.

The app idea for this session was a custom dice roller to play Dungeons & Dragons in the browser.

The prompt asked ChatGPT to:

- help plan the app using the stack I prefer
- begin by asking clarifying questions
- propose must-have features, nice-to-have features, and optional polish
- keep the scope realistic for something that could be started in one hour
- avoid generating implementation code yet

ChatGPT came back with a long answer, including clarifying questions and a scoped feature plan.

One thing I noticed right away was that it got wordy, even though I usually prefer shorter answers. That happens sometimes. It knows a lot about how I work, but it doesn’t always keep things as tight as I want.

### Chat comment

A few people in chat commented on model preferences and how different tools can be more or less wordy by default.

## Choosing the audience and narrowing scope

The app planning started with the question of who the dice roller was for.

We briefly talked through possibilities like:

- just me, as a quick personal tool
- players
- Dungeon Masters
- beginners
- a portfolio/demo audience

A suggestion came in to make it for players, but then another suggestion followed to keep it focused on me personally so I could specify what I like.

That worked well for the demo, so the scope became:

- simple and practical
- die buttons plus quantity and modifier
- a history panel in version one

From there, the plan became a focused version one:

- die buttons
- quantity input
- modifier input
- roll button
- result display
- roll history
- accessible labels and keyboard-friendly controls

## A quick aside on memory and context

This was one of the moments I wanted to show.

I didn’t have to tell ChatGPT my preferred stack again. It already knew I like working with HTML, CSS, JavaScript, Node.js tooling only when needed, GitHub, Netlify, and Eleventy.

It also brought accessibility into the conversation on its own, because it knows the kind of work I do.

That’s one of the main reasons I stick with ChatGPT for planning. It already has enough history with me that I don’t have to keep rebuilding context every time.

## Turning the plan into a Copilot prompt

At that point I said this is something I do all the time to save mental energy.

Instead of translating the plan into instructions for GitHub Copilot myself, I asked Brody to do it for me.

That gave me a Copilot-ready prompt that included:

- plain HTML, CSS, and JavaScript
- no frameworks
- accessibility expectations
- file structure
- version one features
- a request to explain the logic afterward so I could talk through it live

A chat comment around this point summed it up nicely: it feels very meta to ask one large language model to write instructions for another one.

That’s true, but it works.

## Audience question: tool choice in Copilot

A question came up about whether GitHub Copilot was using ChatGPT directly or whether I was switching tools as a technique.

The short answer was that Copilot is the tool, but it can use different models behind the scenes. You can pick from a few options, or let it choose automatically.

I’m not an expert on all of the available models. I’m still learning this as I go.

## Spoken Content and accessibility

Another strong moment in the session came when someone pointed out that, from a deaf perspective, it was useful to see the text and understand how the audio and text fit together.

That was one of the best pieces of feedback in the session. It reinforced that using multiple formats at once — spoken audio, visible text, and a shared document — really did help different people follow in different ways.

## Switching to GitHub Copilot

Next I moved into VS Code.

I created a new project folder inside my personal Git directory, opened it in VS Code, and pasted the Copilot prompt into the chat panel.

Then I let Copilot scaffold the app.

It created the three files:

- `index.html`
- `styles.css`
- `script.js`

It also reviewed its own output for accessibility and made a small improvement so the live region would announce the full roll details more clearly.

Once the files were created, I used the built-in preview to open the app in the browser and test it.

The result was a simple working Dungeons & Dragons dice roller with:

- die buttons
- quantity input
- modifier input
- a roll button
- current result display
- roll history

## Audience question: visual dice

At one point, a question came up about making it look like actual dice with image output.

I decided not to do that for this version because it would have taken longer and pushed the demo away from the core build. I mentioned that for a previous Yahtzee-style project I had used icon fonts for dice, and that something like that would probably be the direction I’d take if I wanted to add visuals later.

## Reviewing the generated code

I clicked through the generated files and checked how the interface behaved.

One thing I highlighted was that even after ten years of working with JavaScript, I still don’t always understand every line immediately. That’s part of the reality of modern development too.

I also asked a small follow-up question about whether `type="button"` really needed to be on a button element.

Copilot answered that it wasn’t strictly necessary in the current markup, but that it was still good practice because it prevents future issues if the button is later placed inside a form.

That kind of small question-and-answer loop is very normal in how I work.

## Initializing git and making commits

From there I asked Copilot to initialize git and make the first commit.

It did the setup and created an initial commit for the app.

Then I asked for a small style tweak: making the roll button green.

After that change was made, I asked it to commit that too.

This is the part I like a lot: I can focus on checking whether the result is right, and let the tool handle repetitive setup tasks.

## Audience question: Mac Shortcuts

While Copilot was working, a question came in about whether a similar approach could be used to build something that integrates with MacOS Shortcuts.

My answer was basically that I don’t know enough about Shortcuts specifically to give a strong answer on the spot, but that I would start by asking ChatGPT about the problem in context.

Because it knows I use a Mac, it can often suggest approaches that fit my actual environment and comfort level, rather than giving generic advice.

## Pushing the project to GitHub

The last live step was pushing the project to GitHub.

On my personal computer I usually let the tooling handle more of that for me, but on the work machine I ran into some limitations, including the missing GitHub CLI.

So I created the repository manually and then had Copilot help connect the local repo to the remote and push the code up.

That worked, and by the end of the session the project was live on GitHub.

Later, I also shared the repo link in the chat.

## Wrap-up

Near the end I was moving quickly and ran out of time for questions in the meeting itself.

I wrapped up by saying I’d share the materials afterward, including:

- the cleaned AI chat
- the transcript
- the recording
- the GitHub link

And, as I said in the post-session chat, I forgot my closing line during the session:

> Brody helps me think. Hunter helps me type. I stay in charge.

That still feels like the best summary of the whole talk.

## Post-session notes

A few useful topics continued in chat after the session:

- whether GitHub Copilot licenses through SSC or Cloud Team avoid training on user data
- whether free versus paid tools use inputs for training
- voice interaction and privacy
- whether ChatGPT can be used for work planning in government contexts
- how fast the models have changed over the last few months
- the broader pros and cons of AI in education, privacy, accessibility, and society

Those are important discussions, but they’re separate from the live demo itself, so I’m keeping them out of the main transcript body.

A fuller archive version of this event — including post-session chat discussions — is available in the [full event transcript](/talks/vibe-coding-2026/transcript-full/).

## Related materials

- [Talk overview](/talks/vibe-coding-2026/)
- [Full event transcript](/talks/vibe-coding-2026/transcript-full/)
- [Talk script](/talks/vibe-coding-2026/script/)
- [AI chat transcript](/talks/vibe-coding-2026/ai-transcript/)
