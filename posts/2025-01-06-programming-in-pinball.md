---
layout: post
author: joey
title: A History of Programming in Pinball
image: 'TODO' // A stock pinball machine
excerpt: TODO
date: 2024-11-27
---
Something people learn about me very quickly with little provocation is that I love pinball. I only seems fitting that I introduce myself in the Apsis Labs blog by rambling about my primary hobby during the last 7 to 8 years.

Every creative soul who upon learning about my hobby immediately asks if I'm a pinball wizard knows that the flashing lights and bells and chimes are all just distractions. And if you go back to the era when The Who first performed their hit single in 1969, this would be somewhat true; however, even then there was a method to the madness. If you pay attention to the chimes, the tone of the chime indicates how many points you just scored. The lights on the playfield give you good feedback on places to shoot for bigger points. Almost everything on a pinball machine provides feedback for the player.

First off, let's make it clear that I'm only talking about *flipper* pinball. Pre-flippers, pinball existed in a simpler form where the only action by the player was a pull of the ball launcher (and maybe bump the machine without the shop owner noticing). This era of pinball may give some clarity on the name; the game looked largely like plinko though with more creative placement of exit holes.

Pinball programming for about the early years of pinball's existence was accomplished entirely with circuits and physical mechanisms. You could consider these early machines to be analog computers. Instead of storing the score in bits to display on Dot Matrix Display (DMD), a mechanical wheel receives an electrical impulse to turn updating the score for the player to see. Instead of a "drum" turning 

My 1972 Gottlieb "Fan-Tas-Tic" recently started on fire (don't worry it went out very quickly). A fuse blew preventing catastrophe and I was able to locate the solenoid[^1] that had been overloaded. It was very clearly fried and in need replacing, but doing so had not fixed the fuse problem[^2]. This lead to me learning quite a lot about pinball circuitry to try and locate the short circuit that was occurring. The old schematics (circuitry diagrams) that I found online were something to behold (and super overwhelming at first). However, as much as it's a totally different skill set, it does begin to make sense in the context of modern day programming.

You can see circuits to handle conditions (if the light is lit double the input to the score motor), circuits to loop (score 1000 bonus points for each time it has been advanced so far), and circuits that look a bit like functions (if the ball drained, advance to the next player, advance to the next ball if you're advancing). And the wires in the machine are all color coded based on the schematics, but similar to outdated comments in updated code, some of the wires have been replaced with different colored ones over time. The biggest difference is that your stack overflows blow fuses and if you're not too careful you could electrocute yourself.

Wire and solenoids to convert electronic signal to physical action from the electro-magnetic (EM) era of pinball continue to be integral today, but in 1975 the first solid-state pinball machine (SS) was released, which marked a rapid shift toward digitalization of other aspects of pinball. Early solid-state pinball machines used ROM to store game rules, sounds and state with static RAM (SRAM)[^3].

This one change opened a world of possibilities, which were quickly capitalized on by manufacturers. SS machines are identifiable by their 7-segment display[^4] to display scores. Electronic sounds became possible. Customizations for the game were made digital enabling a larger number of options. But most importantly the amount of space to store game logic and state was shrunk down dramatically. This made it possible for manufacturers to release bugfixes and updates[^5] for machines that had already been produced by swapping out the ROM chip. The code at this point was in essence a miniaturization of the circuits that we talked about for EMs.

One of the first pinball unique challenges we can talk about comes in here. Enabled by the digital state management, the physical playfields got increasingly populated and complicated. Any child can tell you that more places to hide makes hide-and-seek much more fun; unfortunately, in the context of pinball, the extra places for a ball to hide outside the normal flow of the game can cut short a fun time. Thus a need for an automated ball search was met in 1996. The general idea is that all the places for a ball to might be stuck or lost should be fired to move and hopefully free the ball back into play. But implemented poorly, this could cause a whole host of problems.

Let's consider *all* reasons for a stuck ball.

The ball is stuck on a feature[^7]. This is the main reason that a ball search will help. This is the naive case that's easy to cater to. Just look at the playfield, what move's? Make each thing move, probably with a slight offset in time for features that are close to each other. Repeat this a few times with a delay. Of course, sometimes the ball may still be stuck...

The ball is somewhere entirely off the playfield and not a feature. It's almost definite that a ball search won't help in this case. It's also unlikely that the ball will come free if the player were to continue playing with a different ball. So the solution for uninterrupted play with the average player is, after repeating the search a few times, simply provide a fresh new ball to the player. This does add a disadvantage to a player during a multi-ball that would otherwise use all the balls contained in the machine.

The ball is stuck somewhere with no nearby features, but still on the playfield: it's possible that the vibrations from a ball search will free the ball, but not likely. Realistically this will need the player to shake the machine to get it out. Most players will instinctively shake out this sort of stuck ball if visible, but sometimes it happens out of obvious sight. This sort of stuck ball causes problems with the last solution we decided on. If another ball enters the playfield, that ball will likely be hit by the new ball and come free. You now have two balls in play when you should have had 1. There is no way for the machine to know that this is the case. So you are now in the midst of a death multi-ball. If you lose either ball, your turn will end and the other ball will be forced to drain.

The ball was "lost", likely by a ball lock switch malfunctioning, or by hopping the drain switch. These two positions are valid places for the ball to be, so the best solution for these is good playfield validation. The machine should notice that there's a new ball in the drain trough and correctly end your ball if the drain switch was hopped. Ideally this happens in real time. If the ball ends up in a lock and the switch is faulty, we have another recipe for a death multi-ball.

In the end 

In 2003, the first pinball machine with flash memory storage was released. Similar to the step from circuits with mechanical memory, this was a new huge new step forward for pinball machine capabilities.



[^1]: A solenoid is coil of wires with a metal rod in the center. When current is sent through a solenoid's wire, it creates a magnetic field that drives the rod in a direction converting electricity into mechanical action.
[^2]: I found another problem solenoid to fix, but the machine still couldn't even turn on without blowing a fuse. I think I blew 7 of them before I called in the big guns. It took the pinball repair specialist another 6 hours to find that a component that had developed a pit, causing it to not turn properly.
[^3]: Static RAM requires constant power low-level power to hold its memory and is more expensive that dynamic RAM, but it's significantly more simple to work with. Imagine a latch that is open or closed as long as power is holding it there.
[^4]: Picture an old calculator.
[^5]: Talk about a long compilation process https://xkcd.com/303/.
[^6]: Examples include: Number of balls to play, cost to play, replay scores, and game volume.
[^7]: By this point in pinball's history, in addition to flippers and spinners there are gates that open and close to redirect, locking mechanisms to hold a ball for later multi-balls, and "toys" that may be protracted/retracted/lifted/lowered. These could all be considered a feature.