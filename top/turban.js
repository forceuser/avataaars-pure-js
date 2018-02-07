import {AvatarPart, uid} from "../common";
import {fabricColors} from "../colors";

const id = {
	mask1: uid("mask-"),
};

export default new AvatarPart({
	defs: [
		`<path
			d="M83.9715543,55.8170792 C107.404232,69.414362 145.114919,82.1112884 139,138 C158.377483,132.360101 168.044149,116.801277 168,91.3235294 C167.918252,44.1482824 115.850571,6.80154462e-15 86,0 C85.3259486,0 84.6559706,0.0296343787 83.9916946,0.0880669528 C83.3328225,0.0296343217 82.6684563,0 82.0002187,0 C52.0737254,6.80154462e-15 0.0804892181,44.1482783 0.00021866091,91.3235294 C-0.0442202163,117.440393 9.62244645,132.999216 29.0002187,138 C22.8618971,82.1112789 60.5101967,69.4143577 83.9715662,55.8170722 Z"
			id="${id.path1}"/>`,
	],
	render ({color}) {
		return `
			<g stroke-width="1" fill-rule="evenodd">
				<g mask="url(#frameMask)">
					<g transform="translate(-1.000000, 0.000000)">
						<g stroke-width="1" fill-rule="evenodd" transform="translate(1.000000, 0.000000)">
							<path
								fill="#EDECE3"
								d="M74.5304294,97.5 C73.529284,95.0905557 73,92.5798498 73,90 C73,71.7746033 99.4151998,57 132,57 C164.5848,57 191,71.7746033 191,90 C191,92.5798498 190.470716,95.0905557 189.469571,97.5 C183.398106,82.8878805 159.972341,72 132,72 C104.027659,72 80.6018941,82.8878805 74.5304294,97.5 Z"
								/>
							<g transform="translate(48.000000, 3.000000)">
								<use fill="${color}" xlink:href="#${id.path1}"/>
							</g>
							<path
								fill-opacity="0.16"
								fill="#000000"
								d="M48.0110963,96.0123559 C48.3807929,121.112082 58.0438337,136.107963 77.0002187,141 C57.6224465,136.289117 47.9557798,121.632254 48.0002187,97.0294118 C48.0008313,96.6902213 48.0044682,96.351197 48.0110963,96.0123559 Z M152.645822,30.4681115 C153.39011,36.1953086 152.126202,42.8891982 148.000219,50.135763 C136.847465,71.5667661 76.561434,72.0039826 76.3339794,129.679698 C76.1051437,67.7612631 136.805324,67.3799133 148.000219,44.5441176 C150.669864,39.5668152 152.141299,34.8351296 152.645822,30.4681115 Z"
								/>
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
