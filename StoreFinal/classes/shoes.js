//class elegantShoes extends shoes {
//    private _tshirtprint: string;
//    public set tshirtprint(name: string) {
//        this._tshirtprint = name;
//    }
//    public get tshirtprint(): string {
//        return this._tshirtprint;
//    }
//    public displayDetails(): void {
//        super.displayDetails();
//        document.write(`T-shirt print is: ${this.tshirtprint} <br>`);
//    }
//    public displayImage(): void {
//        var img = document.createElement('img');
//        img.src = "items/tshirt.jpg";
//        document.body.appendChild(img);
//        document.write("<br>");
//    }
//    constructor(tshirtprint: string = "null", price: number, manufacturer: string, model: string, length: number, size: number, color: string) {
//        super(price, manufacturer, model, length, size, color);
//        this.tshirtprint = tshirtprint;
//    }
//}
//class normalshirt extends shirt {
//    private _buttonsNumber: number;
//    public set buttonsNumber(num: number) {
//        if (num >= 0) {
//            this._buttonsNumber = num;
//        }
//        else {
//            throw "num of buttons is negative!";
//        }
//    }
//    public get buttonsNumber(): number {
//        return this._buttonsNumber
//    }
//    public displayDetails(): void {
//        super.displayDetails();
//        document.write(`num of buttons is: ${this.buttonsNumber} <br>`);
//    }
//    public displayImage(): void {
//        var img = document.createElement('img');
//        img.src = "items/normalshirt.jpg";
//        document.body.appendChild(img);
//        document.write("<br>");
//    }
//    constructor(buttonnumber: number, price: number, manufacturer: string, model: string, length: number, size: number, color: string) {
//        super(price, manufacturer, model, length, size, color);
//        this.buttonsNumber = buttonnumber;
//    }
//}
//class womenshirt extends shirt {
//    private _typeOfCloth: string;
//    public set typeOfCloth(type: string) {
//        this._typeOfCloth = type;
//    }
//    public get typeOfCloth(): string {
//        return this._typeOfCloth;
//    }
//    public displayDetails(): void {
//        super.displayDetails();
//        document.write(`type of cloth is: ${this.typeOfCloth} <br>`);
//    }
//    public displayImage(): void {
//        var img = document.createElement('img');
//        img.src = "items/womenshirt.jpg";
//        document.body.appendChild(img);
//        document.write("<br>");
//    }
//    constructor(typeOfCloth: string, price: number, manufacturer: string, model: string, length: number, size: number, color: string) {
//        super(price, manufacturer, model, length, size, color);
//        this.typeOfCloth = typeOfCloth;
//    }
//}
//# sourceMappingURL=shoes.js.map