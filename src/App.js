import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React from "react";
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { APIContextProvider } from './components/ContextAPI';
import BookList from './components/BookList';
import BookDetail from './components/BookDetails';
function App() {
  return (<>
    <div>
      <Routes>

        <Route exact path='/' element={<Home></Home>}></Route>

        <Route exact path='/books' element={<APIContextProvider>
          <div className='App'>
            <h1>Related search result:</h1>
            <BookList></BookList>
          </div>
        </APIContextProvider>}>
        </Route>

        <Route exact path='/books/:id' element={<BookDetail></BookDetail>}></Route>


      </Routes>

    </div>

  </>
  );
}

export default App;