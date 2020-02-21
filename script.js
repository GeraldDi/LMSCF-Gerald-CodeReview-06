var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Location = /** @class */ (function () {
    function Location(name, city, zipcode, address, teaserimage) {
        this.name = "";
        this.city = "";
        this.zipcode = "";
        this.address = "";
        this.teaserimage = "";
        this.name = name;
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.teaserimage = teaserimage;
    }
    return Location;
}());
function display() {
}
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, zipcode, address, teaserimage, telephonenumber, typer, webadress) {
        var _this = _super.call(this, name, city, zipcode, address, teaserimage) || this;
        _this.telephonenumber = telephonenumber;
        _this.typer = typer;
        _this.webadress = webadress;
        return _this;
    }
    return Restaurant;
}(Location));
function display() {
}
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zipcode, address, teaserimage, eventtime, eventdate, price) {
        var _this = _super.call(this, name, city, zipcode, address, teaserimage) || this;
        _this.eventtime = eventtime;
        _this.eventdate = eventdate;
        _this.price = price;
        return _this;
    }
    return Events;
}(Location));
function display() {
}
var stCharles = new Location("St.Charles Church", "Vienna", 1010, "Karlsplatz 1", "img");
var schoenbrunn = new Location("Schoenbrunn", "Vienna", 1130, "Maxingstraße 13b", "img");
var onrestaurant = new Restaurant("ON Restaurant", "Vienna", 1050, "Wehrgasse 8", "img", "+43(1)5854900", "Chinese", "http://www.restaurant-on.at/");
var biofrische = new Restaurant("BioFrische", "Vienna", 1150, "Stutterheimstraße 6", "img", "+43(1) 9529215", "Indian", "https://biofrische.wien/");
var catthem = new Event("Cats- the musical", "Vienna", 1010, "Ronacher- Seilerstätte 9", "img", "20:00", "Fr., 15.12.2020", 120.00);
var gunsnroses = new Event("Guns ‘n Roses", "Vienna", 1020, "Ernst-Happel Stadion, Meiereistraße 7", "img", "19:30", "Sat, 09.06.2020 ", 95.50);
var arrayOfLocations = [];
arrayOfLocations.push(stCharles);
arrayOfLocations.push(schoenbrunn);
arrayOfLocations.push(onrestaurant);
arrayOfLocations.push(biofrische);
arrayOfLocations.push(catthem);
arrayOfLocations.push(gunsnroses);
