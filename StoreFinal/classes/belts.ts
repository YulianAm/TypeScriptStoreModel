class RegularBelt extends Belt {
  
    public displayDetails(): void {
        super.displayDetails();
       document.write(`**Belt Buckle Color is ${this.belt_buckle_color}`);
    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/belt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(price: number, manufacturer: string, model: string, color: string, buckle: string, material: string, dimensions: Dimensions) {

        super(price, manufacturer, model, color, buckle, material, dimensions);  

    }

}
