var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SunGlasses = /** @class */ (function (_super) {
    __extends(SunGlasses, _super);
    function SunGlasses(price, manufacturer, model, glassColor) {
        if (glassColor === void 0) { glassColor = "Blue"; }
        var _this = _super.call(this, price, manufacturer, model) || this;
        _this.glass_color = glassColor;
        return _this;
    }
    Object.defineProperty(SunGlasses.prototype, "glass_color", {
        get: function () {
            return this._glass_color;
        },
        set: function (color) {
            this._glass_color = color;
        },
        enumerable: true,
        configurable: true
    });
    SunGlasses.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Sungalsses color is: " + this.glass_color + " <br>");
    };
    SunGlasses.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/sunglasses.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return SunGlasses;
}(Accessory));
var Readingglasses = /** @class */ (function (_super) {
    __extends(Readingglasses, _super);
    function Readingglasses(price, manufacturer, model, readds) {
        if (readds === void 0) { readds = 5; }
        var _this = _super.call(this, price, manufacturer, model) || this;
        _this.rec_distance = readds;
        return _this;
    }
    Object.defineProperty(Readingglasses.prototype, "rec_distance", {
        get: function () {
            return this._rec_distance;
        },
        set: function (rec) {
            if ((rec <= 0) || (rec > 50)) {
                throw "distance is above 50 or negative!";
            }
            else {
                this._rec_distance = rec;
            }
        },
        enumerable: true,
        configurable: true
    });
    Readingglasses.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Sungalsses reading distance is: " + this.rec_distance + " <br>");
    };
    Readingglasses.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/readingglasses.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Readingglasses;
}(Accessory));
//# sourceMappingURL=glasses.js.map