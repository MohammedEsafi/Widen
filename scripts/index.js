if (!window.sleep)
	window.sleep = (milliseconds) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

const detection = () => {
	// Likers

	var Likers = document.querySelector(
		'body > div.RnEpo.Yx5HN > div > div > div.Igw0E.IwRSH.eGOV_.vwCYk.i0EQd > div'
	);

	if (Likers) {
		(async () => {
			let breakpoint = null;

			while (true) {
				let container = document.querySelector(
					'body > div.RnEpo.Yx5HN > div > div > div.Igw0E.IwRSH.eGOV_.vwCYk.i0EQd > div > div'
				);

				let lastUser =
					container.children[container.children.length - 1].querySelector(
						'div > span > a'
					).innerText;

				if (breakpoint === lastUser) break;
				else breakpoint = lastUser;

				for (const node of Array.from(container.children)) {
					let button = node.querySelector(
						'div.Igw0E.rBNOH.YBx95.ybXk5._4EzTm.soMvl > button'
					);

					if (button?.innerText === 'Follow') {
						Likers.scroll({ top: node.offsetTop, behavior: 'smooth' });
						button.click();
						await sleep(6000);
					}
				}
			}
		})();
	}

	// Followers

	var Followers = document.querySelector(
		'body > div.RnEpo.Yx5HN > div > div > div.isgrP'
	);

	if (Followers) {
		(async () => {
			let index = 0;

			while (true) {
				let container = document.querySelector(
					'body > div.RnEpo.Yx5HN > div > div > div.isgrP > ul > div'
				);

				if (index === container.children.length) break;

				while (index < container.children.length) {
					let node = container.children[index];

					let button = node.querySelector('div > div > button');

					if (button?.innerText === 'Follow') {
						Followers.scroll({ top: node.offsetTop, behavior: 'smooth' });
						button.click();
						await sleep(6000);
					}

					++index;
				}
			}
		})();
	}

	// Following

	var Following = document.querySelector(
		'body > div.RnEpo.Yx5HN > div > div > div.isgrP'
	);

	if (Following) {
		(async () => {
			let index = 0;

			while (true) {
				let container = document.querySelector(
					'body > div.RnEpo.Yx5HN > div > div > div.isgrP > ul > div'
				);

				if (index === container.children.length) break;

				while (index < container.children.length) {
					let node = container.children[index];

					let button = node.querySelector('div > div > button');

					if (button?.innerText === 'Follow') {
						Following.scroll({ top: node.offsetTop, behavior: 'smooth' });
						button.click();
						await sleep(6000);
					}

					++index;
				}
			}
		})();
	}
};

document.addEventListener('click', () => {
	const actions = ['Likes', 'Followers', 'Following'];

	setTimeout(() => {
		const node = document.querySelector(
			'body > div.RnEpo.Yx5HN > div > div > div:nth-child(1) > div > h1'
		);

		if (node && actions.includes(node.innerText.trim())) {
			const button = document.createElement('button');
			button.style.cursor = 'pointer';
			button.style.border = 'none';
			button.style.borderRadius = '5px';
			button.style.backgroundColor = '#efefef';
			button.style.padding = '4px';
			button.style.display = 'flex';
			button.style.marginLeft = '10px';

			const image = document.createElement('img');
			image.src = 'https://overhang.vercel.app/overhang-small.svg';
			image.style.maxHeight = '14px';

			button.appendChild(image);
			button.addEventListener('click', detection);

			node.innerHTML = node.innerText;
			node.appendChild(button);
		}
	}, 1000);
});
