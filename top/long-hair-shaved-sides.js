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

export default class LongHairShavedSides extends React.Component {
  static optionValue = "LongHairShavedSides"
  private mask1 = uniqueId("react-mask-")
  private mask2 = uniqueId("react-mask-")
  private mask3 = uniqueId("react-mask-")
  private path1 = uniqueId("react-path-")
  private path2 = uniqueId("react-path-")
  private path3 = uniqueId("react-path-")
  private path4 = uniqueId("react-path-")

  render () {
    const { mask1, mask2, mask3, path1, path2, path3, path4 } = this
    return (

    )
  }
}
