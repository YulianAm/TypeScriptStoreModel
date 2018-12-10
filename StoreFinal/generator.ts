class Generator {

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
    //is ripped + used for "is laces" / shoes + isRain coat
    private static isTrue(): boolean {
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
    //madeIn for shoes
    private static createMadeIn(): string {
        let countries: string[] = ["China", "France", "Belgium", "Narnia", "Italy", "USA"];
        return (countries[Math.floor(Math.random() * countries.length)]);
    }
    //create typeOfCloth for SHoes
    private static CreatetypeOfClothShoes(): string {
        let stuff: string[] = ["Leather", "Aligator", "Cotton", "Platic", "Rubber", "Steel"];
        return (stuff[Math.floor(Math.random() * stuff.length)]);
    }
    //manufacturing date
    private static CreateDate(): Date {
        let start: Date;
        let end: Date;
        start = new Date(2012, 0, 1);
        end = new Date();

        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    //hill type
    private static CreatehillType(): string {
        let hill: string[] = ["High", "Medium", "Low"];
        return (hill[Math.floor(Math.random() * hill.length)]);
    }
    //rain coat thickness
    private static CreateJacketThickness(): number {
        let num: number;
        num = Math.floor(Math.random() * 10) + 1;
        return num;
    }
    //jacket num of pockets
    private static CreateNumOfPocketsJacket(): number {
        let num: number;
        num = Math.floor(Math.random() * 10) + 1;
        return num;
    }
    //create hat diameter
    private static CreateDiameter(): number {
        let num: number;
        num = Math.floor(Math.random() * 15) + 1;
        return num;
    }
    //Brimmed Hat height
    private static CreateHeightBrimmed(): number {
        let num: number;
        num = Math.floor(Math.random() * 20) + 1;
        return num;
    }
    //create dimensions for belt
    private static CreateDimensions(): Dimensions {
        let dim: Dimensions;
        let height: number;
        let width: number;
        let length: number;

        height = Math.floor(Math.random() * 5) + 1;
        width = Math.floor(Math.random() * 5) + 1;
        length = Math.floor(Math.random() * 10) + 1;

        dim = new Dimensions(height, width, length);

        return dim;
    }
    //create reading distance for glasses
    private static CreateDist(): number {
        let dis: number;
        dis = Math.floor(Math.random() * 10) + 1;
        return dis;
    }

    public static getRandomItem(): item {

        let _itemNum: number = 1;
        _itemNum = Math.floor(Math.random() * 20) + 1;

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
                return new Jeans(this.isTrue(), this.createPrice(), this.createManuf(), this.createModel(), this.createLength(), this.createSize(), this.createColor());
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
                return new longDress(this.createLength(), this.isTrue(), this.createPrice(), this.createManuf(), this.createModel(), this.createSize(), this.createColor()); 
            }
                //fancy dress
            case 9: {
                return new fancyDress(this.createTypeOfCloth(), this.isTrue(), this.createLength(), this.createPrice(), this.createManuf(), this.createModel(), this.createSize(), this.createColor()); 
            }
            //elegant shoes
            case 10: {
                return new elegantShoes(this.createPrice(), this.createManuf(), this.createModel(), this.createSize(), this.createColor(), this.createMadeIn(), this.isTrue(), this.CreatetypeOfClothShoes());
            }
            //sport shoes
            case 11: {
                return new sportshoes(this.createPrice(), this.createManuf(), this.createModel(), this.createSize(), this.createColor(), this.createMadeIn(), this.isTrue(), this.CreateDate() );
            }
            case 12: {
                return new comfortShoes(this.createPrice(), this.createManuf(), this.createModel(), this.createSize(), this.createColor(), this.createMadeIn(), this.isTrue(), this.isTrue());
            }
            //hill
            case 13: {
                return new hills(this.createPrice(), this.createManuf(), this.createModel(), this.createSize(), this.createColor(), this.createMadeIn(), this.CreatehillType());
            }
            //jacket
            case 14: {
                return new regularJacket(this.createPrice(), this.createManuf(), this.createModel(), this.createSize(), this.createColor(), this.CreateJacketThickness(), this.CreateNumOfPocketsJacket());
            }
            //coat 
            case 15: {
                return new Coat(this.createPrice(), this.createManuf(), this.createModel(), this.createSize(), this.createColor(), this.CreateJacketThickness(), this.isTrue());
            }
            //kasket hat
            case 16: {
                return new Kasket(this.createPrice(), this.createManuf(), this.createModel(), this.createSize(), this.createColor(), this.CreateDiameter(), this.isTrue());
            }
            //Brimmed hat
            case 17: {
                return new BrimmedHat(this.createPrice(), this.createManuf(), this.createModel(), this.createSize(), this.createColor(), this.CreateDiameter(), this.CreateHeightBrimmed() );
            }
            //belt
            case 18: {
                return new RegularBelt(this.createPrice(), this.createManuf(), this.createModel(), this.createColor(), this.createColor(), this.createTypeOfCloth(), this.CreateDimensions());
            }
                //sunglasses 
            case 19: {
                return new SunGlasses(this.createPrice(), this.createManuf(), this.createModel(), this.createColor());
            }
                //reading glasses
            case 20: {
                return new Readingglasses(this.createPrice(), this.createManuf(), this.createModel(), this.CreateDist());
            }

        }

    }



}