**Local Unit Testing**  

Source https://www.librechat.ai/docs/development/testing

Local Unit Testing

Locally test the app during development
Local Unit Tests
Before submitting your updates, it’s crucial to verify they pass all unit tests. Follow these steps to run tests locally:

Copy your .env.example file in the /api folder and rename it to .env

create a /api/.env file

cp .env.example ./api/.env
Add NODE_ENV=CI to your /api/.env file

npm run test:client

npm run test:api

Warning
When executed locally, this API unit test is expected to fail. This should be the only error encountered.image

