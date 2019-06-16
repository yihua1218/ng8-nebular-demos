# Angular 8 and Nebular

## Install

[Install Nebular](https://akveo.github.io/nebular/docs/guides/install-nebular#install-nebular)

```bash
nvm install stable
npm install -g @angular/cli
```

## Service

[HttpClient Live Example](https://stackblitz.com/angular/arrmelnxgdo)

[HttpClient](https://angular.io/guide/http)

## Nebular

[Nebula](https://github.com/akveo/nebular), GitHub

```bash
ng new nebular-demo
cd nebular-demo
ng add @nebular/theme
npm install --save @nebular/theme @angular/cdk @angular/animations
npm install --save @nebular/eva-icons@next
```

Path | src/app
-|-
Filename | app.modules.ts

```ts
import { NbThemeModule } from '@nebular/theme';

...

@NgModule({
  imports: [
    ...
    // this will enable the default theme, you can change this by passing `{ name: 'dark' }` to enable the dark theme
    NbThemeModule.forRoot(),
  ]
})
```

Path | /
-|-
Filename | angular.json

```json
"styles": [
  "node_modules/@nebular/theme/styles/prebuilt/default.css", // or dark.css
],
```

Path | src/app
-|-
Filename | app.component.ts

```ts
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';

...

@NgModule({
  ...
  imports: [
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
  ],
  ...
})
export class SomePageModule {
```

## Emitter

[Getting Started](https://emitter.io/develop/getting-started/), @emitter

[Nuclias Emitter Keygen](http://emitter.nuclias.tw/keygen)

Package | Required Version
-|-
readable-stream | 3.4.0
mqtt | 3.0.0

```bash
ng new emitter-demo
cd emitter-demo
ng add @nebular/theme
npm install --save @nebular/theme @angular/cdk @angular/animations
# Generate components
ng g component angular
ng g component emitter-client
# Generate services
n g service
# Start server for developing
npm install
npm run patch
npm start
```

```bash
ng g service api
ng generate class emitter-keys
```

## stream

```bash
cd node_modules/mqtt/node_modules
rm -rf readable-stream/
ln -s ../../../node_modules/readable-stream/
```

## Browserfy

Edit node_modules/core-util-is/lib/util.js, and add `global.Buffer = global.Buffer || require('buffer').Buffer;` before `exports.isBuffer = Buffer.isBuffer;`

## Chatroom

```bash
ng new chatroom
cd chartoom
ng add @nebular/theme
```

## GIPHY API

[Getting Started with the GIPHY API](https://developers.giphy.com/docs/)

