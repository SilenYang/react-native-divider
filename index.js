import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const Divider = (props) => {
    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.line,
                    { borderColor: props.borderColor },
                    props.dashed && styles.dashed,
                    props.orientation === 'left' ? styles.shortWidth : { flex: 1 },
                ]}
            />
            <Text style={[styles.text, { color: props.color }]}>{props.children}</Text>
            <View
                style={[
                    styles.line,
                    { borderColor: props.borderColor },
                    props.dashed && styles.dashed,
                    props.orientation === 'right' ? styles.shortWidth : { flex: 1 },
                ]}
            />
        </View>
    );
};

Divider.propTypes = {
    dashed: PropTypes.bool,
    color: PropTypes.string,
    borderColor: PropTypes.string,
    orientation: PropTypes.oneOf(['left', 'center', 'right']),
};

Divider.defaultProps = {
    dashed: false,
    orientation: 'left',
    color: 'rgba(0,0,0,.85)',
    borderColor: '#e8e8e8',
};


export default Divider;