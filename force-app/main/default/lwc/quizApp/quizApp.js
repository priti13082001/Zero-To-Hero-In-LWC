import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
 
    selectedAnswer={}
    isSubmitted=false
    correctAnswer=0;

    myQuestion=[
        {
            id:"Question1",
             question:"which of the following not a trigger event",
             answer:{
                a:"before",
                b:"after",
                c:"upsert"
             },
             correctAnswer:"c"
        },
        {
            id:"Question2",
             question:"which of the following not template loop",
             answer:{
                a:"for:each",
                b:"iterator",
                c:"if:true"
             },
             correctAnswer:"c"
        },
        {
            id:"Question3",
             question:"which of the following is country Name",
             answer:{
                a:"india",
                b:"aligarh",
                c:"mathura"
             },
             correctAnswer:"a"
        }
    ]
    get allNotSelected(){
        return !(Object.keys(this.selectedAnswer).length === this.myQuestion.length)
    }
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestion.length === this.correctAnswer?'slds-text-color_success':'slds-text-color_error'}`;
    }
    changeHandler(event){
       
        const {name,value}=event.target;
        this.selectedAnswer={...this.selectedAnswer,[name]:value};
    }
    submitHandler(event){
        event.preventDefault();
        let correct=this.myQuestion.filter(item=>this.selectedAnswer[item.id]===item.correctAnswer);
        this.correctAnswer=correct.length;
         this.isSubmitted=true;

    }
    resetHandler(){
        this.selectedAnswer ={};
        this.correctAnswer=0;
        this.isSubmitted=false;
      

    }

}