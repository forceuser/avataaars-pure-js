import {AvatarPart, uid} from "./common";

export default new AvatarPart({
	render ({maskID, color}) {
		return `
		<g class="body" transform="translate(32.000000, 36.000000)">
			<g
				class="skin"
				mask="url(#${maskID})"
				fill="${color}">
				<g transform="translate(-32.000000, 0.000000)">
					<rect x="0" y="0" width="264" height="244" />
				</g>
			</g>
			<path
				class="neck-shadow"
				fill-opacity="0.100000001"
				fill="#000000"
				mask="url(#${maskID})"
				d="M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z"
			/>
		</g>`;
	},
	attrs: {
		color: {
			"tanned": "#FD9841",
			"yellow": "#F8D25C",
			"pale": "#FFDBB4",
			"light": "#EDB98A",
			"brown": "#D08B5B",
			"dark-brown": "#AE5D29",
			"black": "#614335",
		},
	},
});