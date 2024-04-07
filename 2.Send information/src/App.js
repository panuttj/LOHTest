import React, { useEffect, useState } from 'react';
import ComponentLv1 from './component/ComponentLV1';
import axios from 'axios';

function App() {
  const [listNavigation, setListNavigation] = useState();
  const [listCategories, setListCategories] = useState();

  useEffect(() => {
    getData();
  }, []);


  const getData = async () => {
    try {
      const navData = axios.get('http://localhost:3000/navigation');
      const cateData = axios.get('http://localhost:3000/categories');
      const response = await axios.all([navData, cateData]);
      setListNavigation(response[0].data);
      setListCategories(response[1].data);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <div className="bg-slate-50 h-screen ">
      {listCategories && listNavigation &&
        <ComponentLv1 navigation={listNavigation} categories={listCategories} />
      }
    </div>
  );
}

export default App;
