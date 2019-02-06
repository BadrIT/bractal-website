---
title: How to choose you Technical Stack
author: Mostafa Elganainy
authorURL: https://www.facebook.com/mostafa.El.ganainy.2
authorFBID: 648262785
---

<figure name="2664" id="2664" class="graf graf--figure graf-after--h3">

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="37"></canvas>

![](https://cdn-images-1.medium.com/max/1000/1*bQMdaHrbdFo2827cwqculw.png)

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1000/1*bQMdaHrbdFo2827cwqculw.png)</noscript>

</figure>

So, you’ve closed the deal for a big nice & challenging project. Or your company
is building a number of internal new products and you got assigned the
responsibility to kickstart the product development phase.

<!--truncate-->

If you’re starting the above stories, each time with a clean slate, then this
article might be of some help for you.

In this article we will go through how we have chosen a Technology Stack, and
why we have decided to stick around for a while.

#### Cost of project kickstart

If you’re a Microsoft fan-boy or RoR serial killer, then this might not be a big
deal for you. There is almost one known and recommended way, to start any
project. But if you live in the Javascript death Arena, just like us, then this
might be a pain in the \*\*\* each time you’re starting a new project.

With Javascript’s extremely fragmented world, starting a new project from
scratch is usually a nightmare. With endless amount of options, and new
library/framework being created every few minutes. There is an extremely high
probability that you have gone through analysis paralysis while you were
selecting the stack for your new project. And you probably stayed for few weeks
like a kid in a candy store, while looking for your perfect tool.

#### Our approach

Well, we have been through that pain before, and unfortunately there is no way
that you wouldn’t go through it as long as you’ve chosen to go through
Javascript (Which seems inevitable nowadays). The best you can do is sticking to
an option (once you found a reasonable one), and stick to it for few years (2–3
years sounds reasonable).

Choosing the Technology stack of choice is a black art though. There is not a
silver pullet here. But we’ll present our approach to do it.

After choosing the Technology Stack, you’ll be faced by the challenge of how to
reduce the cost of each new project you build with your chosen Technology Stack.
Which is subject of our next article in this series.

#### Choosing a Technology Stack

We have gone through two steps iteratively to choose our stack. We used
iterative deepening approach, where we researched on surface till we chosen the
main direction. And after inspecting shallowly all directions, we went inside
each direction for a more detailed research or prototyping. Eliminating some
main options as we go, and deciding to go further into others. Till we ended up
with 1 selected main technology, where we kept digging deeper to find the fine
details of the big image. And so on. At the heart of that process, there have
been always two main steps :

\*\*Research Step :

**Prototyping Step :  
**This is not a completely separate step, rather we have gone through some
really quick experiments to validate our research finding. Either leading to
more research needed for an option. Or abandonment of an option. While doing
these prototypes, it’s important to keep your specific use case in mind. And try
to make those prototypes close to your typical use case. For instance, are you
usually working on highly interactive projects ? Is your main target mobile or
desktop ? Is the size of the tool’s binary or (bundle) is of big concern for
your company or usual target customer ? ….. etc.

**Sounds Cool But ….  
**You could spend forever in the above two steps going forward and backward, as
we said at the beginning, like a kid in a candy store. So, we decided the
following :

1.  As long as, there are at least tens of thousands of developers are
    recommending this technology and using it on daily basis. That means it’s
    battle tested and production ready. And also means that, it’s a viable
    option for us.
2.  If we have done enough experiments and it seems like satisfying our main
    expected use cases. Then again, it’s a viable option for us.

For any tool that satisfies the above two conditions, There is a very high
probability that we can’t go wrong by choosing it. So we decided to :

1.  Time box the whole process.
2.  When the time is up, choose whatever we felt right based on the heuristics
    and experiments we did so far.
3.  We know that we could never choose a “Perfect” stack for our cases. But
    “Good Enough” is good enough.

This phase took us approximately 1.5 months. Till we landed our choice on a
Technology stack. The time was up before we explore all options available, in
great details. But as we said, we believed that we’ve achieved was “Good
Enough”. And “Good Enough” is good enough !

#### Maximizing the gains

I find it foolish and extremely anti-productive, to use a new technology for
each new project (Or even for each few new projects). IMHO, I believe that
you’ve to stick to your chosen Technology stack for few years to reap the
benefits of accumulated know-how, and stand out in a crowd. For instance, there
are overwhelmingly huge number of Angular Fan boys out there. The same for React
& Vue.js. You can find them out there on the internet cursing at each others.
But, there aren’t as much real experts in any of these tech stacks. Since to
master any stack, and be extremely productive, you have to spend few years with
your Technology. To build up on your know how about it’s weaknesses and how to
tweak it’s performance. For instance, while going through articles, I’ve came
across endless number of people complaining about, how their Meteor App was
crushed under their first real production users’ wave. Well they were simply
mostly newbies, who didn’t understand how Meteor works under the hood, and used
all it’s neat features without understanding it’s weaknesses (Which are
relatively easy to guard against if you know what you’re looking for).

Not only you should stick to one technology to understand it well. But most
importantly to be able to invest in your components’ and modules’ libraries as a
seed for re-use. Such that the cost of each new project is substantially less
than the previous one.

My general advice here, is if a new technology is clearly (And everyone is
saying it) 5–10x, better than your chosen Tech. Stack. Then go for that new kid
in the town. Otherwise, stick to what you have and keep reaping the benefits.
When we say 10x better, that includes, how would it be easy to find/hire
developers who are willing to use it ? How much is it supported on client
platforms (Browsers & Mobiles … etc) ? Does it support modern devices’
capabilities ? Would you still be competitive in the market (For services
firms) ? And, obviously, does the new kid in the down is crushing it performance
or productivity wise ?…..etc.

Another advice, is that, for any chosen Technology Stack, there would be that
rosy promise at the beginning. Then once you’ve started to have few thousands of
lines-of-code, you would most probably hit your first wall with performance
issues. Then you might be faced with some productivity issues, then…., then …
etc. Well, in most cases, you shouldn’t panic and jump to a new Technology
Stack. Instead, stick around, try hard to fix your issues. They’re most probably
fixable, and if it’s being used by giant companies, then they must be facing
what you’re facing and much worse. Just spend sometime and fix your issues,
since the grass on the other side is always greener, and it would be always
extremely tempting to jump to the other side.

In a following article we would talk more about our approach for Re-use, and how
to make sure that each new project is a step forward, and that it’s cost for you
is much less than the previous one.
