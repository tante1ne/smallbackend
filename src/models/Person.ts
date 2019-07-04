export class Person {
    
    public superName : any;
    public secretIdentity : any;
    public age : number;
    
    constructor(personData: any) {
        this.superName = personData.name;
        this.secretIdentity = personData.secretIdentity;
        this.age = personData.age;
    }
}