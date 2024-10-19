**Activate the dev environment**
source /Users/matthewcage/LibreChat/LibreChatDev/DevEnv/bin/activate

**ProjectPath** 
/Users/matthewcage/LibreChat/LibreChatDev/DevEnv/LibreChatDev

**Environment Setup:**
1. Ensure you have a `.env` file in the project root.
2. If `.env` doesn't exist, copy `.env.example` to `.env`:
   cp .env.example .env
3. Edit `.env` to set your specific configuration values.

**Starting Backend:**
Use npm run backend for normal operation.
For active development, use npm run backend:dev to monitor changes.
Access at http://localhost:3080/.

Note: Ensure that all required environment variables are set in your .env file, including CRYPT_KEY.

**Running Frontend in Development Mode:**
Ensure backend is running.
Use npm run frontend:dev to monitor frontend changes.
View at http://localhost:3090/.

**Github**
Repo https://github.com/matthewdcage/LibreChatDev.git
Branch MC-Main-Branch
git pull
git status
git add .
git commit -m "commit message"
git push

**Creating New Assistant Endpoints:**
To create more duplicates in the future:
1. Add a new endpoint in api/server/services/Endpoints/index.js
2. Create a new route file in api/server/routes/
3. Add the new endpoint to the LibreChat.yaml configuration
4. Update the frontend AssistantsEndpoint type in client/src/common/assistants-types.ts
5. Add the new endpoint to the endpointOptions array in client/src/components/Endpoints/Settings/Assistants.tsx
6. Implement any necessary backend logic for the new endpoint

This approach allows for easy creation of new assistant endpoints without risking errors, as each endpoint is isolated and follows the same structure.
