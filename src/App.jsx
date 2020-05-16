import React, { useState, useEffect } from 'react';
import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

function App() {
  const [contacts, setContacts] = useState([]);
  const [showContacts, setShowContacts] = useState([]);
  
  useEffect(() => {
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
    .then((response) => response.json())
    .then((data) => {
        setContacts(data)
        setShowContacts(data)
    });
  }, []);

  const filterList = event => {
    let updatedList = contacts.filter(function(item){
      return item.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    
    setShowContacts(updatedList)
  }

  const sortByName = crescent => {
    if(crescent) {
      setShowContacts(contacts.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
  
        if (a.name > b.name) {
          return 1;
        }
  
        return 0;
      }));
    } else {
      setShowContacts([...contacts].sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
  
        if (a.name < b.name) {
          return 1;
        }
  
        return 0;
      }))
    }
  }

  const sortByCountry = crescent => {
    if(crescent) {
      setShowContacts(contacts.sort((a, b) => {
        if (a.country < b.country) {
          return -1;
        }

        if (a.country > b.country) {
          return 1;
        }

        return 0;
      }));
    } else {
      setShowContacts([...contacts].sort((a,b) => {
        if (a.country > b.country) {
          return -1;
        }

        if (a.country < b.country) {
          return 1;
        }

        return 0;
      }));
    }
  }

  const sortByCompany = crescent => {
    if (crescent) {
      setShowContacts(contacts.sort((a, b) => {
        if (a.company < b.company) {
          return -1;
        }

        if (a.company > b.company) {
          return 1;
        }

        return 0; 
      }));
    } else {
      setShowContacts([...contacts].sort((a,b) => {
        if (a.company > b.company) {
          return -1;
        }

        if (a.company < b.company) {
          return 1;
        }

        return 0; 
      }));
    }
  }

  const sortByDepartment = crescent => {
    if (crescent) {
      setShowContacts(contacts.sort((a, b) => {
        if (a.department < b.department) {
          return -1;
        }

        if (a.department > b.department) {
          return 1;
        }

        return 0; 
      }));
    } else {
      setShowContacts([...contacts].sort((a,b) => {
        if (a.department > b.department) {
          return -1;
        }

        if (a.department < b.department) {
          return 1;
        }

        return 0; 
      }));
    }
  }

  const sortByAdmissionDate = crescent => {
    if (crescent) {
      setShowContacts(contacts.sort((a, b) => {
        if (a.admissionDate < b.admissionDate) {
          return -1;
        }

        if (a.admissionDate > b.admissionDate) {
          return 1;
        }

        return 0; 
      }));
    } else {
      setShowContacts([...contacts].sort((a,b) => {
        if (a.admissionDate > b.admissionDate) {
          return -1;
        }

        if (a.admissionDate < b.admissionDate) {
          return 1;
        }

        return 0; 
      }));
    }
  }

  return (
    <React.Fragment>
      <Topbar />
      <Filters functionCallback={{ filterList, sortByName, sortByCountry, sortByCompany, sortByDepartment, sortByAdmissionDate }} />
      <Contacts contactData={showContacts}/>
    </React.Fragment>
  )
}

export default App;