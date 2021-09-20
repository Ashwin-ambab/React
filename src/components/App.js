import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import TextUtils from "./TextUtils";
import Accordion from "./Accordion";
import Header from "./Header";

const items = [
    {
        title: 'What ia React?',
        content: 'React is a front end javascript library'
    },
    {
        title: 'Why use React?',
        content: 'React is a afavorite JS library among enginners' 
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
            <Header />
                <div>
                    <Route path="/" exact component={SearchBar} />
                    <Route path="/textutils" exact component={() => <TextUtils title = "Enter the text:" />} />
                    <Route path="/accordion" render={() => <Accordion items={items} />} />  
                    {/* <TextUtils title = "Enter the text:" /> */}
                    {/* <Accordion items={items}/> */}
            </div>
           </BrowserRouter>
        </div>
    );
  }
  
  export default App;