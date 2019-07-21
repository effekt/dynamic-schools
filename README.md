### Dynamic School Listings

This application is meant to allow for the creation of schools with a few simple fields.

[Live Demo](http://jesse-schools-www.s3-website.ca-central-1.amazonaws.com/)

Login information is not persistent to allow for quick testing and demoing between the accounts.

The backend (API) can be found here [Dynamic Schools API](https://github.com/effekt/dynamic-schools-api)

##### Services

The application is spread across the following services:

| Service | Description |
| ------- | ----------- |
| [ElephantSQL](https://www.elephantsql.com) | Handles the Postgres database |
| [AWS S3](https://aws.amazon.com/s3/) | Serves the static React application and uses another bucket for image storing |
| [Heroku](https://www.heroku.com) | Provides the API |

Ideally I would like to move the applications API to Serverless (AWS Lambda, API Gateway, etc) at a later time.

Accounts:

educator1@schools.com: p@ssw0rd

educator2@schools.com: p@ssw0rd

parent@schools.com: p@ssw0rd