---
title: Non-blocking Git-flow
author: Mostafa Elganainy
authorURL: https://www.facebook.com/mostafa.El.ganainy.2
authorFBID: 648262785
---

We’re following a slightly modified version of the popular gitflow approach.

#### **Background**

We use a code review process, based on a merge/pull requests feature supported
by gitlab/github where a feature will be reviewed based on a merged request from
the feature branch to the develop branch. Which is a cool and easy approach to
do code reviews. Where reviewer and feature author keep discussing the comments
and see the changes revisions till the feature is accepted and thus merged into
the develop branch by the reviewer. Also the diffs and all merge details will
stay there forever for reference purposes, even if the source branch
(feature-branch) is deleted.

<!--truncate-->

#### **Why didn’t the standard approach work ?**

Well, let’s first look at our case/constraints :

1.  Our features are on average 3 weeks worth of work.
2.  Reviewers are reviewing the code with SLA policy of 1 business day. Which
    means a feature/task developed by noon of one day, might be reviewed by the
    noon of the next day.
3.  Our internal policy, states that no merge request should exceed 400 LOC,
    while an average sized feature will be in range of 1000–2000 LOC.
4.  Tasks within the same features are usually inter-dependent, which means to
    start a new task, it’s usually far better to have the code of all the
    previous tasks of the same feature.
5.  We found no decent built-in way in gitlab/github, to support non-blocking
    merge requests. Where author of the feature can merge his work into the
    target branch directly, and reviewer still have the ability to review the
    work and see merge history. The problem occurs when the branching/merging
    history is lost and completely messed up, if the author merged his branch
    into the develop branch before the merge request is closed.

The above constraints are near to impossible to be satisfied all at the same
time without some corners being cut. For example :

1.  The author of the feature will need to wait for the reviewer to give him
    comments (up to 24 hours), to avoid submitting code to the feature branch
    (Which is being reviewed).
2.  If reviewers let go of the SLA policy, they would suffer from severe context
    switching which will leave them with zero productivity at the end of the
    day. Since our reviewers are mostly Tech. Leads. Who will be reviewing the
    code for several Engineers.

So, we tried a solution (Which seems like a working solution till now), which is
detailed in the following section…

#### Non-blocking Git-flow

Our model simply depends on feature branches which have a little long life span
(2–4 weeks). With smaller tasks branches, going out and back into the feature
branch itself, rather than directly into the master branch. Those tasks are any
kind of tasks related to a given feature. i.e. bug fixes, enhancements,
sub-tasks, spikes …. etc. The Model will look like the following :

<figure name="6a00" id="6a00" class="graf graf--figure graf-after--p">

<canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="75"></canvas>

<noscript class="js-progressiveMedia-inner">![](https://cdn-images-1.medium.com/max/720/1*R-0Kg_wvxXqiuUPtsR7lqg.png)</noscript>

</figure>

_Note : (We excluded the rest of the standard gitflow model to keep the diagram
simple. Otherwise, in the diagram above, there would have been some more details
related to release-branches, hotfixes & master branch)_

As you see in the above process, we have sacrificed a neat feature provided by
github/gitlab. Which is showing the history of changes between different
versions of the merge. The gain from losing that feature is the ability to have
a non-blocking code review process.

The price that has to be paid here, is the little inconvenience on the behalf of
the reviewer. Since, the reviewer will not have easy to access linking between
the _review-comments-fixes-branch_, and the original _task-branch_. He might
need to open two tabs in the browser and do check both at the same time.

For us, till now, this looks like the least price we can pay and satisfy our
constraints. You’re welcome to share your thoughts either on how you’re solving
this problem in your projects, or what you think we could do better…
