import {AvatarPart, uid} from "../common";
import {hairColors} from "../colors";

const id = {
	path1: uid("path-"),
};

export default new AvatarPart({
	defs: [
		`<path
			id="${id.path1}"
			d="M1,64 C1.34685629,65.488448 2.67275588,65.2226722 3,64 C2.53726005,62.445722 6.29594493,35.2480719 16,28 C19.618222,25.4833872 39.0082164,23.2319099 58.3126144,23.245568 C77.4086061,23.2590787 96.4208396,25.5105561 100,28 C109.704055,35.2480719 113.46274,62.445722 113,64 C113.327244,65.2226722 114.653144,65.488448 115,64 C115.719178,53.7019177 115,0.274362825 58,1 C1,1.72563718 0.280821545,53.7019177 1,64 Z"
			/>`,
	],
	render ({color}) {
		return `
			<g stroke-width="1" fill-rule="evenodd">
				<g mask="url(#frameMask)">
					<g transform="translate(-1.000000, 0.000000)">
						<g stroke-width="1" fill-rule="evenodd" transform="translate(75.000000, 34.000000)">
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
