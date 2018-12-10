class elegantShoes extends shoes {
    private _typeOfCloth: string;

    public set typeOfCloth(cloth: string) {
        this._typeOfCloth = cloth;
    }

    public get typeOfCloth(): string {
        return this._typeOfCloth;

    }

    public displayDetails(): void {
        super.displayDetails();
        document.write(`shoe type of cloth is: ${this.typeOfCloth} <br>`);
    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/elegantshoes.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(price: number, manufacturer: string, model: string, size: number, color: string, madein: string, islaces: boolean = true, typeOfCloth: string = "leather") {

        super(price, manufacturer, model, size, color, madein, islaces);
        this.typeOfCloth = typeOfCloth;

    }

}

class sportshoes extends shoes {
    private _ManufacturingDate: Date;

    public set ManufacturingDate(date: Date) {
        this._ManufacturingDate = date;
    }

    public get ManufacturingDate(): Date {
        return this._ManufacturingDate;
    }

    public displayDetails(): void {
        super.displayDetails();
        document.write(`Shoes manufacturing date is : ${this.ManufacturingDate.toLocaleDateString()} <br>`);
    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/sportshoes.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }

    constructor(price: number, manufacturer: string, model: string, size: number, color: string, madein: string, islaces: boolean = true, date: Date) {
        super(price, manufacturer, model, size, color, madein, islaces);
        this.ManufacturingDate = date;

    }
}

class comfortShoes extends shoes {
    private _isSole: boolean;

    public set isSole(type: boolean) {
        this._isSole = type;
    }

    public get isSole(): boolean {
        return this._isSole;
    }

    public displayDetails(): void {
        super.displayDetails();
        document.write(`is Sole?: ${this.isSole} <br>`);
    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/comfortshoes.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }

    constructor(price: number, manufacturer: string, model: string, size: number, color: string, madein: string, islaces: boolean = true, isSole: boolean = true) {
        super(price, manufacturer, model, size, color, madein, islaces);
        this.isSole = isSole;

    }
}

class hills extends shoes {
    private _hillType: string;

    public set hillType(type: string) {
        this._hillType = type;
    }

    public get hillType(): string {
        return this._hillType;
    }

    public displayDetails(): void {
        super.displayDetails();
        document.write(`hill type: ${this.hillType} <br>`);
    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/hills.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }

    constructor(price: number, manufacturer: string, model: string, size: number, color: string, madein: string, hillType: string = "high", islaces: boolean = false) {
        super(price, manufacturer, model, size, color, madein, islaces);
        this.hillType = hillType;

    }
}