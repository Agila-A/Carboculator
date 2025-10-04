// src/context/EmissionContext.jsx
import React, { createContext, useContext, useState, useMemo , useEffect } from 'react';

const EmissionContext = createContext();

export const EmissionProvider = ({ children }) => {
  const [emission, setEmission] = useState(null);               // ✅ Existing state
  const [transportEmission, setTransportEmission] = useState(null); // ✅ Existing state
  const [electricityEmission, setElectricityEmission] = useState(null); // ✅ Existing state

  // ✅ Total emission calculation
  const totalEmission = useMemo(() => {
    const values = [
      emission || 0,
      transportEmission || 0,
      electricityEmission || 0
    ];
    return values.reduce((sum, val) => sum + val, 0);
  }, [emission, transportEmission, electricityEmission]);

  // ✅ Percentage calculation
  const percentageBreakdown = useMemo(() => {
    if (!totalEmission) return { emission: 0, transport: 0, electricity: 0 };

    return {
      emission: ((emission || 0) / totalEmission * 100).toFixed(2),
      transport: ((transportEmission || 0) / totalEmission * 100).toFixed(2),
      electricity: ((electricityEmission || 0) / totalEmission * 100).toFixed(2)
    };
  }, [emission, transportEmission, electricityEmission, totalEmission]);

  useEffect(() => {
  // Force a calculation at first mount
  console.log("Initial calculation on mount:");
}, []); //

  return (
    <EmissionContext.Provider 
      value={{ 
        emission, 
        setEmission, 
        transportEmission, 
        setTransportEmission, 
        electricityEmission,
        setElectricityEmission,
        totalEmission,            // ✅ New computed value
        percentageBreakdown       // ✅ New computed value
      }}
    >
      {children}
    </EmissionContext.Provider>
  );
};

export const useEmission = () => useContext(EmissionContext);
