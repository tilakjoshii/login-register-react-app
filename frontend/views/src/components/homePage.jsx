// // UserProfile.js

// import React from 'react';

// const UserProfile = () => {
//   return (
//     <div className="bg-gray-200 w-full min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-md">
//         <div className="text-center mb-4">
//           <img
//             src="https://placekitten.com/150/150"
//             alt="User Avatar"
//             className="rounded-full mx-auto mb-4"
//           />
//           <h2 className="text-2xl font-bold">John Doe</h2>
//           <p className="text-gray-500">Web Developer</p>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
//             <p>Email: john.doe@example.com</p>
//             <p>Phone: +1 123 456 7890</p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Location</h3>
//             <p>City: New York</p>
//             <p>Country: USA</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
// UserProfile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual endpoint to fetch user data
    axios.get('your-api-endpoint')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { name, email,avatar } = userData;

  return (
    <div className="bg-gray-200 w-full min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-4">
          <img
            src={avatar}
            alt="User Avatar"
            className="rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-500">User Viewer</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p>Email: {email}</p>
            <p>Phone: 98xxxxxxxx</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p>City: MNR</p>
            <p>Country: NEPAL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
