import {fabricColors, hairColors, skinColors} from "./colors";
import avatar from "./avatar";

export function render () {
	return avatar
		.set({
			skin: skinColors.brown,
			clothe: avatar.attr("clothe").shirtCrewNeck.set({color: fabricColors.green}),
			// facialHair: facialHair.beardLight.set({color: hairColors.brownDark}),
			accessory: avatar.attr("accessory").kurt.set({color: fabricColors.yellow}),
			top: avatar.attr("top").shortHairShaggyMullet.set({color: hairColors.platinum}),
			avatarStyle: "circle",
		})
		.render();
}
