---
layout: post
author: joey
title: How Pinball Communicates with You
image: 'TODO' // A stock pinball machine
excerpt: TODO
date: 2024-11-27
---
Something people learn about me very quickly with little provocation is that I love pinball. It only seems fitting that I introduce myself in the Apsis Labs blog by rambling about my primary hobby for the last 7 to 8 years. It took probably 6 hours of writing this before I came to the realization that I was had way more to say on this subject than most people would care to read in one sitting. As a result, I've broken the topic down into some subtopics. 

# Information in Pinball

Many people's most notable interaction and understanding of pinball is the most famous piece of pinball media: Pinball Wizard. This song will tell you that the flashing lights and bells and chimes are all just distractions (and obviously that a keen sense of smell is key). If you go back to the era when The Who first performed their hit single in 1969, this would be somewhat true (minus the smell part). Even back then there was a method to the madness. If you pay attention to the sounds of the machine, the tone of the chime indicates how many points you just scored (10, 100, or 1000), and if you count each ding, you'd know your whole score without looking up. The lights on the playfield typically give you good feedback on places to shoot for bigger points. Almost everything on a pinball machine provides feedback for the player.

In fact, compared to some particular modes on more recent pinball machines, the lights on the machines on the oldest machines are mostly a complete non-issue. On Attack from Mars, released in 1995, there's a mode called "Strobe Multiball." A white flashing light, repeatedly and continuously blinds while you're bombarded with 3 balls to juggle. I can normally play through it in hopes of scoring an extra ball, but it's not an enjoyable experience. I've watched players in tournament games simply wait for the mode to end, watching from the corner of their eye.

A machine that took it too far, even for me, is Willy Wonka (2019). There is a mode on that machine where they show off every one of the colorful LED playfield lights with a cacophony of colors all fighting to be on display at the same time. Even worse, this mode happened while the rest of the modes remained the same, hiding the information about your best chances to score points. I always wait for this mode to end[^0 Cradle Ball] before continuing to play.

These types modes primarily hide information to add to the challenge. That information might be the location of the ball or the location of good places to aim at right now. As described above, sometimes this leads to a seizure warning.

## Evolution of information
Let's ignore the base technology advances over time, [^1] and just talk about how the communication from machine to player has developed to date.

### Electro-magnetic Era
The early days were simple times. Starting our journey way back, just after flippers became all the rage in the 1950's[^2]. These machines are the sort that I mention in the intro. The bells and chimes convey points with their tone. For instance, there's a 10, 100, and 1000 point tone, and for each ring, you know that you scored that many points. You may wonder how this is useful. Why would you care? Truthfully, for a casual player, this is nothing more than a fun-fact. But for me during competitions these sounds permeate my subconscious allowing me to track how close I am to overtaking another player's score without looking up. Do I need big points? I better shoot for the dangerous big points. Am I very close? Let's play it safe and grind it out. 

The lights on the playfield, these you should care about as a casual player. There's a phrase I hear often enough in the pinball community: "I'm just hitting the lit shots." Typically, if you don't a machine well, you can just follow the lit arrows, and you're going to find plenty of points. On the earliest machines, you will find that a spinner or a bank of targets might have a light in front of them. This often indicates as much as a 10x multiplier to points.

Lights on the playfield also began to convey game state information. Bonus count is a huge thing in these early machines. Fan-Tas-Tic (1970) counts the bonus up by 1,000 points at a time to 10,000. You can build your bonus with a few targets or you can try to shoot to spin a roulette wheel that may award 1x, 2x, or 3x bonus. The difference in excitement when your bonus is at 10,000 vs 1,000 is palpable. 

### Early Solid State
There were a few notable advancements for communication in the early solid state era of pinball.

The 7-segment display to show scores may not seem like a big change from the mechanical reels in a practical sense, but it turned out to have greater applications than displaying the score during the game. One new feature enabled by this[^3] was saved high scores[^4]. Now it didn't need to be just you and your friend that know about your high scores. Instead everyone would see your score as the one to beat. This also enabled a digital settings menu. Electro-magnetic machines had a few settings that could be modified by moving pins around, but they were very inconvenient to access and limited by available space and complexity.

I have a hard time resisting a tangent, but back to the topic of the machine communicating mid-game, this digital display allowed displaying text to the player. Even in these early stages, it was established that the display should only display important/useful information when the ball is stopped after hitting a feature that holds onto the ball. This means that the player can look up and trust that they won't lose the ball while reading. Examples of the types of info in this category might be a mystery award[^5] or a prompt to shoot a specific shot. Some messages still are displayed on the fly, but they tend to be about minor progress for objective, increased bonus or jackpot values, or other flavor text.

The real on-the-fly info-dump comes from sound. Many a pinball-collector will have a blast telling you about how Gorgar (1979) was the first machine where digital voices making callouts[^7] was possible. It had 7 words available to it, which could be combined in any order: Gorgar, Speaks, Beat, You, Me, Hurt, Got.

