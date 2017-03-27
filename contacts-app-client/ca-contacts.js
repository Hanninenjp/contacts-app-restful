/**
 * Created by ekoodi on 20.3.2017.
 */

contactsApp.contacts = (function () {

    var contacts = [];

    //API implementation test
    function apiContactsUpdateFailed(){
        //Development time logging
        console.log("Updating contacts failed!");
        //Add callback to presenter!!!
        //Presenter should notify that contacts loading or updating failed and perhaps prevent further updates!
    }
    //End API implementation test

    return {
        createContact: function(contact, contactsUpdated){
            if(contactsApp.configuration.isContactApiEnabled()){
                contactsApp.contactApi.createContact(contact)
                    //Alternatively
                    //.done(function(data, status, jqxhr) {apiContactCreated(data, status, jqxhr, contactsUpdated)})
                    .done(function(data){
                        contacts.push(data);
                        contactsUpdated(contacts);
                    })
                    .fail(apiContactsUpdateFailed); //Alternatively, function could be implemented here!!!
            }
            else{
                contacts.push(contact);
                contactsApp.contactStore.saveContacts(contacts);
                contactsUpdated(contacts);
            }
        },
        updateContact: function (contact, index, contactsUpdated){
            if(contactsApp.configuration.isContactApiEnabled()){
                contactsApp.contactApi.updateContact(index, contact)
                    .done(function(data){
                        contacts[index] = data;
                        contactsUpdated(contacts);
                    })
                    .fail(apiContactsUpdateFailed);
            }
            else{
                contacts[index] = contact;
                contactsApp.contactStore.saveContacts(contacts);
                contactsUpdated(contacts);
            }

        },
        deleteContact: function(index, contactsUpdated){
            if(contactsApp.configuration.isContactApiEnabled()){
                contactsApp.contactApi.deleteContact(index)
                    .done(function(){
                        contacts.splice(index, 1);
                        contactsUpdated(contacts);
                    })
                    .fail(apiContactsUpdateFailed);
            }
            else{
                contacts.splice(index, 1);
                contactsApp.contactStore.saveContacts(contacts);
                contactsUpdated(contacts);
            }

        },
        getContact: function(index){
            //Uses locally cached contacts
            return contacts[index];
        },
        getContacts: function (){
            //Get contacts array
            //Obsolete!!!
            return contacts;
        },
        loadContacts: function(contactsUpdated){
            if(contactsApp.configuration.isContactApiEnabled()){
                contactsApp.contactApi.getContacts()
                    .done(function(data){
                        contacts = data;
                        contactsUpdated(contacts);
                    })
                    .fail(apiContactsUpdateFailed);
            }
            else{
                contacts = contactsApp.contactStore.loadContacts();
                contactsUpdated(contacts);
            }
        }
    };

})();