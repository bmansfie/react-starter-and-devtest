## React Starter Kit — base for devtest demo


  1. requires node >5
  2. `npm install`
  3. `npm start`

See the timelog.txt for time spent on the various pages and setting up the starter kit.

I did put some thought into the frame work I picked.  I wanted something up to date with the state
of things, something that could be used for the next 2 years without feeling deprecated.  I wanted
an environment that took care of the bulk of the heavy lifting in setting up a system for me.
So I started with https://github.com/kriasoft/react-starter-kit .  I forked it and started from there.

Understand that my base react knowledge was limited, I've half way through a couple of tutorials but
that's it.  Also, there were a lot of packages in this kit that I've never used before.  Which is
largely reflected in the startup time.

At this point I'm considering some architectural decisions I made and how I might rework things to
let things be a little more data driven and less static.  I could play with component
identification and rendering, but the details of the layouts might be poor with this approach.
So, currently, it is what it is.
