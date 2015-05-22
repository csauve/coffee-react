React = require "react"
UI = require "../uilib"

MainApp = React.createClass
  render: ->
    <div>
      <h1>Hello, world!</h1>
      <UI.StringInput/>
    </div>

module.exports =
  init: ->
    React.render <MainApp/>, document.getElementById "mountpoint"