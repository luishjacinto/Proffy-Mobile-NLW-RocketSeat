import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './style'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler'
import { Teacher } from '../../components/TeacherItem'


function TeacherList() {
    const [filterOpen, setFilterOpen] = useState(false)
    const [teachers, setTeachers] = useState([])
    const [favorites, setFavorites] = useState<number[]>([])

    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')

    function handleFilterOpen() {
        let newValue = !filterOpen
        setFilterOpen(newValue)
    }

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if(response) {
                const favoritedTeachers = JSON.parse(response)
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id
                })

                setFavorites(favoritedTeachersIds)
            }
        })
    }

    useEffect(() => {
        api.get('classes').then((response) => {
            setTeachers(response.data)
        })

        loadFavorites()
    },[])

    useEffect(() => {}, [searchTeachers])

    async function searchTeachers() {

        const response = await api.get('classes',{
            params: {
                subject,
                week_day,
                time
            }
        })

        setFilterOpen(false)
        setTeachers(response.data)
        loadFavorites()
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponiveis"
                headerRight={
                    <TouchableOpacity
                        style={styles.filterButton}
                        onPress={handleFilterOpen}
                    >
                        <Feather name="filter" style={styles.filterIcon} />
                    </TouchableOpacity>
                }
            >
                
                {filterOpen && 
                    (<View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual a máteria?"
                            placeholderTextColor="#c1bccc"
                            value={subject}
                            onChangeText={text => { setSubject(text) }}
                        />


                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#c1bccc"
                                    value={week_day}
                                    onChangeText={text => { setWeekDay(text) }}
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual horário?"
                                    placeholderTextColor="#c1bccc"
                                    value={time}
                                    onChangeText={text => { setTime(text) }}
                                />
                            </View>
                        </View>

                        <RectButton style={styles.submitButton} onPress={searchTeachers}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>)
                }   
            </PageHeader>

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 8
                }}
            >
               {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
                        />
                    )      
               })}
              
            </ScrollView>
       </View>
    )
}

export default TeacherList