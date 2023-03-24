import { LightningElement, track } from 'lwc';

export default class FileListViewComp extends LightningElement {
	handleClick(){
		alert('Clicked Successfully');
	}

	connectedCallback(){
		console.log('Inside conected Callback');
	}
	
	renderedCallback(){
		console.log('Inside rendered Callback');
	}
}