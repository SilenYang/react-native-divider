import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 24,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 6,
    },
    line: {
        height: 24,
        borderBottomWidth: 1,
        transform: [{ translateY: -12 }],
    },
    shortWidth: {
        width: 20,
    },
    dashed: {
        borderStyle: 'dashed',
    },
    text: {
        paddingHorizontal: 24,
        fontSize: 16,
        fontWeight: '500',
    },
});

export default styles;