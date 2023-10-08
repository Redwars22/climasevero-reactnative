import React, { createContext, useContext, useState } from 'react';

const QueryContext = createContext();

export const QueryProvider = ({ children }) => {
  const [city, setCity] = useState('Dubai');

  const updateCity = (newCity) => {
    setCity(newCity);
  };

  return (
    <QueryContext.Provider value={{ city, updateCity }}>
      {children}
    </QueryContext.Provider>
  );
};

export const useQueryContext = () => {
  return useContext(QueryContext);
};
