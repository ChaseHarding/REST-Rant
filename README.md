# Project REST-Rant

REST-Rant is an app where users can review restaurants.

<h2>Routes</h2>

| Method | Path | Purpose |
|--------|------|---------|
| GET | / | Home Page |
| GET | /places | Places index page |
| POST | /places | Create new place |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a partocular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an exisitng place |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant(comment) about a place |
| DELETE | /places/:id/rant/:rantId | Delete a rant about a place |
| GET | * | 404 page (matches any route not defined above) |

<h2>Database</h2>

| Field | Type |
|-------|------|
| _id | Object ID |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |
