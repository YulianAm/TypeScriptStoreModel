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
var tshirt = /** @class */ (function (_super) {
    __extends(tshirt, _super);
    function tshirt(tshirtprint, price, manufacturer, model, length, size, color) {
        if (tshirtprint === void 0) { tshirtprint = "null"; }
        var _this = _super.call(this, price, manufacturer, model, length, size, color) || this;
        _this.tshirtprint = tshirtprint;
        return _this;
    }
    Object.defineProperty(tshirt.prototype, "tshirtprint", {
        get: function () {
            return this._tshirtprint;
        },
        set: function (name) {
            this._tshirtprint = name;
        },
        enumerable: true,
        configurable: true
    });
    tshirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("T-shirt print is: " + this.tshirtprint + " <br>");
    };
    tshirt.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/tshirt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return tshirt;
}(shirt));
var normalshirt = /** @class */ (function (_super) {
    __extends(normalshirt, _super);
    function normalshirt(buttonnumber, price, manufacturer, model, length, size, color) {
        var _this = _super.call(this, price, manufacturer, model, length, size, color) || this;
        _this.buttonsNumber = buttonnumber;
        return _this;
    }
    Object.defineProperty(normalshirt.prototype, "buttonsNumber", {
        get: function () {
            return this._buttonsNumber;
        },
        set: function (num) {
            if (num >= 0) {
                this._buttonsNumber = num;
            }
            else {
                throw "num of buttons is negative!";
            }
        },
        enumerable: true,
        configurable: true
    });
    normalshirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("num of buttons is: " + this.buttonsNumber + " <br>");
    };
    normalshirt.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/normalshirt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return normalshirt;
}(shirt));
var womenshirt = /** @class */ (function (_super) {
    __extends(womenshirt, _super);
    function womenshirt(typeOfCloth, price, manufacturer, model, length, size, color) {
        var _this = _super.call(this, price, manufacturer, model, length, size, color) || this;
        _this.typeOfCloth = typeOfCloth;
        return _this;
    }
    Object.defineProperty(womenshirt.prototype, "typeOfCloth", {
        get: function () {
            return this._typeOfCloth;
        },
        set: function (type) {
            this._typeOfCloth = type;
        },
        enumerable: true,
        configurable: true
    });
    womenshirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("type of cloth is: " + this.typeOfCloth + " <br>");
    };
    womenshirt.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/womenshirt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return womenshirt;
}(shirt));
//# sourceMappingURL=shirts.js.map