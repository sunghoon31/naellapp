import { useState } from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function TextState() {
  const [nama, setNama] = useState('');
  const [namaTersimpan, setNamaTersimpan] = useState('');

  const simpanNama = () => {
    setNamaTersimpan(nama);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>✏️</Text>

      <Text style={styles.title}>Input Nama</Text>

      <Text style={styles.subtitle}>
        Masukkan nama kamu di bawah
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Contoh: Naelul Kirom"
        placeholderTextColor="#94a3b8"
        value={nama}
        onChangeText={setNama}
      />

      <Pressable style={styles.button} onPress={simpanNama}>
        <Text style={styles.buttonText}>Simpan Nama</Text>
      </Pressable>

      {namaTersimpan !== '' && (
        <View style={styles.resultCard}>
          <Text style={styles.resultLabel}>Nama kamu adalah</Text>
          <Text style={styles.resultText}>{namaTersimpan}</Text>
          <Text style={styles.welcome}>
            👋 Selamat datang!
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  icon: {
    fontSize: 45,
    marginBottom: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
  },

  subtitle: {
    fontSize: 15,
    color: '#64748b',
    marginTop: 6,
    marginBottom: 25,
  },

  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#1e293b',
    marginBottom: 15,
  },

  button: {
    width: '100%',
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  resultCard: {
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 25,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  resultLabel: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },

  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 8,
  },

  welcome: {
    fontSize: 14,
    color: '#64748b',
  },
});