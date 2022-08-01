import { LightningElement, track } from 'lwc';

export default class FileListViewComp extends LightningElement {
    close(){
		setTimeout(
			function() {
				window.history.back();
			},
			1000
		);
	}

	//Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
    @track isTrue = true;
	changeIf() {
		this.isTrue = true;
	}

	closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isTrue = false;
    }
    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isTrue = false;
    }
}