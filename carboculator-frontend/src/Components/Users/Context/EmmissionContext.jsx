// src/context/EmissionContext.jsx
import React, { createContext, useContext, useState } from 'react';

const EmissionContext = createContext();

export const EmissionProvider = ({ children }) => {
  const [emission, setEmission] = useState(null);
  const [transportEmission, setTransportEmission] = useState(null); // ✅ New transport emission state
  const [electricityEmission,setElectricityEmission]=useState(null);

  

  return (
    <EmissionContext.Provider value={{ 
      emission, 
      setEmission, 
      transportEmission, 
      setTransportEmission, // ✅ Expose setter with a unique name
      electricityEmission,
      setElectricityEmission
    }}>
      {children}
    </EmissionContext.Provider>
  );
};

export const useEmission = () => useContext(EmissionContext);
