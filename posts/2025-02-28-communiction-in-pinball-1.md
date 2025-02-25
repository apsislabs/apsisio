---
layout: post
author: joey
title: How Pinball Communicates with You
image: 'TODO' // A stock pinball machine
excerpt: TODO
date: 2024-11-27
---
Something people learn about me very quickly with little provocation is that I love pinball. It only seems fitting that I introduce myself in the Apsis Labs blog by rambling about my primary hobby for the last 7 to 8 years. It took probably 6 hours of writing this before I came to the realization that I was had way more to say on this subject than most people would care to read in one sitting. Instead, I've decided try to trick you into coming back for more.

# Information in Pinball
Many people's most notable interaction and understanding of pinball is the most famous piece of pinball media: Pinball Wizard. Listening to this song will tell you that the flashing lights and bells and chimes are all just distractions (and obviously that a keen sense of smell is key). If you go back to the era when *The Who* first performed their hit single in 1969, this would be somewhat true (minus the smell part). Yet even back then there was a method to the madness. If you pay attention to the sounds of the machine, the tone of the chime indicates how many points you just scored (10, 100, or 1000), and if you count each ding, you'd know your whole score without looking up. The lights on the playfield typically give you good feedback on places to shoot for bigger points. Almost everything on a pinball machine provides feedback for the player, but let's focus in on an overview of the one of the most visually obvious advancements over the years and how designs have created and solved their UX problems.

## EM[^Blah] Backglass Display
### The Basics
Pinball needed to start solving the user experience problems before it was cool. The first personal computers started coming out in the late 1970's at around the same time when pinball machines started to incorporate digital memory to replace entirely mechanical operation. The early days were simple times (visually at least). The score clicked up by 10, 100, 1000, or maybe even 10000 points at a time on physical reels. During the game and after the game, the one or more players can see the score updated right away. You might think I couldn't find any more to say about that. You might also realize that my previous sentence sounds too smug for that to be the case.

### Rolling a Machine[^dontflipmebro]
It turns out that early pinball machine designers underestimated how much time players might put into developing their pinball skills[^Mods]. It is not an uncommon occurrence for a player to achieve a score that exceeds the highest score the reels can show. When this occurs, the player is said to have rolled the machine. During solo play, this is just a fun quirk of the game. During tournament play, this requires active management by a player to call out the situation before a roll occurs and competitors can recognize that an extra 100,000[^whatever] should be reflected in the final score.

This problem was met with a band-aid solution on some machines, to add an extra "1" light that activates in the 100,000 spot when the score reel rolls. Of course, in rare circumstances this might still not be enough[^greedyscorerules]... but, I think it's assumed that if you made it this far you know how to handle the situation.

### Score Layout
Following established standards is generally the best way to clearly communicate information. The most stereotypical layout is a grid pattern: top row P1 P2, bottom row P3 P4. As long as you know which number player you are, you can get all the information that you need with a quick glance[^ which is often all the time that you have when balls are flying everywhere]. Monitoring for machine rolling is one example of why you'd be tracking your score mid-game. Another example is determining if your close to catching up to the leader and should use a conservative strategy or if you are still far off and it would be worth pursuing a more risky but rewarding strategy.

Examples of experiments with this layout span this whole overview, but for EM machines we'll look at our first case study: *Fireball*. I know that you're mind went straight to whisky, but this is an iconic game by the manufacturer *Bally*. The EM version of the machine featured a  This is a case where deviance from the standard did not hamstring the machine, but I will point out that the re-release in the Solid State Era included a standard grid configuration of scores. 


## Early Solid State
There were a few notable advancements for communication in the early solid state era of pinball.

The 7-segment display to show scores may not seem like a big change from the mechanical reels in a practical sense, but it turned out to have greater applications than displaying the score during the game. One new feature enabled by this[^3] was saved high scores[^4]. Now it didn't need to be just you and your friend that know about your high scores. Instead everyone would see your score as the one to beat. This also enabled a digital settings menu. Electro-magnetic machines had a few settings that could be modified by moving pins around, but they were very inconvenient to access and limited by available space and complexity.

I have a hard time resisting a tangent, but back to the topic of the machine communicating mid-game, this digital display allowed displaying text to the player. Even in these early stages, it was established that the display should only display important/useful information when the ball is stopped after hitting a feature that holds onto the ball. This means that the player can look up and trust that they won't lose the ball while reading. Examples of the types of info in this category might be a mystery award[^5] or a prompt to shoot a specific shot. Some messages still are displayed on the fly, but they tend to be about minor progress for objective, increased bonus or jackpot values, or other flavor text.

