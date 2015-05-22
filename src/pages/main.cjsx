React = require "react"
UI = require "../uilib"


MainApp = React.createClass
  # the component will be rendered after every time @setState is called
  render: ->
    # represents a two-way binding to the state of this component
    inputValueLink =
      value: @state?.userName
      requestChange: (newValue) =>
        @setState
          userName: newValue

    <div>
      <h1>Hello, world!</h1>

      <UI.StringInput label="What is your username?" valueLink={inputValueLink}/>

      <h3>Root state:</h3>
      <p>{JSON.stringify @state}</p>
    </div>


module.exports =
  # called by `bootstrap.js` once the page has loaded
  init: ->
    React.render <MainApp/>, document.getElementById "mountpoint"