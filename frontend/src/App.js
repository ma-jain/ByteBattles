import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import ProblemList from './pages/ProblemList';
import CreateProblem from './pages/CreateProblem';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProblemList />} />
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/signin" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create-problem" element={<CreateProblem />} />
            </Routes>
        </Router>
    );
}

export default App;
