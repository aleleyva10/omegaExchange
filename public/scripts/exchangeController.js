var app = angular.module('myApp', []);

app.controller('ExchangeController', ExchangeController);

function ExchangeController(){

  // variables
  const vm = this;
  const STARTPRICE = 5;
  vm.objectArray = [];

  class Item {

    constructor(name, src){
      this.name = name;
      this.price = STARTPRICE;
      this.imageSrc = src;
    } // end constructor

    priceChange(){
      let change = Number(( ( Math.random() * (100) - 50 ) / 100).toFixed(2));
      this.price += change;
    } // end priceChange

  } // end item Class

  let masterArray = [
    ['Batman', '/images/001-batman.png'],
    ['Wine', '/images/002-wine.png'],
    ['Diamond', '/images/003-diamond.png'],
    ['Teddy Bear', '/images/004-teddy-bear.png'],
    ['BluRay', '/images/005-dvd.png'],
    ['Alarm Clock', '/images/006-alarm-clock.png'],
    ['Lamp', '/images/007-lamp.png'],
    ['Toaster', '/images/008-toaster.png'],
    ['Bananas', '/images/009-bananas.png'],
    ['Orange', '/images/010-orange.png'],
    ['Grapes', '/images/011-grapes.png'],
    ['Apple', '/images/012-apple.png']
  ]; // end masterArray

  for (var i = 0; i < masterArray.length; i++) {
    vm.objectArray.push(new Item (masterArray[i][0], masterArray[i][1]));
  } // fill objectArray with Items from masterArray

  console.log(vm.objectArray);
} // end exchangeController
