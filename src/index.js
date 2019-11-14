import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { combineReducers } from "redux";

const Actions = {
  buyCake: "BUY_CAKE",
  cookCake: "COOK_CAKE"
};

//create Action
function buyCake(text) {
  return {
    type: Actions.buyCake
  };
}
function cookCake(text) {
  return {
    type: Actions.cookCake
  };
}

//create reducer1
function reducer_buyCake(state = { numberOfSoldCake: 0 }, action) {
  switch (action.type) {
    case "BUY_CAKE":
      return (state = {
        numberOfSoldCake: state.numberOfSoldCake + 1
      });
    default:
      return state;
  }
}

//create reducer2
function reducer_cookCake(state = { numberOfCookedCake: 0 }, action) {
  switch (action.type) {
    case "COOK_CAKE":
      return (state = {
        numberOfCookedCake: state.numberOfCookedCake + 1
      });
    default:
      return state;
  }
}

//combine reducers
const mainReducer = combineReducers({
  buyCake: reducer_buyCake,
  cookCake: reducer_cookCake
});

//create store
const store = createStore(mainReducer);

const Root = document.getElementById("root");
const render = () => {
  var data = store.getState();
  console.log(store.getState().cookCake.numberOfCookedCake);
  ReactDOM.render(
    <App
      data={data}
      dispBuyCake={() => {
        store.dispatch(buyCake());
      }}
      dispCookCake={() => {
        store.dispatch(cookCake());
      }}
    />,
    Root
  );
};

render();
store.subscribe(render);
