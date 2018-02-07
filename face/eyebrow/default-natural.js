import {AvatarPart, uid} from "../../common";

export default new AvatarPart({
	render () {
		return `

		`;
	}
});


import * as React from "react"

export default class DefaultNatural extends React.Component {
  static optionValue = "DefaultNatural"

  render () {
    return (
      <g  fill-opacity="0.599999964">
        <path
          d="M26.0390934,6.21012364 C20.2775554,6.98346216 11.2929313,12.0052479 12.04426,17.8178111 C12.0689481,18.0080543 12.3567302,18.0673468 12.4809077,17.9084937 C14.9674041,14.7203351 34.1927973,10.0365481 41.1942673,11.0147151 C41.8350523,11.1044465 42.2580662,10.4430343 41.8210501,10.0302067 C38.0765663,6.49485426 31.2003792,5.51224825 26.0390934,6.21012364"
          
          transform="translate(27.000000, 12.000000) rotate(5.000000) translate(-27.000000, -12.000000) "
        />
        <path
          d="M85.0390934,6.21012364 C79.2775554,6.98346216 70.2929313,12.0052479 71.04426,17.8178111 C71.0689481,18.0080543 71.3567302,18.0673468 71.4809077,17.9084937 C73.9674041,14.7203351 93.1927973,10.0365481 100.194267,11.0147151 C100.835052,11.1044465 101.258066,10.4430343 100.82105,10.0302067 C97.0765663,6.49485426 90.2003792,5.51224825 85.0390934,6.21012364"
          
          transform="translate(86.000000, 12.000000) scale(-1, 1) rotate(5.000000) translate(-86.000000, -12.000000) "
        />
      </g>
    )
  }
}
