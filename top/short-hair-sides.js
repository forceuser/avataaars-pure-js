import {AvatarPart, uid} from "../common";
import {hairColors} from "../colors";

const id = {
	path1: uid("path-"),
};

export default new AvatarPart({
	defs: [
		`<path
			id="${id.path1}"
			d="M6,28 C0.923687084,28.0709555 0,26.9937684 0,23 C1.30010922e-16,17.3439836 4.0408529,6.77808536 8,2 C9.17612094,-0.170695788 11.6189856,-1.43187215 11,3 C8.3404922,11.4766099 11.4173429,27.914487 6,28 Z M120,28 C114.582657,27.914487 117.659508,11.4766099 115,3 C114.381014,-1.43187215 116.823879,-0.170695788 118,2 C121.959147,6.77808536 126,17.3439836 126,23 C126,26.9937684 125.076313,28.0709555 120,28 Z"
			/>`,
	],
	render ({color}) {
		return `
			<g stroke-width="1" fill-rule="evenodd">
				<g mask="url(#frameMask)">
					<g transform="translate(-1.000000, 0.000000)">
						<g stroke-width="1" fill-rule="evenodd" transform="translate(70.000000, 74.000000)">
							<use fill="${color}" xlink:href="#${id.path1}"/>
						</g>
					</g>
				</g>
			</g>
		`;
	},
	attrs: {
		color: hairColors,
	},
});
