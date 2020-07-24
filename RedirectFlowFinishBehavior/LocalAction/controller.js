({
	invoke : function(component, event, helper) {
        
        //GET THE RECORD ID ATTRIBUTE
        var record = component.get("v.recordId")
		
        //GET THE LIGHTNING EVENT TO OPEN A RECORD 
        var redirect = $A.get ("e.force:navigateToSObject");
        
        //PASS THE RECORD ID TO THE EVENT
        redirect.setParams({"recordId":record});
        
        //open the record
        redirect.fire();
	}
})
