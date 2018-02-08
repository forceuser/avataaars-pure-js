import {fabricColors, hairColors, skinColors} from "./colors";
import avatar from "./avatar";

export {avatar};

function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomVal (collection) {
	if (Array.isArray(collection)) {
		return collection[getRandomInt(0, collection.length - 1)];
	}
	else {
		const keys = Object.keys(collection);
		return collection[keys[getRandomInt(0, keys.length - 1)]];
	}
}

random.getRandomInt = getRandomInt;
random.randomVal = randomVal;

export function random (target, part, selectFunc = randomVal) {
	if (target instanceof avatar.constructor) {
		if (part) {
			part.target.set(part.key, target);
		}
		const attrs = target.attr() || {};
		const keys = Object.keys(attrs);
		keys.forEach(key => {
			random(attrs[key], {
				key,
				target,
				path: part ? `${part.key}.${key}` : key,
			}, selectFunc);
		});
	}
	else if (typeof target === "object") {
		const keys = Object.keys(target);
		const key = selectFunc(keys, part, target);
		random(target[key], Object.assign({}, part, {
			path: `${part.path}.${key}`,
		}), selectFunc);
	}
	else {
		if (part) {
			part.target.set(part.key, target);
		}
	}
	return target;
}
