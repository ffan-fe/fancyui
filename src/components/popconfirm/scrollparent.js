	var regex = /(auto|scroll)/;

	var parents = function (node, ps) {
		if (node.parentNode === null) {
			return ps;
		}

		return parents(node.parentNode, ps.concat([node]));
	};

	var style = function (node, prop) {
		return getComputedStyle(node, null).getPropertyValue(prop);
	};

	var overflow = function (node) {
		return style(node, "overflow") + style(node, "overflow-y") + style(node, "overflow-x");
	};

	var scroll = function (node) {
		return regex.test(overflow(node));
	};

	var scrollParent = function (node) {
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

	export default scrollParent;