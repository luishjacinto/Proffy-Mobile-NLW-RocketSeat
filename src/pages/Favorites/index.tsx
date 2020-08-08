import React, { useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './style'
import { View, ScrollView, Text } from 'react-native'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import { Teacher } from '../../components/TeacherItem'
import { useFocusEffect } from '@react-navigation/native'

function Favorites() {
    const [favorites, setFavorites] = useState([])
    const [loading, setLoading] = useState(true)

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if(response) {
                const favoritedTeachers = JSON.parse(response)
                
                setFavorites(favoritedTeachers)
                setLoading(false)
            }
        })
    }

    useFocusEffect(() => {
        loadFavorites()
    },[])

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos"/>
            
            {(!favorites[0] && !loading) &&
                <View style={styles.emptyFavorites}>
                    <Text style={styles.emptyFavoritesText}>Você ainda não favoritou nenhum proffy.</Text>
                </View>
            }
            
            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 8
                }}
            >
               {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher}
                            favorited
                        />
                    )
               })}
               
            </ScrollView>
        </View>
    )
}

export default Favorites