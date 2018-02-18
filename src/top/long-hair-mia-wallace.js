import {AvatarPart, uid} from "../common";
import {hairColors} from "../colors";

const id = {
	path1: uid("path-"),
};

export default new AvatarPart({
	defs: [
		`<path
			d="M148.859344,69 C148.952588,70.3212062 149,71.6550662 149,73 L149,111 C149,133.339168 135.919579,152.623239 117,161.610951 L117,170.317435 C135.145605,171.815797 152.721153,174.335027 163.000169,177 C172.952646,163.439362 185.884594,150.800081 186.000169,126 C186.085192,107.014914 158.324059,30.4276364 146.000169,15 C137.861928,4.81215989 117.30504,1.44935656 93.0001685,1 C68.6952966,0.550643437 48.9231015,6.50878211 41,16 C30.3189583,28.7950013 -0.0850232975,107.014914 4.92293245e-13,126 C0.115574613,150.800081 13.047523,163.439362 23,177 C33.2789946,174.335033 50.8544902,171.815807 69,170.317444 L69,161.610951 C50.0804213,152.623239 37,133.339168 37,111 L37,73 L37,73 C37,71.6550662 37.0474121,70.3212062 37.1406562,69 L65.3735517,69 L69.2529753,47.5561285 L72.058097,69 L148.859344,69 Z"
			id="${id.path1}"/>`,
	],
	render ({color}) {
		return `
			<g stroke-width="1" fill-rule="evenodd">
				<g mask="url(#frameMask)">
					<g transform="translate(-1.000000, 0.000000)">
						<path
							fill-opacity="0.16"
							fill="#000000"
							fill-rule="evenodd"
							d="M69.0330562,76.212888 C81.9708809,43.1292208 95.6458945,26.5873873 110.058097,26.5873873 C110.596882,26.5873873 139.311316,26.3494141 158.112657,26.226792 C178.767149,35.5853581 193,55.3036503 193,78.114622 L193,93 L110.058097,93 L107.252975,69.820435 L103.373552,93 L69,93 L69,78.114622 C69,77.478246 69.0110772,76.844277 69.0330621,76.2128728 L69.0330562,76.212888 Z"
							/>
						<g stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(40.000000, 19.000000)">
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