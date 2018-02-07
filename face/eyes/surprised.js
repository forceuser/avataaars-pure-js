import {AvatarPart, uid} from "../../common";

export default new AvatarPart({
	render () {
		return `

		`;
	}
});



import * as React from "react"

export default class Surprised extends React.Component {
  static optionValue = "Surprised"

  render () {
    return (
      <g  transform="translate(0.000000, 8.000000)">
        <circle  fill="#FFFFFF" cx="30" cy="22" r="14" />
        <circle  fill="#FFFFFF" cx="82" cy="22" r="14" />
        <circle
          
          fill-opacity="0.699999988"
          fill="#000000"
          cx="30"
          cy="22"
          r="6"
        />
        <circle
          
          fill-opacity="0.699999988"
          fill="#000000"
          cx="82"
          cy="22"
          r="6"
        />
      </g>
    )
  }
}
