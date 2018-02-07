import {AvatarPart, uid} from "../../common";

export default new AvatarPart({
	render () {
		return `

		`;
	}
});



import * as React from "react"
import { uniqueId } from "lodash"

export default class Squint extends React.Component {
  static optionValue = "Squint"

  private path1 = uniqueId("react-path-")
  private path2 = uniqueId("react-path-")
  private mask1 = uniqueId("react-mask-")
  private mask2 = uniqueId("react-mask-")

  render () {
    const { path1, path2, mask1, mask2 } = this
    return (
      <g  transform="translate(0.000000, 8.000000)">
        <defs>
          <path
            d="M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z"
            id="${id.path1}"
          />
          <path
            d="M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z"
            id="${id.path2}"
          />
        </defs>
        <g  transform="translate(16.000000, 13.000000)">
          <mask id="${id.mask1}" fill="white">
            <use xlink:href="#${id.path1}" />
          </mask>
          <use  fill="#FFFFFF" xlink:href="#${id.path1}" />
          <circle
            fill-opacity="0.699999988"
            fill="#000000"
            mask="url(#${id.mask1})"
            cx="14"
            cy="10"
            r="6"
          />
        </g>
        <g  transform="translate(68.000000, 13.000000)">
          <mask id="${id.mask2}" fill="white">
            <use xlink:href="#${id.path2}" />
          </mask>
          <use  fill="#FFFFFF" xlink:href="#${id.path2}" />
          <circle
            fill-opacity="0.699999988"
            fill="#000000"
            mask="url(#${id.mask2})"
            cx="14"
            cy="10"
            r="6"
          />
        </g>
      </g>
    )
  }
}
