import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import {showToastEvent} from 'lightning/platformShowToastEvent'
export default class LightningRecordCustom extends LightningElement {
    objectName=ACCOUNT_OBJECT
    inputFeild=''

    handleChange(event){
        this.inputFeild=event.target.value;
    }
    submitHandler(event){
        event.preventDefault();
        const inputCmp=this.template.querySelector('ightning-input');
        const value=inputCmp.value;
        if(!value.includes('India')){
            inputCmp.setCustomValidity("Account must be contains India");
        }else{
           
            inputCmp.setCustomValidity("")
            const fields = event.detail.fields
            fields.Name = value
            this.template.querySelector('lightning-record-edit-form').submit(fields)

        }
        inputCmp.reportValidity();

    }
    successHandler(event){
        const evt= new showToastEvent({
            title:"Account creation",
            message:"Account is created Successfully"+event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(evt);

    }
    errorHandler(event){
        const evt= new showToastEvent({
            title:"Account creation",
            message:event.detail.message,
            variant:"error"
        })
        this.dispatchEvent(evt);

    }

}