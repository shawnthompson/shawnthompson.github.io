---
title: Vibe Coding with Shawn – Full Event Transcript
description: Fuller archive transcript of the Vibe Coding with Shawn session, combining meeting captions with chat messages and post-session discussion.
date: 2026-03-13
tags:
  - talks
  - ai
  - development
  - accessibility
  - transcript
layout: layouts/base.njk
permalink: /talks/vibe-coding-2026/transcript-full/
---

# Vibe Coding with Shawn – Full Event Transcript

**Date:** March 13, 2026

This is the fuller archive version of the session transcript. It combines the meeting captions with selected chat messages in approximate chronological order. Speaker names have been removed, but audience questions, chat comments, and follow-ups have been kept where they add useful context.

## Before the talk started

A short note was posted in chat before the official start saying the meeting would begin at 11:00, but there would be setup time beforehand.

A reminder also came in to stop and then restart the recording properly once the session actually began.

## Opening

Thank you very much, Sean.

Okay, so here we go. Welcome to my little show and tell. It’s really just going to show how I work.

Before we begin: yes, I’m reading from a script that Brody and I — with a little help from his brother Claude — helped write to keep me focused. Those of you who know me know that without a script, this talk could slowly drift into three different talks before we even start coding.

You might also notice that I scroll fairly quickly when switching between tools and reading. If movement on screen is uncomfortable, feel free to minimize the shared screen or look away. I’ll try to give a heads-up when things slow down again.

This is not a talk about AI replacing developers.

It’s not a productivity flex.

And it’s definitely not a best-practices presentation.

What you’re about to see is how I actually work day to day, using tools that help me think in conversation instead of keeping everything in my head.

After the meeting, I’ll send out a clean version of the AI chats from the session, with a bit of help from Brody, so you don’t have to capture anything live.

For accessibility, I’ll be pasting the AI responses into a shared Word document during the session. I’ll paste the link in the chat now. It’s also found in the meeting invitation.

It’s best to open it in the browser so you can see the live updates. I had to make it writable for all, so please don’t edit the file while I’m copying into it. That sounds like something I would do, but please don’t do that.

The document is there for everyone who can’t hear the audio from my Spoken Content, can’t easily follow on screen, or just prefers reading at their own pace. It may lag slightly behind what you hear, but that’s okay. After the meeting, I’ll send out a cleaned-up transcript of the full AI conversation, so no one has to rely on the live version.

So I work with two different AI tools, and I think of them as different coworkers.

Brody is ChatGPT in the browser. Brody helps me think: planning, naming things, untangling ideas, and talking through decisions.

Hunter is GitHub Copilot. Hunter helps me type: boilerplate, patterns, and filling in the boring parts while I try to stay focused.

Brody plans. Hunter types. I make the decisions. And Brody sometimes tells me the decision I made wasn’t the best one, which is what I need.

When I say vibe coding, I just mean pair programming with AI.

I don’t prompt once and accept whatever comes out. I talk, I push back, I clarify, and I change my mind mid-sentence.

The vibe part is staying conversational instead of switching into formal prompt-writing mode. If you’ve ever explained a problem out loud and solved it halfway through the explanation, this is that — but interactive.

Personally, I use text-to-speech called Spoken Content. You’ll hear it read along with me. That combination helps me retain the information better, and that’s how I work day to day.

I’ll be sharing my screen audio so those who can hear can follow along, and everything on screen will still be visible for everyone else.

For me, hearing and reading at the same time slows things down just enough for me to catch mistakes and absorb what’s being said.

I’m not going to slow down my text-to-speech. It’s going to speak at a speed that I’m comfortable with. You might not be, and I apologize for that. I’ll use it as much as I need to and we’ll work from there.

This is a live build. Things will go wrong. That’s intentional.

You’ll see me correct the AI, ignore suggestions, delete things, and change directions throughout. That’s just part of how this works.

I’m not showing the best or cleanest way to build something. I’m showing the real way I get things done and eventually get to something that works.

If something breaks and doesn’t land, we’ll deal with it together and keep moving.

The important part for me is that I stay in charge.

The AI doesn’t decide architecture, priorities, or tradeoffs. It doesn’t know the constraints unless I explain them.

Sometimes it’s helpful. Sometimes it’s confidently wrong. Part of the job is knowing which is which.

I treat it like a fast junior teammate who’s good at patterns, bad at context, and needs supervision.

You don’t need to follow along or take notes. It’s fine to just sit back and watch me struggle.

