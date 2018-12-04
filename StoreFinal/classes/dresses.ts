class skirt extends dress {
    private _typeOfSkirt: string;

    public set typeOfSkirt(name: string) {
        this._typeOfSkirt = name;
    }

    public get typeOfSkirt(): string {
        return this._typeOfSkirt;

    }

    public displayDetails(): void {
        super.displayDetails();
        document.write(`type of skirt is: ${this.typeOfSkirt} <br>`);
    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/skirt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(skirtType: string = "Short", price: number, manufacturer: string, model: string, size: number, color: string) {

        super(price, manufacturer, model, size, color);
        this.typeOfSkirt = skirtType;

    }

}

class longDress extends dress {
    private _dressLength: number;
    private _isExposed: boolean;

    public set dressLength(num: number) {
        if ( (num >= 0) && (num<3) ){
            this._dressLength = num;
        }
        else {
            throw "length is either too big or negative!";

        }
    }
    public set isExposed(exposed: boolean) {
        if ((exposed = true) || (exposed = false)) {
            this._isExposed = exposed;
        }
        else {
            throw "exposed should be boolean!"
        }
    }

    public get dressLength(): number {
        return this._dressLength
    }
    public get isExposed(): boolean {
        return this._isExposed;
    }

    public displayDetails(): void {
        super.displayDetails();
        document.write(`length is: ${this.dressLength} <br> is exposed?: ${this.isExposed} <br>`);

    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/longDress.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }

    constructor(dressLength: number = 1, exposed: boolean = true, price: number, manufacturer: string, model: string, size: number, color: string) {

        super(price, manufacturer, model, size, color);
        this.dressLength = dressLength;
        this.isExposed = exposed;


    }
}

class fancyDress extends shirt {
    private _typeOfCloth: string;
    private _dressLength: number;
    private _isExposed: boolean;


    public set typeOfCloth(type: string) {
        this._typeOfCloth = type;
    }
    public set dressLength(num: number) {
        if ((num >= 0) && (num < 3)) {
            this._dressLength = num;
        }
        else {
            throw "length is either too big or negative!";

        }
    }
    public set isExposed(exposed: boolean) {
        if ((exposed = true) || (exposed = false)) {
            this._isExposed = exposed;
        }
        else {
            throw "exposed should be boolean!"
        }
    }


    public get typeOfCloth(): string {
        return this._typeOfCloth;
    }
    public get dressLength(): number {
        return this._dressLength
    }
    public get isExposed(): boolean {
        return this._isExposed;
    }

    public displayDetails(): void {
        super.displayDetails();
        document.write(`type of cloth is: ${this.typeOfCloth} <br>`);
    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/fancyDress.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }

    constructor(typeOfCloth: string = "silk", isExposed: boolean =false, length: number = 1, price: number, manufacturer: string, model: string, size: number, color: string) {

        super(price, manufacturer, model, length, size, color);
        this.typeOfCloth = typeOfCloth;
        this.isExposed = isExposed;
        this.dressLength = length;



    }
}