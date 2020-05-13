import React, { useState, useEffect } from 'react';
import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([]);
  const [showContacts, setShowContacts] = useState([]);

  const filterList = event => {
    let updatedList = contacts;
		
    updatedList = updatedList.filter(function(item){
      return item.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    console.log(updatedList)
    setShowContacts(updatedList)
    setSearchTerm(event.target.value.toLowerCase())
  }

  useEffect(() => {
		fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
		.then((response) => response.json())
		.then((data) => {
            setContacts(data)
            setShowContacts(data)
    });
	}, []);

  return (
    <React.Fragment>
      <Topbar />
      <Filters onChange={filterList} value={searchTerm} />
      <Contacts data={showContacts}/>
    </React.Fragment>
  )
}

export default App;

/*
import React, { useState, useEffect } from 'react';
import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
		fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
		.then((response) => response.json())
		.then((data) => {
			setContacts(data)
    });
  }, []);

  const filterList = (event) => {
    const filterContact = contacts.filter(item => {
      return item.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    
    setContacts(filterContact);
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    const results = contacts.filter(contact => {
        contact.name.toLowerCase().includes(searchTerm)
      }
    );

    setContacts(results);
  }, [searchTerm]);

  return (
    <React.Fragment>
      <Topbar />
      <Filters onChange={filterList} searchTerm={searchTerm} />
      <Contacts data={contacts}/>
    </React.Fragment>
  )
}

export default App;

*/
