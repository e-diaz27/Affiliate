import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";


//components
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";


function App() {
  return (
    <div className="App">
      <header className="App-header">Dietary Supplement Offers</header>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<RecordList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
    </div>
  );
}

export default App;
