import { LightningElement } from 'lwc';
 import hasViewAllData  from '@salesforce/userPermission/ViewAllData'
 import hasCustomPermission from '@salesforce/customPermission/show_details'
export default class CustomPermissionCheck extends LightningElement {

    get hasViewAllDataPermission(){
        return hasViewAllData;
    }
    get hasCustomPermissiondata(){
        return hasCustomPermission;
    }


}