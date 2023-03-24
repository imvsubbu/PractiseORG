public with sharing class accountMsg {

    @AuraEnabled name;
    @AuraEnabled id;
    @AuraEnabled noOfLocations;
    @AuraEnabled type;
    @AuraEnabled phone;

    public accountMsg(Account acc) {
        this.noOfLocations = acc.NumberOfLocations__c;
        this.name = acc.Name;
        this.type = acc.Type;
        this.id = acc.Id;

    }
}