---
layout: post
author: noah
title: Communicating Estimates
---

Communication is hard. It's also extremely important. We're lucky that in the field of software development miscommunication tends to lead to project delays instead of loss of life [^1]. Estimates are _also_ hard. It's challenging to produce accurate estimates at all, but _even_ after a good estimate has been produced, comes the challenge of communicating about the estimate.

There are two very common miscommunications that occur about an estimate:

1. Confusion over the _precision_ of an estimate
2. Confusion between an _estimate_ and a _commitment_

#### Precision and Probability Distributions

Software estimates are usually presented as a single value — the expected duration of the project. "This project should take about 8 weeks". Unfortunately, estimates are more complicated than this. We usually represent an estimate as a probability distribution [^2]. Given our expected duration of 8 weeks, there are _many_ [^3] possible probability distributions.

{% include components/image.html url="posts/communicating-estimates/probability-distributions.png" caption="Various probability distributions that can produce the statement: &quot;The project should take about 8 weeks&quot;." alt="Graph of several probability distributions" %}

Different audiences can have wildly different assumptions about the underlying probability distribution when only presented with the 8 week estimate. Management and clients will often imagine something similar to the purple curve: a very narrow-band of uncertainty centered neatly around the average. Engineers might imagine something like the red curve: a small chance of the project coming in early, and a very long tail of reasonably low-probability that the project runs _significantly_ delayed.

------

When communicating an estimate we need to convey _a sense_ of the underlying probability distribution. Is it wide or narrow? Does it neatly end or does it have a long tail? Is it symmetric or right-skewed?

If you're communicating with a more technical audience or the person reading the estimate needs to have a detailed understanding of the estimate you have the luxury of going into significant detail to convey the sense of the probability distribution. More typically we have a very small amount of space and time to communicate this information with non-technical users.

Below are some of our techniques for trying to concisely communicate this information. We try to compare the probability distribution someone would imagine based on the estimate with the probability distribution we're thinking of for the estimate itself. If you have any suggestions for better ways to communicate, let us know [@ApsisLabs](https://twitter.com/ApsisLabs)!

##### Mention the Worst Case
Here we simply add the worst-case scenario to our estimates, to help skew someone's perception to the possibility of a longer duration.

{% include components/image.html url="posts/communicating-estimates/footnote-3-worst-case.png" caption="This project should take about 8 weeks, but in the worst case it could take up to 24 weeks." alt="Comparison of worst case probability distribution with estimate" %}

##### Confidence Interval
This is similar to the way a political poll might be reported. You specify the range over which you have 90% — or another specific value — confidence that the project will complete within this range. This tends to flatten people's expectation over the entire range.

{% include components/image.html url="posts/communicating-estimates/footnote-4-conf-interval.png" caption="There’s a 90% chance that the project is finished between 6 weeks and 16 weeks. The most likely duration is 8 weeks." alt="Comparison of confidence interval probability distribution with estimate" %}

##### Use Only the Upper Bound
This tends to be most appropriate if there's a chance of confusion between an _estaimte_ and a _commitment_ (see below). This tends to skew people's perception to be significantly longer.

{% include components/image.html url="posts/communicating-estimates/footnote-5-upper-bound.png" caption="This project should not take more than 16-24 weeks. There’s a pretty good chance it takes significantly less than that." alt="Comparison of upper bound only probability distribution with estimate" %}

##### Give Up
This tends to be used by projects with no requirements, rapidly changing requirements, when the deadline has already been missed several times, or when you're really tired of thinking [^3].

{% include components/image.html url="posts/communicating-estimates/footnote-6-give-up.png" caption="This project will take as long as it takes." alt="A graph with a lot of question marks and no other helpful information" %}

#### Estimate or Commitment
Estimates and commitments are two different things. An estimate should be an unbiased guess at reality; a commitment is a promise to another party about the timeline for a deliverable. A commitment _should_ be reduced to a single-value. You don’t make a promise that there’s a 50% chance you’ll do your work by Tuesday. You make a promise that you _will_ do your work by Tuesday. Commitments should be a date taken from the higher-end of the probability distribution at the level you're most comfortable with — we usually go with 95% or 99% depending on the project.

{% include components/image.html url="posts/communicating-estimates/estimates-vs-commitments.png" caption="Estimates are often reported at 50% likelihood; Commitments are often reported in the 90-99% likelihood range." alt="Graph of a single probability distribution" %}

When communicating an estimate, it needs to be _clear_ to all parties that this is _not_ a commitment. If there's risk of confusion between the two, it's vital to explain the difference and call out that this is _not_ a commitment.

----

If you found this post interesting or informative I'd highly recommend [Steve McConnell’s Software Estimation](http://www.amazon.com/Software-Estimation-Demystifying-Developer-Practices/dp/0735605351).

[^1]:
    Disasters in other industries can often be attributed to a miscommunication. The deadliest airplane crash was caused by miscommunication during takeoff at the [Tenerife airport](https://en.wikipedia.org/wiki/Tenerife_airport_disaster). In medicine [miscommunications are a common source of error](http://ww2.kqed.org/stateofhealth/2014/11/25/miscommunication-a-major-cause-of-medical-error-study-shows/), especially [in surgery](http://www.cnn.com/2010/HEALTH/10/18/health.surgery.mixups.common/).

[^2]:
    [A quick refresher in case you haven't thought about probability in a while](http://stattrek.com/probability-distributions/probability-distribution.aspx) ; If you haven’t taken any courses on statistics and probability I _strongly_ encourage it. It’s one of the most useful mathematical tools in software engineering and daily life. [Kahn Academy](https://www.khanacademy.org/math/probability) has a good series on the course, and there are plenty of great courses on [EdX](https://www.edx.org/course?search_query=probability) and [Coursera](https://www.coursera.org/courses?languages=en&query=probability).

[^3]: See also: [Soon&trade;](http://gaming.stackexchange.com/questions/23112/where-did-soon-originate)
