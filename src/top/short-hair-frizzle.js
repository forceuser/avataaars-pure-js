import {AvatarPart, uid} from "../common";
import {hairColors} from "../colors";

const id = {
	path1: uid("path-"),
};

export default new AvatarPart({
	defs: [
		`<path
			id="${id.path1}"
			d="M90.9102919,55.3613196 L175.085702,55.3613196 C193.333279,44.8338001 196.759397,26.1510357 183.849606,9.92600089 C180.635746,5.88682054 175.085702,21.6755614 158.028596,22.6504878 C140.97149,23.6254143 142.608865,16.3498661 124.45759,19.0739248 C106.306316,21.7979835 108.311575,36.37843 96.4671989,39.8768239 C88.5709482,42.2090865 86.7186458,47.370585 90.9102919,55.3613196 Z"
			/>`,
	],
	render ({color}) {
		return `
			<g stroke-width="1" fill-rule="evenodd">
				<g mask="url(#frameMask)">
					<g transform="translate(-1.000000, 0.000000)">
						<use stroke="none" fill="${color}" fill-rule="evenodd" xlink:href="#${id.path1}"/>
					</g>
				</g>
			</g>
		`;
	},
	attrs: {
		color: hairColors,
	},
});
