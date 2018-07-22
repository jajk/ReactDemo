import {connect} from "react-redux";
import Counter from './counter';
import increaseAction from '../actions/counter/index';

// Map Redux state to component props
function mapStateToProps(state)  {
    return {
        value: state.get('count')
    };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    };
}

// Connected Component:
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);