class regularJacket extends Jacket {
    private _numberOfPockets: number;

    public set numberOfPockets(num: number) {
        if ( (num < 0) || (num > 20) ) {
            throw "num of pockets should be at least 0 and NOT above 20!"
        }
        else {
        this._numberOfPockets = num;
        }
    }

    public get numberOfPockets(): number {
        return this._numberOfPockets;

    }

    public displayDetails(): void {
        super.displayDetails();
        document.write(`Jacket number of pockets is : ${this.numberOfPockets} <br>`);
    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/jacket.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(price: number, manufacturer: string, model: string, size: number, color: string, thickness: number, numOfPockets = 2) {

        super(price, manufacturer, model, size, color, thickness);
        this.numberOfPockets = numOfPockets;

    }

}

class Coat extends Jacket {
    private _isRainCoat: boolean;

    public set isRainCoat(rain: boolean) {
        this._isRainCoat = rain;
    }

    public get isRainCoat(): boolean {
        return this._isRainCoat;

    }

    public displayDetails(): void {
        super.displayDetails();
        document.write(`Coat is rain coat?: ${this.isRainCoat} <br>`);
    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/coat.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(price: number, manufacturer: string, model: string, size: number, color: string, thickness: number, isRain = true) {

        super(price, manufacturer, model, size, color, thickness);
        this.isRainCoat = isRain;

    }

}