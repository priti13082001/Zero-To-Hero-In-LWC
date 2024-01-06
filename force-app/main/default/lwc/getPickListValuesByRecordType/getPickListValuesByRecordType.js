import { LightningElement,wire } from 'lwc';
import { getPicklistValuesByRecordType,getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBEJCT from '@salesforce/schema/Account'


export default class GetPickListValuesByRecordType extends LightningElement {

  @wire(getObjectInfo,{objectApiName:ACCOUNT_OBEJCT})
  objectInfo
    @wire(getPicklistValuesByRecordType,{objectApiName:ACCOUNT_OBEJCT,recordTypeId:'$objectInfo.data.defualtRecordTypeId'})
    getPickListValueHandler({data,error}){
        if(data){
            console.log(data);
        }
        if(error){
            console.error(error);
        }

    }



}