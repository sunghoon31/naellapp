import { StyleSheet, Text, View } from 'react-native';

type ProductCardProps = {
  nama: string;
  harga: string;
  deskripsi: string;
};

export default function ProductCard({
  nama,
  harga,
  deskripsi,
}: ProductCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <Text style={styles.iconText}>🛍️</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.nama}>{nama}</Text>
        <Text style={styles.harga}>{harga}</Text>
        <Text style={styles.deskripsi}>{deskripsi}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

  icon: {
    width: 55,
    height: 55,
    borderRadius: 14,
    backgroundColor: '#eff6ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  iconText: {
    fontSize: 25,
  },

  content: {
    flex: 1,
  },

  nama: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },

  harga: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2563eb',
    marginBottom: 5,
  },

  deskripsi: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 19,
  },
});