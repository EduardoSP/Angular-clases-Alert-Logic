/*
(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController', function(){
		this.product = gem;
	});

	var gem ={
		name: 'Dodecahedron',
		price: 2.95,
		description: '...',
		canPurchase: true

	}

})();
*/
(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelectTab = function(checkTab){
			return this.tab === checkTab;

		};
	});

	var gems =[
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: '...',
		canPurchase: true,
		images: [
		{

			full: 'img/gema.png',
			thumb: 'img/gema-thumb.png'
		}

		],
		reviews: [
			{
				stars: 5,
				body: "I love this product",
				author: "ed@hot.com"

			}

		]

	},

	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: '...',
		canPurchase: true,
		images: [
		{

			full: 'img/pentagon.jpg',
			thumb: 'img/pentagon.jpg'
		}

		]

	}

	];


})();