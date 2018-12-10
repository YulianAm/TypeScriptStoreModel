class Kasket extends Hat {
    private _isCommercialPrint: boolean;

    public set isCommercialPrint(is: boolean) {
        this._isCommercialPrint = is;
    }

    public get isCommercialPrint(): boolean {
        return this._isCommercialPrint;

    }

    public displayDetails(): void {
        super.displayDetails();
        document.write(`Hat contains commercial print?: ${this.isCommercialPrint} <br>`);
    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/kasket.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(price: number, manufacturer: string, model: string, size: number, color: string, diameter: number = 6, print = true) {

        super(price, manufacturer, model, size, color, diameter);
        this.isCommercialPrint = print;

    }

}


class BrimmedHat extends Hat {
    private _HatHeight: number;

    public set HatHeight(height: number) {
         if ( (height <= 0) || (height > 20) ) {
             throw "height is either negative or 0 or above 20";
        }
        else {
             this._HatHeight = height;
        }
    }
    public get HatHeight(): number {
        return this._HatHeight;
    }

    public displayDetails(): void {
        super.displayDetails();
        document.write(`hat height is: ${this.HatHeight} <br>`);
    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/brimmed.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }

    constructor(price: number, manufacturer: string, model: string, size: number, color: string, diameter: number = 6, height: number = 10) {

        super(price, manufacturer, model, size, color, diameter);
        this.HatHeight = height;

    }
}