import { StyleSheet, Text, View } from "react-native";




export default function VelkomstMelding() {
    return (
        <View style={styles.container}>
            <Text>Velkommen til pasientappen</Text>
            <Text>Vennligst logg inn, ples</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 80,
        height: 600,
    },
    containerText: {
        fontSize: 40,
        fontWeight: 'bold',
    }
})