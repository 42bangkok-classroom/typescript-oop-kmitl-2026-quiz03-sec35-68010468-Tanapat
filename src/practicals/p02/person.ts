export class Person {
    firstname:string = '';
    lastname:string = '';
    age:number = 0;
    Fullname:string = '';
    static COUNTRY:string = `Thailand`;

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

