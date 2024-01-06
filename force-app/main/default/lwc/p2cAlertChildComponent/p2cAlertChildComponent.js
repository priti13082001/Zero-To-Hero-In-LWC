import { LightningElement, api } from 'lwc';

export default class P2cAlertChildComponent extends LightningElement {

    @api message
    @api isValid
    @api number
}