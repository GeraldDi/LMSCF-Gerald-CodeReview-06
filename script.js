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
    function Locationl(name, city, zipcode, address, teaserimage) {
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
    Locationl.prototype.display = function () {
        console.log("display successful");
        for (var _i = 0, arrayOfLocations_1 = arrayOfLocations; _i < arrayOfLocations_1.length; _i++) {
            var value = arrayOfLocations_1[_i];
            $("#texthere").append("\n\t\t\t<div class=\"locationcol\">\n\t\t\t\t<div>\n\t\t\t\t\t<p>" + value.name + "</p>\n\t\t\t\t\t<p>" + value.city + "</p>\n\t\t\t\t\t<p>" + value.zipcode + "</p>\n\t\t\t\t\t<p>" + value.address + "</p>\n\t\t\t\t\t<p>" + value.teaserimage + "</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
        }
    };
    return Locationl;
}());
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
}(Locationl));
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
}(Locationl));
var stCharles = new Locationl("St.Charles Church", "Vienna", 1010, "Karlsplatz 1", "img");
var schoenbrunn = new Locationl("Schoenbrunn", "Vienna", 1130, "Maxingstraße 13b", "img");
var onrestaurant = new Restaurant("ON Restaurant", "Vienna", 1050, "Wehrgasse 8", "img", "+43(1)5854900", "Chinese", "http://www.restaurant-on.at/");
var biofrische = new Restaurant("BioFrische", "Vienna", 1150, "Stutterheimstraße 6", "img", "+43(1) 9529215", "Indian", "https://biofrische.wien/");
var catthem = new Events("Cats- the musical", "Vienna", 1010, "Ronacher- Seilerstätte 9", "img", "20:00", "Fr., 15.12.2020", 120.00);
var gunsnroses = new Events("Guns ‘n Roses", "Vienna", 1020, "Ernst-Happel Stadion, Meiereistraße 7", "img", "19:30", "Sat, 09.06.2020 ", 95.50);
var arrayOfLocations = [];
arrayOfLocations.push(stCharles);
arrayOfLocations.push(schoenbrunn);
arrayOfLocations.push(onrestaurant);
arrayOfLocations.push(biofrische);
arrayOfLocations.push(catthem);
arrayOfLocations.push(gunsnroses);
