public class testFlowDebug {
	
    @InvocableMethod
    public static void toPrintIds(List<Id> Ids){
        System.debug('--------------------------');
        System.debug(Ids);
    }
}