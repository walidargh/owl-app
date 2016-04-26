# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `GET /users/:id`
- `PATCH /users/:id`
- `DELETE /users/:id`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Reviews

- `GET /api/reviews`
- `POST /api/reviews`
- `GET /api/revies/:id`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`

### Businesses

- `GET /api/businesses`
  - accepts `tag_name` query param to list businesses by tag
- `POST /api/businesses`
- `GET /api/businesses/:id`
- `PATCH /api/businesses/:id`
- `DELETE /api/businesses/:id`
- `GET /api/businesses/:id/reviews`
  - index of all reviews for a business

### Tags

- A Businesses tags will be included in the business show template
- `GET /api/tags`
- `POST /api/businesses/:business_id/tags`: add tag to business by name
- `DELETE /api/businesses/:business_id/tags/:tag_name`: remove tag from business by
  name
