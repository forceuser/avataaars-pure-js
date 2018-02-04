function makeColor (color, maskId) {
	return `
        <g class="color--palette-color" mask="url(#${maskId})" fill-rule="evenodd" fill="${color}">
            <rect x="0" y="0" width="264" height="110"/>
        </g>
    `;
}

export default makeColor;
