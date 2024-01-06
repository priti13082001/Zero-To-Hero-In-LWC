import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigateToRelationshipRecord extends NavigationMixin(LightningElement) {

    navigateToRelationshipRecord(){
      this[NavigationMixin.Navigate]({
        type:'standard__recordRelationshipPage',
        attributes:{
            recordId:'0011y00000lEPSgAAO',
            objectApiName:'Account',
            relationshipApiName:'Contacts',
            actionName:'view'
        }
      })
    }
}