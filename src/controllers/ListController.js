import Game from "../model/Game";

export default class ListController {

	constructor($scope, $ionicListDelegate, Items) {
		this.items = Items;
		this.listDelegate = $ionicListDelegate;

		$scope.vm = this;
	}

	get listItems() {
		return this.items;
	}

	addItem() {
		let name = prompt("What do want to store?");
		if(name) {
			let game = new Game(name);
			//this.items.$add(JSON.stringify(game));
			this.items.$add({
				"name" : name
			});
		}
    	
	}

	purchaseItem(item) {
		let itemRef = new Firebase("https://spieletruhe.firebaseio.com/items/" + item.$id);
		itemRef.child("status").once('value', (dataSnapshot) => {
			if(dataSnapshot.val() !== null) {
				itemRef.child("status").set(null);
			} 
			else {
				itemRef.child("status").set("purchased");
			}

			this.listDelegate.closeOptionButtons();
		});
	}
}