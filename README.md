# chatmon
 The best chat companion ever!

 Use desktop Google Chrome for the best experience. Currently not optimized for mobile browsers.
   
## How to use Chatmon

1. Create an account using email and password. (Password verification coming soon!)
2. Switch back to login and use you registered account to login.
3. To log out, press the menu on top left corner of the chat history, then press logout.
4. Have fun!


## Getting started for devs

Make sure to have Node.js and npm installed (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

1. Install mongoDB following the instruction at https://www.mongodb.com/docs/manual/installation/. Installation steps depend on your OS.
2. Create database for chatmon  
   1. Run `mongosh` to open mongoDB shell
   2. Run `use chatmon` to create chatmon DB
3. Clone the repo
4. Go to backend server `cd chatmon-backend`
   1. Create `.env` file containing 6 values: `PORT`, `JWT_SECRET`, `GEMINI_API_KEY`, `ENVIRONMENT`, `FRONTEND_URL` (for cookies), `MONGO_URI`. Your `MONGO_URI` should look something like  `mongodb://{hostname}:27017/chatmon`. For hosting production build with HTTPS, set `ENVIRONMENT=production`
   2. Run `npm i`
   3. Run `node server.js`
5. Go to frontend server `cd chatmon-frontend`
   1. Create `.env` file containing 1 value: `NEXT_PUBLIC_BACKEND_API`
   2. Run `npm i`
   3. Run `npm run dev` for debugging or `npm run build` followed by `npm run start` for production


## Note

- Gemini API on free tier only allows 15 prompts per minute