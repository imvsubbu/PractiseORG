import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement {

    userNames = ["John", "Smith", "Nike", "Venkat", "Subbu"];

    fetchDetailHanderl(){
        const ele = this.template.querySelector('h1');
        ele.style.border = "1px solid red";
        console.log(ele.innerText);


        const userEle = this.template.querySelectorAll('.name');        
        console.log(userEle);
        Array.from(userEle).forEach(item=>{
            item.setAttribute("title", item.innerText);
            console.log(item.innerText)
        })
    }
}