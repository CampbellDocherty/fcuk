# frontend-seed

This project is intended to be used as a template to create new front-end apps.

Follow these steps to get up and running with a new frontend app:

- [Create a Fluidly repo](https://github.com/organizations/fluidly/repositories/new) using `frontend-seed` as a template
  - For consistency, name your repo `myappname-frontend`
- Run `yarn upgrade` to upgrade all packages
- Search the whole project folder for `myappname` and replace with the app name of your choice
- Raise and merge a PR at this point
- [Set up continuous integration and deployment](#set-up-continuous-integration-and-deployment)
- [Set up subdomain with bucket and SSL](#set-up-subdomain-with-bucket-and-ssl)
- [Set up Auth0](#set-up-auth0)
- [Set up CORS](#set-up-cors)
- [Set up LaunchDarkly](#set-up-launchdarkly)
- [Set up Segment](#set-up-segment)
- Delete the frontend-seed part of this README

## Set up continuous integration and deployment

- Find your project in [CircleCI](https://app.circleci.com/projects/project-dashboard/github/fluidly/)
- Click "Set up project"
- Click "Use existing config"
- Click "Start building"

## Set up subdomain with bucket and SSL

- Uncomment the `terraform_plan`, `terraform_apply`, `deploy` and `smoke-tests/test` from the `workflows` list in `.circleci/config.yml`
- Uncomment `ci/circleci: terraform_plan` from the `required_status_checks` list in `.github/settings.yml`
- Follow the instructions in [tf-shared/frontend](https://github.com/fluidly/tf-shared/tree/main/frontend#generate-cloudflare-certificates) to create and encrypt an SSL certificate
- Add the encrypted certificate and key to `terraform/certificate.tf` -> `cloudflare_origin_certificate` and `cloudflare_origin_certificate_key`
- Follow the instructions in [tf-shared/frontend](https://github.com/fluidly/tf-shared/tree/main/frontend#start-the-process-of-verifying-your-subdomain-with-google) to create a google site verification code
- Add the google site verification code to `terraform/frontend.tf` -> `google_site_verification_txt_record`
- Follow the instructions in [tf-shared/frontend](https://github.com/fluidly/tf-shared/tree/main/frontend#initialise-the-shared-frontend-terraform-module) to finish setting up your terraform config
- [myappname.fluidly.com](https://myappname.fluidly.com) should be up and running

## Set up Auth0

- Whitelist your app's local and prod URLs in Auth0, by adding them to the `callbacks`, `allowed_origins`, `allowed_logout_urls`, and `web_origins` lists in [tf-auth0/applications.tf](https://github.com/fluidly/tf-auth0/blob/master/applications.tf)

## Set up CORS

- Whitelist your app's prod URL in Cloudflare by adding it to the `allowedOrigins` list in [infrastructure/terraform/cloudflare/add-cors-headers.js](https://github.com/fluidly/infrastructure/blob/master/terraform/cloudflare/add-cors-headers.js)
- Whitelist your app's local and prod URLs for any specific services that you will need to access in Ambassador, by adding them to the `ambassador` -> `cors` -> `origins` list in the relevant `*.yaml` file in [infrastructure/blob/master/kapitan/compiled/user-management/manifests](https://github.com/fluidly/infrastructure/blob/master/kapitan/inventory/targets/user-management.yml).
  - Initially you can do this for `user-management.yaml`, so that you can see the example request to `/me` in this seed project working.
  - [You will need to compile these kapitan configs as part of your commit](https://github.com/fluidly/infrastructure/tree/master/kapitan#compile)

## Set up LaunchDarkly

- [Create a project in the LaunchDarkly app](https://app.launchdarkly.com/settings/projects/new).
  - For consistency, name the project after your new app's url (e.g. `myappname.fluidly.com`), and give it a key matching your new app's name (e.g. `myappname`)
- Set the `LAUNCH_DARKLY_CLIENT_SIDE_ID` for your new project in `src/infrastructure/featureFlags/constants.ts`

## Set up Segment

- [Create a Javascript source in Fluidly's Segment workspace](https://app.segment.com/fluidly/sources/setup/javascript)
  - For consistency, name the source after your new app's url (e.g. `myappname.fluidly.com`)
- Set the `SEGMENT_KEY` for your new source in `src/infrastructure/analytics/constants.ts`
- Add any destinations you would like your Segment events to be sent on to
  - Initially you can add MixPanel and HubSpot, as these are typically added for all sources.

_Remove everything above this line once you've setup your new project!_

---

# myappname-frontend

This project was seeded from [frontend-seed](https://github.com/fluidly/frontend-seed), which was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Initial setup

### Install prerequisites

- [nvm](https://github.com/nvm-sh/nvm)
- [yarn](https://yarnpkg.com/)

### Setup local host

`echo "127.0.0.1 myappname.local.fluid.ly" | sudo tee -a /etc/hosts`

## Run locally

`nvm use && yarn install && yarn start`

Uses the correct node version, installs all dependencies, and runs the app in the development mode.

Open [https://myappname.local.fluid.ly:7070](https://myappname.local.fluid.ly:7070) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

## Test

`yarn test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Lint

`yarn lint-and-fix`

## Format

`yarn fix-format`

## Build for production

`yarn build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
