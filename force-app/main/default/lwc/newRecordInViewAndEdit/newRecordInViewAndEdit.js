import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NewRecordInViewAndEdit extends NavigationMixin(LightningElement) {
    navigateToViewMode(){
    this[NavigationMixin.Navigate]({
        type:'standard__recordPage',
        attributes:{
            recordId:'0011y00000lEPSgAAO',
            objectApiName:'Account',
            actionName:'view'
        }
    })
    }
    navigateToEditMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0011y00000lEPSgAAO',
                objectApiName:'Account',
                actionName:'edit'
            }
        })

    }
}