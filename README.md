#vhotochat
> I heard they put [React](https://facebook.github.io/react/index.html) in [Meteor](https://www.meteor.com/), so I just went for it.

### What?
What better way to mess around with Meteor than using the new [Meteor-React](https://github.com/reactjs/react-meteor) integration packages.

**...AND**, what better way to make it complicated than trying to integrate with `navigator.getUserMedia`, and a little bit of `<canvas>`.

*Quick caveat, I'm only experimenting with both of these technologies and this stack – I'm in no way claiming this is "good" code.*

### Ok, what's it do?

Once the Meteor application is started, navigate to it. You'll need to allow camera access (don't worry, it's only local... *for now*).

Once you've allowed access you should see you're shining face and a few options.

To "Record" your video, click "Record" – hit it again to stop... nothing happens... now click "Submit" (still local).

"Recorded" frames will be pushed to server, neat.

Now open up a (additional) new browser window. "Record" some new frames...

#### You're vhotochat-ing!
*Still counts, even though it's with yourself!*

### Getting Started
Just `git clone` and `meteor`.

*Dependencies*
[Meteor](https://www.meteor.com/)
