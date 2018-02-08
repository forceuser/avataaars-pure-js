import {fabricColors, hairColors, skinColors} from "./colors";
import avatar from "./avatar";

export {avatar};
export function render () {
	return avatar
		.set({
			body: avatar.attr("body").set({color: avatar.attr("body").attr("color").brown}),
			face: avatar.attr("face").set({
				eyebrow: avatar.attr("face").attr("eyebrow").raisedExcited,
				eyes: avatar.attr("face").attr("eyes").squint,
				nose: avatar.attr("face").attr("nose").general,
				mouth: avatar.attr("face").attr("mouth").concerned,
			}),
			clothe: avatar.attr("clothe").shirtCrewNeck.set({color: avatar.attr("clothe").attr("color").green}),
			// facialHair: facialHair.beardLight.set({color: hairColors.brownDark}),
			// accessory: avatar.attr("accessory").kurt.set({color: fabricColors.yellow}),
			top: avatar.attr("top").hijab.set({color: avatar.attr("top").attr("color").blue03}),
			avatarStyle: "circle",
		})
		.render();
}
