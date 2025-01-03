---
layout: post
author: wyatt
title: Be easy to fire
image: '/img/posts/fire.jpg'
credit: roya ann miller
excerpt: |
  At Apsis, we're not afraid of being let go &mdash; in fact, we want it. Our goal is to help clients grow and succeed, and eventually move on. We operate on simple principles: transparency, simplicity, and clear communication. When it's time to say goodbye, we're here to make the handoff smooth and seamless.

date: 2024-11-25
---

It’s not hard to find stories of agencies and freelancers getting screwed over by clients. Happens all the time, if you believe the internet. The problems run the gamut: clients who refuse to pay, constantly change scope, demand more than was initially expected. Sometimes these stories are sad, some are funny, some infuriating. The responses to these issues are similarly broad ranging from reasonable to [less](https://github.com/wmellema/FuckYouPayMe) [reasonable](https://github.com/kleampa/not-paid).

I get it. After a decade of running an agency, I’m very aware of the risks every new client brings; how much work goes into dismissed proposals; the anxiety of asking for payments that are already months late.

But I’ve got sympathy for our clients, too. Often we are working with small fish in small ponds: new startups, sole-proprietorships, good people earnestly trying to launch a good product. And the thing about small fish is (to stretch a metaphor) there are a lot of predators. I know that finding a good dev is hard. For every great agency or gifted freelancer, there are a dozen more who overpromise, underdeliver, or just ghost a project unfinished. A lot of our clients are paying agency developers precisely because they lack technical expertise, and that means they often lack the tools to gauge who can be a trusted partner or not.

I know Apsis has been incredibly lucky over the years, but I think part of that luck is because we put in the work to build long-standing, collaborative relationships, and a big part of that comes down to one of our core principles as an agency: **be easy to fire**.

**Why Do We Want to Be “Easy to Fire?”**

We’re contractors, which means our client relationships really only ever end one way. We’re here to help our clients get started, build a foundation, and grow. Our favorite story is when our clients graduate from Apsis: our work helps our customers grow successfully and it’s in their best interest to bring development in-house.

That’s actually the goal of most of our projects: give clients a stable, scalable platform and then help set them up to move on without us. Over the years we’ve helped many of our clients hire our own replacements, and in part because of this smooth handoff, we’ve built a healthy stable of Apsis “alums” who continue to refer us to new opportunities even years later.

To make handoff (n.b. being fired) successful, we have a set of standards we stick to. At its core, our work is focused on transparency, simplicity, and clear communication. That way, when it’s time for us to take off, there’s minimal friction between us and our clients. By sticking with industry standards, well-supported open-source solutions, and client ownership, we make handoff simple.

**Our checklist**

But what does that mean, Wyatt? I know you’re dying to know, if you’re going to fire me what does that look like? Don’t worry: I’ve got a checklist.

1. **Clients own everything.** Every tool we use — from source control to Slack to AWS — is set up under client owned accounts. Every API key, every secret token, belongs to the client — not to Apsis. This might seem small, but in the end, it can mean everything. We’ve had to rebuild mobile apps from scratch because the prior freelancers wouldn’t fork over the keyfiles. We’ve had to sort through multi-day outages because the last agency turned off the SMTP server. Crucial code, important secrets: these are yours, not ours. **You’ll never be stuck with us because we know the password and you don’t**.
2. **Everything Runs on CI.** If it’s integral to testing or deploying your application, it must run on a remote server through some kind of continuous integration (CI) pipeline. We don’t care if that’s GitHub actions or a jenkins server running in *your* basement, it just can’t be dependent on the hardware we own. If the deployment story is “own Noah’s laptop” that’s a problem. Standardizing our approach to testing and deployment not only means we’re never the bottleneck, it also means you’re not dependent on us for critical updates.
3. **Boring Tech, Reliable Results.** When my parents ask what I do for a living (you’d be surprised how often this question comes up, even a decade on), I like to tell them I’m basically a plumber. It’s not flashy work, what we do: stick to well-supported, widely used technologies. As a consequence, a lot of what we recommend might look very “2020” — hell, it might look very “2016” — but these are tried and true tech stacks that are easy for other developers to pick up. Before we recommend anything, we ask ourselves: how easy is it to find other developers who are experts in this technology, and will this technology still be supported five years from now? **You’ll never be stuck with us because of our super secret proprietary framework**.
4. **Help Say Goodbye.** When it’s time to hand over the reins, we’re here to make it as smooth as possible. Whether that’s helping with hiring or spending unbilled time explaining the codebase to a new team, we’re here to help. It’s simple: answer questions, be kind. You never know when a client might need devs again, and we want that to be us.

We love what we do, and we’re always on the lookout for exciting new projects. We’re here to help at every stage from startup to scale. If you’ve had a rocky experience with a dev agency before, let’s talk — we’d love to be fired by you someday.
