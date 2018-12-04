class Generator {
///wpw
    //create random text string
    private static createPrint(): string {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    //create random price
    private static createPrice(): number {
        let num: number;
        num = Math.floor(Math.random() * 299) + 1;

        return num;
    }
    //return random manufacturer
    private static createManuf(): string {
        let manuf: string[] = ["Lacoste", "Billabong", "Ralph Lauren", "ASOS", "Calvin Klein"];
        return (manuf[Math.floor(Math.random() * manuf.length)]);
    }
    //create random model
    private static createModel(): string {
        let model: string[] = ["Fine", "Elegant", "Hipster", "Nice", "Jack", "Tom", "Rami", "JB"];
        return (model[Math.floor(Math.random() * model.length)]);
    }
    //create random color
    private static createColor(): string {
        let colors: string[] = ["Green", "Blue", "Yellow", "Red", "Black", "White", "Orange", "Brown"];
        return (colors[Math.floor(Math.random() * colors.length)]);
    }
    //create size 
    private static createSize(): number {
        let num: number;
        num = Math.floor(Math.random() * 48) + 1;

        return num;
    }
    //create length
    private static createLength(): number {
        let num: number;
        num = Math.floor(Math.random() * 2.5) + 0.1;

        return num;
    }
    //button number
    private static createButton(): number {
        let num: number;
        num = Math.floor(Math.random() * 10) + 1;
        return num;
    }
    //create type of cloth
    private static createTypeOfCloth(): string {
        let cloths: string[] = ["Zamsh", "Cotton", "Silk", "Kashmir", "Thin Cotton", "Lace"];
        return (cloths[Math.floor(Math.random() * cloths.length)]);
    }
    //is ripped
    private static isRipped(): boolean {
        let num: number;
        num = Math.floor(Math.random() * 1) + 0;
        if (num = 1) {
            return true;
        }
        else {
            return false;
        }
        
    }
    //type of dress
    private static createTypeOfSkirt(): string {
        let cloths: string[] = ["short", "long"];
        return (cloths[Math.floor(Math.random() * cloths.length)]);
    }


    public static getRandomItem(): item {

        let _itemNum: number = 1;
        _itemNum = Math.floor(Math.random() * 9) + 1;

        switch (_itemNum) {
            //tshirt
            case 1: {
                return new tshirt(this.createPrint(), this.createPrice(), this.createManuf(), this.createModel(), this.createLength(), this.createSize(), this.createColor());
            }
            //normalshirt
            case 2: {          
                return new normalshirt(this.createButton(), this.createPrice(), this.createManuf(), this.createModel(), this.createLength(), this.createSize(), this.createColor());
            }
            //womenshirt
            case 3: {
                return new womenshirt(this.createTypeOfCloth(), this.createPrice(), this.createManuf(), this.createModel(), this.createLength(), this.createSize(), this.createColor());
            }
            //jeans
            case 4: {
                return new Jeans(this.isRipped(), this.createPrice(), this.createManuf(), this.createModel(), this.createLength(), this.createSize(), this.createColor());
            }
            //Normal pants
            case 5: {
                return new normalPants(this.createButton(), this.createPrice(), this.createManuf(), this.createModel(), this.createLength(), this.createSize(), this.createColor());
            }
            //short
            case 6: {
                return new shorts(this.createTypeOfCloth(), this.createPrice(), this.createManuf(), this.createModel(), this.createLength(), this.createSize(), this.createColor());
            }
            //skirt
            case 7: {
                return new skirt(this.createTypeOfSkirt(), this.createPrice(), this.createManuf(), this.createModel(), this.createSize(), this.createColor());
            }
            //normal long dress
            case 8: {
                return new longDress(this.createLength(), this.isRipped(), this.createPrice(), this.createManuf(), this.createModel(), this.createSize(), this.createColor()); 
            }
                //fancy dress
            case 9: {
                return new fancyDress(this.createTypeOfCloth(), this.isRipped(), this.createLength(), this.createPrice(), this.createManuf(), this.createModel(), this.createSize(), this.createColor()); 
            }





        }

    }



}