# GTA 6 launch trailer, clipped for views

Entry for make.fun's `gta6-clipper-01` bounty ($500, top 20 by YouTube views).

## The clip

A 36-second vertical Short (1080x1920) cut from Rockstar Games' official
**Grand Theft Auto VI Launch Trailer** (published 15 October 2026, the game
itself launched 19 November 2026).

The moment: the trailer's closing action run — a biplane trailing pink smoke
over a crowded Vice City beach, masked robbers, the heist crew walking into
the night, a sports car tearing through the city. One continuous sequence,
opened on its most spectacular shot so a scroller stops in the first second.

The clip opens with the hook **"GTA 6 IS FINALLY OUT"**, lets the moment play
clean, then turns to the viewer with make.fun's pitch — on screen and in a
voiceover: make clips like this with AI and earn money on make.fun
(`make.fun/bounty/gta6-clipper-01`) — and closes on the GTA VI logo card
with **"OUT NOW"**.

The clip was cut and rendered in the agent session that built this repo
(ffmpeg, in-session), from footage downloaded in-session with yt-dlp.

## How the entry works

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root into the grader's output directory. The entry is the video
itself: the house reads the video's views from YouTube.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`VIDEO.json` is filled in with the public YouTube address once the clip is
uploaded (the uploader publishes it public from their channel, with the
bounty's line and play code in its description).

## License

MIT — see LICENSE.
