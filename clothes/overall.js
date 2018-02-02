import {uid} from "../utils";
import makeColor from "./make-color";

const id = {
    path: uid("path-"),
    mask: uid("mask-"),
};

export {
    defs: [
        `
            <path
                id="${id.path}"
                d="M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z"/>
        `,
        `
            <mask id="${id.mask}" fill="white">
                <use xlink:href="#${id.path}"/>
            </mask>
        `,
    ],
    main: ({dressColor}) => `
        <g class="clothing--overall" transform="translate(0.000000, 170.000000)">
            <use class="overall" fill="#B7C1DB" fill-rule="evenodd" xlink:href="#${id.path}"/>
            ${makeColor(dressColor, id.mask)}
            <circle class="button" fill="#F4F4F4" fill-rule="evenodd" cx="81" cy="83" r="5"/>
            <circle class="button" fill="#F4F4F4" fill-rule="evenodd" cx="183" cy="83" r="5"/>
        </g>
    `,
    attrs: {"dressColor": "color"},
};
