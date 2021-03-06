/** @module slots */

/**
 * @param {Date} [time]
 * @returns {number}
 */
function getEpochTime(time) {
	if (time === undefined) {
		time = (new Date()).getTime();
	}
	var d = beginEpochTime();
	var t = d.getTime();
	return Math.floor((time - t) / 1000);
}

/**
 * @param {Date} [time]
 * @returns {number}
 */
function getEpochTimeTestnet(time) {
    if (time === undefined) {
        time = (new Date()).getTime();
    }
    var d = beginEpochTimeTestNet();
    var t = d.getTime();
    return Math.floor((time - t) / 1000);
}

/**
 * @returns {Date}
 */
function beginEpochTime() {
	var d = new Date(Date.UTC(2018,1,1,0,0,0,0))

	return d;
}

function beginEpochTimeTestNet() {
    return new Date(Date.UTC(2017, 2, 21, 13, 0, 0, 0))
}

var interval = 8,
    delegates = 51;

/**
 * @param {Date} [time]
 * @returns {number}
 */
function getTime(time) {
	return getEpochTime(time);
}

/**
 * @param {Date} [time]
 * @returns {number}
 */
function getTimeTestnet(time) {
    return getEpochTimeTestnet(time);
}

/**
 * @param {number} [epochTime]
 * @returns {number}
 */
function getRealTime(epochTime) {
	if (epochTime === undefined) {
		epochTime = getTime()
	}
	var d = beginEpochTime();
	var t = Math.floor(d.getTime() / 1000) * 1000;
	return t + epochTime * 1000;
}

/**
 * @param {number} [epochTime]
 * @returns {number}
 */
function getRealTimeTestNet(epochTime) {
    if (epochTime === undefined) {
        epochTime = getTimeTestnet()
    }
    var d = beginEpochTimeTestNet();
    var t = Math.floor(d.getTime() / 1000) * 1000;
    return t + epochTime * 1000;
}


/**
 * @param {number} [epochTime]
 * @returns {number} an integer
 */
function getSlotNumber(epochTime) {
	if (epochTime === undefined) {
		epochTime = getTime()
	}

	return Math.floor(epochTime / interval);
}

/**
 * @param {number} slot
 * @returns {number}
 */
function getSlotTime(slot) {
	return slot * interval;
}

/**
 * @returns {number}
 */
function getNextSlot() {
	var slot = getSlotNumber();

	return slot + 1;
}

/**
 * @param {number} nextSlot
 * @returns {number}
 */
function getLastSlot(nextSlot) {
	return nextSlot + delegates;
}

module.exports = {
	interval: interval,
	delegates: delegates,
	getTime: getTime,
	getTimeTestnet: getTimeTestnet,
	getRealTime: getRealTime,
	getRealTimeTestNet: getRealTimeTestNet,
	getSlotNumber: getSlotNumber,
	getSlotTime: getSlotTime,
	getNextSlot: getNextSlot,
	getLastSlot: getLastSlot
}
