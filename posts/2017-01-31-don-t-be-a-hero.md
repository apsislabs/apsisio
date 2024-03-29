---
layout: post
author: wyatt
title: Don't be a Hero
image: '/img/posts/hero.jpg'
credit: Henry Hustava
date: 2017-01-31
---

Last month, Noah and I performed what is commonly called an act of heroic programming: We had a demo due, and we stayed up until 4 am --- 2 nights in a row --- to finish the work. We came out the other end bleary eyed, but triumphant; the demo was on time, the client was happy, and some might have expected us to celebrate.

Instead, we went into our weekly debrief somber, apologetic, and ready for a post-mortem. Why? Because while it's called heroic, our actions were bad for our health, bad for our codebase, and bad for business. After our late nights, we spent hours refactoring code that should have been written correctly the first time. Besides the additional work, our code quality suffered across the board because we were burnt out, and we'd set a bad example for the rest of our team.

At Apsis, one of our core philosophies is simple: don't be a hero. Here's why.

### A Hero Needs a Villain

> "More projects have failed through the insufficiency of Heroic Programming than from any other single cause." --- Ron Jeffries

Heroics can only happen when the day-to-day process has failed. Whenever someone stays up late, works extra hours on the weekend, or rushes last minute to deliver, it means somewhere along the way, someone did something wrong. Really wrong. In our experience, there are three primary reasons the process breaks down.

#### We failed to adequately set expectations around delivery

Whether it's to a client or to internal higher ups, every developer (every human, really) is guilty of over promising. In freelance work (which is essentially what Apsis does), this can happen for any number of reasons, but at Apsis, this usually plays out as a miscommunication: what we think we've promised doesn't match what our client expects us to deliver. While sometimes this happens because we fail to clearly communicate our intent --- usually by using jargon our client doesn't fully understand --- most frequently this is a sign of feature creep: adding requirements mid project means features are more likely to go undocumented, which increases the likelihood that the feature will be overlooked during development.

In theory, this problem can be avoided with good project management practices that are rigorously enforced. In reality, every project both large and small sees changes to scope and features throughout its lifecycle. When we find ourselves rushing at the last minute, the first place we look to find our mistake is our project requirements. Did we communicate our intent clearly, succinctly, and in line with our client's expectations? If not, how could we have better explained what was feasible to deliver? If so, what was the cause of the disparity in understanding?

#### We underestimated the problem's complexity

Software engineers are frequently asked to estimate the difficulty of a task, usually with incomplete or inadequate information. As engineers, part of our job is to draw on prior experience to accurately gauge the difficulty of a problem --- the same way we might give a rough estimate of algorithmic complexity. In almost every case of last-minute engineering, we're guilty of underestimating the difficulty of a problem.

When it comes time to evaluate what we did wrong, and what we could have done to avoid an all-nighter, we have to address whether we missed our mark because we lacked information up front, or because we _wanted_ the project to be simpler. In cases where we intentionally underestimated because we wanted to hit a certain timeline or budget, we have to answer the question why? If, instead, we lacked the information up front to make an accurate estimate, what additional information could we have gathered? How could we have incorporated the unknowns into our estimation to improve accuracy? Noah has written extensively about the process of software estimation, and problems here often are the result of bad preliminary work.

#### We inadequately managed our time and resources

In other cases, the problem is one of management --- either personally or as a team. In many cases, failings here are problems of ego or pride. We choose not to delegate or ask for help from our team because we're worried that we will be perceived as not holding up our own weight.

We often talk about what it means to be productive, and that part of being a responsible member of a team (any team), means sometimes letting others handle more than their fair share, just as some weeks you might handle more than your own. I think there's a tendency to view hours worked as a finish line --- that every hour you put in is the same, across the board. It's tough to recognize that some hours are more productive than others, and that some weeks you might achieve as much in an 8-hour day as you did the entire previous month. Admitting as much isn't a weakness, but a strength, and one that helps build strong teams.

Often when we're running late on a project and have to go into "crunch time," it's because somewhere along the way, we failed to admit to ourselves that the amount of work being asked wasn't the amount of work we were capable of delivering. When we're evaluating our failures here, we need to ask ourselves why we didn't ask for help earlier. If we acknowledge our own limitations, we should be able to catch these problems well before they require heroics. Something as simple as telling the team on Monday that your spouse is working late most days this week and your productivity may slip this week can help others step up, and avoid a disaster that drags the whole team's productivity down.

### No More Heroes

All three of these issues are related, and every act of engineering heroism likely is in part because of all three. It's tempting to think that with the right approach, crunch time can be eliminated completely --- and in many ways it can. Good project management, responsible developers, and a trusting team that works well as a unit all reduce the likelihood of an all-nighter. But even as we've become better at spotting the warning signs of an impending act of developer heroics, we've also realized that, as with all complex challenges, it's unlikely we'll ever eliminate them fully.

Instead, we've come to understand that --- in the immortal words of GI Joe --- knowing is half the battle. Our best tool for avoiding the problems caused by crunch time is our post-mortem process, where we document when and how our process went wrong. Sometimes, we're able to identify an actionable solution, while other times we realize we were caught in a perfect storm of small mistakes and unexpected sick days.

In all cases, however, we know we're better off in the long-term having done what we can to push back against a culture built on Heroes.

---

### Post Script: Eyes Wide Open

After talking through a rough draft of this post with Noah, he suggested that I add a section on what he calls the "Eyes Wide Open" scenario for crunch-time heroics. That is, a situation where we explicitly take on a crunch-time project for what we collectively agree is a good reason. Or, as he puts it "making an intentional and short-term trade off after explicitly evaluating the benefits and drawbacks."
