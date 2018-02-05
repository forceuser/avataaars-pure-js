const uidStorage = {};
export class AvatarPart {
	constructor (data) {
		this.data = {};
		this.set(data);
	}
	set (...args) {
		if (typeof args[0] === "string") {
			this.data[args[0]] = this.data[args[1]];
		}
		else {
			this.data = Object.assign(this.data, args[0]);
		}
		return this;
	}
	attr (key) {
		return key ? this.data.attrs[key] : this.data.attrs;
	}
	render () {
		if (typeof this.data.render === "function") {
			return this.data.render.call(this, this.data);
		}
		return this.data.render;
	}
	include (part, options) {
		this.data.defs.push(...(part.data.defs || []));
		return part.render();
	}
}


export function uid (key) {
	key = key || 0;
	uidStorage[key] = (uidStorage[key] || 0) + 1;
	return (key || "") + uidStorage[key];
}
