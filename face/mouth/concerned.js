import {AvatarPart, uid} from "../../common";

const id = {
	path1: uid("path-"),
	mask1: uid("mask-"),
};

export default new AvatarPart({
	defs: [
		`<path
			id="${id.path1}"
			d="M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z"
			/>`,
		`<mask id="${id.mask1}" fill="white">
			<use xlink:href="#${id.path1}" transform="translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) "/>
		</mask>`,
	],
	render () {
		return `
			<g transform="translate(2.000000, 52.000000)">
				<use fill-opacity="0.699999988" fill="#000000" fill-rule="evenodd" transform="translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) " xlink:href="#${id.path1}"/>
				<rect fill="#FFFFFF" fill-rule="evenodd" mask="url(#${id.mask1})" x="39" y="2" width="31" height="16" rx="5"/>
				<g stroke-width="1" fill-rule="evenodd" mask="url(#${id.mask1})" fill="#FF4F6D">
					<g transform="translate(38.000000, 24.000000)">
						<circle cx="11" cy="11" r="11"/>
						<circle cx="21" cy="11" r="11"/>
					</g>
				</g>
			</g>
		`;
	},
});
