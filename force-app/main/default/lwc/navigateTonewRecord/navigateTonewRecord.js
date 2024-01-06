import { LightningElement } from 'lwc';

import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateTonewRecord extends NavigationMixin(LightningElement) {

    newRecordNavigationHandler(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            }
        })
    }
    newRecordNavigationwithDefault(){
       const defaulValue=encodeDefaultFieldValues({
        FirstName:'priti',
        LastName:'chaudhary',
        LeadSource:'Other'
       })
       this[NavigationMixin.Navigate]({
        type:'standard__objectPage',
        attributes:{
            objectApiName:'Contact',
            actionName:'new'
        },
        state:{
            defaultFieldValues:defaulValue
        }
    })
    }
    newRecordListView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'List'
            },
            state:{
                filterName:'Recent'
            }
        })

    }
    navigateTofileView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }
}