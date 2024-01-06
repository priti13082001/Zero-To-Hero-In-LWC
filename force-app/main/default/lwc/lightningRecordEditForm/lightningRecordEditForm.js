import { LightningElement } from 'lwc';
import CONTACT_OBEJCT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Contact.Name'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';

export default class LightningRecordEditForm extends LightningElement {
    obejctName=CONTACT_OBEJCT
    fields={
        NameField:NAME_FIELD,
        EmailField:EMAIL_FIELD,
        titleField:TITLE_FIELD,
        AccountFeild:ACCOUNT_FIELD
    }

    resetHandler(){
        const inputFields=this.template.querySelectorAll('lightning-input-field');
        if(inputFields){
            Array.from(inputFields).forEach(field => {
                field.reset();
                
            });
        }
        
      
    }
}