import { LightningElement, track } from 'lwc';

export default class PractiseLWC extends LightningElement {
    // name;
    // age = 30;
    // fullName = "Salesforce India";
    // showData = false;
    // details = {
    //     name: "dummy",
    //     place: "Tokyo"
    // };
    // userList = ["A", "B", "C"];

    fullName = "Venkata Subrahmanyam";

    title = "aura";

    changeHandler(event){
        this.title = event.target.value;
    }

    address = {
        city : 'Kakinada',
        postalCode : 533462,
        country : 'India'
    }

    trackHandler(event){
        this.address = {...this.address, "city":event.target.value};
    }

    /*** Getter example */

    users = ["john", "smith", "venkat", "subbu"];
    num1 = 10;
    num2 = 20;

    get firstUser(){
        return this.users[0];
    }

    get multiply(){
        return this.num1 * this.num2;
    }
}