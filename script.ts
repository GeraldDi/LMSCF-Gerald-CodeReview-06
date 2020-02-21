class Location{
	name="";
	city="";
	zipcode="";
	address="";
	teaserimage="";


	constructor(name,city,zipcode,address,teaserimage){
		this.name=name;
		this.city=city;
		this.zipcode=zipcode;
		this.address=address;
		this.teaserimage=teaserimage;

	}
	function display(){

	} 
}

class Restaurant extends Location{
	telephonenumber;
	typer;
	webadress;


	constructor(name,city,zipcode,address,teaserimage,telephonenumber,typer,webadress){
		super(name,city,zipcode,address,teaserimage);
		this.telephonenumber=telephonenumber;
		this.typer=typer;
		this.webadress=webadress;

	}
	function display(){

	} 
}

class Events extends Location{
	eventtime;
	eventdate;
	price;

	constructor(name,city,zipcode,address,teaserimage,eventtime,eventdate,price){
		super(name,city,zipcode,address,teaserimage);
		this.eventtime=eventtime;
		this.eventdate=eventdate;
		this.price=price;
		

	}
	function display(){

	} 
}

let stCharles= new Location("St.Charles Church","Vienna",1010,"Karlsplatz 1","img");

let schoenbrunn= new Location("Schoenbrunn","Vienna",1130,"Maxingstraße 13b","img");

let onrestaurant= new Restaurant("ON Restaurant","Vienna",1050,"Wehrgasse 8","img","+43(1)5854900", "Chinese","http://www.restaurant-on.at/");
let biofrische= new Restaurant("BioFrische","Vienna",1150,"Stutterheimstraße 6","img","+43(1) 9529215", "Indian","https://biofrische.wien/");

let catthem=new Event("Cats- the musical","Vienna",1010,"Ronacher- Seilerstätte 9","img","20:00","Fr., 15.12.2020",120.00);

let gunsnroses=new Event("Guns ‘n Roses","Vienna",1020,"Ernst-Happel Stadion, Meiereistraße 7","img","19:30","Sat, 09.06.2020 ",95.50);


let arrayOfLocations:Array<any> = [];
arrayOfLocations.push(stCharles);
arrayOfLocations.push(schoenbrunn);
arrayOfLocations.push(onrestaurant);
arrayOfLocations.push(biofrische);
arrayOfLocations.push(catthem);
arrayOfLocations.push(gunsnroses);
