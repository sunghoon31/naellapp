import { StyleSheet, Text, View } from 'react-native';

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>NK</Text>
      </View>

      <Text style={styles.nama}>Naelul Kirom</Text>
      <Text style={styles.nim}>NIM: 202401001</Text>
      <Text style={styles.prodi}>Sistem Informasi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  avatarText: {
    color: '#ffffff',
    fontSize: 27,
    fontWeight: 'bold',
  },

  nama: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 5,
  },

  nim: {
    fontSize: 15,
    color: '#64748b',
    marginBottom: 4,
  },

  prodi: {
    fontSize: 15,
    color: '#2563eb',
    fontWeight: '600',
  },
});