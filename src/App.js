import React, { useEffect } from "react";
import "./App.css";
import "./fonts/Fink-Heavy-Font/FinkHeavy.ttf";
import { Routes, Route } from "react-router-dom";

import { Loading, MessageBox, Navigation } from "./components";
import {
  SignUp,
  Login,
  Villagers,
  Details,
  MyIsland,
  MyIslands,
} from "./pages";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { EditIslandForm } from "./pages/MyIsland/editIslandForm";

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
        <Route path="/" element={<Villagers />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/myislands" element={<MyIslands />} />
        <Route path="/myislands/:id" element={<MyIsland />} />
        <Route path="/editisland" element={<EditIslandForm />} />
      </Routes>
    </div>
  );
}

export default App;
