var Generator = /** @class */ (function () {
    function Generator() {
    }
    ///w
    //create random text string
    Generator.createPrint = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    //create random price
    Generator.createPrice = function () {
        var num;
        num = Math.floor(Math.random() * 299) + 1;
        return num;
    };
    //return random manufacturer
    Generator.createManuf = function () {
        var manuf = ["Lacoste", "Billabong", "Ralph Lauren", "ASOS", "Calvin Klein"];
        return (manuf[Math.floor(Math.random() * manuf.length)]);
    };
    //create random model
    Generator.createModel = function () {
        var model = ["Fine", "Elegant", "Hipster", "Nice", "Jack", "Tom", "Rami", "JB"];
        return (model[Math.floor(Math.random() * model.length)]);
    };
    //create random color
    Generator.createColor = function () {
        var colors = ["Green", "Blue", "Yellow", "Red", "Black", "White", "Orange", "Brown"];
        return (colors[Math.floor(Math.random() * colors.length)]);
    };
    //create size 
    Generator.createSize = function () {
        var num;
        num = Math.floor(Math.random() * 48) + 1;
        return num;
    };
    //create length
    Generator.createLength = function () {
        var num;
        num = Math.floor(Math.random() * 2.5) + 0.1;
        return num;
    };
    //button number
    Generator.createButton = function () {
        var num;
        num = Math.floor(Math.random() * 10) + 1;
        return num;
    };
    //create type of cloth
    Generator.createTypeOfCloth = function () {
        var cloths = ["Zamsh", "Cotton", "Silk", "Kashmir", "Thin Cotton", "Lace"];
        return (cloths[Math.floor(Math.random() * cloths.length)]);
    };
    //is ripped
    Generator.isRipped = function () {
        var num;
        num = Math.floor(Math.random() * 1) + 0;
        if (num = 1) {
            return true;
        }
        else {
            return false;
        }
    };
    //type of dress
    Generator.createTypeOfSkirt = function () {
        var cloths = ["short", "long"];
        return (cloths[Math.floor(Math.random() * cloths.length)]);
    };
    Generator.getRandomItem = function () {
        var _itemNum = 1;
        _itemNum = Math.floor(Math.random() * 9) + 1;
        switch (_itemNum) {
            //tshirt
            case 1: {
                return new tshirt(this.createPrint(), this.createPrice(), this.createManuf(), this.createModel(), this.createLength(), this.createSize(), this.createColor());
            }
            //normalshirt
            case 2: {
                return new normalshirt(this.createButton(), this.createPrice(), this.createManuf(), this.createModel(), this.createLength(), this.createSize(), this.createColor());
            }
            //womenshirt
            case 3: {
                return new womenshirt(this.createTypeOfCloth(), this.createPrice(), this.createManuf(), this.createModel(), this.createLength(), this.createSize(), this.createColor());
            }
            //jeans
            case 4: {
                return new Jeans(this.isRipped(), this.createPrice(), this.createManuf(), this.createModel(), this.createLength(), this.createSize(), this.createColor());
            }
            //Normal pants
            case 5: {
                return new normalPants(this.createButton(), this.createPrice(), this.createManuf(), this.createModel(), this.createLength(), this.createSize(), this.createColor());
            }
            //short
            case 6: {
                return new shorts(this.createTypeOfCloth(), this.createPrice(), this.createManuf(), this.createModel(), this.createLength(), this.createSize(), this.createColor());
            }
            //skirt
            case 7: {
                return new skirt(this.createTypeOfSkirt(), this.createPrice(), this.createManuf(), this.createModel(), this.createSize(), this.createColor());
            }
            //normal long dress
            case 8: {
                return new longDress(this.createLength(), this.isRipped(), this.createPrice(), this.createManuf(), this.createModel(), this.createSize(), this.createColor());
            }
            //fancy dress
            case 9: {
                return new fancyDress(this.createTypeOfCloth(), this.isRipped(), this.createLength(), this.createPrice(), this.createManuf(), this.createModel(), this.createSize(), this.createColor());
            }
        }
    };
    return Generator;
}());
//# sourceMappingURL=generator.js.map