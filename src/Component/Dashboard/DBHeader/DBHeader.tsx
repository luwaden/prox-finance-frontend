import React from "react";
import "./DBHeader.css"; // Import the CSS file for styling

const DashboardHeader: React.FC = () => {
  return (
    <header className='dashboard-header'>
      {/* Heading */}
      <div className='dashboard-heading'>
        <h1>Dashboard</h1>
      </div>

      {/* Search Box */}
      <div className='dashboard-search'>
        <input
          type='text'
          placeholder='Search'
          className='search-input'
          aria-label='Search'
        />
        <button className='search-button'>
          🔍 {/* Replace with an actual search icon in production */}
        </button>
      </div>

      {/* Notification and User Section */}
      <div className='dashboard-user-section'>
        {/* Notification Icon */}
        <div className='notification-icon'>
          🔔 {/* Replace with a notification icon */}
          <span className='notification-badge'>3</span>
        </div>

        {/* User Icon */}
        <div className='user-icon'>
          <span>N</span> {/* Placeholder for user's profile letter */}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
