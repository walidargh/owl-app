# Owl

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Owl is a web application inspired by Yelp that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, signin, and guest/demo signin
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for an Yelp-inspired site: ability to add a business to the site, review and rate a business.
- [ ] Allows for searching by business name
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] Allow users to upload photos
- [ ] A production README, replacing this README

## Product Goals and Priorities

Owl will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Add a business  (MVP)
- [ ] Rate and review a business (MVP)
- [ ] Search by business name (MVP)
  - [ ] Search by business type, price range, distance from current location (expected feature, but not MVP)
- [ ] Use integrated Google Maps to locate businesses (expected feature, but not MVP)
- [ ] Upload photos (MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Users (1 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin
- build out CRUD API, Flux loop, and components for:
  - [ ] `UserProfile`
  - [ ] `UserProfileEditForm`

### Phase 2: Business Model, API, and basic APIUtil (1.5 days)

**Objective:** Business can be created, updated, and destroyed through
the API.

- [ ] create `Business` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for Business (`BusinessController`)
- [ ] jBuilder views for businesses
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Business can be created, updated, destroyed, rated and reviewed

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- [ ] implement each business component, building out the flux loop as needed.
  - [ ] `BusinessesIndex`
  - [ ] `BusinessIndexItem`
  - [ ] `BusinessForm`
- [ ] set up Stores
- [ ] set up Server/Client Actions


### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Reviews and Ratings (2 days)

**Objective:** Users will be able to review businesses and rate them (out of 5 stars).

- [ ] create `Review` model
- [ ] build out API, Flux, loop, and components for:
  - [ ] review and rating CRUD
  - [ ] `ReviewsIndex`
  - [ ] `ReviewIndexItem`
  - [ ] `ReviewForm`
- [ ] calculate average rating and number of reviews


### Phase 6: Search (0.5 days)

**Objective:** Users can search for businesses by name (full name and closest match).

- [ ] build out API, Flux loop, and components, this will include:
  - [ ] REGEX for matching query string to Business
  - [ ] flux structure
- implement live search feature with clickable links
- [ ] CSS styling for search bar

### Phase 7: Upload Photos (1 days)

**Objective:** Users can be upload photos for each business.
- [ ] create `Photos` model
- [ ] build out API, Flux loop, and components, this will include:
  - [ ] `PhotosIndex`
  - [ ] `PhotoIndexItem`
  - [ ] `PhotoUploadForm`
- [ ] CSS styling
### Phase 8: Google Maps API (0.5 days)

**objective:** Integrate Google Maps to visually display business locations.
- [ ] set up API Key
- [ ] build out React components
- [ ] CSS styling

### Phase 9: Tags/Categories (0.5 day)

**objective:** Allow users to tag businesses based on tag/category.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for businesses
  - [ ] selecting tags for businesses
  - [ ] searching by tag
- [ ] CSS styling

### Bonus Features (TBD)
- [ ] Filter by open now, category, price, distance
- [ ] Filter by distance
- [ ] Infinite Scroll for results
- [ ] User ability to check-in
- [ ] Suggested businesses based on users prior check-ins
- [ ] Social Media Integration (Instagram, Facebook, Twitter)

<!-- [phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md -->
