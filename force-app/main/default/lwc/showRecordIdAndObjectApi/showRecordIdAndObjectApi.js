import { LightningElement,api } from 'lwc';

export default class ShowRecordIdAndObjectApi extends LightningElement {
    @api recordId
    @api objectApiName
}