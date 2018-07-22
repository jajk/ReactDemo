import {connect} from "react-redux";
import Main from './main';
import changeName from "../actions/main";
import { reduxForm } from 'redux-form/immutable';

const validate = values => {
    const errors = {};
    if (!values.get('name')) {
        errors.name = 'Required!'
    }
    return errors;
};

// Map Redux state to component props
function mapStateToProps(state)  {
    return {
        name: state.get('name')
    };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onChangeName: (name) => {
            dispatch(Object.assign(changeName, {name}));
        }
    };
}

let reduxFormComponent = reduxForm({
    form: 'testForm',
    validate
})(Main);

// Connected Component:
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxFormComponent);