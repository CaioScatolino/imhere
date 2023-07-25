import { Text, View, TextInput } from 'react-native'
import { styles } from './styles'

export function Home() {

    return (
        <View style={styles.container}>
            <Text key="1" style={styles.eventName}>
                Nome do Evento
            </Text>
            <Text key="2" style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Nome do Participante"
                placeholderTextColor="#6B6B6B"
                keyboardType='default'
            />
        </View>
    )

}