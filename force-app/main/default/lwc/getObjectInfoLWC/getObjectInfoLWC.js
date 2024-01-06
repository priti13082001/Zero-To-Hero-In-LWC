import { LightningElement,wire } from 'lwc';
import { getObjectInfo,getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
export default class GetObjectInfoLWC extends LightningElement {
     
  
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
      objectInfo

      objectApiNames=[ACCOUNT_OBJECT,OPPORTUNITY_OBJECT]
      objectinfos
      @wire(getObjectInfos,{objectApiNames:'$objectApiNames'})
      objectInfosdetailHandler({data}){
        if(data){
            console.log(data);
            this.objectinfos=data;
        }
       

      }


}