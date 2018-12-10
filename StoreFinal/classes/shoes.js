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
var elegantShoes = /** @class */ (function (_super) {
    __extends(elegantShoes, _super);
    function elegantShoes(price, manufacturer, model, size, color, madein, islaces, typeOfCloth) {
        if (islaces === void 0) { islaces = true; }
        if (typeOfCloth === void 0) { typeOfCloth = "leather"; }
        var _this = _super.call(this, price, manufacturer, model, size, color, madein, islaces) || this;
        _this.typeOfCloth = typeOfCloth;
        return _this;
    }
    Object.defineProperty(elegantShoes.prototype, "typeOfCloth", {
        get: function () {
            return this._typeOfCloth;
        },
        set: function (cloth) {
            this._typeOfCloth = cloth;
        },
        enumerable: true,
        configurable: true
    });
    elegantShoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("shoe type of cloth is: " + this.typeOfCloth + " <br>");
    };
    elegantShoes.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/elegantshoes.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return elegantShoes;
}(shoes));
var sportshoes = /** @class */ (function (_super) {
    __extends(sportshoes, _super);
    function sportshoes(price, manufacturer, model, size, color, madein, islaces, date) {
        if (islaces === void 0) { islaces = true; }
        var _this = _super.call(this, price, manufacturer, model, size, color, madein, islaces) || this;
        _this.ManufacturingDate = date;
        return _this;
    }
    Object.defineProperty(sportshoes.prototype, "ManufacturingDate", {
        get: function () {
            return this._ManufacturingDate;
        },
        set: function (date) {
            this._ManufacturingDate = date;
        },
        enumerable: true,
        configurable: true
    });
    sportshoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Shoes manufacturing date is : " + this.ManufacturingDate.toLocaleDateString() + " <br>");
    };
    sportshoes.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/sportshoes.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return sportshoes;
}(shoes));
var comfortShoes = /** @class */ (function (_super) {
    __extends(comfortShoes, _super);
    function comfortShoes(price, manufacturer, model, size, color, madein, islaces, isSole) {
        if (islaces === void 0) { islaces = true; }
        if (isSole === void 0) { isSole = true; }
        var _this = _super.call(this, price, manufacturer, model, size, color, madein, islaces) || this;
        _this.isSole = isSole;
        return _this;
    }
    Object.defineProperty(comfortShoes.prototype, "isSole", {
        get: function () {
            return this._isSole;
        },
        set: function (type) {
            this._isSole = type;
        },
        enumerable: true,
        configurable: true
    });
    comfortShoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("is Sole?: " + this.isSole + " <br>");
    };
    comfortShoes.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/comfortshoes.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return comfortShoes;
}(shoes));
var hills = /** @class */ (function (_super) {
    __extends(hills, _super);
    function hills(price, manufacturer, model, size, color, madein, hillType, islaces) {
        if (hillType === void 0) { hillType = "high"; }
        if (islaces === void 0) { islaces = false; }
        var _this = _super.call(this, price, manufacturer, model, size, color, madein, islaces) || this;
        _this.hillType = hillType;
        return _this;
    }
    Object.defineProperty(hills.prototype, "hillType", {
        get: function () {
            return this._hillType;
        },
        set: function (type) {
            this._hillType = type;
        },
        enumerable: true,
        configurable: true
    });
    hills.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("hill type: " + this.hillType + " <br>");
    };
    hills.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/hills.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return hills;
}(shoes));
//# sourceMappingURL=shoes.js.map