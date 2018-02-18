import {AvatarPart, uid} from "../common";
import {fabricColors} from "../colors";

const id = {
	path1: uid("path-"),
	path2: uid("path-"),
};

export default new AvatarPart({
	defs: [
		`<path
			d="M120,54 L20,54 L20,155 C20,160.522847 15.5228475,165 10,165 C4.4771525,165 6.76353751e-16,160.522847 0,155 L0,54 L0,44 C-2.9759565e-15,19.699471 19.699471,4.46393476e-15 44,0 L96,0 C120.300529,-4.46393476e-15 140,19.699471 140,44 L140,54 L140,155 C140,160.522847 135.522847,165 130,165 C124.477153,165 120,160.522847 120,155 L120,54 Z"
			id="${id.path1}"/>`,
		`<rect id="${id.path2}" x="74" y="50" width="118" height="36" rx="8"/>`,
	],
	render ({color = fabricColors.red, color2 = fabricColors.white}) {
		return `
			<g>
				<g transform="translate(-1.000000, 0.000000)">
					<g stroke-width="1" fill-rule="evenodd" transform="translate(63.000000, 20.000000)">
						<path
							fill="${color2}"
							d="M1,48 L23.6714286,48 L23.6714286,153.664286 C23.6714286,159.924828 18.5962564,165 12.3357143,165 C6.07517216,165 1,159.924828 1,153.664286 L1,48 Z M116.328571,48 L139,48 L139,153.664286 C139,159.924828 133.924828,165 127.664286,165 C121.403744,165 116.328571,159.924828 116.328571,153.664286 L116.328571,48 Z"
							/>
						<use fill="${color}" xlink:href="#${id.path1}"/>
					</g>
					<g>
						<use fill="black" fill-opacity="1" filter="url(#${id.path2})" xlink:href="#${id.path2}"/>
						<use fill="${color2}" fill-rule="evenodd" xlink:href="#${id.path2}"/>
					</g>
				</g>
			</g>
		`;
	},
	attrs: {
		color: fabricColors,
		color2: fabricColors,
	},
});
