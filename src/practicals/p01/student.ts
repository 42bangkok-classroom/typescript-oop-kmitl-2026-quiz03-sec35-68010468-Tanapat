export class Student {
    firstname:string = '';
    lastname:string = '';

    printName(){
        console.log(`${this.firstname} ${this.lastname}`)
    }
}