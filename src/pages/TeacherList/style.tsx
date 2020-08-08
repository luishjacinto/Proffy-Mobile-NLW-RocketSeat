import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },
    teacherList: {
        marginTop: -40
    },
    filterContainer: {
        maxHeight: 40,
        overflow: 'hidden'
    },
    filterContainerOpen: {
        maxHeight: '100%',
    },
    filterButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 24,
        marginBottom: 12
    },
    filterIcon: {
        fontSize: 24,
        color: '#fff'
    },
    searchForm: {
        marginBottom: 24
    },
    label: {
        color: '#d3c2ff',
        fontFamily: 'Poppins_400Regular'
    },
    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputBlock: {
        width: '48%'
    },
    submitButton: {
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },
})

export default styles