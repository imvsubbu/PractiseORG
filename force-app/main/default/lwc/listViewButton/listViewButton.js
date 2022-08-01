import { LightningElement, api, track } from 'lwc';

export default class ListViewButton extends LightningElement {
	
    @api listViewIds;
	//Console.log(listViewIds);

	close(){
		setTimeout(
			function() {
				window.history.back();
			},
			1000
		);
	}

	//Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
    @track isModalOpen = false;
    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }
    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen = false;
    }
}