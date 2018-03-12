import {connect} from "react-redux";
import Main from './main';
import changeName from "../actions/main";

// Map Redux state to component props
function mapStateToProps(state)  {
    console.log(state);
    return {
        name: state.name
    };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onChangeName: (event) => {
            dispatch(Object.assign(changeName, {name: event.target.value}));
        }
    };
}

// Connected Component:
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);