

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
    private _madeIn: string;
    private _isLaces: boolean;
   

    set madeIn(country: string) {
        this._madeIn = country;
    }
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
    get madeIn(): string {
        return this._madeIn;
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
        document.write(`shoe size is: ${this.shoe_size} <br> shoe color is: ${this.shoe_color} <br> islaces? ${this.isLaces} <br> made in: ${this.madeIn} <br>`);

    }

    constructor(price: number, item_manufacturer: string, item_model: string, shoe_size: number = 36, shoe_color: string = "white", madein: string = "China", islaces = false) {
        super(price, item_manufacturer, item_model);
        this.shoe_size = shoe_size;
        this.shoe_color = shoe_color;
        this.madeIn = madein;
        this.isLaces = islaces;
    }
}


abstract class Jacket extends item {

    private _jacket_size: number;
    private _jacket_color: string;
    private _cloth_thickness: number;

    set jacket_size(size: number) {
        if ((size <= 0) || (size > 50)) {
            throw "size is either negative or 0 or above 50";
        }
        else {
            this._jacket_size = size;
        }

    }
    set jacket_color(color: string) {
        this._jacket_color = color;
    }
    set cloth_thickness(thick: number) {
        if ((thick <= 0) || (thick > 10)) {
            throw "thickness is either negative or 0 or above 10";
        }
        else {
            this._cloth_thickness = thick;
        }
    }

    get jacket_size(): number {
        return this._jacket_size;
    }
    get jacket_color(): string {
        return this._jacket_color;
    }
    get cloth_thickness(): number {
        return this._cloth_thickness;
    }


    public displayDetails(): void {
        super.displayDetails();
        document.write(`jacket size is: ${this.jacket_size} <br> jacket color is: ${this.jacket_color} <br>  jacket thickness is : ${this.cloth_thickness} <br>`);

    }

    constructor(price: number, item_manufacturer: string, item_model: string, jacket_size: number = 30, jacket_color: string = "black", thickness: number = 5) {
        super(price, item_manufacturer, item_model);
        this.jacket_size = jacket_size;
        this.jacket_color = jacket_color;
        this.cloth_thickness = thickness;

    }
}


abstract class Hat extends item {

    private _hat_size: number;
    private _hat_color: string;
    private _hat_diameter: number;

    set hat_size(size: number) {
        if ((size <= 0) || (size > 60)) {
            throw "size is either negative or 0 or above 60";
        }
        else {
            this._hat_size = size;
        }

    }
    set hat_color(color: string) {
        this._hat_color = color;
    } 
    set hat_diameter(diameter: number) {
        if ((diameter <= 0) || (diameter > 15)) {
            throw "size is either negative or 0 or above 15";
        }
        else {
            this._hat_diameter = diameter;
        }
    }

    get hat_size(): number {
        return this._hat_size;
    }
    get hat_color(): string {
        return this._hat_color;
    }
    get hat_diameter(): number {
        return this._hat_diameter;
    }


    public displayDetails(): void {
        super.displayDetails();
        document.write(`hat size is: ${this.hat_size} <br> hat color is: ${this.hat_color} <br>  hat diameter is : ${this.hat_diameter} <br>`);

    }

    constructor(price: number, item_manufacturer: string, item_model: string, hatSize: number = 30, hat_color: string = "Red", diameter: number = 5) {
        super(price, item_manufacturer, item_model);
        this.hat_size = hatSize;
        this.hat_color = hat_color;
        this.hat_diameter = diameter;

    }
}

abstract class Belt extends item {

    private _belt_color: string;
    private _belt_buckle_color: string;
    private _belt_buckle_material: string;
    private _belt_dimensions: Dimensions;

    set belt_color(color: string) {
        this._belt_color = color;
    }
    set belt_buckle_color(color: string) {
        this._belt_buckle_color = color;
    }
    set belt_buckle_material(mat: string) {
        this._belt_buckle_material = mat;
    }
    set belt_dimensions(dim: Dimensions) {
        this._belt_dimensions = dim;
    }

    get belt_color(): string {
        return this._belt_color;
    }
    get belt_buckle_color(): string {
        return this._belt_buckle_color;
    }
    get belt_buckle_material(): string {
        return this._belt_buckle_material;
    }
    get belt_dimensions(): Dimensions {
       return this._belt_dimensions;
    }


    public displayDetails(): void {
        super.displayDetails();
        document.write(`belt color is: ${this.belt_color} <br>  belt buckle color is : ${this.belt_buckle_color} <br> 
                        belt_buckle_material is ${this.belt_buckle_material} <br> 
                        belt dimnesion height ${this.belt_dimensions.height} <br> 
                        belt dimnesion width ${this.belt_dimensions.width} <br>      
                        belt dimnesion length ${this.belt_dimensions.length} <br>`);

    }
    //
    constructor(price: number, item_manufacturer: string, item_model: string, belt_color: string = "Brown", belt_buckle_color: string = "Red", belt_buckle_material: string = "Leather", dimensions: Dimensions = new Dimensions() ) {
        super(price, item_manufacturer, item_model);
        this.belt_buckle_color = belt_buckle_color;
        this.belt_color = belt_color;
        this.belt_buckle_material = belt_buckle_material;
        this.belt_dimensions = dimensions;

    }
}


abstract class Accessory extends item {
    private _frame_color: string;

    set frame_color(color: string) {
        this._frame_color = color;
    }

    get frame_color(): string {
        return this._frame_color;
    }

    constructor(price: number, manuf: string, model: string, frameColor: string = "Blue") {
        super(price, manuf, model);
        this.frame_color = frameColor;
    }
}