Callouts ubiquitous in pinball today, giving the player vital information in combination with what's on the display. This enables users to have a sense of what they've triggered or where they need to shoot without needing to look away from the action. In particular, they are incredibly useful for informing players of developments during a multi-ball. I don't think that there's any coincidence that around the time multi-balls were starting to be included with nearly every new release, voice call-outs also quickly took hold.


### DMD Solid State and onward
Staring with the DMD[^8] era, the experience of pinball machine communication becomes more of a straight line of development.

#### Display
##### DMD
DMDs were a huge advancement in the player interface. It allowed what would seem to be an endless array of possibilities to dazzle the player with fancy cut-scenes and celebrations of achieved objectives. The bread and butter of the DMD display looks pretty similar to the Early Solid State setup. With up to 4 players the scores get laid in player order top right, top left, bottom left, and then bottom right. This view allows seeing all 4 scores at once. In tournament play, this is the particularly useful on the last ball and for the last player, since once they've taken 1st place they'll generally stop playing, to keep the tournament moving. There are some games that sometimes spend an extended period in animations, leading to some situations where it's not clear who's in the lead due to ongoing animations. Players often enter a state of very careful handling of the machine, due to a fear that a tilt would make a different in who comes out ahead.

DMDs allowed much more text on the screen at once, enabling text based descriptions of modes[^12] 

##### LCD
DMDs eventually ended up in color, but the next real shakeup was LCD screens. With several orders of magnitudes more pixels to work with, LCD screens were another opening to shake up display behaviors. Instead of the classic grid of scores that I described, in game the scores occupy the very bottom of the screen. Personally I find this development logic and useful, freeing up space for more information to be present on the rest of the screen. The current player's score blinks if they haven't started their ball yet and is typically larger than the other scores.

There is related innovation that I'm going to go all grumpy old man on[^9]. Assume 5 slots on the bottom of the screen. The middle one is larger than the others. The scores get re-arranged each time so that the current player's score appears in the middle. The current player's slot says something to the tune of "Player Up". This results in a violated expectation that the order of scores is sequential with the player number. The value add is dubious at best: you as the current player will always know which number is your score during your ball. My analysis of this failed innovation is that a major change in information is accompanied with only a minor change in layout, which leads to a loss in clarity at a glance.

I'd be amiss to not call out the other problem that resulted from massive screen real-estate. With much space, comes much filled space. Lots of information packed onto a screen means that finding the very specific information that you're looking for becomes harder. The info that's ending up all stuffed in an LCD screen, is info that used to live somewhere on the playfield. Either very central (typically general mode progression)

Related to the DMD "problem" of ongoing animations during play, modern machines spend even more time showing clips from movies for small interactions on the screen. A key example of this is Jaws. I looked up a stream of gameplay for Jaws, and it was in an animation for probably 90% of the time I was watching. I quote problem here since it's a question of use case. During competition, it's a small problem that you need to potentially change how you play the game to simply know what your score is in certain situations. However, for casual players, players grinding it out for high score, and for most of the time during a tournament it's a non-issue. This is a case where the value added seems worth it. The scenes from whatever movie the game is themed after[^10], add to the experience when you do get to see them, and if you don't see them while you're playing, you hear them and then you see them when others play.

#### Callouts
There aren't really any changes of note after the DMD error when it comes to callouts, but this step is when callouts because truly a huge part of the game (in my opinionated opinion). Callouts filled a huge hole in this era's machines to resolve competing information. One of my go-to examples for this is Lord of the Rings. There are three different multi-balls that you can start and 6 primary modes. When you start a mode and then a multi-ball, you can still progress then mode. There's a big "but" here though. The arrows on the machine are dominated by your active multi-ball's required shots, which means that you need to 1. memorize the sequence of shots that you hit 2. keep track of which shots that are registered to know where you are in the sequence[^11]. This is really only possible due to the callouts (and maybe a quick DMD animation if you're feeling brave enough to look up).

The opposite problem exists on other machines. You start a mode and a multi-ball, and all the shots that could be lit up are. But which ones are for the mode and which are for the multi-ball? You can find out (after a successful shot) by the callout that you hear. This is less helpful in sense that you have less clarity about which shots are for the multi-ball, however it gives you an idea of everywhere that might be good to shoot at, so all-in-all it's probably a slightly better solution.

It's worth noting that for an inexperienced player or an experienced player playing a game for the first time, callouts are often only going to be flavor text. But over many plays, as game rules are understood and you start to develop more strategy than shoot for lit shots, these callouts can be invaluable.

It's worth noting that the problem with competing information has better(?) ways of dealing with it now. I talk about this in the playfield section.

#### Playfield / Game State

##### Notes

The arrows on the playfield go from simple and few, to many and potentially more than one for each shot, then to LED with color changes allowing information.

Less state based info on playfield early in pinball's life due to less state. As state increased, the need for info on playfield increased. Game info by holding down flipper gets added during DMD phase LCD enabled moving more state to display. Newfangled tech uses extra LCD screen close to playfield (Labyrinth) or a playfield that is itself LCD (Metamorphic).


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

