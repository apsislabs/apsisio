---
layout: post
title: "Read the Source: Encryption Draft Bill"
image: '/img/posts/locks.jpg'
credit: Giulio Magnifico
author: noah
date: 2016-04-24
---

In the wake of the [San Bernadino iPhone controversy](http://www.wired.com/2016/02/apples-fbi-battle-is-complicated-heres-whats-really-going-on/) the Senate Intelligence Committee has produced a draft bill that would force Apple and other software companies to decrypt data for the government when they receive court orders. The bill --- titled the "Compliance with Court Orders Act of 2016" --- would force Apple and other software companies to decrypt anything that they have encrypted.

There have been a number of critiques written about this bill already.[^1] [^2] [^3] [^4] This is such an important topic to software developers and [the draft bill](https://www.burr.senate.gov/imo/media/doc/BAG16460.pdf) only comes in at 9 pages long, I think it's worth taking the time to dive into the <del>source code</del> actual text of the law to understand how it really works.

Section 3 is where the real action happens --- and only weighs in at two pages --- so that's where we'll spend most of our time. But first, let's take a quick out-of-order peek at the section that defines some of our key terms.

### Section 4 - Definitions

#### Covered Entity

This is an important definition that essentially defines _who_ this bill applies to. All emphasis throughout is mine:

> (4) COVERED ENTITY.---The term "covered entity" means a device manufacturer, a software manufacturer, an electronic communication service, a remote computing service, a provider of wire or electronic communication service, a provider of a remote computing service, or **any person who provides a product or method to facilitate a communication or the processing or storage of data.**

Ultimately this bill applies to you if you are providing a product or method that facilitates:

* Communication of data
* Processing of data
* Storage of data

There's just no real way to be involved in software and _not_ be a covered entity.

#### Intelligible

> (10) INTELLIGIBLE.---The term "intelligible", with respect to information or data, means---

> <p class="indent">(A) the information or data has never been encrypted, enciphered, encoded, modulated, or obfuscated; or</p>

> <p class="indent">(B) the information or data has been
encrypted, enciphered, encoded, modulated, or obfuscated and then decrypted, deciphered, decoded, demodulated, or deobfuscated to its original form.</p>

This part seems pretty manageable. Intelligible just means plain-text data and Unintelligible means any form of non-plain-text data.

### Section 3 --- Requirement for providing plain-text data

#### (a) Requirement

> (1) IN GENERAL.---Notwithstanding any other provision of law and except as provided in paragraph (2), a covered entity that receives a court order from a government for information or data shall---

> <p class="indent">(A) provide such information or data to such government in an intelligible format; or</p>

> <p class="indent">(B) provide such <strong>technical assistance as is necessary</strong> to obtain such information or data in an intelligible format or to achieve the purpose of the court order.</p>

This section says that any _covered entity_ that receives a court order for data must provide the plain-text version of the data or must do the work necessary to produce the plain-text. There is no exception here in the event that it is _impossible_ to produce the plain-text. We'll see in a later section that _you are required to design the system to make sure it's not impossible_.

The phrase in bold --- "technical assistance as is necessary" --- is also important. Most court orders to third parties require them to provide _reasonable assistance_ to facilitate court order. This proposed law goes a _significant_ step further and requires a covered entity to provide "assistance as necessary". There is a large gap between these two levels of assistance.[^5]

> (2) SCOPE OF REQUIREMENT.---A covered entity that receives a court order referred to in paragraph (1)(A) shall be responsible only for providing data in an intelligible format if such data has been made unintelligible by a feature, product, or service owned, controlled, created, or provided, by the covered entity or by a third party on behalf of the covered entity.

This section says that you are only required to provide data if _you_ provided the service that encrypted the data.

>(3) COMPENSATION FOR TECHNICAL ASSISTANCE.---A covered entity that receives a court order from a government as described in paragraph (1) and furnishes technical assistance under subparagraph (B) of such paragraph pursuant to such order shall be compensated for such costs as are reasonably necessary and which have been directly incurred in providing such technical assistance or such data in an intelligible format.

This section says that the government will pay you for your time in providing the technical assistance. However, they won't compensate you for any indirect losses from providing the technical assistance.[^6]

#### (b) Design Limitations

>(b) DESIGN LIMITATIONS.---Nothing in this Act may be construed to authorize any government officer to require or prohibit any specific design or operating system to be adopted by any covered entity.

In this subsection the government states that it doesn't have veto power over _specific_ designs. They cannot require you to use a specific design, nor can they restrict you from using a specific design. However, the government can still make _general_ requirements on your design.

#### &#40;c) The Problem

>&#40;c) LICENSE DISTRIBUTORS.---A provider of remote computing service or electronic communication service to the public that distributes licenses for products, services, applications, or software of or by a covered entity shall ensure that **any such products, services, applications, or software** distributed by such person be **capable of complying with subsection (a)**.

This section is **a massive problem for all software developers**. Almost all best practices in software security would violate this proposed law.

Consider storing a customer's password. As a developer you should _always_ store customer passwords using a cryptographically secure one-way hash.[^7] This one-way transformation would be a violation of this subsection, as you would not be able to recover the plain-text of the customer's password if presented with a court order.

Essentially _all_ one way hashes[^8] of data could be considered a violation of this bill. Any encryption that you, yourself, cannot decrypt could be considered a violation of this bill.

### That's It

If you followed along you've read essentially the whole bill. We skipped a couple of the fluff sections and there are plenty more definitions in Section 4 if you want to keep digging.

Personally, I always feel like I have a much better grasp on what something does after I've read the <del>source code</del> actual text. Sadly, after reading this bill I'm more convinced than ever that the draft bill is unworkable. I would prefer to see &sect; 3 &#40;c) removed entirely and the technical assistance standard in &sect; 3 (a) (1) (B) moved down from "as necessary" to "reasonable".[^9]

I strongly urge you to [contact your Senators](http://www.senate.gov/senators/contact/) and let them know how you feel about the Feinstein-Burr Encryption Bill. Especially if you are represented by a Senator on the [Senate Intelligence Committee](http://www.intelligence.senate.gov/). The EFF also has setup a simple form to [contact your representatives](https://act.eff.org/action/tell-congress-stop-the-burr-feinstein-backdoor-proposal) about this issue.

[^1]:
    [The Senate’s Draft Encryption Bill Is 'Ludicrous, Dangerous, Technically Illiterate'](http://www.wired.com/2016/04/senates-draft-encryption-bill-privacy-nightmare/), WIRED.
[^2]:
    [Feinstein and Burr’s draft encryption bill would essentially make all encryption illegal](http://techcrunch.com/2016/04/08/feinstein-and-burrs-draft-encryption-bill-would-essentially-make-all-encryption-illegal/), TechCrunch.
[^3]:
    [Senate Draft Encryption Bill Called 'Absurd,' 'Dangerous,' and Technically Inept](http://www.macrumors.com/2016/04/08/senate-draft-encryption-bill-dangerous/), MacRumors.
[^4]:
    [@mattblaze](https://twitter.com/mattblaze): [I could spend all night listing the various ways that Feinstein-Burr is flawed & dangerous. But let's just say, "in every way possible."](https://twitter.com/mattblaze/status/718301535667691520)

[^5]:
    Generally "reasonable assistance" means that you are no longer required to render assistance when it becomes an undue hardship. "Assistance as necessary" does not necessarily stop when you are met with an undue hardship.

    As an example let's say that you are running a small software as a service business with only a handful of employees. You receive a court order to decrypt a specific customer's data, but it has been strongly encrypted. After a week of investigation you determine that it will take your entire company a month of work to produce the necessary technical assistance.

    If you were able to demonstrate to a court that losing a month of time building your product could seriously damage your company the "reasonable" portion of "reasonable assistance" would kick in and you may be off the hook for producing that data.

    On the other hand, if you were required to provide "assistance as necessary" it doesn't matter that you lose a month of features. It doesn't matter if your two biggest customers walk because you aren't able to service their requests in a timely fashion. You are still required to render the technical assistance necessary to respond to the court order.

[^6]:
    Again, as an example, let's consider a small software company. If customers left your service after learning that you had the technical ability to decrypt their data, you would not be compensated for those losses.

[^7]:
    This is _one_ of the [many requirements](https://www.owasp.org/index.php/Password_Storage_Cheat_Sheet) of storing passwords securely. As always you should leverage the work of well-used and well-audited cryptographic libraries produced by security experts, instead of rolling your own cryptography.

[^8]:
    [@garrettdfelix](https://twitter.com/garrettdfelix): [Well, hash functions would be illegal under poorly drafted legislation. http://www.ibtimes.com/feinstein-burr-draft-encryption-bill-would-require-tech-companies-decrypt-messages-2350722 … @SenFeinstein @SenatorBurr #infosec #privacy](https://twitter.com/garrettdfelix/status/718535330991882241)

[^9]:
    Even with those changes I would have concerns about the legislation, however it would still be _possible_ to ethically develop software under a bill with those changes.
