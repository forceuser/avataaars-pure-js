function makeColor (color, maskId) {
	return `
		<g mask="url(#${maskId})" fill="${color}">
			<g transform="translate(-32.000000, 0.000000)">
				<rect x="0" y="0" width="264" height="244"/>
			</g>
		</g>
    `;
}

export default makeColor;
