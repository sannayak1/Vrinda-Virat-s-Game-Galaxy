/* ───────────── EDIT ME ─────────────
   The game list, shared by index.html (the arcade) and help.html (how to play).
   Each game has:  title, file, thumb, blurb, tags, by ("Vrinda", "Virat" or "Vrinda & Virat"), updated (YYYY-MM-DD), older (earlier versions),
   phone (false if it needs a keyboard), laptopControls, phoneControls, needsInternet (true for 3D games that load from the internet)
   To add a game: put its .html in the games folder, a picture in thumbs, and copy one entry below. */
/* ───────────── FEEDBACK ─────────────
   Paste your Google Form's pre-filled link between the quotes (made with TEST typed in the "Which game?" box).
   While it's empty, all the feedback buttons stay hidden. */
const FEEDBACK_LINK = '';

/* The form link, with the "Which game?" box filled in when a game is given. */
function feedbackURL(game){
  if(!FEEDBACK_LINK) return '';
  try{
    const u=new URL(FEEDBACK_LINK);
    const keys=[...u.searchParams].filter(([k,v])=>v==='TEST').map(([k])=>k);
    keys.forEach(k=>game?u.searchParams.set(k,game):u.searchParams.delete(k));
    return u.toString();
  }catch(e){return '';}
}

