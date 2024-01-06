import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class ShowNotificationMessage extends LightningElement {
    
    showToastHandler(){
        this.showTestMessage("Success !!!","success","{0} Account is successfully createe {1}");
      
    }
    showToastHandlertwo(){
        this.showTestMessage("Error!","error","Account is creation is failed");
    }
    showToastHandlerthree(){
        this.showTestMessage("warning","warning","kindly make password atlease 8 char");
    }
    showToastHandlerfour(){
        this.showTestMessage("info !!!","info","this is information toast message");
    }

    showTestMessage(title,variant,message){
        const evt= new ShowToastEvent(
            {
                title,
                 variant,
                 message,
                 messageData:[
                    'salesforce',{
                        url:'http//test.salesforce.com',
                        label:"click here"
                    }
                 ]
            }
        )
     this.dispatchEvent(evt);
    }
  

}