# Flickr-Wormhole

[![Greenkeeper badge](https://badges.greenkeeper.io/Saeris/Flickr-Wormhole.svg)](https://greenkeeper.io/)
*A Serverless GraphQL to REST Gateway Wrapper for the Flickr API*

## <a name="contents"></a> Table of Contents

  - [Installation](#install)
  - [Running the Gateway Locally](#run)
  - [Example Queries](#examples)


## <a name="install"></a> Installation

### Dependencies

Before you start, make sure you have a working [NodeJS](http://nodejs.org/) environment, with NPM 3. Preferably use [Yarn](https://yarnpkg.com/) instead of NPM for installation of packages to ensure that you'll use exactly the same dependencies as the project.

From the project folder, execute the following command:

```shell
npm install
```

Or if you are using Yarn, execute this command instead:

```shell
yarn
```

### Serverless

Once installation of project dependencies completes, if you haven't done so already, you will need to install [Serverless](https://github.com/serverless/serverless) globally:

NPM

```shell
npm install -g serverless
```

Yarn

```shell
yarn global add serverless
```

Please refer to the [Serverless documentation](https://serverless.com/framework/docs/providers/aws/guide/credentials/) for more information on how to set up your AWS credentials.

### Environment Variables

Finally you will have to setup your Node environment variables. This project uses the [dotenv](https://github.com/motdotla/dotenv) package to manage these, so please use the template `.env.default` to create a `.env` file in the project's root directory. The only required key you'll need for now is your Flickr API Key. Please refer to the [Flickr API Documentation](https://www.flickr.com/services/api/) for information how to generate a Key.

After that, your development environment is now ready to go!

> *[Back to Top](#contents)*

## <a name="run"></a> Running the Gateway Locally

To start the server, simply run the following command:

```shell
npm start
```

The server should now be listening on port `1337`. To access GraphiQL and begin exploring the API documentation, navigate to [http://127.0.0.1:1337/graphiql](http://127.0.0.1:1337/graphiql) in your browser of choice.

## <a name="examples"></a> Example Queries

For now only a few Queries will work! Here are a few you can try to demo the functionality of the gateway:

**Get all Camera Brands:**
```graphql
query Brands {
  brands {
    id
    name
  }
}
```

**Get all Sony Cameras:**
```graphql
query SonyCameras {
  cameras(brand: "sony") {
    id
    name
  }
}
```

**Get the EXIF data for a single photo:**
```graphql
query Exif {
  exif(photo: "34701580850") {
    camera
    make {
      name
    }
    model {
      name
    }
    software
    shootingMode
    exposure
    aperture
    iso
    lensInfo
    lensModel
    focalLength
    maxAperture
  }
}
```

**Get a User, all of their Albums, all the Photos in that Album, the EXIF data for each Photo, and all the Image URLs in one query!:**
> *Warning, this will take a long time to load depending on how many photos the user has!*
```graphql
query User {
  user(id: "146688070@N05") {
    fullname
    username
    bio
    location
    profile
    albums {
      title
      description
      photos {
        title
        exif {
          camera
          make {
            name
          }
          model {
            name
          }
          software
          shootingMode
          exposure
          aperture
          iso
          lensInfo
          lensModel
          focalLength
          maxAperture
        }
        images {
          label
          width
          height
          source
        }
      }
    }
  }
}
```

> *[Back to Top](#contents)*
