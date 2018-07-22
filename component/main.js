import React from "react";
import { Field } from 'redux-form/immutable';

export default class Main extends React.Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderField = this.renderField.bind(this);
    }
    handleSubmit (values) {
        this.props.onChangeName(values.get('name'));
        return false;
    }
    renderField ({ input, label, type, meta: {touched, error} }) {
        return (<div>
            <label>{label}</label>
            <input {...input} type={type} placeholder={label}/>
            {touched && error && <span>{error}</span>}
        </div>);
    }
    render(){
        const {handleSubmit} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.handleSubmit)}>
                    <Field name='name' type="input" component={this.renderField} label="Name" />
                    <button type='submit'>Submit</button>
                </form>
                <div>Displaying Area: {this.props.name}</div>
            </div>
        );
    }
}