We’ll do questions at the end if there’s time. You can always message me later if something comes up afterward. If we don’t finish the app in an hour, that’s fine too. I’ll finish it and share a link afterward.

All right. Let’s vibe code something.

## Early chat and document access issue

A Word document link was shared to provide live access to the AI responses.

Very quickly, a few people reported they could not open it.

### Audience comment

The shared document seemed to require permission to open.

### Response

You should have access. Did you click the link? ... Okay, let me fix the sharing.

A few participants confirmed that they could open it, while others could not at first. The permissions were broadened.

### Audience comment

The document works now.

### Response

Perfect. Good stuff. I switched it to everyone in SSC, so even the president can view it.

## Starting with ChatGPT

Right now I’m in the browser on ChatGPT. It’s my planning partner. You’ll see why in a bit — it’s why I really like ChatGPT.

I’ve created a prompt for this specific thing, but normally I don’t have a preset prompt. I just talk to it.

The prompt I pasted in was essentially:

- I’m doing a live coding demo right now
- I want to build a small web app
- The idea is a custom dice roller to play Dungeons & Dragons in the browser
- Use the stack you know I prefer
- Start by asking a few clarifying questions
- Then propose must-have features, nice-to-have features, and optional polish
- Keep it realistic for something that can be started in one hour
- Don’t generate implementation code yet
- Later I’ll ask for a GitHub Copilot prompt

I’m using the auto model setting in ChatGPT. I often forget which model is best for what, so I either ask ChatGPT which model I should use or I leave it on auto.

ChatGPT’s reply started with a long answer. Longer than I wanted.

One thing it didn’t do the way I expected was keep things short, even though in my custom settings I prefer clear, short, concise responses. That’s a fail for this run, but everyone forgets.

## Audience and app direction

The first planning question was who the app was for.

The choices included:

- just me, as a quick personal Dungeons & Dragons dice tool
- a Dungeon Master
- players
- beginners
- a portfolio/demo audience

I asked the room.

A suggestion came in to make it for a player because that would be easiest to understand.

A second thought came in immediately afterward to make it just for me, because then I could specify the kinds of things I actually like.

That made more sense for this demo, so I kept it focused there.

I then asked ChatGPT to keep the answers shorter as we planned.

The narrowed scope became:

- simple and practical
- die buttons plus quantity and modifier
- history panel included

## Chat reactions around planning

While this was happening, there were a few active side conversations in chat:

- some people commented on model preferences in GitHub Copilot
- some preferred Claude Sonnet for coding
- others commented that newer models had improved dramatically in the past couple of months
- a few people joked about ChatGPT being wordy
- someone said it always feels very meta to ask one large language model to write something to tell another large language model what to do

That last one was fair.

## Accessibility and memory as part of the planning

As the plan came back, one of the things I wanted to show was that ChatGPT already knew the stack I usually like to use:

- HTML
- CSS
- JavaScript
- Node.js only if needed
- GitHub
- Netlify
- Eleventy

I didn’t have to repeat any of that.

It also brought accessibility into the plan without me prompting it to do so. That mattered to me because it showed that prior context with the tool actually changes how the conversation starts.

I mentioned that this is one of the things that sold me on ChatGPT for planning work: it remembers the patterns of how I build and what matters to me.

## Turning the plan into a Copilot prompt

At that point I moved into the handoff moment.

Instead of translating the plan into GitHub Copilot instructions myself, I asked Brody to do it for me.

That generated a prompt for Copilot that included:

- plain HTML
- plain CSS
- vanilla JavaScript
- no frameworks
- accessibility expectations
- project file names
- version one requirements
- a request to explain where the logic lived

Again, accessibility was already in there. I didn’t have to restate it.

## Audience question: model switching and Copilot

A question came up about whether GitHub Copilot has ChatGPT integration or whether I was switching models as a technique.

My answer was that Copilot is the tool, but it can use different large language models under the hood. You can choose which one you want to use, or set it to auto.

I’m not an expert on all of those models. I’m still learning. This was meant to show how I work, not present myself as the authority on all of it.

## Spoken Content feedback

One especially useful comment came in from the interpreter’s perspective: being able to see the text while hearing how I used it helped show what the tool was doing and why it mattered.

That was one of the strongest validation points in the whole session.

## Switching into VS Code

Next I switched over to VS Code.

I created a new project folder inside my Git directory and opened it in VS Code.

I briefly showed the Explorer and the chat panel, where GitHub Copilot runs.

