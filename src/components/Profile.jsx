import React, { useContext } from 'react'
import UserContext from '../context/useContext'

const Profile = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="bg-white p-6 rounded shadow-md w-80">
      <h2 className="text-xl font-semibold mb-4">Profile</h2>
      {!user ? (
        <p className="text-gray-500">Please login to view profile.</p>
      ) : (
        <ul className="space-y-2 text-gray-800">
          <li><strong>Welcome:</strong> {user.userName}</li>
          <li><strong>Password:</strong> {user.password}</li>
        </ul>
      )}
    </div>
  )
}

export default Profile

