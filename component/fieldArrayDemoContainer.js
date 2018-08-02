import { connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';
import { bindActionCreators } from 'redux';
import fieldArrayDemo from './fieldArrayDemo';
import fetchServices  from '../actions/fieldArrayDemo/index';
import { fromJS, List } from 'immutable';

const formName = 'fieldArrayDemo';

function mapStateToProps (state, ownProps) {
    const services = state.get('services');
    const permissions = fromJS([{
        confnamespace: [],
        object: '*',
        privilege: 'write',
        scopefullpath: null,
        service: null,
        type: 'account'
    }]);
    let servicesScope = List();

    fromJS([{ name: '*' }]).concat(services).forEach(service=> {
        let isHere = permissions.findIndex( permission => {
            if (permission.get('type') === 'confItem' && permission.get('service') === service.name && permission.get('privilege') === 'write') {
                return true;
            } else {
                return false;
            }
        });
        let temp = fromJS({
            name: service.get('name'),
            write: isHere !== -1
        });
        if (servicesScope.findIndex( service => service.get('name') === temp.get('name')) === -1) {
            servicesScope = servicesScope.push(temp);
        }
    });

    return {
        services,
        permissions,
        initialValues: fromJS({ services: servicesScope }),
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators({ fetchServices }, dispatch),
    };
}

let ServiceTableRF = reduxForm({
    form: formName,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    updateUnregisteredFields: true
})(fieldArrayDemo);

ServiceTableRF = connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(ServiceTableRF);

export default ServiceTableRF;
