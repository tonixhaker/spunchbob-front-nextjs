import React  from 'react';
import PropTypes from 'prop-types';
import {Pane, Spinner} from 'evergreen-ui';



class Loader extends React.Component {
    static propTypes = {
        height:PropTypes.string.isRequired,
        size:PropTypes.number.isRequired
    };

    render() {
        const {height, size} = this.props;
        return (
            <Pane display="flex" alignItems="center" justifyContent="center" height={height}>
                <Spinner size={size}/>
            </Pane>);

    }
}


export default Loader;