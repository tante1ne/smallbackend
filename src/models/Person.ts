export class Person {
    
    public firstName : string;
    public lastName : string;
    public age : number;
    
    constructor(personData: any) {
        this.firstName = personData.name;
    }
}