import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/Moment'
import {loadScript} from 'lightning/platformResourceLoader'

export default class ThirdPartyJavaScript extends LightningElement {
   
   isLibLoaded=false
   currentDate=''
   renderedCallback(){
    if(this.isLibLoaded){
        return;
    }
    else{
        loadScript(this,MOMENT+'moment/moment.min.js').then(()=>{
            this.setDateOnScreen();
        }).catch(error=>{
            console.log(error);
        })
        this.isLibLoaded=true;
    }
  }

    setDateOnScreen(){
    this.currentDate= MOMENT().format('llll');
    }

   
}