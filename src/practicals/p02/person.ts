export class Person {
    firstname:string = '';
    lastname:string = '';
    private age:number = 0;
    Fullname:string = '';
    static COUNTRY:string = `Thailand`;

    setA(c:number){
        this.age = c + 1;
        return this.age;
    }
    setAge(x:number){
        this.age =x;
    }
    getFullName(){
        this.Fullname = `${this.firstname} ${this.lastname}`
        return this.Fullname;
    }
    getAge(){
        return this.age;
    }

}
