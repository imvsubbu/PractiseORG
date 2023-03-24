import { LightningElement, wire, track } from 'lwc';

import getAccounts from '@salesforce/apex/dataTableController.getAccounts';

export default class DataTableImplementation extends LightningElement {

    @track accData;
     // @wire(getAccounts) accData;
     //Id, Name, Type, Phone, Rating
     accColumns = [
          { label: 'Id', fieldName: 'Id' },
          { label: 'Name', fieldName: 'Name' },
          { label: 'Type', fieldName: 'Type' },
          { label: 'Phone Number', fieldName: 'Phone', type: 'phone' },
          { label: 'Rating', fieldName: 'Rating', type: 'number' }
      ];

    async connectedCallback(){
        this.accData = await getAccounts();
    }

    //   accData = [
    //       {Id: '1', Name: 'Venkat', Type: 'Super', Phone: '9908146629', Rating: '3.5'},
    //       {Id: '2', Name: 'Venkat 2', Type: 'Super', Phone: '9908146629', Rating: '3.5'}
    //   ]

     //  renderedCallback(){
     //      console.log('---> '+this.accData.data);
     //  }

     getSelectedRows(){
          
     }
}