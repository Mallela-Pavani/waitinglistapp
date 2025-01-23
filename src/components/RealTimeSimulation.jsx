import React, { useEffect } from "react";
import { useWaitlist } from "../context/WaitListContext";

function RealTimeSimulation() {
  const context = useWaitlist();
  
  useEffect(() => {
    // Verify context and dispatch are available
    if (!context || !context.dispatch) {
      console.error('WaitlistContext or dispatch is not available');
      return;
    }

    console.log('RealTimeSimulation started');
    
    const interval = setInterval(() => {
      try {
        const randomName = `User${Math.floor(Math.random() * 1000)}`;
        context.dispatch({
          type: "ADD_TO_GENERAL_LIST",
          payload: { name: randomName }
        });
        console.log('Added user:', randomName);
      } catch (error) {
        console.error('Error in RealTimeSimulation:', error);
      }
    }, 10000);

    return () => {
      console.log('RealTimeSimulation cleanup');
      clearInterval(interval);
    };
  }, [context]);

  return null;
}

export default RealTimeSimulation;
