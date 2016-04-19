---
layout: post
author: noah
title: Communicating Software Estimates
image: 'posts/time-train-station-clock-deadline.jpg'
credit: Ryan McGuire, Gratisopgraphy
---

Communication is hard. It's also extremely important. We're lucky that in the field of software development miscommunication tends to lead to project delays instead of loss of life.[^1] Estimates are also hard. It's challenging to produce accurate estimates in the first place, but even after a good estimate has been produced, comes the challenging work of communicating the estimates to interested parties.

There are two very common miscommunications that occur about an estimate:

1. Confusion over the _precision_ of an estimate
2. Confusion between an _estimate_ and a _commitment_

### Precision and Distributions

Software estimates are usually presented as a single value --- the expected duration of the project, i.e. "This project should take about 8 weeks". Unfortunately, estimates are more complicated than this. We usually represent an estimate as a probability distribution.[^2] Given our expected duration of 8 weeks, there are _many_ possible probability distributions.

<figure>
    <img src="{% asset_path posts/communicating-estimates/probability-distributions.png %}" alt="Graph of several probability distributions">
    <figcaption>Various probability distributions that can produce the statement: "The project should take about 8 weeks"</figcaption>
</figure>

Different audiences can have wildly different assumptions about the underlying probability distribution when only presented with the 8 week estimate. Management and clients will often imagine something similar to the purple curve: a very narrow-band of uncertainty centered neatly around the average. Engineers might imagine something like the red curve: a small chance of the project coming in early, and a very long tail of reasonably low-probability that the project runs _significantly_ delayed.

When communicating an estimate we need to convey _a sense_ of the underlying probability distribution. Is it wide or narrow? Does it neatly end or does it have a long tail? Is it symmetric or right-skewed?

If you're communicating with a more technical audience, or the person reading the estimate needs to have a detailed understanding of the estimate, you have the luxury of going into significant detail to convey the shape of the probability distribution. More typically we have a very small amount of space and time to communicate this information with non-technical users.

Below are some of our techniques for trying to concisely communicate this information. We try to compare the probability distribution someone would imagine based on the estimate with the probability distribution we're thinking of for the estimate itself.

#### Mention the Worst Case

Here we simply add the worst-case scenario to our estimates, to help skew someone's perception to the possibility of a longer duration.

<figure>
    <img src="{% asset_path posts/communicating-estimates/footnote-3-worst-case.png %}" alt="Comparison of worst case probability distribution with estimate">
    <figcaption>This project should take about 8 weeks, but in the worst case it could take up to 24 weeks.</figcaption>
</figure>

#### Confidence Interval

This is similar to the way a political poll might be reported. You specify the range over which you have 90% --- or another specific value --- confidence that the project will complete within this range. This tends to flatten people's expectation over the entire range.

<figure>
    <img src="{% asset_path posts/communicating-estimates/footnote-4-conf-interval.png %}"
         alt="Comparison of confidence interval probability distribution with estimate">
    <figcaption>There’s a 90% chance that the project is finished between 6 weeks and 16 weeks. The most likely duration is 8 weeks.</figcaption>
</figure>

#### Use Only the Upper Bound

This tends to be most appropriate if there's a chance of confusion between an _estaimte_ and a _commitment_ (see below). This tends to skew people's perception to be significantly longer.

<figure>
    <img src="{% asset_path posts/communicating-estimates/footnote-5-upper-bound.png %}" alt="Comparison of upper bound only probability distribution with estimate">
    <figcaption>This project should not take more than 16-24 weeks. There’s a pretty good chance it takes significantly less than that.</figcaption>
</figure>

#### Give Up

This tends to be used by projects with no requirements, rapidly changing requirements, when the deadline has already been missed several times, or when you're really tired of thinking.[^3]

<figure>
    <img src="{% asset_path posts/communicating-estimates/footnote-6-give-up.png %}" alt="A graph with a lot of question marks and no other helpful information">
    <figcaption>This project will take as long as it takes.</figcaption>
</figure>

### Is it an Estimate or a Commitment

Estimates and commitments are two different things. An estimate should be an unbiased guess at reality; a commitment is a promise to another party about the timeline for a deliverable. A commitment _should_ be reduced to a single-value. You don’t make a promise that there’s a 50% chance you’ll do your work by Tuesday. You make a promise that you _will_ do your work by Tuesday.

Since a commitment is a promise we like to be very explicit with them.

Commitments should be a date taken from the higher-end of the probability distribution at the level you're most comfortable with --- we usually go with 95% or 99% depending on the project.

<figure>
    <img src="{% asset_path posts/communicating-estimates/estimates-vs-commitments.png %}" alt="Graph of a single probability distribution">
    <figcaption>Estimates are often reported at 50% likelihood; Commitments are often reported in the 90-99% likelihood range.</figcaption>
</figure>

#### The Most Likely Mistake

When you're communicating an estimate the most likely mistake is that the other party considers it to be a commitment. We have found an easy way to mitigate this is to deliver an estimate with an explicit commitment when possible:

> There’s a 90% chance that the project is finished between 6 weeks and 16 weeks. The most likely duration is 8 weeks. If we're doing this as a fixed-bid project we can commit to finishing the project in 20 weeks.

When we can't deliver a commitment with the estimate we like to explicitly state that there is no commitment being made. Ideally we can at least tell them what we need before we can make a commitment

> There’s a 90% chance that the project is finished between 6 weeks and 16 weeks. The most likely duration is 8 weeks. We cannot commit to completing the project in a specific duration until the final UI designs are finalized.

### Communication is hard and takes work

Most software projects run behind schedule and a big reason is the difficulty in producing accurate estimates in the first place. Another major problem is the way software estimates are communicated to decision makers.

When talking about estimates be mindful about the common mistakes that your listeners will make. What can you do to convey a more accurate sense of the estimate to them? How can you make sure they don't mistake your estimate for a commitment?

If you found this post interesting or informative I'd highly recommend [Steve McConnell’s Software Estimation](http://www.amazon.com/Software-Estimation-Demystifying-Developer-Practices/dp/0735605351). Or, if you have any suggestions for better ways to communicate, please let us know [@apsislabs](https://twitter.com/ApsisLabs)!

[^1]:
    Disasters in other industries can often be attributed to a miscommunication. The deadliest airplane crash was caused by miscommunication during takeoff at the [Tenerife airport](https://en.wikipedia.org/wiki/Tenerife_airport_disaster). In medicine [miscommunications are a common source of error](http://ww2.kqed.org/stateofhealth/2014/11/25/miscommunication-a-major-cause-of-medical-error-study-shows/), especially [in surgery](http://www.cnn.com/2010/HEALTH/10/18/health.surgery.mixups.common/).

[^2]:
    A [quick refresher on probability distributions](https://www.khanacademy.org/math/probability/random-variables-topic/random_variables_prob_dist/v/probability-density-functions) in case you haven't thought about probability in a while. If you haven’t taken any courses on statistics and probability I _strongly_ encourage it. It’s one of the most useful mathematical tools in software engineering and daily life. [Kahn Academy](https://www.khanacademy.org/math/probability) has a good series, and there are plenty of great courses on [EdX](https://www.edx.org/course?search_query=probability) and [Coursera](https://www.coursera.org/courses?languages=en&query=probability).

[^3]:
    See also: [Soon&trade;](http://gaming.stackexchange.com/questions/23112/where-did-soon-originate)