## DMD[^8]
DMDs were a huge advancement in the player interface. It allowed what would seem to be an endless array of possibilities to dazzle the player with fancy cut-scenes and celebrations of achieved objectives. The bread and butter of the DMD display looks pretty similar to the Early Solid State setup. With up to 4 players the scores get laid in player order top right, top left, bottom left, and then bottom right. This view allows seeing all 4 scores at once. In tournament play, this is the particularly useful on the last ball and for the last player, since once they've taken 1st place they'll generally stop playing, to keep the tournament moving. There are some games that sometimes spend an extended period in animations, leading to some situations where it's not clear who's in the lead due to ongoing animations. Players often enter a state of very careful handling of the machine, due to a fear that a tilt would make a different in who comes out ahead.

DMDs allowed much more text on the screen at once, enabling text based descriptions of modes[^12] 

## LCD
DMDs eventually ended up in color, but the next real shakeup was LCD screens. With several orders of magnitudes more pixels to work with, LCD screens were another opening to shake up display behaviors. Instead of the classic grid of scores that I described, in game the scores occupy the very bottom of the screen. Personally I find this development logic and useful, freeing up space for more information to be present on the rest of the screen. The current player's score blinks if they haven't started their ball yet and is typically larger than the other scores.

There is related innovation that I'm going to go all grumpy old man on[^9]. Assume 5 slots on the bottom of the screen. The middle one is larger than the others. The scores get re-arranged each time so that the current player's score appears in the middle. The current player's slot says something to the tune of "Player Up". This results in a violated expectation that the order of scores is sequential with the player number. The value add is dubious at best: you as the current player will always know which number is your score during your ball. My analysis of this failed innovation is that a major change in information is accompanied with only a minor change in layout, which leads to a loss in clarity at a glance.

I'd be amiss to not call out the other problem that resulted from massive screen real-estate. With much space, comes much filled space. Lots of information packed onto a screen means that finding the very specific information that you're looking for becomes harder. The info that's ending up all stuffed in an LCD screen, is info that used to live somewhere on the playfield. Either very central (typically general mode progression)

Related to the DMD "problem" of ongoing animations during play, modern machines spend even more time showing clips from movies for small interactions on the screen. A key example of this is Jaws. I looked up a stream of gameplay for Jaws, and it was in an animation for probably 90% of the time I was watching. I quote problem here since it's a question of use case. During competition, it's a small problem that you need to potentially change how you play the game to simply know what your score is in certain situations. However, for casual players, players grinding it out for high score, and for most of the time during a tournament it's a non-issue. This is a case where the value added seems worth it. The scenes from whatever movie the game is themed after[^10], add to the experience when you do get to see them, and if you don't see them while you're playing, you hear them and then you see them when others play.



[^1]: When I included these the post would have been a 30 minute read.
[^2]: That's right, flippers were first introduced in 1947 on the pinball machine "Humpty Dumpty". Before then, machines only had the initial ball launch and "nudging" the machine as ways to interact.
[^3]: Writable memory was also essential for this.
[^4]: Starting around the mid-80's 16 segment displays made initialling your high score possible.
[^5]: An award that might be simply points, but could also be an extra ball, a lit jackpot, or a lit hurry-up[^6]
[^6]: A jackpot on a timer, that probably goes down in points the longer you take to hit it before expiring entirely.
[^7]: Callouts are an informational sound-byte. Early machines were more direct, for example Eight Ball Deluxe (1984) "Shoot the eight ball". Later machines have callouts that are more themed, but still give relevant information. For example, on Lord of the rings, each time you collect a party member, they speak a line from the movies.
[^8]: DMD stands for Dot-Matrix-Display. A clearer way to say this in today's vernacular would be Very-Big-Pixels.
[^9]: And based this being reverted on the most recent new machines, the grumpy old men (a key demographic of pinball) were heard!
[^10]: Pretty much all pinball machines are either movie themed now, a token few are band themed.
[^11]: and 3. hit the shots!
[^12]: A "mode" in pinball, is a particular set of rules that is temporarily activated to allow the player to score big points. Though different, they could be conceptualized as similar to levels in a video game, but accessed in a random (ofter randomized by the pop-bumpers[^13]) or chose-able order.
[^13]: Mushroom topped bumpers that bound the ball away quickly and are often placed in groups of 3 somewhere on the playfield.

## Potentially remove this or save it for another article
First off, let's make it clear that I'm only talking about *flipper* pinball. Pre-flippers, pinball existed in a simpler form where the only action by the player was a pull of the ball launcher (and maybe bump the machine without the shop owner noticing). This era of pinball may give some clarity on the name; the game looked largely like plinko though with more creative placement of exit holes.

