import React, { useEffect } from "react";
const ListDevice = () => {

//   Uncaught ReferenceError: useState is not defined
//     at ListDevice (ListDevice.jsx:5:33)
  const [devices, setDevices] = React.useState([]);
  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/devices/")
           
  
        .then((res) => res.json())
        .then((data) => setDevices(data))
        .catch((error) => console.error("Error fetching devices:", error));

  }, []);

  return (              
    <div>
      <h2>Device List</h2>
      <ul>  
        {devices.map((device) => (
            <li key={device.id}>    
                {device.name} - {device.type}
            </li>
        ))}  
        
      </ul>  
    </div>
  );
}
export default ListDevice;