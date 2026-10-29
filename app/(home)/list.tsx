import { StyleSheet, FlatList, View } from 'react-native';
import { LembreteItem } from '../../components/lembreteItem/lembreteItem';
import { getAllLembretes, getAllLembretesByAPI } from '../../service/lembrete';
import { useEffect, useState } from 'react';
import { Lembrete } from '../../types/lembrete';

export default function List() {
 const [lembretes, setLembretes] = useState<Lembrete[]>([]);
 
 useEffect(() => {
    async function getLembretesAll() {
      const listaLembretes = await getAllLembretesByAPI();
      setLembretes(listaLembretes);
    }
    getLembretesAll();
  }, [lembretes]);

  return (
    <View style={styles.container}>
      <FlatList
        data={lembretes}
        renderItem={({ item }) => <LembreteItem lembrete={item} />}
        keyExtractor={(item) => item.LembreteId.toString()}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#ffe0f5',
  },
  list: {
    width: '100%',
    padding: 16,
    fontSize: 14,
  },
});