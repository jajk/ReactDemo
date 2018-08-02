import { FieldArray, Field } from 'redux-form/immutable';
import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class ServiceTable extends React.Component {
    componentWillMount () {
        this.props.actions.fetchServices();
    }

    _renderServices ({ fields }) {
        return (
            <tbody>
            {
                fields.map((member, index, fs) => {
                    let service = fs.get(index);
                    if (index === 0) {
                        return (
                            <tr key={service.get('name')}>
                                <td>{service.get('name')}</td>
                                <td>
                                    <Field
                                        name={`${member}.write`}
                                        component="input"
                                        type="checkbox"
                                    />
                                </td>
                            </tr>
                        );
                    } else {
                        return (
                            <tr key={service.get('name')}>
                                <td>{service.get('name')}</td>
                                <td>
                                    {(function () {
                                        if (fs.get(0).get('write') === true) {
                                            return (
                                                <Field
                                                    name={`${member}.write`}
                                                    component="input"
                                                    type="checkbox"
                                                    disabled
                                                    checked
                                                />
                                            );
                                        } else {
                                            return (
                                                <Field
                                                    name={`${member}.write`}
                                                    component="input"
                                                    type="checkbox"
                                                />
                                            );
                                        }
                                    })()}
                                </td>
                            </tr>
                        );
                    }
                })
            }
            </tbody>
        );
    }

    render () {
        return (
            <div className="pure-form pure-form-stacked">
                <table>
                    <thead>
                    <tr>
                        <th>Service</th>
                        <th>Write</th>
                    </tr>
                    </thead>
                    <FieldArray name="services" component={this._renderServices} />
                </table>
            </div>
        );
    }
}

ServiceTable.propTypes = {
    services: ImmutablePropTypes.list,
    actions: PropTypes.shape({
        fetchServices: PropTypes.func.isRequired,
    })
};
