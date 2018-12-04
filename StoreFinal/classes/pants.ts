class Jeans extends pants {
    private _isRipped: boolean;

    public set isRipped(ripped: boolean) {
        this._isRipped = ripped;
    }

    public get isRipped(): boolean {
        return this._isRipped;

    }

    public displayDetails(): void {
        super.displayDetails();
        document.write(`Jeans is ripped: ${this.isRipped} <br>`);
    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/jeans.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(isRipped: boolean = false, price: number, manufacturer: string, model: string, length: number, size: number, color: string) {

        super(price, manufacturer, model, length, size, color);
        this.isRipped = isRipped;

    }


}


class normalPants extends pants {
    private _numOfPockets: number;

    public set numOfPockets(num: number) {
        this._numOfPockets = num;
    }

    public get numOfPockets(): number {
        return this._numOfPockets;

    }

    public displayDetails(): void {
        super.displayDetails();
        document.write(`num of pockets: ${this.numOfPockets} <br>`);
    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/normalpants.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(numOfPockets: number = 0, price: number, manufacturer: string, model: string, length: number, size: number, color: string) {

        super(price, manufacturer, model, length, size, color);
        this.numOfPockets = numOfPockets;

    }


}

class shorts extends pants {
    private _typeOfCloth: string;

    public set typeOfCloth(type: string) {
        this._typeOfCloth = type;
    }

    public get typeOfCloth(): string {
        return this._typeOfCloth;

    }

    public displayDetails(): void {
        super.displayDetails();
        document.write(`type of cloth: ${this._typeOfCloth} <br>`);
    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/shorts.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(typeOfCloth: string = "silk", price: number, manufacturer: string, model: string, length: number, size: number, color: string) {

        super(price, manufacturer, model, length, size, color);
        this._typeOfCloth = typeOfCloth;

    }


}