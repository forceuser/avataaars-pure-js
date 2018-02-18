import {FacePart, uid} from "../../common";

const id = {
	mask1: uid("mask-"),
	mask2: uid("mask-"),
	path1: uid("path-"),
	path2: uid("path-"),
};

export default new FacePart({
	defs: [
		`<path
			id="${id.path1}"
			d="M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z"
			/>`,
		`<path
			id="${id.path2}"
			d="M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z"
			/>`,
		`<mask id="${id.mask1}" fill="white">
			<use xlink:href="#${id.path1}"/>
		</mask>`,
		`<mask id="${id.mask2}" fill="white">
			<use xlink:href="#${id.path2}"/>
		</mask>`,
	],
	render () {
		return `
			<g transform="translate(0.000000, 8.000000)">
				<g transform="translate(16.000000, 13.000000)">
					<use fill="#FFFFFF" xlink:href="#${id.path1}"/>
					<circle fill-opacity="0.699999988" fill="#000000" mask="url(#${id.mask1})" cx="14" cy="10" r="6"/>
				</g>
				<g transform="translate(68.000000, 13.000000)">
					<use fill="#FFFFFF" xlink:href="#${id.path2}"/>
					<circle fill-opacity="0.699999988" fill="#000000" mask="url(#${id.mask2})" cx="14" cy="10" r="6"/>
				</g>
			</g>
		`;
	},
});
