class tester {
    private _size: number;

    private set size(size: number) {
        if ((size > 0) && (size < 1000)) {
            this._size = size;
        }
    }

    public test(): void {

        
        //let Generator: Generator = new Generator();
        let itemArray: Array<item>;

        //validation on user input
        while (!this._size) {
         
            this.size = Number(prompt("please enter number of items"));
            if (!this._size) {
                alert("cannot be string and cannot be above 1000");
            }    
        }

        //create new random array based on user input (empty for now)
            itemArray = new Array<item>(this._size);
        
        //fill array with random items 
        for (let i = 0; i < itemArray.length; i++) {

            itemArray[i] = Generator.getRandomItem();

            document.write(itemArray[i].brand + "<br>");

            itemArray[i].displayDetails();

            itemArray[i].getPriceWithoutVat();
            
            itemArray[i].displayImage();
            
            document.write(`<Br><br><br><hr>`);
        }




    }

}