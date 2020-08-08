import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        flex: 1,
        padding: 40
    },
    content:{
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        marginTop: 40,
        height: 58,
        backgroundColor: '#04d361',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 16
    },
    title:{
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180
    },
    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240
    }
})

export default styles