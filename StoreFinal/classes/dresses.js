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
var skirt = /** @class */ (function (_super) {
    __extends(skirt, _super);
    function skirt(skirtType, price, manufacturer, model, size, color) {
        if (skirtType === void 0) { skirtType = "Short"; }
        var _this = _super.call(this, price, manufacturer, model, size, color) || this;
        _this.typeOfSkirt = skirtType;
        return _this;
    }
    Object.defineProperty(skirt.prototype, "typeOfSkirt", {
        get: function () {
            return this._typeOfSkirt;
        },
        set: function (name) {
            this._typeOfSkirt = name;
        },
        enumerable: true,
        configurable: true
    });
    skirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("type of skirt is: " + this.typeOfSkirt + " <br>");
    };
    skirt.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/skirt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return skirt;
}(dress));
var longDress = /** @class */ (function (_super) {
    __extends(longDress, _super);
    function longDress(dressLength, exposed, price, manufacturer, model, size, color) {
        if (dressLength === void 0) { dressLength = 1; }
        if (exposed === void 0) { exposed = true; }
        var _this = _super.call(this, price, manufacturer, model, size, color) || this;
        _this.dressLength = dressLength;
        _this.isExposed = exposed;
        return _this;
    }
    Object.defineProperty(longDress.prototype, "dressLength", {
        get: function () {
            return this._dressLength;
        },
        set: function (num) {
            if ((num >= 0) && (num < 3)) {
                this._dressLength = num;
            }
            else {
                throw "length is either too big or negative!";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(longDress.prototype, "isExposed", {
        get: function () {
            return this._isExposed;
        },
        set: function (exposed) {
            if ((exposed = true) || (exposed = false)) {
                this._isExposed = exposed;
            }
            else {
                throw "exposed should be boolean!";
            }
        },
        enumerable: true,
        configurable: true
    });
    longDress.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("length is: " + this.dressLength + " <br> is exposed?: " + this.isExposed + " <br>");
    };
    longDress.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/longDress.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return longDress;
}(dress));
var fancyDress = /** @class */ (function (_super) {
    __extends(fancyDress, _super);
    function fancyDress(typeOfCloth, isExposed, length, price, manufacturer, model, size, color) {
        if (typeOfCloth === void 0) { typeOfCloth = "silk"; }
        if (isExposed === void 0) { isExposed = false; }
        if (length === void 0) { length = 1; }
        var _this = _super.call(this, price, manufacturer, model, length, size, color) || this;
        _this.typeOfCloth = typeOfCloth;
        _this.isExposed = isExposed;
        _this.dressLength = length;
        return _this;
    }
    Object.defineProperty(fancyDress.prototype, "typeOfCloth", {
        get: function () {
            return this._typeOfCloth;
        },
        set: function (type) {
            this._typeOfCloth = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fancyDress.prototype, "dressLength", {
        get: function () {
            return this._dressLength;
        },
        set: function (num) {
            if ((num >= 0) && (num < 3)) {
                this._dressLength = num;
            }
            else {
                throw "length is either too big or negative!";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fancyDress.prototype, "isExposed", {
        get: function () {
            return this._isExposed;
        },
        set: function (exposed) {
            if ((exposed = true) || (exposed = false)) {
                this._isExposed = exposed;
            }
            else {
                throw "exposed should be boolean!";
            }
        },
        enumerable: true,
        configurable: true
    });
    fancyDress.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("type of cloth is: " + this.typeOfCloth + " <br>");
    };
    fancyDress.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/fancyDress.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return fancyDress;
}(shirt));
//# sourceMappingURL=dresses.js.map