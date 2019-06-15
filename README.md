# Angular 8 and Nebular

## Install

[Install Nebular](https://akveo.github.io/nebular/docs/guides/install-nebular#install-nebular)

```bash
nvm install stable
npm install -g @angular/cli
```

## Nebular

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

```bash
ng new emitter-demo
cd emitter-demo
ng add @nebular/theme
npm install --save @nebular/theme @angular/cdk @angular/animations
npm install emitter-io --save
# Generate components
ng g component angular
ng g component emitter-client
```

## Chatroom

```bash
ng new chatroom
cd chartoom
ng add @nebular/theme
```