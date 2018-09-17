# Football Pool

## Brainstorm

This app will setup, manage, and live update fantasy football pools for major tournaments around the world. Users should be able to:

- Sign up for an account
- Create a group
- Invite other to join the group (link)
- Join other groups
- Select teams for each round of the tournament
- Select players in a goal-scored competition
- Track results in real time (live results view) (stretch)
- View picks for all members of pool
- View leaderboard for all members of pool
  - Total point winners
  - Golden boot standings (with percentages picked)
- See standings of tournament results

## Architecture

- Task runner that pings the football data API every 60 sec
- When games are actively being played - feed results to server (node)
- Server determines if events are duplicates, if not a new event is created and stored (event === goal scored)
- Server-side-event is created and sent to open connections (client)
- Client consists of React/Redux/Websockets to listen for new events, save in redux, display

## API endpoints for server

- GET `/results` (user stats (total score, match points by round, golden boot points) - used to build leaderboard view)
- GET `/results/:userId` (results of all matches for given user - used to build bracket view with pick accuracy)
- GET `/results/actual` (REAL results of all matches - used to build bracket view of REAL results)
- GET `/results/golden-boot` (breakdown of golden boot points per player) (stretch - users that picked each player)
- GET `/live-results` (results w/ events for all live matches) (stretch)
