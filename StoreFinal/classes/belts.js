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
var RegularBelt = /** @class */ (function (_super) {
    __extends(RegularBelt, _super);
    function RegularBelt(price, manufacturer, model, color, buckle, material, dimensions) {
        return _super.call(this, price, manufacturer, model, color, buckle, material, dimensions) || this;
    }
    RegularBelt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("**Belt Buckle Color is " + this.belt_buckle_color);
    };
    RegularBelt.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/belt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return RegularBelt;
}(Belt));
//# sourceMappingURL=belts.js.map