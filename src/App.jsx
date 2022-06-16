import React from 'react';
import Navbar from "./components/navbar"
import Search from "./search";
import Stories from "./stories";
import Pagination from "./pagination";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {
 
  return (
    <>
      <Navbar />
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;