using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using contacts_app_server.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace contacts_app_server.Controllers
{
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        //Development time test storage
        //Consider implementing necessary get and set methods for the storage
        private static Contacts _contacts = new Contacts();

        //private static List<Contact> _contacts = new List<Contact>();

        
        // GET: api/contacts
        [HttpGet]
        public IActionResult Get()
        {
            return new JsonResult(_contacts.contactsList);
        }

        // GET api/contacts/id
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            //Development version identifies contact with index only!
            //This needs to be reconsidered!
            //Action result for invalid id needs to be checked!
            if (_contacts.contactsList.Count <= id)
            {
                //return BadRequest("Invalid");
                return NotFound();
            }
            return new JsonResult(_contacts.contactsList.ElementAt(id));
        }

        // POST api/contacts
        [HttpPost]
        public IActionResult Create([FromBody] Contact contact)
        {
            if (contact == null)
            {
                return BadRequest("Invalid");
            }
            _contacts.contactsList.Add(contact);
            return new JsonResult(contact);
        }

        // PUT api/contacts/id
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Contact contact)
        {
            //Development version identifies contact with index only!
            //This needs to be reconsidered!
            //Action result for invalid id needs to be checked!
            if (contact == null)
            {
                return BadRequest("Invalid");
            } else if (_contacts.contactsList.Count <= id)
            {
                return NotFound();
            }
            _contacts.contactsList[id] = contact;
            return new JsonResult(contact);
        }

        // DELETE api/contacts/id
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            //Development version identifies contact with index only!
            //This needs to be reconsidered!
            //Action result for invalid id needs to be checked!
            if (_contacts.contactsList.Count <= id)
            {
                //return BadRequest("Invalid");
                return NotFound();
            }
            _contacts.contactsList.RemoveAt(id);
            return new NoContentResult();
        }
    }
}
