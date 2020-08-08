import React from 'react'

import styles from './style'
import { View, ImageBackground, Text, Image } from 'react-native'
import * as WebBrowser from 'expo-web-browser';


import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import giveClassesImageBackground from '../../assets/images/give-classes-background.png'

import { RectButton } from 'react-native-gesture-handler'

function GiveClasses() {

    function handleOpenWebPlatform() {
        WebBrowser.openBrowserAsync('https://luishjacinto.github.io/Proffy-Web-NLW-RocketSeat/#/give-classes');
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode="contain" 
                source={giveClassesImageBackground} 
                style={styles.content}
            >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como Professor na nossa plataforma web
                </Text>
            </ImageBackground>

            <RectButton style={styles.button} onPress={handleOpenWebPlatform}>                
                <Text style={styles.buttonText}>Abrir plataforma web</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses