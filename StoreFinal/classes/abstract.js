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
var item = /** @class */ (function () {
    function item(item_price, item_manufacturer, item_model) {
        if (item_price === void 0) { item_price = 0; }
        if (item_manufacturer === void 0) { item_manufacturer = ""; }
        if (item_model === void 0) { item_model = ""; }
        this.item_price = item_price;
        this.item_manufacturer = item_manufacturer;
        this.item_model = item_model;
    }
    Object.defineProperty(item.prototype, "item_price", {
        get: function () {
            return this._item_price;
        },
        set: function (price) {
            if (price >= 0) {
                this._item_price = price;
            }
            else {
                throw "set price for item param price is negative!";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(item.prototype, "item_manufacturer", {
        get: function () {
            return this._item_manufacturer;
        },
        set: function (manuf) {
            this._item_manufacturer = manuf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(item.prototype, "item_model", {
        get: function () {
            return this._item_model;
        },
        set: function (model) {
            this._item_model = model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(item.prototype, "brand", {
        get: function () {
            var add;
            add = this.item_manufacturer + "&nbsp" + this.item_model;
            return add;
        },
        enumerable: true,
        configurable: true
    });
    item.prototype.displayDetails = function () {
        document.write("item manufacturer is: " + this.item_manufacturer + " <br> item model is: " + this.item_model + " <br> item price is: " + this.item_price + " <br>");
    };
    item.prototype.getPriceWithoutVat = function () {
        var newPrice;
        newPrice = this.item_price * (1 - Vat);
        return (parseInt(newPrice.toFixed(2)));
    };
    return item;
}());
var shirt = /** @class */ (function (_super) {
    __extends(shirt, _super);
    function shirt(price, item_manufacturer, item_model, shirt_length, shirt_size, shirt_color) {
        if (shirt_length === void 0) { shirt_length = 2; }
        if (shirt_size === void 0) { shirt_size = 2; }
        if (shirt_color === void 0) { shirt_color = "black"; }
        var _this = _super.call(this, price, item_manufacturer, item_model) || this;
        _this.shirt_length = shirt_length;
        _this.shirt_size = shirt_size;
        _this.shirt_color = shirt_color;
        return _this;
    }
    Object.defineProperty(shirt.prototype, "shirt_length", {
        get: function () {
            return this._shirt_length;
        },
        set: function (length) {
            if ((length <= 0) || (length > 3)) {
                throw "length is either negative or 0 or above 3";
            }
            else {
                this._shirt_length = length;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(shirt.prototype, "shirt_size", {
        get: function () {
            return this._shirt_size;
        },
        set: function (size) {
            if ((size <= 0) || (size > 100)) {
                throw "size is either negative or 0 or above 100";
            }
            else {
                this._shirt_size = size;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(shirt.prototype, "shirt_color", {
        get: function () {
            return this._shirt_color;
        },
        set: function (color) {
            this._shirt_color = color;
        },
        enumerable: true,
        configurable: true
    });
    shirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("shirt length is: " + this.shirt_length + " <br> shirt size is: " + this.shirt_size + " <br> shirt color is: " + this.shirt_color + " <br>");
    };
    return shirt;
}(item));
var pants = /** @class */ (function (_super) {
    __extends(pants, _super);
    function pants(price, item_manufacturer, item_model, pants_length, pants_size, pants_color) {
        if (pants_length === void 0) { pants_length = 2; }
        if (pants_size === void 0) { pants_size = 2; }
        if (pants_color === void 0) { pants_color = "black"; }
        var _this = _super.call(this, price, item_manufacturer, item_model) || this;
        _this.pants_length = pants_length;
        _this.pants_size = pants_size;
        _this.pants_color = pants_color;
        return _this;
    }
    Object.defineProperty(pants.prototype, "pants_length", {
        get: function () {
            return this._pants_length;
        },
        set: function (length) {
            if ((length <= 0) || (length > 3)) {
                throw "length is either negative or 0 or above 3";
            }
            else {
                this._pants_length = length;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pants.prototype, "pants_size", {
        get: function () {
            return this._pants_size;
        },
        set: function (size) {
            if ((size <= 0) || (size > 100)) {
                throw "size is either negative or 0 or above 100";
            }
            else {
                this._pants_size = size;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pants.prototype, "pants_color", {
        get: function () {
            return this._pants_color;
        },
        set: function (color) {
            this._pants_color = color;
        },
        enumerable: true,
        configurable: true
    });
    pants.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("pants length is: " + this.pants_length + " <br> pants size is: " + this.pants_size + " <br> shirt color is: " + this.pants_color + " <br>");
    };
    return pants;
}(item));
var dress = /** @class */ (function (_super) {
    __extends(dress, _super);
    function dress(price, item_manufacturer, item_model, dress_size, dress_color) {
        if (dress_size === void 0) { dress_size = 2; }
        if (dress_color === void 0) { dress_color = "pink"; }
        var _this = _super.call(this, price, item_manufacturer, item_model) || this;
        _this.dress_size = dress_size;
        _this.dress_color = dress_color;
        return _this;
    }
    Object.defineProperty(dress.prototype, "dress_size", {
        get: function () {
            return this._dress_size;
        },
        set: function (size) {
            if ((size <= 0) || (size > 50)) {
                throw "size is either negative or 0 or above 50";
            }
            else {
                this._dress_size = size;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(dress.prototype, "dress_color", {
        get: function () {
            return this._dress_color;
        },
        set: function (color) {
            this._dress_color = color;
        },
        enumerable: true,
        configurable: true
    });
    dress.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("dress size is: " + this.dress_size + " <br> dress color is: " + this.dress_color + " <br>");
    };
    return dress;
}(item));
var shoes = /** @class */ (function (_super) {
    __extends(shoes, _super);
    function shoes(price, item_manufacturer, item_model, shoe_size, shoe_color) {
        if (shoe_size === void 0) { shoe_size = 36; }
        if (shoe_color === void 0) { shoe_color = "white"; }
        var _this = _super.call(this, price, item_manufacturer, item_model) || this;
        _this.shoe_size = shoe_size;
        _this.shoe_color = shoe_color;
        return _this;
    }
    Object.defineProperty(shoes.prototype, "shoe_size", {
        get: function () {
            return this._shoe_size;
        },
        set: function (size) {
            if ((size <= 0) || (size > 50)) {
                throw "size is either negative or 0 or above 50";
            }
            else {
                this._shoe_size = size;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(shoes.prototype, "shoe_color", {
        get: function () {
            return this._shoe_color;
        },
        set: function (color) {
            this._shoe_color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(shoes.prototype, "isLaces", {
        get: function () {
            return this._isLaces;
        },
        set: function (laces) {
            this._isLaces = laces;
        },
        enumerable: true,
        configurable: true
    });
    shoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("shoe size is: " + this.shoe_size + " <br> shoe color is: " + this.shoe_color + " <br>");
    };
    return shoes;
}(item));
//# sourceMappingURL=abstract.js.map