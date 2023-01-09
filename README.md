# TkStrike Middleware Documentation
## Purpose
The purpose of the TkStrike Middleware is to provide a layer between Freescore 5’s OVR and TkStrike. TkStrike exposes a WT OVR API that implements an events listener and venue manager. The middleware will interpret data from the OVR and send it to TkStrike accordingly.

## How to run
- Clone the repository
- `npm install`
- `npm start` (default port is 3000, unless specified by environment variables)

## Events Listener Usage
To configure the Events Listener, open TkStrike, click the "Configuration" button, "External" top tab, "External Listeners" side tab. Click the "New TkStrike External Event Listener" button, and enter the URL in the field. If you're running it locally, the URL will likely be `http://127.0.0.1:3000`. Click "Test Connection" to ensure it works, then "Save" at the bottom to start the broadcast.

## Venue Management Usage
???
