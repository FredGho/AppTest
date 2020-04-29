# front-application

## Project setup
You must install [Node](https://nodejs.org/en/download/) at least in version 10
and run the command line below :
```
npm install
```

You must add some .env (example: `.env.development.local`) for each environment (development, test and production) and add variables like `.env.example`. 

### Compiles and hot-reloads for development
```
npm run start:dev
```

### Compiles and hot-reloads for test
```
npm run start:test
```

### Compiles and minifies for production
```
npm run build
npm run start:prod
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```
### Integration
run script for integration (launch unit test + test e2e + linter)
```
npm run ci
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
