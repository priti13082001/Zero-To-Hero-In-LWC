import { LightningElement ,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue'
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry'

export default class RecordFormComponentLWC extends LightningElement {
     objectName=ACCOUNT_OBJECT
   
     feildList=[ACCOUNT_NAME,ANNUAL_REVENUE,ACCOUNT_INDUSTRY]

    successHandler(event){
        console.log(event.detail.id);
    const evt=new ShowToastEvent({
        title:"Account is created successfully",
        message:"record id"+event.detail.id,
        variant:"success"
    })
    this.dispatchEvent(evt);

    }

}