// Utils

const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// Likers

var Likers = document.querySelector("body > div.RnEpo.Yx5HN > div > div > div.Igw0E.IwRSH.eGOV_.vwCYk.i0EQd > div");

if (Likers) {
	(async () => {
		var index = 0;
	
		while (true)
		{
			var container = document.querySelector("body > div.RnEpo.Yx5HN > div > div > div.Igw0E.IwRSH.eGOV_.vwCYk.i0EQd > div > div");
		
			var children = container.children;

			alert("length: " + children.length)
		
			if (children.length === index)
				break ;
		
			while (index < children.length)
			{
				alert(index);

				let button = children[index].querySelector('div.Igw0E.rBNOH.YBx95.ybXk5._4EzTm.soMvl > button');
			
				Likers.scroll({top: children[index].offsetTop, behavior: 'smooth'});

				if (button.innerText === "Follow")
				{
					button.click();
					await sleep(4000);
				}
					
				++index;
			}
		}
	})();
}