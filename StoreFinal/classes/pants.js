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
var Jeans = /** @class */ (function (_super) {
    __extends(Jeans, _super);
    function Jeans(isRipped, price, manufacturer, model, length, size, color) {
        if (isRipped === void 0) { isRipped = false; }
        var _this = _super.call(this, price, manufacturer, model, length, size, color) || this;
        _this.isRipped = isRipped;
        return _this;
    }
    Object.defineProperty(Jeans.prototype, "isRipped", {
        get: function () {
            return this._isRipped;
        },
        set: function (ripped) {
            this._isRipped = ripped;
        },
        enumerable: true,
        configurable: true
    });
    Jeans.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Jeans is ripped: " + this.isRipped + " <br>");
    };
    Jeans.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/jeans.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Jeans;
}(pants));
var normalPants = /** @class */ (function (_super) {
    __extends(normalPants, _super);
    function normalPants(numOfPockets, price, manufacturer, model, length, size, color) {
        if (numOfPockets === void 0) { numOfPockets = 0; }
        var _this = _super.call(this, price, manufacturer, model, length, size, color) || this;
        _this.numOfPockets = numOfPockets;
        return _this;
    }
    Object.defineProperty(normalPants.prototype, "numOfPockets", {
        get: function () {
            return this._numOfPockets;
        },
        set: function (num) {
            this._numOfPockets = num;
        },
        enumerable: true,
        configurable: true
    });
    normalPants.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("num of pockets: " + this.numOfPockets + " <br>");
    };
    normalPants.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/normalpants.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return normalPants;
}(pants));
var shorts = /** @class */ (function (_super) {
    __extends(shorts, _super);
    function shorts(typeOfCloth, price, manufacturer, model, length, size, color) {
        if (typeOfCloth === void 0) { typeOfCloth = "silk"; }
        var _this = _super.call(this, price, manufacturer, model, length, size, color) || this;
        _this._typeOfCloth = typeOfCloth;
        return _this;
    }
    Object.defineProperty(shorts.prototype, "typeOfCloth", {
        get: function () {
            return this._typeOfCloth;
        },
        set: function (type) {
            this._typeOfCloth = type;
        },
        enumerable: true,
        configurable: true
    });
    shorts.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("type of cloth: " + this._typeOfCloth + " <br>");
    };
    shorts.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/shorts.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return shorts;
}(pants));
//# sourceMappingURL=pants.js.map