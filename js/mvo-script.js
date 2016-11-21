//Udacity - Cat Clicker w/MVC Framework

//------Model-----//

var model = {
	showingAdmin: true,
	currentCat: null,
	cats: [
		{
			name: 'Garbanzo',
			image: 'imgs/cat.jpg',
			count: 0
		}, {
			name: 'Bean Cuisine',
			image: 'imgs/cat2.jpg',
			count: 0
		}, {
			name: 'Toulouse',
			image: 'imgs/cat3.jpg',
			count: 0
		}, {
			name: 'Minnie',
			image: 'imgs/cat4.jpg',
			count: 0
		}, {
			name: 'Robert',
			image: 'imgs/cat5.jpg',
			count: 0
		}
	]
};

//------Controller-----//

var octopus = {
	init: function(){
		model.currentCat = model.cats[0];

		listView.init();
		catView.init();
		adminView.init();
	},

	getCats: function(){
		return model.cats;
	},

	increaseCount: function(){
		model.currentCat.count++;
		catView.update();
	},

	getCurrentCat: function(){
		return model.currentCat;
	},

	setCat: function(cat){
		model.currentCat = cat;
	},

	returnPanelStatus: function(){
		return model.showingAdmin;
	},

	hideAdminPanel: function(){
		model.showingAdmin = false;
	},

	showAdminPanel: function(){
		model.showingAdmin = true;
	},

	adminUpdateCatInfo: function(adminCat){
		model.currentCat.name = adminCat.name;
		model.currentCat.image = adminCat.image;
		model.currentCat.counter = adminCat.count;
	}

};


//------Views-----//

var listView = {
	init: function(){
		this.catListElem = document.getElementById('cat-list');

		this.render();
	},

	render: function(){
		var cat, elem, i;

		var catList = octopus.getCats();

		this.catListElem.innerHTML = '';

		for(i = 0; i < catList.length; i++){	
			cat = catList[i];
			elem = document.createElement('li');
			elem.innerHTML = cat.name;
			elem.addEventListener('click', (function(tempCat){
			  	return function() {
			  		octopus.setCat(tempCat);
			  		catView.update();
			  		adminView.fillInAdminPanel();
			  	}
			})(cat));

			this.catListElem.appendChild(elem);
		}
	}
};

var catView = {
	init: function(){
		//Get cat score, name, pic
		this.cat = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-pic');
		this.countElem = document.getElementById('count');

		//increase counter of cat on click 
		this.catImageElem.addEventListener('click', function(){
			octopus.increaseCount();
			adminView.fillInAdminPanel();
		});

		//update dom elements
		this.update();
	},

	update: function(){
		var currentCat = octopus.getCurrentCat();
		this.countElem.textContent = currentCat.count;
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.image;
	}
};

var adminView = {
	init: function(){
		//adds event listener to turn admin panel on/off
		this.adminButtonElem = document.getElementById('admin-button');
		this.adminButtonElem.addEventListener('click', this.panelSwitch);

		//adds event listener to submit admin info changes
		this.adminButtonElem = document.getElementById('admin-button-save');
		this.adminButtonElem.addEventListener('click', this.updateCurrentCatInfo);

		//adds event listener to turn off admin panel
		this.adminButtonElem = document.getElementById('admin-button-reset');
		this.adminButtonElem.addEventListener('click', this.panelSwitch);

		//gets elems of name
		this.adminPanelElem = document.getElementById('admin');

		this.adminPanelNameElem = document.getElementById('catNameId');
		this.adminPanelImageElem = document.getElementById('catImageId');
		this.adminPanelScoreElem = document.getElementById('catScoreId');
		adminView.turnPanelOff();

	},

	panelSwitch: function()	{
		if(octopus.returnPanelStatus()){
			console.log('true');
			adminView.turnPanelOff();
		}else{
			console.log('false');
			adminView.turnPanelOn();
		}
	},

	turnPanelOff: function(){
		console.log('hiding panel');
		octopus.hideAdminPanel();
		this.adminPanelElem.style.display = 'none';
	},

	turnPanelOn: function(){
		console.log('showing panel');
		octopus.showAdminPanel();
		adminView.fillInAdminPanel();
		this.adminPanelElem.style.display = 'block';
	},

	fillInAdminPanel: function(){
		//retrieves all elements in admin panel and adds in the information of the currently displayed cat
		var currentCat = octopus.getCurrentCat();
		this.adminPanelNameElem.value = currentCat.name;
		this.adminPanelImageElem.value = currentCat.image;
		this.adminPanelScoreElem.value = currentCat.count;
	},

	updateCurrentCatInfo: function(){
		var tempName, tempImage, tempCount;
		tempName = adminView.adminPanelNameElem.value;
		tempImage = adminView.adminPanelImageElem.value;
		tempCount = adminView.adminPanelScoreElem.value;

		var tempAdminCat = {
			name: tempName,
			image: tempImage,
			count: tempCount
		};
		octopus.adminUpdateCatInfo(tempAdminCat);
		this.fillInAdminPanel;
		listView.render();
		catView.update();
	}	
};

octopus.init();	