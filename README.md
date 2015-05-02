
# ContactManagerTest

> Re-architectured with [Flux](https://facebook.github.io/flux/docs/overview.html#content) + [React](https://facebook.github.io/react/)

## Description

Adopting from the Flux pattern, it has:

- A **Dispatcher** composited from the official Dispatcher.
- An **Action Creator** that abstracts actions dispatching from the components.
- A **Store** to respond to the actions, perform CRUD on the actual contacts data and emit change events.
- A set of **Components** (in their respective hierarchy):
    - App
        - ContactCreator
        - ContactList
            - Contact
            - ContactEditor
            - ContactRemover

## UI/UX Changes

Some differences with the [original implementation](http://dmytroyarmak.github.io/backbone-contact-manager):

- *Slimmer page header* for larger view area.
- *Higher contrast* between background and contact cards.
- *Easier access* to contact creation.
- *Better positioning consistency* of the action buttons on contact cards.
- *Pop up to edit contact* to provide better overall context.
- *Prompt* before deletion.
- *Better contact cards alignment* with [Masonry](http://masonry.desandro.com/).

## Running the project

The generated project includes a live-reloading static server on port `8080` (you can change the port in the `gulpfile.js` config), which will build, launch, and rebuild the app whenever you change application code. To start the server, run:

```bash
$ npm start
```

If you prefer to just build without the live reload and build-on-each-change watcher, run:

```bash
$ npm run build
```

To peek at a release, run:

```bash
$ npm run peek-release
```

To release and deploy to gh-pages, run:

```bash
$ npm run release
```


## Generating Additional Code

You can add additional functionality to your application by invoking the subgenerators included in the Flux Generator. You can add components using the following commands:

#### Components
```bash
$ yo flux:component ComponentName
```

#### Actions
```bash
$ yo flux:action ActionCreatorName
```

#### Stores
```bash
$ yo flux:store StoreName
```
