const uidStorage = {};

export function uid (key) {
	key = key || 0;
	uidStorage[key] = (uidStorage[key] || 0) + 1;
	return (key || "") + uidStorage[key];
}
