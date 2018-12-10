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
var Kasket = /** @class */ (function (_super) {
    __extends(Kasket, _super);
    function Kasket(price, manufacturer, model, size, color, diameter, print) {
        if (diameter === void 0) { diameter = 6; }
        if (print === void 0) { print = true; }
        var _this = _super.call(this, price, manufacturer, model, size, color, diameter) || this;
        _this.isCommercialPrint = print;
        return _this;
    }
    Object.defineProperty(Kasket.prototype, "isCommercialPrint", {
        get: function () {
            return this._isCommercialPrint;
        },
        set: function (is) {
            this._isCommercialPrint = is;
        },
        enumerable: true,
        configurable: true
    });
    Kasket.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Hat contains commercial print?: " + this.isCommercialPrint + " <br>");
    };
    Kasket.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/kasket.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Kasket;
}(Hat));
var BrimmedHat = /** @class */ (function (_super) {
    __extends(BrimmedHat, _super);
    function BrimmedHat(price, manufacturer, model, size, color, diameter, height) {
        if (diameter === void 0) { diameter = 6; }
        if (height === void 0) { height = 10; }
        var _this = _super.call(this, price, manufacturer, model, size, color, diameter) || this;
        _this.HatHeight = height;
        return _this;
    }
    Object.defineProperty(BrimmedHat.prototype, "HatHeight", {
        get: function () {
            return this._HatHeight;
        },
        set: function (height) {
            if ((height <= 0) || (height > 20)) {
                throw "height is either negative or 0 or above 20";
            }
            else {
                this._HatHeight = height;
            }
        },
        enumerable: true,
        configurable: true
    });
    BrimmedHat.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("hat height is: " + this.HatHeight + " <br>");
    };
    BrimmedHat.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/brimmed.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return BrimmedHat;
}(Hat));
//# sourceMappingURL=hats.js.map