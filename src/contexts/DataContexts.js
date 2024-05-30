// datacontexts.js
import React, { createContext, useState } from 'react';

// Create a context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [contactInfo, setContactInfo] = useState({
    phone: '',
    email: ''
  });

  return (
    <DataContext.Provider value={{  contactInfo, setContactInfo }}>
      {children}
    </DataContext.Provider>
  );
};