const GAMES = [
 {
  "title": "Escape Kiki's Prison Run",
  "file": "games/escape-kikis-prison-run.html",
  "thumb": "thumbs/escape-kikis-prison-run.jpg",
  "blurb": "Officer Kiki caught you! Sneak, jump and dash out of her very pink prison, and bounce on Muffin Blaze.",
  "tags": [
   "Sneaky",
   "2 players"
  ],
  "by": "",
  "updated": "2026-10-26",
  "older": [],
  "phone": true,
  "laptopControls": "Arrows or A/D move · ↑, W or Space jump · hold ↓ or S in a pink locker to hide · P pause. Friend mode: player 1 uses arrows, player 2 uses W A D.",
  "phoneControls": "Use the ◀ ▶, Jump and Hide buttons on screen. Friend mode needs a keyboard."
 },
 {
  "title": "Galactic Run",
  "file": "games/galactic-run.html",
  "thumb": "thumbs/galactic-run.jpg",
  "blurb": "Robo Chungus stole Queen Galactia! Race across 10 universes, make slime friends and beat the space bosses.",
  "tags": [
   "Adventure"
  ],
  "by": "",
  "updated": "2026-10-25",
  "older": [],
  "phone": true,
  "laptopControls": "Arrows or A/D move · Space or W jump (press twice to double jump) · J or X zap · P pause",
  "phoneControls": "On-screen arrow, jump and zap buttons appear while you play."
 },
 {
  "title": "Princess Celeste's Rescue",
  "file": "games/princess-celeste-rescue.html",
  "thumb": "thumbs/princess-celeste-rescue.jpg",
  "blurb": "A kawaii running quest across ten universes. Jump, throw stars and rescue Princess Celeste.",
  "tags": [
   "Adventure"
  ],
  "by": "",
  "updated": "2026-10-25",
  "older": [],
  "phone": true,
  "laptopControls": "Space or ↑ jump (double jump too) · X throw star · ← → move in boss fights · P pause",
  "phoneControls": "Use the ◀ ▶, Star and Jump buttons under the game."
 },
 {
  "title": "Candy Run Kingdom 2D",
  "file": "games/candy-run-kingdom-2d.html",
  "thumb": "thumbs/candy-run-kingdom-2d.jpg",
  "blurb": "Hester set the Candy Festival on fire! Make your hero, cross five candy worlds and save Princess Peppermint.",
  "tags": [
   "Adventure"
  ],
  "by": "",
  "updated": "2026-10-25",
  "older": [],
  "phone": true,
  "laptopControls": "← → move · Space jump · X throw · Enter talk",
  "phoneControls": "Use the on-screen pad: arrows, ▲ to jump, THROW to throw. Tap to keep talking."
 },
 {
  "title": "Akshar Quest 2D",
  "file": "games/akshar-quest-2d.html",
  "thumb": "thumbs/akshar-quest-2d.jpg",
  "blurb": "Explore the Marketplace of Illusions, where letters whisper and a masked trickster named Bhram is up to mischief.",
  "tags": [
   "Learning"
  ],
  "by": "",
  "updated": "2026-10-25",
  "older": [],
  "phone": true,
  "laptopControls": "Click letters, stalls and choices. Enter or Space also picks.",
  "phoneControls": "Tap letters, stalls and choices."
 },
 {
  "title": "The Legends of Algebra",
  "file": "games/legends-of-algebra.html",
  "thumb": "thumbs/legends-of-algebra.jpg",
  "blurb": "Solve for x to beat goblins, giants and dragons, build your village and make magical friends.",
  "tags": [
   "Learning"
  ],
  "by": "",
  "updated": "2026-10-25",
  "older": [],
  "phone": true,
  "laptopControls": "Click answers, islands and buildings. Enter also picks.",
  "phoneControls": "Tap answers, islands and buildings."
 },
 {
  "title": "Stickman Ninja Katana Duel",
  "file": "games/stickman-ninja-katana-duel.html",
  "thumb": "thumbs/stickman-ninja-katana-duel.jpg",
  "blurb": "Design your ninja, pick a secret technique and win a best-of-3 katana duel on a moonlit rooftop.",
  "tags": [
   "Fighting"
  ],
  "by": "",
  "updated": "2026-10-25",
  "older": [],
  "phone": true,
  "laptopControls": "A/D move · W jump · S block · J slash (tap 3× for a combo) · K dash · 1–8 techniques · L Thousand Cuts · P pause",
  "phoneControls": "Use the pad under the arena and tap the technique tiles."
 },
 {
  "title": "Butterfly & Frost",
  "file": "games/butterfly-and-frost.html",
  "thumb": "thumbs/butterfly-and-frost.jpg",
  "blurb": "Stand between the ice demon and the girl behind you. Deflect his frost, then sting!",
  "tags": [
   "Fighting"
  ],
  "by": "",
  "updated": "2026-10-25",
  "older": [],
  "phone": true,
  "laptopControls": "Drag with the mouse to move · Slash to deflect ice · Sting when the bar is full",
  "phoneControls": "Drag your finger to move · tap Slash to deflect ice · tap Sting when the bar is full."
 },
 {
  "title": "Wooble Monster Run",
  "file": "games/wooble-monster-run.html",
  "thumb": "thumbs/wooble-monster-run.jpg",
  "blurb": "Design your own wooble and race through 9 candy universes to rescue Queen Celeste from Chunky.",
  "tags": [
   "Adventure"
  ],
  "by": "",
  "updated": "2026-10-22",
  "older": [],
  "phone": true,
  "laptopControls": "← → or A/D run · Space jump · J Berry Blast · Enter talk · Esc pause or skip",
  "phoneControls": "Touch the screen and the on-screen pad appears."
 },
 {
  "title": "Super Roblox Story 2",
  "file": "games/super-roblox-story-2.html",
  "thumb": "thumbs/super-roblox-story-2.jpg",
  "blurb": "King Null is back! Build your avatar, meet the squad and rescue Queen Tech across five universes.",
  "tags": [
   "Adventure"
  ],
  "by": "",
  "updated": "2026-10-02",
  "older": [],
  "phone": true,
  "laptopControls": "WASD or arrows move · Space shoot · Space to continue scenes",
  "phoneControls": "Joystick to move · fire button or tap the screen to shoot."
 },
 {
  "title": "Super Roblox Story",
  "file": "games/super-roblox-story.html",
  "thumb": "thumbs/super-roblox-story.jpg",
  "blurb": "A villain is on the loose and Queen Tech is missing. Make your avatar and save the day.",
  "tags": [
   "Adventure"
  ],
  "by": "",
  "updated": "2026-09-26",
  "older": [],
  "phone": true,
  "laptopControls": "WASD or arrows move · Space shoot · Space to continue scenes",
  "phoneControls": "Joystick to move · fire button or tap the screen to shoot."
 },
 {
  "title": "Candy Run Kingdom 3D",
  "file": "games/candy-run-kingdom-3d.html",
  "thumb": "thumbs/candy-run-kingdom-3d.jpg",
  "blurb": "A 3D candy run starring Celeste. Dash, jump and grab the sweets.",
  "tags": [
   "Adventure",
   "3D"
  ],
  "by": "",
  "updated": "2026-09-02",
  "older": [],
  "phone": true,
  "laptopControls": "Arrow keys switch lanes, jump and slide",
  "phoneControls": "Swipe left, right, up or down, or use the on-screen buttons.",
  "needsInternet": true
 },
 {
  "title": "Candy Run Kingdom Quest",
  "file": "games/candy-run-kingdom-quest.html",
  "thumb": "thumbs/candy-run-kingdom-quest.jpg",
  "blurb": "Ride, dash and duel the darkness to rescue Princess Peppermint from Hester.",
  "tags": [
   "Adventure",
   "3D"
  ],
  "by": "",
  "updated": "2026-09-02",
  "older": [
   "games/candy-run-kingdom-quest-v1.html",
   "games/candy-run-kingdom-quest-v2.html",
   "games/candy-run-kingdom-quest-v3.html",
   "games/candy-run-kingdom-quest-v4.html"
  ],
  "phone": true,
  "laptopControls": "A/D or ◀ ▶ move · Space or ▲ jump · ▼ slide · E attack · Ctrl shield · Shift Sugar Rush",
  "phoneControls": "On-screen controls appear automatically.",
  "needsInternet": true
 },
 {
  "title": "Glitch Circus",
  "file": "games/glitch-circus.html",
  "thumb": "thumbs/glitch-circus.jpg",
  "blurb": "Build your own performer and step into a very strange big top.",
  "tags": [
   "Spooky",
   "3D"
  ],
  "by": "",
  "updated": "2026-09-02",
  "older": [
   "games/glitch-circus-v1.html"
  ],
  "phone": true,
  "laptopControls": "WASD move · drag the mouse to look · E talk · scroll to zoom",
  "phoneControls": "On-screen pad to move · drag to look around.",
  "needsInternet": true
 },
 {
  "title": "Stickmen Fist Fight",
  "file": "games/stickmen-fist-fight.html",
  "thumb": "thumbs/stickmen-fist-fight.jpg",
  "blurb": "Pick a stickman, throw hands and send bodies flying around the ring.",
  "tags": [
   "Fighting",
   "2 players"
  ],
  "by": "",
  "updated": "2026-09-02",
  "older": [],
  "phone": false,
  "laptopControls": "Player 1: A/D move · W jump · S block · J punch · K kick. Player 2: ← → move · ↑ jump · ↓ block · N punch · M kick",
  "phoneControls": ""
 },
 {
  "title": "99 Nights at Aunt Chippy's",
  "file": "games/99-nights-at-aunt-chippys.html",
  "thumb": "thumbs/99-nights-at-aunt-chippys.jpg",
  "blurb": "Three kids went into the woods. Can you survive 99 nights at the camp?",
  "tags": [
   "Spooky",
   "3D"
  ],
  "by": "",
  "updated": "2026-09-02",
  "older": [
   "games/99-nights-at-aunt-chippys-v1.html",
   "games/99-nights-at-aunt-chippys-v2.html",
   "games/99-nights-at-aunt-chippys-v3.html"
  ],
  "phone": true,
  "laptopControls": "WASD move · mouse to look · F flashlight · click to begin",
  "phoneControls": "Left joystick to move · drag on the right side to look · flashlight button.",
  "needsInternet": true
 },
 {
  "title": "Prank the Upper Moons",
  "file": "games/prank-the-upper-moons.html",
  "thumb": "thumbs/prank-the-upper-moons.jpg",
  "blurb": "Sneak through Infinity Castle and pull off pranks without getting caught.",
  "tags": [
   "Sneaky"
  ],
  "by": "",
  "updated": "2026-09-02",
  "older": [
   "games/prank-the-upper-moons-v1.html"
  ],
  "phone": true,
  "laptopControls": "Space to sneak when the marker is in the glowing zone · ↑ ↓ to weave in the shadows",
  "phoneControls": "Tap Sneak when the marker is in the glowing zone.",
  "needsInternet": true
 },
 {
  "title": "Super Roblox Bux Squad",
  "file": "games/super-roblox-bux-squad.html",
  "thumb": "thumbs/super-roblox-bux-squad.jpg",
  "blurb": "Pick your hero, clear the corrupted waves and take down King Null.",
  "tags": [
   "Fighting"
  ],
  "by": "",
  "updated": "2026-09-02",
  "older": [
   "games/super-roblox-bux-squad-v1.html"
  ],
  "phone": true,
  "laptopControls": "WASD or arrows move · mouse to aim · click or Space to fire",
  "phoneControls": "Drag your finger to move and fire."
 },
 {
  "title": "Hollowframe",
  "file": "games/hollowframe.html",
  "thumb": "thumbs/hollowframe.jpg",
  "blurb": "Wake up, build a body from scrap and battle the drones.",
  "tags": [
   "Fighting",
   "3D"
  ],
  "by": "",
  "updated": "2026-09-02",
  "older": [],
  "phone": false,
  "laptopControls": "WASD move · drag the mouse to look · E interact · Esc menu",
  "phoneControls": "",
  "needsInternet": true
 },
 {
  "title": "Escape Meemeows",
  "file": "games/escape-meemeows.html",
  "thumb": "thumbs/escape-meemeows.jpg",
  "blurb": "Slip through the Meemeow maze, dodge them in the dark and reach the door.",
  "tags": [
   "Sneaky",
   "Maze"
  ],
  "by": "",
  "updated": "2026-09-02",
  "older": [],
  "phone": true,
  "laptopControls": "Arrow keys or WASD to move",
  "phoneControls": "Use the touch pad below the game."
 },
 {
  "title": "Yuki's Prison Escape",
  "file": "games/yukis-prison-escape.html",
  "thumb": "thumbs/yukis-prison-escape.jpg",
  "blurb": "Sneak past the wardens, find the keys and help Yuki break out.",
  "tags": [
   "Sneaky"
  ],
  "by": "",
  "updated": "2026-09-01",
  "older": [
   "games/yukis-prison-escape-v1.html",
   "games/yukis-prison-escape-v2.html",
   "games/yukis-prison-escape-v3.html",
   "games/yukis-prison-escape-v4.html",
   "games/yukis-prison-escape-v5.html",
   "games/yukis-prison-escape-v6.html",
   "games/yukis-prison-escape-v7.html",
   "games/yukis-prison-escape-v8.html",
   "games/yukis-prison-escape-v9.html"
  ],
  "phone": true,
  "laptopControls": "W/S or ↑ ↓ forward and back · A/D or ← → turn · hold Shift to sneak",
  "phoneControls": "Use the on-screen ▲ ▼ ◀ ▶ and SNEAK buttons.",
  "needsInternet": true
 },
 {
  "title": "Entertainment District",
  "file": "games/entertainment-district.html",
  "thumb": "thumbs/entertainment-district.jpg",
  "blurb": "Build your slayer, join the squad and bring down the demon of the district.",
  "tags": [
   "Adventure"
  ],
  "by": "",
  "updated": "2026-09-01",
  "older": [
   "games/entertainment-district-v1.html"
  ],
  "phone": true,
  "laptopControls": "Click buttons to choose moves · click or Space to continue scenes",
  "phoneControls": "Tap buttons to choose moves · tap to continue scenes."
 },
 {
  "title": "Potty Panic Maze",
  "file": "games/potty-panic-maze.html",
  "thumb": "thumbs/potty-panic-maze.jpg",
  "blurb": "Find the bathroom before it's too late! A race through a shifting maze.",
  "tags": [
   "Maze",
   "Funny"
  ],
  "by": "",
  "updated": "2026-09-01",
  "older": [],
  "phone": true,
  "laptopControls": "WASD or arrow keys to move",
  "phoneControls": "Tap the arrow pad."
 },
 {
  "title": "Stickfight Arena",
  "file": "games/stickfight-arena.html",
  "thumb": "thumbs/stickfight-arena.jpg",
  "blurb": "Pick an elemental stickman and battle a friend in the arena.",
  "tags": [
   "Fighting",
   "2 players"
  ],
  "by": "",
  "updated": "2026-09-01",
  "older": [],
  "phone": false,
  "laptopControls": "Player 1: A/D move · W jump · S block · F punch · G special. Player 2: ← → move · ↑ jump · ↓ block · K punch · L special",
  "phoneControls": ""
 },
 {
  "title": "Toilet Terror",
  "file": "games/toilet-terror.html",
  "thumb": "thumbs/toilet-terror.jpg",
  "blurb": "The toilet monster is angry! Dodge it and grab toilet paper for a shield.",
  "tags": [
   "Funny"
  ],
  "by": "",
  "updated": "2026-08-31",
  "older": [],
  "phone": true,
  "laptopControls": "WASD or arrows to move · grab 🧻 for a shield",
  "phoneControls": "Drag your finger to move."
 },
 {
  "title": "The Last Player",
  "file": "games/the-last-player.html",
  "thumb": "thumbs/the-last-player.jpg",
  "blurb": "A card arrived with no return address. The only rule: survive.",
  "tags": [
   "Spooky"
  ],
  "by": "",
  "updated": "2026-10-25",
  "older": [
   "games/the-last-player-v1.html"
  ],
  "phone": true,
  "laptopControls": "Each round tells you what to do: hold or mash Space, pick left or right, or drag the needle.",
  "phoneControls": "Hold or mash the big button, tap left or right, or drag the needle."
 },
 {
  "title": "Bux Squad",
  "file": "games/bux-squad.html",
  "thumb": "thumbs/bux-squad.jpg",
  "blurb": "The very first Bux Squad. Pick a hero and stop King Null.",
  "tags": [
   "Fighting"
  ],
  "by": "",
  "updated": "2026-08-30",
  "older": [],
  "phone": true,
  "laptopControls": "WASD or arrows move · mouse to aim · click or Space to fire",
  "phoneControls": "Drag your finger to move and fire."
 }
];
