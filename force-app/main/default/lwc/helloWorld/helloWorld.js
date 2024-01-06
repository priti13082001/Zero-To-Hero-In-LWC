import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    fullName
   @track countryName =["india","USA","china"]
    @ track address={
    city:"mathura",
    pinCode:"234567",
    district:"Aligarh"

   }
   num1=5
   num2=6
   isVisible=false

    handleclick(event){
        this.fullName=event.target.value;

    }
    handleAddress(event){
        this.address.city=event.target.value;
    }
    get sumOfTwoNumber(){
        return this.num1*this.num2;
    }
    handleSecret(){
        this.isVisible=true;
    }


    


}