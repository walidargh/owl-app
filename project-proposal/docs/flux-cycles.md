# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Business Cycles

### Businesses API Request Actions

* `fetchAllBusinesses`
  0. invoked from `BusinessesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/businesses` is called.
  0. `receiveAllBusinesses` is set as the callback.

* `createBusiness`
  0. invoked from new Business button `onClick`
  0. `POST /api/business` is called.
  0. `receiveBusiness` is set as the callback.

* `fetchBusiness`
  0. invoked from `BusinessIndexItem` `didMount`/`willReceiveProps`
  0. `GET /api/businesses/:id` is called.
  0. `receiveBusiness` is set as the callback.

* `updateBusiness`
  0. invoked from `BusinessForm` `onSubmit`
  0. `POST /api/businesses` is called.
  0. `receiveBusiness` is set as the callback.

* `destroyBusiness`
  0. invoked from delete business button `onClick`
  0. `DELETE /api/businesses/:id` is called.
  0. `removeBusiness` is set as the callback.

### Businesses API Response Actions

* `receiveAllBusinesses`
  0. invoked from an API callback.
  0. `Business` store updates `_business` and emits change.

* `receiveBusiness`
  0. invoked from an API callback.
  0. `Business` store updates `_business[id]` and emits change.

* `removeBusiness`
  0. invoked from an API callback.
  0. `Business` store removes `_business[id]` and emits change.

### Store Listeners

* `BusinessIndex` component listens to `Business` store.

## Review Cycles

### Reviews API Request Actions

* `fetchAllReviews`
  0. invoked from `ReviewsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/reviews` is called.
  0. `receiveAllReviews` is set as the callback.

* `createReview`
  0. invoked from new review button `onClick`
  0. `POST /api/reviews` is called.
  0. `receiveReview` is set as the callback.

* `fetchReview`
  0. invoked from `ReviewIndexItem` `didMount`/`willReceiveProps`
  0. `GET /api/reviews/:id` is called.
  0. `receiveReview` is set as the callback.

* `updateReview`
  0. invoked from `ReviewForm` `onSubmit`
  0. `POST /api/reviews` is called.
  0. `receiveReview` is set as the callback.

* `destroyReview`
  0. invoked from delete review button `onClick`
  0. `DELETE /api/reviews/:id` is called.
  0. `removeReview` is set as the callback.

### Reviews API Response Actions

* `receiveAllReviews`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews` and emits change.

* `receiveReview`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews[id]` and emits change.

* `removeReview`
  0. invoked from an API callback.
  0. `Review` store removes `_reviews[id]` and emits change.

### Store Listeners

* `ReviewsIndex` component listens to `Review` store.
* `ReviewIndexItem` component listens to `Business` store.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `BusinessSearchBar` `onChange` when there is text
  0. `GET /api/businesses` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `BusinessesSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
