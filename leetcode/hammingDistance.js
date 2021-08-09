function getHammingDist(x, y) {
	const bytesX = (x >>> 0).toString(2);
	const bytesY = (y >>> 0).toString(2);

	const longest = bytesX >= bytesY ? bytesX : bytesY;
	let shortest = longest === bytesX ? bytesY : bytesX;

	while (shortest < longest) {
		shortest = "0" + shortest;
	}

	let hammingDist = 0;
	for (let i of longest) {
		if (longest[i] !== shortest[i]) hammingDist++;
	}

	console.log(hammingDist);
}

console.log(getHammingDist(4, 14));
