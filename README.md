# Intro

[Live demo](https://github-user-page.vercel.app/)

This is an assignment about writing a simple GitHub user search website.

# Setup

1. `nvm use` - please checkout `.nvmrc` for Node version that the project is using.
2. `yarn install`
3. `yarn run dev` for development.
4. `yarn run build` for building production bundle.

# Tech Stack

- TypeScript
- Next.js (a React SSR/SSG framework)
- Storybook
- React
- Redux (with [redux-toolkit](https://redux-toolkit.js.org/))

# Goals

#### Requirements

- [x] There is a search bar to let the user search by username (login name)
- [x] While searching, the application shows an animated loading indicator made by CSS (using gif image is not allowed)
- [x] After the search is completed, the application shows the list of users along with their avatar and their username on the same page
- [x] If the results are not complete in one page, the pagination is shown on the screen
- [x] When a list item is clicked, the application is navigated to a new page that display the parsed JSON payload of that user
- [x] The new page also has to display the list of the user's repositories, followers and following
- [x] The application is built by React and Redux
- [x] Webpack is being used to build the application
- [x] The application style is built by one of the CSS preprocessors or CSS-in-JS
- [x] The application has to be responsive and optimised for mobile
- [x] A documentation on how the application works and how to set up and build the project is provided
- [x] The application is production ready (HINT: try Google’s PageSpeed or Lighthouse)

#### Bonus

- [ ] The application is deployed on AWS instead of Heroku or Now
- [ ] The application supports IE10 and/or Android native browser (Chrome 30.0)
- [ ] The pages are server-side rendered and are cached in the server
- [x] All pages' URL is reusable - meaning it can be copied and pasted on different browser and still shows the same result
- [x] All pages are SEO optimised
- [x] The project supports code splitting for each pages
- [ ] The results list also asynchronous-ly shows the number of followers and following of each user without going the user page
- [ ] The search input does the searching as you type (See google search as an example)
- [x] There is animated transition between pages
- [ ] The application supports theming and can easily be switched between themes
