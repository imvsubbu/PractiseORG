({
    executePopUp : function(component, event, helper) {
        confirm("Some text")
    }
},
{
    executeAdd: function(component, event, helper){
        let a = component.get("v.input1");
        let b = component.get("v.input2");
        confirm(a+b)
    }
}
)