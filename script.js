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
var Locationl = /** @class */ (function () {
    function Locationl(name, city, zipcode, address, teaserimage, creationdate) {
        this.name = "";
        this.city = "";
        this.zipcode = "";
        this.address = "";
        this.teaserimage = "";
        this.creationdate = "";
        this.name = name;
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.teaserimage = teaserimage;
        this.creationdate = creationdate;
    }
    Locationl.prototype.display = function () {
        for (var _i = 0, arrayOfLocations_1 = arrayOfLocations; _i < arrayOfLocations_1.length; _i++) {
            var value = arrayOfLocations_1[_i];
            $("#texthere").append("\n\t\t\t<div class=\"locationcol col-lg-3 col-md-6 col-sm-12 border b-1\">\n\t\t\t\t<div>\t\t\t\t\n\t\t\t\t\t<p>" + value.name + "</p>\n\t\t\t\t\t<p>" + value.city + "</p>\n\t\t\t\t\t<p>" + value.zipcode + "</p>\n\t\t\t\t\t<p>" + value.address + "</p>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t<p>Created: " + value.creationdate + "</p>\n\t\t\t\t<img class=\"timage\" src=\"img/" + value.teaserimage + ".jpg\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
        }
    };
    return Locationl;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, zipcode, address, teaserimage, creationdate, telephonenumber, typer, webadress) {
        var _this = _super.call(this, name, city, zipcode, address, teaserimage, creationdate) || this;
        _this.telephonenumber = telephonenumber;
        _this.typer = typer;
        _this.webadress = webadress;
        return _this;
    }
    Restaurant.prototype.display = function () {
        for (var _i = 0, arrayOfRestaurants_1 = arrayOfRestaurants; _i < arrayOfRestaurants_1.length; _i++) {
            var value = arrayOfRestaurants_1[_i];
            $("#texthere").append("\n\t\t\t<div class=\"locationcol col-lg-3 col-md-6 col-sm-12 border b-1\">\n\t\t\t\t<div>\n\t\t\t\t\t<p>" + value.name + "</p>\n\t\t\t\t\t<p>" + value.city + "</p>\n\t\t\t\t\t<p>" + value.zipcode + "</p>\n\t\t\t\t\t<p>" + value.address + "</p>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t<p>Created: " + value.creationdate + "</p>\n\t\t\t\t<img class=\"timage\" src=\"img/" + value.teaserimage + ".jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<p>" + value.telephonenumber + "</p>\n\t\t\t\t\t<p>" + value.typer + "</p>\n\t\t\t\t\t<p>" + value.webadress + "</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
        }
    };
    return Restaurant;
}(Locationl));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zipcode, address, teaserimage, creationdate, eventtime, eventdate, price) {
        var _this = _super.call(this, name, city, zipcode, address, teaserimage, creationdate) || this;
        _this.eventtime = eventtime;
        _this.eventdate = eventdate;
        _this.price = price;
        return _this;
    }
    Events.prototype.display = function () {
        for (var _i = 0, arrayOfEvents_1 = arrayOfEvents; _i < arrayOfEvents_1.length; _i++) {
            var value = arrayOfEvents_1[_i];
            $("#texthere").append("\n\t\t\t<div class=\"locationcol col-lg-3 col-md-6 col-sm-12 border b-1\">\n\t\t\t\t<div>\n\t\t\t\t\t<p>" + value.name + "</p>\n\t\t\t\t\t<p>" + value.city + "</p>\n\t\t\t\t\t<p>" + value.zipcode + "</p>\n\t\t\t\t\t<p>" + value.address + "</p>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t<p>Created: " + value.creationdate + "</p>\n\t\t\t\t<img class=\"timage\" src=\"img/" + value.teaserimage + ".jpg\">\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<p>time: " + value.eventtime + "</p>\n\t\t\t\t\t<p>date: " + value.eventdate + "</p>\n\t\t\t\t\t<p>price: " + value.price + " Euro</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
        }
    };
    return Events;
}(Locationl));
var stCharles = new Locationl("St.Charles Church", "Vienna", 1010, "Karlsplatz 1", "StCharles", "01.10.2020 12:45");
var schoenbrunn = new Locationl("Schoenbrunn", "Vienna", 1130, "Maxingstraße 13b", "schoenbrunn", "02.10.2020 12:45");
var onrestaurant = new Restaurant("ON Restaurant", "Vienna", 1050, "Wehrgasse 8", "onrest", "03.10.2020 12:45", "+43(1)5854900", "Chinese", "http://www.restaurant-on.at/");
var biofrische = new Restaurant("BioFrische", "Vienna", 1150, "Stutterheimstraße 6", "biofrische", "04.10.2020 12:45", "+43(1) 9529215", "Indian", "https://biofrische.wien/");
var catthem = new Events("Cats- the musical", "Vienna", 1010, "Ronacher- Seilerstätte 9", "ronacher", "05.10.2020 12:45", "20:00", "Fr., 15.12.2020", 120.00);
var gunsnroses = new Events("Guns ‘n Roses", "Vienna", 1020, "Meiereistraße 7", "ernsthappelstadion", "06.10.2020 12:45", "19:30", "Sat, 09.06.2020 ", 95.50);
var arrayOfLocations = [];
arrayOfLocations.push(stCharles);
arrayOfLocations.push(schoenbrunn);
var arrayOfRestaurants = [];
arrayOfRestaurants.push(onrestaurant);
arrayOfRestaurants.push(biofrische);
var arrayOfEvents = [];
arrayOfEvents.push(catthem);
arrayOfEvents.push(gunsnroses);
stCharles.display();
onrestaurant.display();
gunsnroses.display();
console.log(arrayOfLocations);
console.log(arrayOfRestaurants);
console.log(arrayOfEvents);
