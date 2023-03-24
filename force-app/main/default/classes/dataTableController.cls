public class dataTableController{
     @AuraEnabled
     public static List<accountMsg> getAccounts(){
          System.debug('here ' + 1);
          return [SELECT Id, Name, Type, Phone, Rating, NumberofLocations__c FROM Account SECURITY_ENFORCED LIMIT 20];
     }
}