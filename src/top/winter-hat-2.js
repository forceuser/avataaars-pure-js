import {AvatarPart, uid} from "../common";
import {fabricColors} from "../colors";

const id = {
	mask1: uid("mask-"),
	path1: uid("path-"),
};

export default new AvatarPart({
	defs: [
		`<path
			id="${id.path1}"
			d="M72,21 C126.772655,21 144,68.8032255 144,103.04488 L144,176.910255 C144,196.404852 121.366901,196.446757 121.366901,165.988782 L121.366901,86.5347425 C121.366901,80.4596103 117.635097,77.5347425 111.551408,77.5347425 L72,77.5347425 L32.4485915,77.5347425 C26.3649028,77.5347425 22.6330986,80.4596103 22.6330986,86.5347425 L22.6330986,165.988782 C22.6330986,196.446757 -1.41137102e-14,196.404852 0,176.910255 L0,103.04488 C-7.11930515e-15,68.8032255 17.2273451,21 72,21 Z"
			/>`,
		`<mask id="${id.mask1}" fill="white">
			<use xlink:href="#${id.path1}"/>
		</mask>`,
	],
	render ({color}) {
		return `
			<g>
				<g transform="translate(-1.000000, 0.000000)">
					<g stroke-width="1" fill-rule="evenodd" transform="translate(61.000000, 0.000000)">
						<g transform="translate(0.000000, 176.000000)" fill="#F4F4F4">
							<circle cx="9" cy="65" r="9"/>
							<rect x="8" y="0" width="2" height="58"/>
						</g>
						<g transform="translate(126.000000, 168.000000)" fill="#F4F4F4">
							<circle  cx="9" cy="65" r="9"/>
							<rect x="8" y="0" width="2" height="58"/>
						</g>
						<circle fill="#F4F4F4" cx="72" cy="20" r="20"/>
						<use fill="${color}" xlink:href="#${id.path1}"/>
						<rect fill-opacity="0.2" fill="#000000" x="-1" y="21" width="146" height="46" mask="url(#${id.mask1})"/>
						<g transform="translate(29.000000, 32.000000)" fill="#FFFFFF" fill-opacity="0.5">
							<polygon transform="translate(12.500000, 9.000000) rotate(180.000000) translate(-12.500000, -9.000000)" points="12.5 0 25 18 0 18"/>
							<polygon transform="translate(43.500000, 9.000000) rotate(180.000000) translate(-43.500000, -9.000000)" points="43.5 0 56 18 31 18"/>
							<polygon transform="translate(74.500000, 9.000000) rotate(180.000000) translate(-74.500000, -9.000000)" points="74.5 0 87 18 62 18"/>
						</g>
						<g transform="translate(13.000000, 41.000000)" fill="#000000" fill-opacity="0.5">
							<polygon points="12.5 0 25 18 0 18"/>
							<polygon points="43.5 0 56 18 31 18"/>
							<polygon points="74.5 0 87 18 62 18"/>
							<polygon points="105.5 0 118 18 93 18"/>
						</g>
					</g>
				</g>
			</g>
		`;
	},
	attrs: {
		color: fabricColors,
	},
});
