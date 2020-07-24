({
        invoke: function (component, event, helper) {
        
         //GET THE RECORD ID ATTIRBUTE
        var record = component.get("v.recordId")
		
        //GET THE LIGHTNING EVENT TO FORCE OPEN LEAD CONVERT URL 
        var urlEvent = $A.get ("e.force:navigateToURL");    
            urlEvent.setParams({
                "url":window.location.href ='/lead/leadconvert.jsp?retURL=%2F'+record+'&id='+record
            });
        
        urlEvent.fire();
            
        }
})
