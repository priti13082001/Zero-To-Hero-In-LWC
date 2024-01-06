import { LightningElement,wire } from 'lwc';

import { getPicklistValues,getObjectInfo } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import RATING_FIELD from '@salesforce/schema/Account.Rating'
import ACCOUNT_OBJECT from '@salesforce/schema/Account';


export default class GetPickListValuesAdaptor extends LightningElement {
     SelectedValue = ''
     IndustryValues=[]
     SelectedRating=''
     RatingValues=[]

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
     objectInfo
    @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:INDUSTRY_FIELD})
     IndustryPickListHandler({data,error}){
        if(data){
            console.log(data);
            this.IndustryValues =[...this.getOptions(data)];
          
        }
        if(error){
            console.log(error);
        }

     }
     getOptions(data){
        return data.values.map(item=>({label: item.label, value:item.value}));

     }

    handleChange(event) {
        this.SelectedValue = event.detail.value
    }
     
     @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:RATING_FIELD})
     getRatingHandler({data,error}){
        if(data){
            this.RatingValues=[...this.getOptions(data)];
        }
        if(error){
            console.log(error);
        }
     }
     
    
 
     handleTypeChange(event){
        this. SelectedRating=event.detail.value
     }

    }