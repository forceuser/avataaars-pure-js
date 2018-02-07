import {AvatarPart, uid} from "../common";
import {hairColors} from "../colors";

const id = {
	path1: uid("path-"),
};

export default new AvatarPart({
	defs: [
		``,
	],
	render ({color}) {
		return `
			<g stroke-width="1" fill-rule="evenodd">
				<defs>
					<path
						d="M82.0179468,24.3784638 C74.9860629,23.6847351 66.6573358,23.2514721 58.3126144,23.245568 C39.0082164,23.2319099 19.618222,25.4833872 16,28 C6.29594493,35.2480719 2.53726005,62.445722 3,64 C2.67275588,65.2226722 1.34685629,65.488448 1,64 C0.280821545,53.7019177 1,1.72563718 58,1 C115,0.274362825 115.719178,53.7019177 115,64 C114.653144,65.488448 113.327244,65.2226722 113,64 C113.46274,62.445722 109.704055,35.2480719 100,28 C98.2407122,26.7763475 92.7526689,25.6101897 85.3587425,24.7390449 L89,16 L82.0179468,24.3784638 Z"
						id="${id.path1}"/>
				</defs>
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
