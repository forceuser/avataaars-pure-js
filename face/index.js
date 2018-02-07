import {AvatarPart, uid} from "../common";
import eyebrow from "./eyebrow/index";
import eyes from "./eyes/index";
import mouth from "./mouth/index";
import nose from "./nose/index";

export default new AvatarPart({
	render () {
		return `
		<g transform="translate(76.000000, 82.000000)" fill="#000000">
			${this.include(eyebrow)}
			${this.include(eyes)}
			${this.include(mouth)}
			${this.include(nose)}
		</g>
		`;
	},
	attrs: {
		eyebrow,
		eyes,
		mouth,
		nose,
	},
});
