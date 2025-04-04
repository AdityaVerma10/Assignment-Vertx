import React from 'react'

const Header = ({activeSection}) => {
  return (
    <div className="flex justify-between items-center px-5 py-4 border-b border-gray-700">
      <div className="text-lg font-semibold">{activeSection}</div>
      <div className="flex items-center">
        <div className="px-4 py-2 cursor-pointer text-sm">Activity</div>
        <div className="px-4 py-2 cursor-pointer text-sm">Log out</div>
      </div>
    </div>
  )
}

export default Header