class SunGlasses extends Accessory {
    private _glass_color: string;

    set glass_color(color: string) {
        this._glass_color = color;
    }

    get glass_color(): string {
        return this._glass_color;
    }
  
    public displayDetails(): void {
        super.displayDetails();
        document.write(`Sungalsses color is: ${this.glass_color} <br>`);
    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/sunglasses.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(price: number, manufacturer: string, model: string, glassColor: string = "Blue") {

        super(price, manufacturer, model);
        this.glass_color = glassColor;

    }

}

class Readingglasses extends Accessory {
    private _rec_distance: number;

    set rec_distance(rec: number) {
        if ((rec <= 0) || (rec > 50)) {
            throw "distance is above 50 or negative!";
        }
        else {
            this._rec_distance = rec;
        }
    }

    get rec_distance(): number {
        return this._rec_distance;
    }

    public displayDetails(): void {
        super.displayDetails();
        document.write(`Sungalsses reading distance is: ${this.rec_distance} <br>`);
    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/readingglasses.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(price: number, manufacturer: string, model: string, readds: number = 5) {

        super(price, manufacturer, model);
        this.rec_distance = readds;

    }

}