I pasted the prompt from ChatGPT into Copilot and let it start working.

Copilot explained that it was going to scaffold the requested files and build a clean version one in order: HTML, CSS, JavaScript, then a review pass for accessibility.

It created:

- `index.html`
- `styles.css`
- `script.js`

Then it ran a small accessibility review and made one improvement to the live region so the full expression, rolls, and total would be announced more consistently.

## Audience question: could it look like actual dice?

A question came in asking whether the app could look like actual dice or use image output.

I said not for this version. That kind of visual polish takes longer.

I mentioned that on an earlier project I had gone farther with icons and more game-like visuals, but for this session the goal was to show the process, not build a polished game interface.

## Looking at the generated app

Once the files were created, I opened the app in the browser.

It was a very simple interface:

- choose a die
- choose quantity
- add a modifier
- roll
- see the total and details
- view roll history

That was enough to prove the workflow.

I also briefly inspected some of the generated markup and asked a follow-up question about whether `type="button"` was really needed on the buttons.

Copilot explained that it wasn’t strictly required in the current structure, but it was still good practice and future-proofing.

That kind of small question is typical of how I work: check something, ask about it, confirm whether I care enough to change it.

## Git and committing

From there I asked Copilot to initialize git and make the first commit.

It did that.

Then I asked for one small style change: make the roll button green.

It applied the change, and I asked it to commit that too.

The point here wasn’t that I couldn’t do those things myself. It was that I was offloading the repetitive setup and staying focused on the direction of the work.

## Audience question: MacOS Shortcuts

While Copilot was working, a question came up about building things that integrate with MacOS Shortcuts.

My answer was basically that I don’t know enough about Shortcuts specifically to give a polished answer on the spot.

But I explained that this is exactly the kind of question I would throw at ChatGPT first, because it already knows:

- I use a Mac
- I use an Ubuntu server
- I homebrew
- I cook
- I work with web projects
- I have certain workflows and preferences

That context helps it suggest approaches that fit my actual setup instead of generic ones.

## Pushing to GitHub

The last live step was pushing the project to GitHub.

On my personal machine I usually let the tooling handle more of that automatically, often using the GitHub CLI.

On the work machine, that wasn’t available, so there was a small hiccup.

I created the repository manually, then used Copilot to help add the remote and push to GitHub.

It worked, and the repository was live by the end.

Later, I also shared the repo link in chat.

## Closing

I was moving quickly by the end, and I ran out of time for live questions.

I said I would share the recording, the transcript, the AI chats, and the repository afterward.

I also admitted afterward in chat that I forgot my closing line during the session.

That line was:

> Brody helps me think. Hunter helps me type. I stay in charge.

## Selected post-session chat discussion

After the live session ended, the chat kept going.

The main threads were:

### Tool access and licensing

There were questions about getting GitHub Copilot access through SSC and whether I should still be paying out of pocket.

### Voice, dictation, and privacy

A question came back about whether MacOS dictation or built-in AI voice input is better, and whether voice input has different privacy implications.

My follow-up was that I don’t really use dictation. I do sometimes use ChatGPT voice chat, but I still prefer typing so I can read my thoughts before sending them.

A note also came in that enterprise and freemium versions of AI tools can behave very differently when it comes to training and privacy.

### Using ChatGPT in a government environment

A question came in about whether there are limits on using ChatGPT for work planning in a government environment.

My response was that I would not put protected information into any of these tools, and that the information I use in planning with them is non-protected.

There was also a follow-up pointing out that access patterns can vary depending on network and environment.

### Training on data

There was a discussion about whether paid versus free AI tools train on user data.

One view shared in chat was that paid GitHub Copilot through an enterprise-style setup should not train on user data, while free versions generally do.

### Bigger-picture AI discussion

After that, the chat drifted into a much broader debate about privacy, trust, training, education, environmental impact, and whether AI is a breakthrough or a problem.

That conversation was interesting, but it was clearly beyond the scope of the demo itself.

## Final note

A link to the shared ChatGPT planning conversation was posted later in chat.

That, along with the GitHub repository and the other materials from the session, forms the real record of what the talk was about: not perfect outputs, but a transparent look at how I actually work with these tools.

## Related materials

- [Talk overview](/talks/vibe-coding-2026/)
- [Session transcript](/talks/vibe-coding-2026/transcript/)
- [Talk script](/talks/vibe-coding-2026/script/)
- [AI chat transcript](/talks/vibe-coding-2026/ai-transcript/)
