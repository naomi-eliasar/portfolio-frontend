import React, { useEffect } from "react";
import "./App.css";
import "./fonts/Fink-Heavy-Font/FinkHeavy.ttf";
import { Routes, Route } from "react-router-dom";

import { Loading, MessageBox, Navigation } from "./components";
import { Home, SignUp, Login, Villagers, Details, MyIsland } from "./pages";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/villagers" element={<Villagers />} />
        <Route path="/details" element={<Details />} />
        <Route path="/myisland" element={<MyIsland />} />
      </Routes>
    </div>
  );
}

export default App;
