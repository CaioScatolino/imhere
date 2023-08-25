import React from 'react'

import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

import { Participant } from '../../components/Participant'

export function Home() {

    function handleParticipantAdd() {
        console.log('Você clicou no botão de Adicionar!')
    }

    return (
        <View style={styles.container}>
            <Text key="1" style={styles.eventName}>
                Nome do Evento
            </Text>
            <Text key="2" style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022.
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Participante"
                    placeholderTextColor="#6B6B6B"
                    keyboardType='default'
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <Participant name='Caio'/>
            <Participant name='Rodrigo'/>
            <Participant name='Diego'/>
            <Participant name='Biro'/>
        </View>

        
    )

}