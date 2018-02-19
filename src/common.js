const uidStorage = {};
export class AvatarPart {
	constructor (data) {
		this.data = {};
		this.set(data);
	}
	set (...args) {
		if (typeof args[0] === "string") {
			this.data[args[0]] = args[1];
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
	include (parts) {
		if (parts) {
			if (!Array.isArray(parts)) {
				parts = [parts];
			}
			this.data.defs = this.data.defs || [];
			const result = parts
				.reduce((res, part) => {
					if (part) {
						let blocks = part.render();
						this.data.defs.push(...(part.data.defs || []));
						if (blocks && !Array.isArray(blocks)) {
							blocks = typeof blocks === "string" ? [{content: blocks}] : [blocks];
						}
						res.push(...(blocks || []).map(block => {
							block.zIndex = block.zIndex != null ? block.zIndex : ((part.data || {}).zIndex || 0);
							return block;
						}));
					}
					return res;
				}, [])
				.sort((a, b) => {
					return a.zIndex - b.zIndex;
				});

			return result.reduce((res, part) => {
				return res + part.content;
			}, "");
		}
		return "";
	}
}

export class FacePart extends AvatarPart {
	render () {
		const rendered = super.render();
		return `
			<g transform="translate(76.000000, 82.000000)" fill="#000000">
				${rendered}
			</g>
		`;
	}
}

export function uid (key) {
	key = key || 0;
	uidStorage[key] = (uidStorage[key] || 0) + 1;
	return (key || "") + uidStorage[key];
}
