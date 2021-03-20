## Set Up

Please follow the mention steps in order to set up the project on your local machine:

1. Clone the code on to your machine:
     `$ git clone https://github.com/ai-zubair/user-dashboard.git`

2. Navigate to the project directory.

3. Remove any global packages that are already installed, including  `webpack` `typescript` etc. to avoid dependency resolution issues.

4. Install project dependencies(preferrably in `sudo` mode):
   `$ sudo npm i`

5. Start the development server for the project:
   `$ npm run build:dev`
   The dev server is listening at `localhost:8080` . Make sure the port isn't already in use.

6. Login screen is authenticated with:
   `email`    `eve.holt@reqres.in`
   `password` `cityslicka`
   as documented with the `reqres` API.
   

## Things To Know
 - Client-end Data structures have been implemented in accordance with the latest `reqres` API schema.
 - Application Routes are asynchronously loaded via `AsyncRoute` HOC that uses webpack's code splitting feature to emulate React's Suspense mechanism.

   