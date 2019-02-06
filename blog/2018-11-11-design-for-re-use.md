---
title: Design for Re-use
author: Mostafa Elganainy
authorURL: https://www.facebook.com/mostafa.El.ganainy.2
authorFBID: 648262785
---

This is the second article in the series of our path toward Software Delivery
efficiency. Reading article one, is recommended, but not necessary to follow up
with this one : Part I :
[How To Choose Your Tech Stack](https://medium.com/react-badr/how-to-choose-you-tech-stack-97db78f8dc12)

**So, again,** you’ve closed the deal for a big nice & challenging project. Or
your company is building a number of internal new products and you got assigned
the responsibility to kickstart the product development phase. **But,** this
time you’ve already chosen your tech. stack, and you’re familiar with the stack.
And ready to hit the ground running.

<!--truncate-->

But still, for each new project you start from scratch. Either that scratch
means the scratch provided by the tool itself. i.e. create-react-app, or some
template you’ve built in-house, or some community built template. They’re all
considered a scratch. If you’re starting from a similar scratch each time, then
this article might be for you.

#### Background

For sometime, we have been doing the same, we had our own chosen tech. stack
that we’ve been using for years, and are familiar with it. But each new project
seemed to include some un-necessary time waste, which was exactly like the
previous project. But since, the code isn’t designed for re-use, we found that
it’s really hard to move the code around. Plus, some times, there are legal
issues for doing so.

So, in this article we will explain our current approach to avoid these issues
and design to tackle the Re-use problem.

I’ll try to approach the topic from a generic point of view. Yet, at some
points, I would be giving examples from our own case, which is mainly a FE/BE
combination, with the FE based on React, and BE based on RoR, communicating
through GraphQL interface.

So we follow the Atomic Design ideas for the UI part, and Pluggable/Modular
design ideas to maximize the re-use in terms of features & higher level system
components.

#### Architecture

The simple most popular Web Apps Pattern, MVC, won’t be sufficient to reach a
great level of re-use. Since in it’s simplest form, it’s a flat
design/structure. And in modern Web Applications, SPA became a defacto-standard,
So, the ‘View’ part of MVC, became extremely Fat. In fact, it became a whole
separate part of the story. So, the Backend in our case, is just a
“Model/Controller” serving APIs for the Frontend. And the Frontend itself, is a
full blown project, with it’s own Architecture as well.

The first part of the solution, is to follow a modular design, where modules are
cut at certain points. Both the FE & BE, need to have a the same corresponding
cut points. The answer to : where exactly to design your cut points ? is simply
“it depends” and is kind of a black art.

So large modules, will mean less re-usability, since the needs & requirements of
each new project will be most probably completely different. And small modules
means so much extra work. Since, the larger the total surface areas of all the
modules, the larger the maintenance and API management work is needed. These are
almost the same constraints/trade-offs you’ll face while designing any SOA
system. (Or the sexier term, Micro-services based system).

To avoid going into this dilemma forever, we have designed our re-use framework
as a hierarchical system. Starting at the bottom with the smallest part of the
UI (A button, label….etc), and going up, in agglomerative fashion toward the top
to compose bigger and bigger pieces of the puzzle.

The result is some sort of LEGO like architecture, where you have small building
blocks, that’s almost useless on their own. But combing increasingly growing
pieces together will start to make sense. And thus you would have the choice
later, on what to re-use. Whether to re-use whole modules, or to go a level
down, and re-use large components, or going even lower and re-use tiny pieces.

Let’s walk through the following journey, to see how to convert a monolith
non-reusable design to a little bit more reuse friendly design. Here we’re
taking the example of an eCommerce website, looking only at 3 Functional areas :

1.  User Account Management (signup, login, …. etc)
2.  Products (product listing, product cards, sorting, searching, filtering…
    etc)
3.  Orders (add to cart, view shopping cart, checkout…etc)

Now let’s walk through a sample design.

**Monolith App :**

<figure name="f8c2" id="f8c2" class="graf graf--figure graf-after--p">

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="31"></canvas>

![](https://cdn-images-1.medium.com/max/1000/1*h8wqtpM20eftNK0MrhRX5g.png)

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1000/1*h8wqtpM20eftNK0MrhRX5g.png)</noscript>

</figure>

This is the most straightforward and common way to do SPAs. Maybe with different
technologies the naming will be slightly different, but the general concept
(Component vs. View), (Model vs. Controller)….etc. But the whole system is
written in one big place.

The problem with this model is that it would grow rapidly into a giant mess.
Plus for any medium sized Application, maintaining this would be a night mare.

Also if you’re following this model with new projects, like what we’ve used to
do. You’ll find yourself starting each new project from scratch as we’ve
illustrated at the beginning. So, let’s look at the next possible solution.

**Modular Design :**

<figure name="9970" id="9970" class="graf graf--figure graf-after--p">

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="29"></canvas>

![](https://cdn-images-1.medium.com/max/1000/1*SQyPNxM3KNlLx-AziGCEiw.png)

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1000/1*SQyPNxM3KNlLx-AziGCEiw.png)</noscript>

</figure>

functional scope. Which will reduce the messiness and maintainability issues of
your system.

But still, up till this point, you haven’t fixed the re-use problem. Since still
there is “no” common ground between the modules. We’ve just separated them into
folders. Plus, each new project, will most probably have completely different
needs. Which will make copying & pasting from module’s code a crazy shotgun
process. Which you will also most likely not do.

**Design For Re-use Step 1 (Cross cutting concerns)**

<figure name="ce63" id="ce63" class="graf graf--figure graf-after--p">

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="33"></canvas>

![](https://cdn-images-1.medium.com/max/1000/1*XVfMXi96Z03_4JdTVD9qSg.png)

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1000/1*XVfMXi96Z03_4JdTVD9qSg.png)</noscript>

</figure>

Now we’re talking !

This would be your first real step toward Re-use. In this approach, you extract
all the cross-cutting concerns, like user session management, security, logging
& communicating with the Backend … etc. Also, concerns like how modules
integrate with each other, and how to make them loosely coupled from each other,
potentially by exporting module interfaces. All of these should be be
achievable. If you have done a good job at this step, you will end up with the
first pieces of your code base that could be extracted and used in other
projects later. Or even contributed as open source helpers/tools.

This is the first piece of your puzzle, and here you should write these things
once, and write it well. Try to think deeply about the surface areas of each
corss-cutting concern. It’s API, it’s limitations, how others could extend
it ….etc. This is a kind of a black art, but as long as you’re following the
concept of single responsibility, where each one of these is only doing one job,
and doing it right, you should be fine.

These cross-cutting concerns, should be as dry as possible. They should contain
no logic that tightly related to one project. If you need customization for the
project that you’ll believe would be irrelevant to other projects, you should
make it as customizations on top of your generic library. Thus keeping your code
library clean and dry to the max.

But still, you’ve not solved the Re-use problem fully. Still each module has
pages which are built from the ground up specifically specific to this module.
So, let’s see the next step (Atomic Design)

**Design For Re-use Step 2 (Atomic Design)**

<figure name="304d" id="304d" class="graf graf--figure graf-after--p">

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="39"></canvas>

![](https://cdn-images-1.medium.com/max/1000/1*MXCPHjwkzUA_dG7fZHfuLg.png)

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1000/1*MXCPHjwkzUA_dG7fZHfuLg.png)</noscript>

</figure>

Building on two advances in the SPAs community. 1\. SPAs frameworks built around
components (Or embracing component based approach), and, 2\. Atomic design.

First, most modern SPAs frameworks comes with a built support for components.
Some of which, take this to the extreme, where everything is a component. The
whole App, is comprised of components hierarchy. Most these frameworks would
promote the concept of starting with the smallest possible component.

Second, atomic design, which is illustrated in depth in
[this](http://bradfrost.com/blog/post/atomic-web-design/) article :

<figure name="0b55" id="0b55" class="graf graf--figure graf-after--p">

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="21"></canvas>

![](https://cdn-images-1.medium.com/max/1000/1*J2q9cAs1jJZxkVG1EqtLfQ.png)

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1000/1*J2q9cAs1jJZxkVG1EqtLfQ.png)</noscript>

<figcaption class="imageCaption">Image from : [http://bradfrost.com/blog/post/atomic-web-design/](http://bradfrost.com/blog/post/atomic-web-design/)</figcaption>

</figure>

that resembles the organization found in nature :

1.  Atoms : The most basic building blocks of nature elements. In our case, that
    could be a Button, a Label, …..etc.
2.  Molecules : Comprised of few atoms bonding together to make a somewhat more
    advanced (And useful) building block. In our case, that could be a Search
    box, Check box….etc
3.  Organism : More advanced building block, comprised of several types of
    Molecules combined together to make the first level of useful functionality.
    For instance, the “Product Filtering Component” … etc.
4.  Templates : Even one more level up, where whole parts of a page are combined
    together, glueing together multiple Organisms. This could be the whole
    “Product Listing Component”
5.  Pages : Are a full page of the system with layout glueing together the
    templates, or parts of the page.

**Design For Re-use Step 3(Theming)**

<figure name="9f4d" id="9f4d" class="graf graf--figure graf-after--p">

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="35"></canvas>

![](https://cdn-images-1.medium.com/max/1000/1*n7Bb2BdjGTvO4REUuKTyZA.png)

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1000/1*n7Bb2BdjGTvO4REUuKTyZA.png)</noscript>

</figure>

It’s almost always the case, that the theme of colors/sizes…etc, that you’ve
used in one project, won’t fit into your next project. So, it’s crucial that
your atoms be easy to change colors and everything in an easy way. And also, the
more you can re-use atoms to build other atoms the faster you can grow your
Atoms library. For example in the above image, we’ve used the same button, to
build the select box. And all are sharing a number of general features.

**Conclusion**

The current state of the main-stream technology makes it easier than ever to
design for Re-use, and minimize the repetition with each new project you’re
building. And you should strategize this in your projects (If you haven’t
already).

Also, Depending on your case, you might have hard time asking your boss to let
you do this and rebuild his tech. stack, while he’s tight on deliveries and
timelines. What you would need to do in that case, is to first stop and think
what’s the fastest gains and lowest hanging fruits that you can attack. And
start introducing these concepts slowly. You don’t even have to do them all at
once or in one project.

**Where to go from here :**

1.  Check our work-in-progress (Pre-alpha-release),
    [here…](https://badrit.github.io/bractal/#/Atoms/Form%20Elements?id=button),
    which is part of [Bractal](https://github.com/BadrIT/bractal) (Our
    in-progress open source project, that implement the above concepts in React)
2.  It worth mentioning that modules could be broken down into tiny pieces
    according to [Micro-services design](https://microservices.io). But, unless
    you have a good capable DevOps team, and you know exactly what you’re doing,
    I don’t recommend starting a big production project with tiny
    Micro-services.
3.  Also, you can take the idea further, and do Micro-frontends :
    [https://micro-frontends.org](https://micro-frontends.org)

# Design for Re-use

This is the second article in the series of our path toward Software Delivery
efficiency. Reading article one, is recommended, but not necessary to follow up
with this one : Part I :
[How To Choose Your Tech Stack](https://medium.com/react-badr/how-to-choose-you-tech-stack-97db78f8dc12)

**So, again,** you’ve closed the deal for a big nice & challenging project. Or
your company is building a number of internal new products and you got assigned
the responsibility to kickstart the product development phase. **But,** this
time you’ve already chosen your tech. stack, and you’re familiar with the stack.
And ready to hit the ground running.

But still, for each new project you start from scratch. Either that scratch
means the scratch provided by the tool itself. i.e. create-react-app, or some
template you’ve built in-house, or some community built template. They’re all
considered a scratch. If you’re starting from a similar scratch each time, then
this article might be for you.

#### Background

For sometime, we have been doing the same, we had our own chosen tech. stack
that we’ve been using for years, and are familiar with it. But each new project
seemed to include some un-necessary time waste, which was exactly like the
previous project. But since, the code isn’t designed for re-use, we found that
it’s really hard to move the code around. Plus, some times, there are legal
issues for doing so.

So, in this article we will explain our current approach to avoid these issues
and design to tackle the Re-use problem.

I’ll try to approach the topic from a generic point of view. Yet, at some
points, I would be giving examples from our own case, which is mainly a FE/BE
combination, with the FE based on React, and BE based on RoR, communicating
through GraphQL interface.

So we follow the Atomic Design ideas for the UI part, and Pluggable/Modular
design ideas to maximize the re-use in terms of features & higher level system
components.

#### Architecture

The simple most popular Web Apps Pattern, MVC, won’t be sufficient to reach a
great level of re-use. Since in it’s simplest form, it’s a flat
design/structure. And in modern Web Applications, SPA became a defacto-standard,
So, the ‘View’ part of MVC, became extremely Fat. In fact, it became a whole
separate part of the story. So, the Backend in our case, is just a
“Model/Controller” serving APIs for the Frontend. And the Frontend itself, is a
full blown project, with it’s own Architecture as well.

The first part of the solution, is to follow a modular design, where modules are
cut at certain points. Both the FE & BE, need to have a the same corresponding
cut points. The answer to : where exactly to design your cut points ? is simply
“it depends” and is kind of a black art.

So large modules, will mean less re-usability, since the needs & requirements of
each new project will be most probably completely different. And small modules
means so much extra work. Since, the larger the total surface areas of all the
modules, the larger the maintenance and API management work is needed. These are
almost the same constraints/trade-offs you’ll face while designing any SOA
system. (Or the sexier term, Micro-services based system).

To avoid going into this dilemma forever, we have designed our re-use framework
as a hierarchical system. Starting at the bottom with the smallest part of the
UI (A button, label….etc), and going up, in agglomerative fashion toward the top
to compose bigger and bigger pieces of the puzzle.

The result is some sort of LEGO like architecture, where you have small building
blocks, that’s almost useless on their own. But combing increasingly growing
pieces together will start to make sense. And thus you would have the choice
later, on what to re-use. Whether to re-use whole modules, or to go a level
down, and re-use large components, or going even lower and re-use tiny pieces.

Let’s walk through the following journey, to see how to convert a monolith
non-reusable design to a little bit more reuse friendly design. Here we’re
taking the example of an eCommerce website, looking only at 3 Functional areas :

1.  User Account Management (signup, login, …. etc)
2.  Products (product listing, product cards, sorting, searching, filtering…
    etc)
3.  Orders (add to cart, view shopping cart, checkout…etc)

Now let’s walk through a sample design.

**Monolith App :**

<figure name="f8c2" id="f8c2" class="graf graf--figure graf-after--p">

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="31"></canvas>

![](https://cdn-images-1.medium.com/max/1000/1*h8wqtpM20eftNK0MrhRX5g.png)

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1000/1*h8wqtpM20eftNK0MrhRX5g.png)</noscript>

</figure>

This is the most straightforward and common way to do SPAs. Maybe with different
technologies the naming will be slightly different, but the general concept
(Component vs. View), (Model vs. Controller)….etc. But the whole system is
written in one big place.

The problem with this model is that it would grow rapidly into a giant mess.
Plus for any medium sized Application, maintaining this would be a night mare.

Also if you’re following this model with new projects, like what we’ve used to
do. You’ll find yourself starting each new project from scratch as we’ve
illustrated at the beginning. So, let’s look at the next possible solution.

**Modular Design :**

<figure name="9970" id="9970" class="graf graf--figure graf-after--p">

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="29"></canvas>

![](https://cdn-images-1.medium.com/max/1000/1*SQyPNxM3KNlLx-AziGCEiw.png)

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1000/1*SQyPNxM3KNlLx-AziGCEiw.png)</noscript>

</figure>

functional scope. Which will reduce the messiness and maintainability issues of
your system.

But still, up till this point, you haven’t fixed the re-use problem. Since still
there is “no” common ground between the modules. We’ve just separated them into
folders. Plus, each new project, will most probably have completely different
needs. Which will make copying & pasting from module’s code a crazy shotgun
process. Which you will also most likely not do.

**Design For Re-use Step 1 (Cross cutting concerns)**

<figure name="ce63" id="ce63" class="graf graf--figure graf-after--p">

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="33"></canvas>

![](https://cdn-images-1.medium.com/max/1000/1*XVfMXi96Z03_4JdTVD9qSg.png)

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1000/1*XVfMXi96Z03_4JdTVD9qSg.png)</noscript>

</figure>

Now we’re talking !

This would be your first real step toward Re-use. In this approach, you extract
all the cross-cutting concerns, like user session management, security, logging
& communicating with the Backend … etc. Also, concerns like how modules
integrate with each other, and how to make them loosely coupled from each other,
potentially by exporting module interfaces. All of these should be be
achievable. If you have done a good job at this step, you will end up with the
first pieces of your code base that could be extracted and used in other
projects later. Or even contributed as open source helpers/tools.

This is the first piece of your puzzle, and here you should write these things
once, and write it well. Try to think deeply about the surface areas of each
corss-cutting concern. It’s API, it’s limitations, how others could extend
it ….etc. This is a kind of a black art, but as long as you’re following the
concept of single responsibility, where each one of these is only doing one job,
and doing it right, you should be fine.

These cross-cutting concerns, should be as dry as possible. They should contain
no logic that tightly related to one project. If you need customization for the
project that you’ll believe would be irrelevant to other projects, you should
make it as customizations on top of your generic library. Thus keeping your code
library clean and dry to the max.

But still, you’ve not solved the Re-use problem fully. Still each module has
pages which are built from the ground up specifically specific to this module.
So, let’s see the next step (Atomic Design)

**Design For Re-use Step 2 (Atomic Design)**

<figure name="304d" id="304d" class="graf graf--figure graf-after--p">

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="39"></canvas>

![](https://cdn-images-1.medium.com/max/1000/1*MXCPHjwkzUA_dG7fZHfuLg.png)

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1000/1*MXCPHjwkzUA_dG7fZHfuLg.png)</noscript>

</figure>

Building on two advances in the SPAs community. 1\. SPAs frameworks built around
components (Or embracing component based approach), and, 2\. Atomic design.

First, most modern SPAs frameworks comes with a built support for components.
Some of which, take this to the extreme, where everything is a component. The
whole App, is comprised of components hierarchy. Most these frameworks would
promote the concept of starting with the smallest possible component.

Second, atomic design, which is illustrated in depth in
[this](http://bradfrost.com/blog/post/atomic-web-design/) article :

<figure name="0b55" id="0b55" class="graf graf--figure graf-after--p">

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="21"></canvas>

![](https://cdn-images-1.medium.com/max/1000/1*J2q9cAs1jJZxkVG1EqtLfQ.png)

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1000/1*J2q9cAs1jJZxkVG1EqtLfQ.png)</noscript>

<figcaption class="imageCaption">Image from : [http://bradfrost.com/blog/post/atomic-web-design/](http://bradfrost.com/blog/post/atomic-web-design/)</figcaption>

</figure>

that resembles the organization found in nature :

1.  Atoms : The most basic building blocks of nature elements. In our case, that
    could be a Button, a Label, …..etc.
2.  Molecules : Comprised of few atoms bonding together to make a somewhat more
    advanced (And useful) building block. In our case, that could be a Search
    box, Check box….etc
3.  Organism : More advanced building block, comprised of several types of
    Molecules combined together to make the first level of useful functionality.
    For instance, the “Product Filtering Component” … etc.
4.  Templates : Even one more level up, where whole parts of a page are combined
    together, glueing together multiple Organisms. This could be the whole
    “Product Listing Component”
5.  Pages : Are a full page of the system with layout glueing together the
    templates, or parts of the page.

**Design For Re-use Step 3(Theming)**

<figure name="9f4d" id="9f4d" class="graf graf--figure graf-after--p">

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="35"></canvas>

![](https://cdn-images-1.medium.com/max/1000/1*n7Bb2BdjGTvO4REUuKTyZA.png)

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/1000/1*n7Bb2BdjGTvO4REUuKTyZA.png)</noscript>

</figure>

It’s almost always the case, that the theme of colors/sizes…etc, that you’ve
used in one project, won’t fit into your next project. So, it’s crucial that
your atoms be easy to change colors and everything in an easy way. And also, the
more you can re-use atoms to build other atoms the faster you can grow your
Atoms library. For example in the above image, we’ve used the same button, to
build the select box. And all are sharing a number of general features.

**Conclusion**

The current state of the main-stream technology makes it easier than ever to
design for Re-use, and minimize the repetition with each new project you’re
building. And you should strategize this in your projects (If you haven’t
already).

Also, Depending on your case, you might have hard time asking your boss to let
you do this and rebuild his tech. stack, while he’s tight on deliveries and
timelines. What you would need to do in that case, is to first stop and think
what’s the fastest gains and lowest hanging fruits that you can attack. And
start introducing these concepts slowly. You don’t even have to do them all at
once or in one project.

**Where to go from here :**

1.  Check our work-in-progress (Pre-alpha-release),
    [here…](https://badrit.github.io/bractal/#/Atoms/Form%20Elements?id=button),
    which is part of [Bractal](https://github.com/BadrIT/bractal) (Our
    in-progress open source project, that implement the above concepts in React)
2.  It worth mentioning that modules could be broken down into tiny pieces
    according to [Micro-services design](https://microservices.io). But, unless
    you have a good capable DevOps team, and you know exactly what you’re doing,
    I don’t recommend starting a big production project with tiny
    Micro-services.
3.  Also, you can take the idea further, and do Micro-frontends :
    [https://micro-frontends.org](https://micro-frontends.org)
