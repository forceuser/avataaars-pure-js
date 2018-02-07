import {AvatarPart, uid} from "../common";
import {hairColors} from "../colors";
import makeColor from "../make-color";

const id = {
	mask1: uid("mask-"),
	mask2: uid("mask-"),
	mask3: uid("mask-"),
	path1: uid("path-"),
	path2: uid("path-"),
	path3: uid("path-"),
};

export default new AvatarPart({
	defs: [
		``,
	],
	render ({color}) {
		return `

		`;
	},
	attrs: {
		color: hairColors,
	},
});




import * as React from "react"
import { uniqueId } from "lodash"

import FacialHair from "./facialHair"
import HairColor from "./HairColor"

export default class ShortHairTheCaesar extends React.Component {
  static optionValue = "ShortHairTheCaesar"

  private filter1 = uniqueId("react-filter-")
  private mask1 = uniqueId("react-mask-")
  private mask2 = uniqueId("react-mask-")
  private path1 = uniqueId("react-path-")
  private path2 = uniqueId("react-path-")

  render () {
    const { filter1, mask1, mask2, path1, path2 } = this
    return (
      <g id="Top" stroke-width="1" fill-rule="evenodd">
        <defs>
          <rect id="${id.path1}" x="0" y="0" width="264" height="280" />
          <path
            d="M1,64 C1.34685629,65.488448 2.67275588,65.2226722 3,64 C2.53726005,62.445722 6.29594493,35.2480719 16,28 C19.618222,25.4833872 39.0082164,23.2319099 58.3126144,23.245568 C77.4086061,23.2590787 96.4208396,25.5105561 100,28 C109.704055,35.2480719 113.46274,62.445722 113,64 C113.327244,65.2226722 114.653144,65.488448 115,64 C115.719178,53.7019177 115,0.274362825 58,1 C1,1.72563718 0.280821545,53.7019177 1,64 Z"
            id="${id.path2}"
          />
          <filter
            x="-0.8%"
            y="-2.0%"
            width="101.5%"
            height="108.0%"
            filterUnits="objectBoundingBox"
            id="${id.filter1}">
            <feOffset
              dx="0"
              dy="2"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0"
              type="matrix"
              in="shadowOffsetOuter1"
              result="shadowMatrixOuter1"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <mask id="${id.mask1}" fill="white">
          <use xlink:href="#${id.path1}" />
        </mask>
        <g id="Mask" />
        <g id="Top/Short-Hair/The-Caesar" mask="url(#${id.mask1})">
          <g transform="translate(-1.000000, 0.000000)">
            <FacialHair />
            <g
              id="Hair"
              stroke-width="1"
              fill-rule="evenodd"
              transform="translate(75.000000, 34.000000)">
              <mask id="${id.mask2}" fill="white">
                <use xlink:href="#${id.path2}" />
              </mask>
              <use id="Caesar" fill="#28354B" xlink:href="#${id.path2}" />
              <HairColor maskID={mask2} />
            </g>
            {this.props.children}
          </g>
        </g>
      </g>
    )
  }
}
