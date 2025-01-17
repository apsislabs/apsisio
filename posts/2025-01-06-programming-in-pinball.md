---
layout: post
author: joey
title: A History of Pinball Tech Part 1,2,3
image: 'TODO' // A stock pinball machine
excerpt: TODO
date: 2024-11-27
---
Something people learn about me very quickly with little provocation is that I love pinball. I only seems fitting that I introduce myself in the Apsis Labs blog by rambling about my primary hobby during the last 7 to 8 years. In writing this, I've realized that there's a lot more to tell about the advanc

Every creative soul who upon learning about my hobby immediately asks if I'm a pinball wizard knows that the flashing lights and bells and chimes are all just distractions. And if you go back to the era when The Who first performed their hit single in 1969, this would be somewhat true; however, even then there was a method to the madness. If you pay attention to the chimes, the tone of the chime indicates how many points you just scored. The lights on the playfield give you good feedback on places to shoot for bigger points. Almost everything on a pinball machine provides feedback for the player.

First off, let's make it clear that I'm only talking about *flipper* pinball. Pre-flippers, pinball existed in a simpler form where the only action by the player was a pull of the ball launcher (and maybe bump the machine without the shop owner noticing). This era of pinball may give some clarity on the name; the game looked largely like plinko though with more creative placement of exit holes.

Pinball programming for about the early years of pinball's existence was accomplished entirely with circuits and physical mechanisms. You could consider these early machines to be analog computers. Instead of storing the score in bits to display digitally, a mechanical wheel receives an electrical impulse to turn, updating the score for the player to see. Instead of a simple variable, advancing the bonus quite literally advanced a mechanical bonus reel by a notch. Once the time to count the bonus comes, a drum spins counting down backwards the notches as they are released. Digital variables seem so much more simple!

