"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var regex = /(auto|scroll)/;

var parents = function parents(node, ps) {
	if (node.parentNode === null) {
		return ps;
	}

	return parents(node.parentNode, ps.concat([node]));
};

var style = function style(node, prop) {
	return getComputedStyle(node, null).getPropertyValue(prop);
};

var overflow = function overflow(node) {
	return style(node, "overflow") + style(node, "overflow-y") + style(node, "overflow-x");
};

var scroll = function scroll(node) {
	return regex.test(overflow(node));
};

var scrollParent = function scrollParent(node) {
	if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
		return;
	}

	var ps = parents(node.parentNode, []);

	for (var i = 0; i < ps.length; i += 1) {
		if (scroll(ps[i])) {
			return ps[i];
		}
	}

	return document.body;
};

exports.default = scrollParent;