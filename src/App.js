import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd';


import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
import './App.css';

const App = () => (
    <div className="app">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
            <Layout>
                <div className="routes">
                    <Routes>
                        <Route  path="/" element={<Homepage />} />
                        <Route  path="/exchanges" element={<Exchanges />} />
                        <Route  path=":coinUuId" element={<CryptoDetails />} />
                        <Route path="/crypto" element={<CryptoDetails />} />
                        <Route  path="/cryptocurrencies" element={<Cryptocurrencies />} />
                        <Route  path="/news" element={<News />} />
                    </Routes>
                </div>
            </Layout>
            <div className="footer">
                <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022 
                    <Link to="/">
                        CryptoTKN Inc.
                    </Link> <br />
                    All Rights Reserved
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/news">News</Link>
                </Space>
            </div>
        </div>
    </div>
);

export default App;