import React from 'react'

import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'

import { Participant } from '../../components/Participant'

export function Home() {

    const participants = ['Caio', 'Vini', 'Rodrigo', 'Biro', 'Tonho', 'Miro', 'Anacreto', 'Mike', 'John']

    function handleParticipantAdd() {
        if (participants.includes("Rodrigo")) {

            return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome!")

        }
        console.log('Você clicou no botão de Adicionar!')
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: () => Alert.alert("Deletado")
            },
            {
                text: "Não",
                style: 'cancel',
                
            }
        ])

        console.log(`Você removeu o ${name}`)
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

            <FlatList
                data={
                    participants
                }

                keyExtractor={item => item}

                renderItem={({ item }) => (
                    <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />

                )}

                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista.
                    </Text>
                )}

                showsVerticalScrollIndicator={false}
            />

        </View>


    )

}