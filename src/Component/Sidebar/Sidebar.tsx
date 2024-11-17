import React from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <aside className='sidebar'>
      {/* Brand Logo */}
      <div className='brand'>
        <h2 className='brand-name'>PROX CASH</h2>
      </div>

      {/* Menu Items */}
      <nav className='menu'>
        <ul>
          <li className='menu-item'>
            <span className='menu-icon'>👤</span>
            <span className='menu-text'>Customers</span>
          </li>
          <li className='menu-item'>
            <span className='menu-icon'>📥</span>
            <span className='menu-text'>Inbox</span>
          </li>
          <li className='menu-item active'>
            <span className='menu-icon'>📊</span>
            <span className='menu-text'>Dashboard</span>
          </li>
          <li className='menu-item'>
            <span className='menu-icon'>📚</span>
            <span className='menu-text'>Knowledge</span>
          </li>
          <li className='menu-item'>
            <span className='menu-icon'>💰</span>
            <span className='menu-text'>Pricing</span>
          </li>
          <li className='menu-item'>
            <span className='menu-icon'>❓</span>
            <span className='menu-text'>Help</span>
          </li>
        </ul>
      </nav>

      {/* Settings Section */}
      <div className='settings'>
        <ul>
          <li className='settings-item'>
            <span className='settings-icon'>⚙️</span>
            <span className='settings-text'>Personal Settings</span>
          </li>
          <li className='settings-item'>
            <span className='settings-icon'>🌐</span>
            <span className='settings-text'>Global Settings</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
