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
var regularJacket = /** @class */ (function (_super) {
    __extends(regularJacket, _super);
    function regularJacket(price, manufacturer, model, size, color, thickness, numOfPockets) {
        if (numOfPockets === void 0) { numOfPockets = 2; }
        var _this = _super.call(this, price, manufacturer, model, size, color, thickness) || this;
        _this.numberOfPockets = numOfPockets;
        return _this;
    }
    Object.defineProperty(regularJacket.prototype, "numberOfPockets", {
        get: function () {
            return this._numberOfPockets;
        },
        set: function (num) {
            if ((num < 0) || (num > 20)) {
                throw "num of pockets should be at least 0 and NOT above 20!";
            }
            else {
                this._numberOfPockets = num;
            }
        },
        enumerable: true,
        configurable: true
    });
    regularJacket.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Jacket number of pockets is : " + this.numberOfPockets + " <br>");
    };
    regularJacket.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/jacket.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return regularJacket;
}(Jacket));
var Coat = /** @class */ (function (_super) {
    __extends(Coat, _super);
    function Coat(price, manufacturer, model, size, color, thickness, isRain) {
        if (isRain === void 0) { isRain = true; }
        var _this = _super.call(this, price, manufacturer, model, size, color, thickness) || this;
        _this.isRainCoat = isRain;
        return _this;
    }
    Object.defineProperty(Coat.prototype, "isRainCoat", {
        get: function () {
            return this._isRainCoat;
        },
        set: function (rain) {
            this._isRainCoat = rain;
        },
        enumerable: true,
        configurable: true
    });
    Coat.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Coat is rain coat?: " + this.isRainCoat + " <br>");
    };
    Coat.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/coat.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Coat;
}(Jacket));
//# sourceMappingURL=jackets.js.map