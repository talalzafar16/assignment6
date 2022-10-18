import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"
import Data from '../components/Data';
import Detail from '../components/Detail';
export default function Douter() {
  return (
          <>
            <Router>
            <Routes>
                <Route path="/" element={<Data/>}/>
                <Route path="Data" element={<Data/>}/>
                <Route path="Detail" element={<Detail/>}/>
            </Routes>
        </Router>
        </>)
}
