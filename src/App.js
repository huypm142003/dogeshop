import { Routes, Route } from "react-router-dom";
import DefaultLayout from './container/DefaultLayout';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<DefaultLayout />} /> 
    </Routes>
  );
}

export default App;
