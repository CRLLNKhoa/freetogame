import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Default from './Layout/default';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Detail from './pages/Detail';
import Games from './pages/Games';
import Search from './pages/Search';
import Special from './pages/Special';
import Top from './pages/Top';
import ScrollToTop from './component/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />

            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Default>
                                <Home />
                            </Default>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <Default>
                                <Login />
                            </Default>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <Default>
                                <Register />
                            </Default>
                        }
                    />
                    <Route
                        path="/detail/:id"
                        element={
                            <Default>
                                <Detail />
                            </Default>
                        }
                    />
                    <Route
                        path="/games"
                        element={
                            <Default>
                                <Games />
                            </Default>
                        }
                    />
                    <Route
                        path="/search"
                        element={
                            <Default>
                                <Search />
                            </Default>
                        }
                    />
                    <Route
                        path="/giveaways"
                        element={
                            <Default>
                                <Special />
                            </Default>
                        }
                    />
                    <Route
                        path="/top"
                        element={
                            <Default>
                                <Top />
                            </Default>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
