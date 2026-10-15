import { StyleSheet, Text, View } from 'react-native';
import Counter from '../components/counter';

export default function CounterProps() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Penilaian Mahasiswa</Text>

      <Text style={styles.description}>
        Atur nilai menggunakan tombol di bawah.
      </Text>

      <Counter nilaiAwal={70} />

      <Text style={styles.info}>
        Nilai awal diberikan melalui Props
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
  },

  description: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 25,
  },

  info: {
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 15,
  },
});