import $ from 'jquery';
import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-services.js';
import {Button} from './ui/button.js';


// let dataService = new FleetDataService();
// dataService.loadData(fleet);

// // let car = dataService.getCarByLicense('AT9900');

// let cars = dataService.getCarsSortedByLicense();
// for (let car of cars)
//     console.log(car.license);


let b = new Button('Click Me');
b.appendToElement($('body'));
