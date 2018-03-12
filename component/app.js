import React from "react";
import Counter from './counterContainer';
import Main from './mainContainer';

export default class App extends React.Component {
    render(){
        return (
            <div>
                <Counter/>
                <Main/>
            </div>
        );
    }
}