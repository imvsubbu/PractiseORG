import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {

    carList = ["Ford", "Audi", "Baleno", "Maruti", "Harrier"];

    ceoList = [
        {
            id:1,
            company:"Google",
            name:"Sundar Pichai"
        },
        {
            id: 2,
            company: "Tesla",
            name: "Elon Musk"
        },
        {
            id: 3,
            company:"Amazon",
            name:"Jeff Bezos"
        },
        {
            id: 4,
            company: "Meta",
            name: "Mark Zukerburg"
        }
    ];



    // isVisible = false;
    // name;

    // handleClick(event){
    //     if(this.isVisible){
    //         this.isVisible = false;
    //     }else{
    //         this.isVisible = true
    //     }
    // }

    // changeHandler(event){
    //     this.name = event.target.value;
    // }

    // get helloMethod(){
    //     return this.name == 'hello';
    // }
}