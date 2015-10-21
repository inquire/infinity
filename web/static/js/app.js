// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "deps/phoenix_html/web/static/js/phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

import React from "web/static/bower_components/react/react"

// TODO:
// importing from react-dom gives error. Change to line below when you fix this.
// import ReactDOM from "web/static/bower_components/react/react-dom"
import ReactDOM from "web/static/bower_components/react/react"

import HelloDiv from "web/static/js/components/HelloDiv"


ReactDOM.render(
    <HelloDiv/>,
    document.getElementById("helloDiv")
)
