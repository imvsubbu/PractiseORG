trigger OpportunityChangeTrigger on OpportunityChangeEvent (after insert) {
	/*List<Task> tasks = new List<Task>();
    for(OpportunityChangeEvent event: Trigger.new){
        EventBus.ChangeEventHeader header = event.ChangeEventHeader;
        if(header.changetype == 'UPDATE' && event.isWon == true){
            Task tk = new Task();
            tk.Subject = 'Follow up on won opportunities: ' + header.recordIds;
            tk.OwnerId = header.commituser;
            tasks.add(tk);
        }
    }
    
    if(tasks.size() > 0){
        insert tasks;
    }
    */
    
    System.debug('---> first debug --> ' + Trigger.new);
    System.debug('---> first debug size --> ' + Trigger.new.size());
    List<List<String>> ids = new List<List<String>>();
    //List<String> ids = new List<String>();
    for(OpportunityChangeEvent event: Trigger.new){
        EventBus.ChangeEventHeader header = event.ChangeEventHeader;
        System.debug('---> Second debug ---> ' + event);
        //System.debug('type of header.recordids --> ' + header.recordids instanceof List<sObject>);
        System.debug('head ids --> ' + header.recordids);
		ids.add(header.recordids);        
    }
    System.debug('Record Ids ---> ' + ids);
    Set<String> idss = new Set<String>();
    for(List<String> id: ids){
        idss.addAll(id);
    }
    
    System.debug('idss --> ' + idss);   
    
    List<Opportunity> opps = [SELECT Id, Name, StageName FROM Opportunity WHERE Id =: idss];
    System.debug('Opportunities ---> ' + opps);    
}