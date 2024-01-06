import { LightningElement } from 'lwc';

export default class C2pParentCompoent extends LightningElement {

    showModel=false
    showData(event){
        this.showModel=true;

    }
    closehandler(){
     this.showModel=false
    }
}