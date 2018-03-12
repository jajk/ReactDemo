import React from "react";

export default class Main extends React.Component {
    render(){
        const { name } = this.props;
        return (
            <div>
                <input type="text" value={name} onChange={this.props.onChangeName}/>
            </div>
        );
    }
}