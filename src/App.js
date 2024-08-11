// src/App.js
import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import axios from 'axios';

const App = () => {
  const [bannerData, setBannerData] = useState({
    description: '',
    link: '',
    timer: 60,
    isVisible: true,
  });

  const fetchBannerData = async () => {
    const { data } = await axios.get('/api/banner');
    setBannerData(data);
  };

  useEffect(() => {
    fetchBannerData();
  }, []);

  const handleTimeUp = () => {
    setBannerData({ ...bannerData, isVisible: false });
  };

  const updateBannerData = (newData) => {
    setBannerData(newData);
  };

  return (
    <div className="App">
      <Banner
        description={bannerData.description}
        link={bannerData.link}
        isVisible={bannerData.isVisible}
        timer={bannerData.timer}
        onTimeUp={handleTimeUp}
      />
      <Dashboard onBannerUpdate={updateBannerData} />
    </div>
  );
};

export default App;
