import { StyleSheet, FlatList, View } from 'react-native';
import { LembreteItem } from '../../components/lembreteItem/lembreteItem';
import { getAllLembretes, getAllLembretesByAPI } from '../../service/lembrete';
import { useEffect, useState } from 'react';

export default function List() {
  const [meusLembretes, setMeusLembretes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLembretes() {
      try {
        const data = await getAllLembretesByAPI();
        setMeusLembretes(data);
      } finally {
        setLoading(false);
      }
    }

    fetchLembretes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={meusLembretes}
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