# react-user-app
React JS User App

A sample react application created using [create-react-app](https://github.com/facebook/create-react-app).  What's in it? well, nothing much, just a list of users showing yet another simple usages of react components, props & state.  The usual react stuff's basically. 

## Features

* Stores data to localStorage (given it wont run out of space)
* Display's user list via component **UsersList** with fully functional:
  * sort button on ID header
  * rows per page select
  * rowN1-rowN2 of totalRows label
  * nav buttons
  * add button
* User form via reusable **UserDetails** component with fully functional:
  * profile image uploading via profile image container click using a combination of:
    * [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) and [Jimp](https://www.npmjs.com/package/jimp) Image Manipulation Program
    * showcases a simple way to prevent the famous *"Can't call setState (or forceUpdate) on an unmounted component. This is a no-op, but it indicates a memory leak in your application."* in the event where the component **UserDetails** is close during an active/unfinished image uploading.
  * reusable component **BingMap** that:
    * centers a pin location base on users location coordinates data
    * allows the user to simply click anywhere on the map to add or modify user's location corrdinates.
    * However, a ***not-so-necessary*** but rather a ***nice-to-have*** loader feature to the map component, a usage of [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) simply because I was not able to find a *onComplete* callback or whatnot from [React-Bingmaps](https://www.npmjs.com/package/react-bingmaps); A react.js version of [Bing Maps V8 Web Control](https://docs.microsoft.com/en-us/bingmaps/v8-web-control/) that I used on my map component.  That said, the MutationObserver is just to observe the map container for subtree creations.  Meaning, the map elements has been rendered on screen.  And to prevent another *"Can't call setState..."* error, I did made sure that the observer is disconnected in the event where the component is unmounted.
    

## LocalStorage
I Should have used IndexedDB!!!

This is the reason why I needed to resize the image so small in order to somewhat beat the localStorage issue.

Anyhow, the image resizing down to the smallest possible size is already a plus on my toolbox.  I can even reuse it in NodeJS.



## Note
##### *react-user-app* is not a full app.  It is just a *sample application!*


see for yourself --> [click here](https://jaosimt.github.io/react-user-app/)
