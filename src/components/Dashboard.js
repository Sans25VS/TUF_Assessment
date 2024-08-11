// src/components/Dashboard.js
import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = ({ onBannerUpdate }) => {
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [timer, setTimer] = useState(60);
  const [isVisible, setIsVisible] = useState(true);

  const updateBanner = async () => {
    const bannerData = { description, link, timer, isVisible };
    await axios.post('/api/banner', bannerData);
    onBannerUpdate(bannerData);
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <label>
        Banner Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Banner Link:
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </label>
      <label>
        Timer (seconds):
        <input
          type="number"
          value={timer}
          onChange={(e) => setTimer(Number(e.target.value))}
        />
      </label>
      <label>
        Banner Visible:
        <input
          type="checkbox"
          checked={isVisible}
          onChange={(e) => setIsVisible(e.target.checked)}
        />
      </label>
      <button onClick={updateBanner}>Update Banner</button>
    </div>
  );
};

export default Dashboard;
