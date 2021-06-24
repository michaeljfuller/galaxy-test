# Galaxy Test
This is a demo project for the Galactic app.  
Where possible while still meeting the brief, references to the company have been omitted.  
You can see the app in action [here](https://michaeljfuller.github.io/galaxy-test), using a mock auth service that lets you log in with any valid credentials.

## Files Walk-through
A tour of the key files.

## `/src`
* `AppWrapper`  
A wrapper component around the App to attach any Contexts and Higher-Order Components.  
Selects the appropriate router, based on if the app is running on GitHub pages.

* `App`  
The root of the app, where routes are defined.
  
* `App.module.scss`  
Defines most of the base styles, by including SCSS mixins.

## `/src/screens`
Components that represent a discrete webpage, or app screen, attached to a route.

## `/src/services`
Following SOLID design principles, the services are defined as an interface so there can be interchangable implementations. For example, there can be mock & production implementations.

* `AuthService`  
The interface defining what an AuthService should look like.
  
* `auth/MockVolatileAuth`  
A mock AuthService that emulates logging in a user. It is volatile because the user is not remembered when the page is refreshed.
  
* `auth/Auth0Api`  
The beginnings of a real AuthService using Auth0.  
Incomplete due to the error *"The realm Username-Password-Authentication is disabled."* suggesting that the remote-side may have been disabled, possibly because it's being removed from the test.


* `NotificationsService`  
The interface defining what a NotificationsService should look like.
  
* `notifications/MockNotificationsApi`  
A mock NotificationsService, returning the same notifications.
  
* `notifications/NotificationsApi`  
A real NotificationsService, connecting to the specified endpoint.
  
## `/src/store`
Contains the Redux Store and Sagas.

* `index`  
Configures the store.

* `sagas`  
Defines the rootSaga for the store.

* `sagaContexts`  
Enables Dependency Inversion of services, allowing us to specify which implementation of a service is used, and pass options to its constructor.
Sagas can then use **getContext()** to get the passed service.

## `/src/store/*`
Modules defining & governing a particular store.

* `*-slice`  
A Redux Toolkit slice, defining the actions and reducers.

* `*-actions`  
A clean and descriptive module with just actions to be used.

* `*-saga`  
The Redux-Saga for this store.  
Uses the relevant service to do async updates to the store.

## `/src/navigation`
* `SideNavigator`  
The sidebar navigator that can be seen on the Profile page.  
Has its own routing, so the URL gets updated as you change section.  
  
* `AuthenticatedRoute`  
A wrapper for a **react-router Route** that redirects you if you're not logged in.
  
## `/src/hooks`
Various helper hooks that are mostly just shortcuts to contexts or the store.

## `/src/components`
React components that don't fall into the above categories.  
Mostly UI components.

## `/styles`
A collection of common SCSS mixins and constants. 
