

abstract class item {
    private _item_price: number;
    private _item_manufacturer: string;
    private _item_model: string;

    public set item_price(price: number) {
        if (price >= 0) {
            this._item_price = price;
        }
        else {
            throw "set price for item param price is negative!";
        }
    }
    public set item_manufacturer(manuf: string) {
        this._item_manufacturer = manuf;
    }
    public set item_model(model: string) {
        this._item_model = model;

    }

    public get item_price(): number {
        return this._item_price;
    }
    public get item_manufacturer(): string {
        return this._item_manufacturer;
    }
    public get item_model(): string {
        return this._item_model;
    }
    public get brand(): string {
        let add: string;
        add = this.item_manufacturer + "&nbsp" + this.item_model ;
        return add;
    }

    public displayDetails(): void {
        document.write(`item manufacturer is: ${this.item_manufacturer} <br> item model is: ${this.item_model} <br> item price is: ${this.item_price} <br>`);
    }
    public getPriceWithoutVat(): number {
        let newPrice: number;
        newPrice = this.item_price * (1 - Vat);
        return (parseInt(newPrice.toFixed(2)));
    }

    abstract displayImage(): void;


    constructor(item_price: number = 0, item_manufacturer: string = "", item_model: string = "") {
        this.item_price = item_price;
        this.item_manufacturer = item_manufacturer;
        this.item_model = item_model;
    }
}

abstract class shirt extends item {
    private _shirt_length: number;
    private _shirt_size: number;
    private _shirt_color: string;

    set shirt_length(length: number) {
        if ((length <= 0) || (length > 3)) {
            throw "length is either negative or 0 or above 3";
        }
        else {
            this._shirt_length = length;
        }
    }
    set shirt_size(size: number) {
        if ((size <= 0) || (size > 100)) {
            throw "size is either negative or 0 or above 100";
        }
        else {
            this._shirt_size = size;
        }

    }
    set shirt_color(color: string) {
        this._shirt_color = color;
    }

    get shirt_length(): number {
        return this._shirt_length;
    }
    get shirt_size(): number {
        return this._shirt_size;
    }
    get shirt_color(): string {
        return this._shirt_color;
    }


    public displayDetails(): void {
        super.displayDetails();
        document.write(`shirt length is: ${this.shirt_length} <br> shirt size is: ${this.shirt_size} <br> shirt color is: ${this.shirt_color} <br>`);

    }

    constructor(price: number, item_manufacturer: string, item_model: string, shirt_length: number = 2, shirt_size: number = 2, shirt_color: string = "black") {
        super(price, item_manufacturer, item_model);
        this.shirt_length = shirt_length;
        this.shirt_size = shirt_size;
        this.shirt_color = shirt_color;
    }
}


abstract class pants extends item {
    private _pants_length: number;
    private _pants_size: number;
    private _pants_color: string;

    set pants_length(length: number) {
        if ((length <= 0) || (length > 3)) {
            throw "length is either negative or 0 or above 3";
        }
        else {
            this._pants_length = length;
        }
    }
    set pants_size(size: number) {
        if ((size <= 0) || (size > 100)) {
            throw "size is either negative or 0 or above 100";
        }
        else {
            this._pants_size = size;
        }

    }
    set pants_color(color: string) {
        this._pants_color = color;
    }

    get pants_length(): number {
        return this._pants_length;
    }
    get pants_size(): number {
        return this._pants_size;
    }
    get pants_color(): string {
        return this._pants_color;
    }


    public displayDetails(): void {
        super.displayDetails();
        document.write(`pants length is: ${this.pants_length} <br> pants size is: ${this.pants_size} <br> shirt color is: ${this.pants_color} <br>`);

    }

    constructor(price: number, item_manufacturer: string, item_model: string, pants_length: number = 2, pants_size: number = 2, pants_color: string = "black") {
        super(price, item_manufacturer, item_model);
        this.pants_length = pants_length;
        this.pants_size = pants_size;
        this.pants_color = pants_color;
    }
}


abstract class dress extends item {

    private _dress_size: number;
    private _dress_color: string;


    set dress_size(size: number) {
        if ((size <= 0) || (size > 50)) {
            throw "size is either negative or 0 or above 50";
        }
        else {
            this._dress_size = size;
        }

    }
    set dress_color(color: string) {
        this._dress_color = color;
    }


    get dress_size(): number {
        return this._dress_size;
    }
    get dress_color(): string {
        return this._dress_color;
    }


    public displayDetails(): void {
        super.displayDetails();
        document.write(`dress size is: ${this.dress_size} <br> dress color is: ${this.dress_color} <br>`);

    }

    constructor(price: number, item_manufacturer: string, item_model: string, dress_size: number = 2, dress_color: string = "pink") {
        super(price, item_manufacturer, item_model);
        this.dress_size = dress_size;
        this.dress_color = dress_color;
    }
}


abstract class shoes extends item {

    private _shoe_size: number;
    private _shoe_color: string;
    private _isLaces: boolean;


    set shoe_size(size: number) {
        if ((size <= 0) || (size > 50)) {
            throw "size is either negative or 0 or above 50";
        }
        else {
            this._shoe_size = size;
        }

    }
    set shoe_color(color: string) {
        this._shoe_color = color;
    }
    set isLaces(laces: boolean) {
            this._isLaces = laces;
    }

    get isLaces(): boolean {
        return this._isLaces;
    }
    get shoe_size(): number {
        return this._shoe_size;
    }
    get shoe_color(): string {
        return this._shoe_color;
    }


    public displayDetails(): void {
        super.displayDetails();
        document.write(`shoe size is: ${this.shoe_size} <br> shoe color is: ${this.shoe_color} <br>`);

    }

    constructor(price: number, item_manufacturer: string, item_model: string, shoe_size: number = 36, shoe_color: string = "white") {
        super(price, item_manufacturer, item_model);
        this.shoe_size = shoe_size;
        this.shoe_color = shoe_color;
    }
}
