import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Counter() {
  const [angka, setAngka] = useState(0);

  const tambah = () => {
    setAngka(angka + 1);
  };

  const kurang = () => {
    setAngka(angka - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter Sederhana</Text>

      <Text style={styles.angka}>{angka}</Text>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={kurang}>
          <Text style={styles.buttonText}>− Kurang</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={tambah}>
          <Text style={styles.buttonText}>+ Tambah</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
  },

  angka: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 30,
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },

  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});