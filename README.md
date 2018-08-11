# Apollo Server/Client, Gatsbyjs, Netlify Template

Barebones project to get you started on a highly scaleable, free\*, and easy to use stack for web development.

\*free meaning using less than 125k requests/month 100 hours run time per month with Netlify functions

[DEMO](https://goofy-albattani-deb43e.netlify.com/)
Shows a barebones gatsby, apollo client/lambda server website deployed on netlify.
Displays two GraphQL query responses. One internal request, and one external data request.

## The JAM stack https://jamstack.org/

A project template using GatsbyJs, Apollo client, Apollo lambda, and Netlify

## Prerequisites

- Node (v8.2.0+)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

\*\* Note, this project is using Gatsby v2

## Getting Started (Recommended)

Use the button below to build and deploy your own copy of this repository:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/Tyler-Churchill/Gatsbyjs-Apollo-Lambda-Template"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete.

### Running Locally

Clone the repositor and cd into it, then:

```
$ yarn install
$ yarn start
```

The start command will start the lambda server as well as gatsby development server. Both servers will
hot reload while you are developing

To run just the GraphQL server,

```
$ yarn start-lambda
```

To rebuild lambda functions:

```
$ yarn build-lambda
```

### Building for Production

When you push and deploy to Netlify, it will automatically build your project for production.

You can try out the production build locally by running:

```
$ gatsby build
$ gatsby serve
```

## References

- [Netlify](https://www.netlify.com/)
- [Apollo](https://www.apollographql.com/)
- [Official styled-components site](https://www.styled-components.com/)
- [gatsby-plugin-styled-components](https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/)
