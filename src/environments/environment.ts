// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyB4Ohctrcmc3Pyj5bg-kKsPNZRxbgmOdPc',
      authDomain: 'homework-darly.firebaseapp.com',
      databaseURL: 'https://homework-darly.firebaseio.com',
      projectId: 'homework-darly',
      storageBucket: 'homework-darly.appspot.com',
      messagingSenderId: '943423513261',
      appId: '1:943423513261:web:6bee71843c9e7854'
  }
};
