import {AvatarPart, uid} from "../../common";

export default new AvatarPart({
	render () {
		return `

		`;
	}
});

import * as React from "react"

export default class Default extends React.Component {
  static optionValue = "Default"

  render () {
    return (
      <g
        
        transform="translate(0.000000, 8.000000)"
        fill-opacity="0.599999964">
        <circle  cx="30" cy="22" r="6" />
        <circle  cx="82" cy="22" r="6" />
      </g>
    )
  }
}
