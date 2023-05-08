import { LightningElement } from 'lwc';

export default class Button extends LightningElement {

    button1(event){
        const container1 = this.template.querySelector('.button1');
        container1.innerHTML="Button 1 click";
    }
    button2(event){
        const container2=this.template.querySelector('.button2');
container2.innerHTML="Button 2 Click";
    }
}