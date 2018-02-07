function makeColor (color, maskId) {
	return `
        <g mask="url(#${maskId})" fill-rule="evenodd" fill="${color}">
            <rect x="0" y="0" width="264" height="280"/>
        </g>
    `;
}

export default makeColor;
