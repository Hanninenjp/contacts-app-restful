using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace contacts_app_server.Models
{
    public class Contacts
    {
        public List<Contact> contactsList = new List<Contact>();
        
        public Contacts()
        {
            //Generate contacts for development time testing purposes
            /*
            for (int i = 0; i < 5; i++)
            {
                Contact contact = new Contact();
                contact.lastName = String.Format("Contact{0}", i);
                contactsList.Add(contact);
            }
            */
        }
    }
}