My 1972 Gottlieb made machine, "Fan-Tas-Tic", recently started on fire (don't worry it went out very quickly). A fuse blew preventing catastrophe and I was able to locate the solenoid[^1] that had been overloaded. It was very clearly fried and in need replacing, but doing so had not fixed the fuse problem[^2]. This lead to me learning quite a lot about pinball circuitry to try and locate the short circuit that was occurring. The old schematics (circuitry diagrams) that I found online were something to behold (and super overwhelming at first). However, as much as it's a totally different skill set, it does begin to make sense in the context of modern day programming.

You can see circuits to handle conditions (if the light is lit double the input to the score motor), circuits to loop (score 1000 bonus points for each time it has been advanced so far), and circuits that look a bit like functions (if the ball drained, advance to the next player, advance to the next ball if you're advancing). And the wires in the machine are all color coded based on the schematics, but similar to outdated comments in updated code, some of the wires have been replaced with different colored ones over time. The biggest difference is that stack overflows blow fuses and if you're not too careful you could electrocute yourself.

# Solid-state Era

Wire and solenoids to convert electronic signal to physical action from the electro-magnetic (EM) era of pinball continue to be integral today, but in 1975 the first solid-state pinball machine (SS) was released, which marked a rapid shift toward digitalization of other aspects of pinball. Early solid-state pinball machines used ROM to store game rules, sounds and state with static RAM (SRAM)[^3].

This one change opened a world of possibilities, which were quickly capitalized on by manufacturers. SS machines are identifiable by their 7-segment display[^4] to display scores. Electronic sounds became possible. Customizations for the game were made digital enabling a larger number of options. But most importantly the amount of space to store game logic and state was shrunk down dramatically. This made it possible for manufacturers to release bugfixes and updates[^5] for machines that had already been produced by swapping out the ROM chip. The code at this point was in essence a miniaturization of the circuits that we talked about for EMs.

Of course, assembly language is an upgrade over basic 

One of the first pinball unique challenges we can talk about comes in here. Enabled by the digital state management, the physical playfields got increasingly populated and complicated. Any child can tell you that more places to hide makes hide-and-seek much more fun; unfortunately, in the context of pinball, the extra places for a ball to hide outside the normal flow of the game can cut short a fun time. Thus a need for an automated ball search was met in 1996. The general idea is that all the places for a ball to might be stuck or lost should be fired to move and hopefully free the ball back into play. But implemented poorly, this could cause a whole host of problems.

Let's consider *all* reasons for a stuck ball.

The ball is stuck on a feature[^7]. This is the main reason that a ball search will help. This is the naive case that's easy to cater to. Just look at the playfield, what move's? Make each thing move, probably with a slight offset in time for features that are close to each other. Repeat this a few times with a delay. Of course, sometimes the ball may still be stuck...

The ball is somewhere entirely off the playfield and not a feature. It's almost definite that a ball search won't help in this case. It's also unlikely that the ball will come free if the player were to continue playing with a different ball. So the solution for uninterrupted play with the average player is, after repeating the search a few times, simply provide a fresh new ball to the player. This does add a disadvantage to a player during a multi-ball that would otherwise use all the balls contained in the machine.

The ball is stuck somewhere with no nearby features, but still on the playfield: it's possible that the vibrations from a ball search will free the ball, but not likely. Realistically this will need the player to shake the machine to get it out. Most players will instinctively shake out this sort of stuck ball if visible, but sometimes it happens out of obvious sight. This sort of stuck ball causes problems with the last solution we decided on. If another ball enters the playfield, that ball will likely be hit by the new ball and come free. You now have two balls in play when you should have had 1. There is no way for the machine to know that this is the case. So you are now in the midst of a death multi-ball. If you lose either ball, your turn will end and the other ball will be forced to drain.

The ball was "lost", likely by a ball lock switch malfunctioning, or by hopping the drain switch. These two positions are valid places for the ball to be, so the best solution for these is good playfield validation. The machine should notice that there's a new ball in the drain trough and correctly end your ball if the drain switch was hopped. Ideally this happens in real time. If the ball ends up in a lock and the switch is faulty, we have another recipe for a death multi-ball.

The solid-state era

In the end 

# Pinball 2000 - A Dead-end

There were 2 machines of a style named "Pinball 2000" that were intended to be an innovation and new inflection point for the direction of pinball during a time when arcade machines and video game consoles were taking over. Instead Williams halted development for these project the same year it was first released[7.1]. Revenge from Mars and Star Wars: Episode 1. These machines attempted to move one step further into merging pinball with classic arcade style games. They made use of a large CRT screen that connected to the playfield and attempted to hide the boarder between the two. Having played a copy of Revenge from Mars before, I can attest to this merging of realities; however, instead of immersion this results in mostly confusion (and anger[^7.5]).

There were a host of these problems: hardware problems, buggy software problems, UI problems, backward compatibility issues and (as with any large departure from a standard) problems with reception from the most devout pinballers. For this article, the most relevant aspect to look at is UI and software bugs, which happen to be closely linked in this situation.

As is the nature of something that's innovating and ground-breaking, brand new tooling needed to be developed. Since the merging of screen and playfield didn't have mature solutions to work with. Unsurprisingly, this lead large concentration of bugs in this interface. Even more damning, there were bugs at launch that prevented progressing through the deep rule set.

Previous (and future) machines use their display to give instructions to the player and provide supplemental graphics for enjoyment. The display is however not entirely pivotal for play. I recently participated in a tournament, where we covered all displays with a board and only uncovered when the game was over to find out the scores. It was a blast! Though importantly, I already know the rules for these machines, and was able to track progress with playfield indicators and counting shots. On the Pinball 2000 machines, the information that you successfully hit a shot, depends on the screen correctly conveying that info.

This was an early iteration of a problem that has become noticeable in newer LCD screen pinball machines as well---*too* much information shown at once. As with any cluttered UI, important information gets lost or is hard locate quickly in a fast paced game like pinball. With Dot Matrix Displays it was typical for the main object that you're following to dominate the display and most of the game state information about progression is kept in dedicated sections of the playfield. Moving this information to a screen that requires you to look away from the playfield and might have the information that you need hidden by graphics due to the current encounter was unprecedented at the time.

# Flash Memory

In 2003, the first pinball machine with flash memory storage was released. Similar to the step from circuits with mechanical memory, this was a new huge new step forward for pinball machine capabilities. The first benefit of this change is that it allowed very easy post-release code updates for the machine[^8]. This made possible the "deep game". Solid state built on simple beginnings and added more advanced rules. But this 



# Modern era
The modern era of pinball does not have player evident coding advances. Developers can use comfortable languages like C/C++ or hobbyists writing mods can even use a python wrapper to communicate with the system. One of the most noticeable aspects of modern machines is 

One of the shaping factors of the pinball manufacturing decisions now-a-days is the shift from pinball machines mainly existing in arcades to becoming collectors items. According an interview with Stern's CEO[^9] more than 70% of new machines purchased are now by consumers rather than enterprises. Some of these machines will end up in breweries and arcade bars instead of the home, but compare this to 1995, when less than 5% of machines were purchased by consumers. This has resulted in more design decisions to benefit the player over decisions to benefit someone collecting quarters.

Let's compare the ethos of one of my current favorite machines, Labyrinth (2023) versus White Water (1993). In White Water, one of the primary objectives is a shot into a whirlpool. After watching the ball spin around a funnel a few times, it sinks below the playfield. A few seconds later, the ball is spit out *hard* at your right flipper. This does evoke the theme of the machine, if you imagine a raft forced under the water suddenly *bursting* back up to the surface. Still in line with the theme is that it's difficult to be in control of your fate. Your reward for a successful shot is a sometimes impossible to save fast ball.

Now, consider Labyrinth. There is a shot---referred to as a U-turn---that when you hit it correctly, after a short loop it is directed to very near the center of the playfield right between the flippers. Instead of ending the ball and punishing the player, losing the ball this way (without delay) results in a ball save[^10]. In addition, there's a ball save mechanic in the left out lane. 

  you can imagine After this shot, the ball is fed out 


// Multiball difficulties
// Directionality
// Funness


[^1]: A solenoid is coil of wires with a metal rod in the center. When current is sent through a solenoid's wire, it creates a magnetic field that drives the rod in a direction converting electricity into mechanical action.
[^2]: I found another problem solenoid to fix, but the machine still couldn't even turn on without blowing a fuse. I think I blew 7 of them before I called in the big guns. It took the pinball repair specialist another 6 hours to find that a component that had developed a pit, causing it to not turn properly.
[^3]: Static RAM requires constant power low-level power to hold its memory and is more expensive that dynamic RAM, but it's significantly more simple to work with. Imagine a latch that is open or closed as long as power is holding it there.
[^4]: Picture an old calculator.
[^5]: Talk about a long compilation process https://xkcd.com/303/.
[^6]: Examples include: Number of balls to play, cost to play, replay scores, and game volume.
[^7]: By this point in pinball's history, in addition to flippers and spinners there are gates that open and close to redirect, locking mechanisms to hold a ball for later multi-balls, and "toys" that may be protracted/retracted/lifted/lowered. These could all be considered a feature.
[^7.1]: They weren't mad, just disappointed.
[^8]: This could be considered to be a negative as well. Similar to problems with modern video game companies releasing buggy, not ready games, in recent years, many machines have been released with a large number of game-breaking bugs and while the code is still quite incomplete.
[^9]: https://www.retailbrew.com/stories/2024/01/22/pinball-machine-maker-expands-with-rising-demand
[^10]: A ball save---typically occurring during the first 5 to 10 second period of a new ball or a multiball---is when the machine recovers a lost ball with no penalty to the player.