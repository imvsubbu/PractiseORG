import { LightningElement } from 'lwc';
 import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class QuizApp extends LightningElement {
    selectedAsnwers = {};
    correctAnswers = 0;
    isSubmitted = false;
    isModalOpen = false;
    isLoaded = true;

    quizQuestions = [
        {
            id : "Q1",
            question : 'Please select your gender',
            answers : {
                a : "Male",
                b : "Female",
                c : "Others"
            },
            correctAnswer : "a"
        },
        {
            id : "Q2",
            question : 'Please select one',
            answers : {
                a : "Male",
                b : "Female",
                c : "Others"
            },
            correctAnswer : "b"
        },
        {
            id : "Q3",
            question : 'Again please select one',
            answers : {
                a : "Male",
                b : "Female",
                c : "Others"
            },
            correctAnswer : "c"
        }           
    ]

    get disableSubmitAndReset(){
        return !(Object.keys(this.selectedAsnwers).length == this.quizQuestions.length);
    }

    get isScoredFull(){
        return `slds-text-heading_large ${this.quizQuestions.length === this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'}`
    }

    saveValues(event){
        const {name, value} = event.target;
        this.selectedAsnwers = {...this.selectedAsnwers, [name]:value};
    }

    handleSubmit(event){
        event.preventDefault()
        let correctAns = this.quizQuestions.filter(item=>this.selectedAsnwers[item.id] === item.correctAnswer);
        this.correctAnswers = correctAns.length
        this.isSubmitted = true;
        this.closeModal();
        this.showToastNotification();
    }

    handleReset(){
        this.selectedAsnwers ={};
        this.correctAnswers = 0;
        this.isSubmitted = false;
    }

    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
        this.isLoaded = false;
    }

    closeModal(){
        this.isModalOpen = false;
    }

    showToastNotification(){
        let  evnt = undefined;
        if(this.correctAnswers == this.quizQuestions.length){
            evnt = new ShowToastEvent({
                message: 'You have got ' + this.correctAnswers + ' out of ' +  this.quizQuestions.length + ' correct.',
                variant: 'success'
            })
        }else{
            evnt = new ShowToastEvent({
                message: 'You have got ' + this.correctAnswers + ' out of ' +  this.quizQuestions.length + ' correct.',
                variant: 'error'
            })
        }
        this.dispatchEvent(evnt);        
        
    }
}