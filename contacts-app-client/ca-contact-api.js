/**
 * Created by ekoodi on 22.3.2017.
 */

contactsApp.contactApi = (function(){

    var contactApiUrl = 'http://localhost:51367/api/contacts';

    return {
        createContact: function(contact){
            return $.ajax({
                url: contactApiUrl,
                type: 'POST',
                data: JSON.stringify(contact),
                //data: '{"firstName":"createContact","lastName":"POST","phone":"Phone","streetAddress":"Address","city":"City"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json"/*,
                success: function(result){
                    console.log("contactApi.createContact:success:\n" + JSON.stringify(result));
                },
                error: function(jqxhr, status, error){
                    console.log("contactApi.createContact:error: HTTP " + jqxhr.status);
                }*/
            });
        },
        updateContact: function(index, contact){
            return $.ajax({
                url: contactApiUrl + "/" + index,
                type: 'PUT',
                data: JSON.stringify(contact),
                //data: '{"firstName":"updateContact","lastName":"PUT","phone":"Phone","streetAddress":"Address","city":"City"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json"/*,
                success: function(result){
                    console.log("contactApi.updateContact:success:\n" + JSON.stringify(result));
                },
                error: function(jqxhr, status, error){
                    console.log("contactApi.updateContact:error: HTTP " + jqxhr.status);
                }*/
            });
        },
        deleteContact: function(index){
            return $.ajax({
                url: contactApiUrl + "/" + index,
                type: 'DELETE'/*,
                success: function(result, status, jqxhr){
                    console.log("contactApi.deleteContact:success: HTTP " + jqxhr.status);
                },
                error: function(jqxhr, status, error){
                    console.log("contactApi.deleteContact:error: HTTP " + jqxhr.status);
                }*/
            });
        },
        getContact: function(index){ //Not used, remove!
            $.ajax({
                url: contactApiUrl + "/" + index,
                type: 'GET',
                success: function(result){
                    console.log("contactApi.deleteContact:success:\n" + JSON.stringify(result));
                },
                error: function(jqxhr, status, error){
                    console.log("contactApi.deleteContact:error: HTTP" + jqxhr.status);
                }
            });
        },
        getContacts: function(){
            return $.ajax({
                url: contactApiUrl,
                type: 'GET'/*,
                success: function(result){
                    console.log("contactApi.getContacts:success:\n" + JSON.stringify(result));
                },
                error: function(jqxhr, status, error){
                    console.log("contactApi.getContacts:error: HTTP " + jqxhr.status);
                }*/
            });
        }
    };

})();