
class Locationl{
	name="";
	city="";
	zipcode="";
	address="";
	teaserimage="";
	creationdate="";


	constructor(name,city,zipcode,address,teaserimage,creationdate){
		this.name=name;
		this.city=city;
		this.zipcode=zipcode;
		this.address=address;
		this.teaserimage=teaserimage;
		this.creationdate=creationdate;

	}
	
	display(){
		for(let value of arrayOfLocations){
		$("#texthere").append(`
			<div class="locationcol col-lg-3 col-md-6 col-sm-12 border b-1">
				<div>				
					<p>${value.name}</p>
					<p>${value.city}</p>
					<p>${value.zipcode}</p>
					<p>${value.address}</p>
				</div>
				<div>
				<p>Created: ${value.creationdate}</p>
				<img class="timage" src="img/${value.teaserimage}.jpg">
				</div>
			</div>
		`)
		}	
	}
}

class Restaurant extends Locationl{
	telephonenumber;
	typer;
	webadress;

	constructor(name,city,zipcode,address,teaserimage,creationdate,telephonenumber,typer,webadress){
		super(name,city,zipcode,address,teaserimage,creationdate);
		this.telephonenumber=telephonenumber;
		this.typer=typer;
		this.webadress=webadress;

	}
	display(){
		for(let value of arrayOfRestaurants){
		$("#texthere").append(`
			<div class="locationcol col-lg-3 col-md-6 col-sm-12 border b-1">
				<div>
					<p>${value.name}</p>
					<p>${value.city}</p>
					<p>${value.zipcode}</p>
					<p>${value.address}</p>
				</div>
				<div>
				<p>Created: ${value.creationdate}</p>
				<img class="timage" src="img/${value.teaserimage}.jpg">
				</div>
				<div>
					<p>${value.telephonenumber}</p>
					<p>${value.typer}</p>
					<p>${value.webadress}</p>
				</div>
			</div>
		`)
		}	

	} 
}

class Events extends Locationl{
	eventtime;
	eventdate;
	price;

	constructor(name,city,zipcode,address,teaserimage,creationdate,eventtime,eventdate,price){
		super(name,city,zipcode,address,teaserimage,creationdate);
		this.eventtime=eventtime;
		this.eventdate=eventdate;
		this.price=price;
		

	}
	display(){
		for(let value of arrayOfEvents){
		$("#texthere").append(`
			<div class="locationcol col-lg-3 col-md-6 col-sm-12 border b-1">
				<div>
					<p>${value.name}</p>
					<p>${value.city}</p>
					<p>${value.zipcode}</p>
					<p>${value.address}</p>					
				</div>
				<div>
				<p>Created: ${value.creationdate}</p>
				<img class="timage" src="img/${value.teaserimage}.jpg">
				</div>
				<div>
					<p>time: ${value.eventtime}</p>
					<p>date: ${value.eventdate}</p>
					<p>price: ${value.price} Euro</p>
				</div>
			</div>
		`)
		}	

	}  
}

let stCharles= new Locationl("St.Charles Church","Vienna",1010,"Karlsplatz 1","StCharles","01.10.2020 12:45");

let schoenbrunn= new Locationl("Schoenbrunn","Vienna",1130,"Maxingstraße 13b","schoenbrunn","02.10.2020 12:45");

let onrestaurant= new Restaurant("ON Restaurant","Vienna",1050,"Wehrgasse 8","onrest","03.10.2020 12:45","+43(1)5854900", "Chinese","http://www.restaurant-on.at/");
let biofrische= new Restaurant("BioFrische","Vienna",1150,"Stutterheimstraße 6","biofrische","04.10.2020 12:45","+43(1) 9529215", "Indian","https://biofrische.wien/");

let catthem=new Events("Cats- the musical","Vienna",1010,"Ronacher- Seilerstätte 9","ronacher","05.10.2020 12:45","20:00","Fr., 15.12.2020",120.00);

let gunsnroses=new Events("Guns ‘n Roses","Vienna",1020,"Meiereistraße 7","ernsthappelstadion","06.10.2020 12:45","19:30","Sat, 09.06.2020 ",95.50);


let arrayOfLocations:Array<any> = [];

arrayOfLocations.push(stCharles);
arrayOfLocations.push(schoenbrunn);

let arrayOfRestaurants:Array<any> = [];
arrayOfRestaurants.push(onrestaurant);
arrayOfRestaurants.push(biofrische);

let arrayOfEvents:Array<any> = [];
arrayOfEvents.push(catthem);
arrayOfEvents.push(gunsnroses);


stCharles.display();
onrestaurant.display();
gunsnroses.display();

console.log(arrayOfLocations);
console.log(arrayOfRestaurants);
console.log(arrayOfEvents);

