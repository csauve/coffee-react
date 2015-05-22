React = require "react"

module.exports = React.createClass
  render: ->
    <div className="field-row">
      { if @props.label
        <label>{@props.label}</label>
      }
      <input className="string-input" type="text" valueLink={@props.valueLink}/>
    </div>