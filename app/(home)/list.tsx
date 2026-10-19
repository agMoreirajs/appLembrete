import { StyleSheet, FlatList, View } from 'react-native'
import { LembreteItem } from '../../components/lembreteItem/lembreteItem'
import { getAllLembretes } from '../../service/lembrete';

 
export default function List() {
 
    const lembretes= getAllLembretes(); 
    return (
        <View style={styles.container}>
            <FlatList
                data={lembretes}
                renderItem={({ item }) => <LembreteItem lembrete={item} />} 
                keyExtractor={item => item.lembreteId.toString()} //identificação do index de cada item
                style={styles.list}
            >
            </FlatList>          
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "#ffe0f5"
    },
    list: {
        width: "100%",
        padding: 16,
        fontSize: 14,
    },
});