import clothes from "./clothes/index";
// import accessories from "accessories/index";
// import faces from "faces/index";
// import facialHair from "facial-hair/index";
// import top from "./top/index";
import body from "./body";
import {AvatarPart, uid} from "./common";

const id = {
	bodyMask: uid("mask-"),
	bodyPath: uid("path-"),
	contentMask: uid("mask-"),
	contentPath: uid("path-"),
	circleMask: uid("mask-"),
	circlePath: uid("path-"),
};

const avatar = new AvatarPart({
	circle () {
		return `
			<g
				class="circle"
				stroke-width="1"
				fill-rule="evenodd"
				transform="translate(12.000000, 40.000000)">
				<use
					class="circle-background"
					fill="#E6E6E6"
					xlink:href="#${id.circlePath}"
				/>
				<g mask="url(#${id.circleMask})" fill="#65C9FF">
					<rect x="0" y="0" width="240" height="240" />
				</g>
			</g>`;
	},
	defs: [
		`<path
			id="${id.bodyPath}"
			d="M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z"
		/>`,
		`<mask id="${id.bodyMask}" fill="white">
			<use xlink:href="#${id.bodyPath}" />
		</mask>`,
		`<circle id="${id.circlePath}" cx="120" cy="120" r="120" />`,
		`<mask id="${id.circleMask}" fill="white">
			<use xlink:href="#${id.circlePath}" />
		</mask>`,
		`<path
			id="${id.contentPath}"
			d="M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z"
		/>`,
		`<mask id="${id.contentMask}" fill="white">
			<use xlink:href="#${id.contentPath}" />
		</mask>`,
	],
	render ({defs, clothe, accessory, face, top, skin, facialHair, avatarStyle, circle}) {
		return `
		<svg width="264px" height="280px" viewBox="0 0 264 280" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<defs>
				%defs%
			</defs>
			<g class="avataaar" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<g class="avataaar-circle" transform="translate(-825.000000, -1100.000000)">
				  	<g transform="translate(825.000000, 1100.000000)">
						${avatarStyle === "circle" ? circle() : ""}
						<g
							class="avataaar-content"
							stroke-width="1"
							fill-rule="evenodd"
							mask="url(#${id.contentMask})">
							${this.include(body.set({maskID: id.bodyMask, color: skin}))}
							${this.include(clothe)/*}
							${this.include(face)}
							${this.include(facialHair)}
							${this.include(accessory)}
							${this.include(top)*/}
						</g>
				  	</g>
				</g>
			</g>
		</svg>`.replace("%defs%", defs.join("\n"));
	},
	attrs: {
		skin: body.attr("color"),
		clothe: clothes,
		// accesory: accessories,
		// facialHair,
		// face: faces,
		// top,
		avatarStyle: ["none", "circle"],
	},
});

export function render () {
	return avatar
		.set({
			skin: body.attr("color").brown,
			clothe: clothes.ShirtCrewNeck.set({color: "#FF488E"}),
			avatarStyle: avatar.attr("avatarStyle")[1],
		})
		.render();
}
