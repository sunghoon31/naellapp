import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProductCard from '../components/ProductCard';

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Selamat Datang 👋</Text>
        <Text style={styles.title}>Daftar Produk</Text>
        <Text style={styles.subtitle}>
          Temukan produk yang kamu butuhkan
        </Text>
      </View>

      <View style={styles.products}>
        <ProductCard
          nama="Laptop Lenovo"
          harga="Rp7.500.000"
          deskripsi="Laptop untuk belajar, pemrograman, dan pekerjaan sehari-hari."
        />

        <ProductCard
          nama="Smartphone Poco"
          harga="Rp3.500.000"
          deskripsi="Smartphone dengan performa tinggi untuk aktivitas sehari-hari."
        />

        <ProductCard
          nama="Headset Bluetooth"
          harga="Rp450.000"
          deskripsi="Headset nirkabel dengan desain nyaman untuk mendengarkan musik."
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },

  header: {
    padding: 25,
    paddingTop: 45,
  },

  greeting: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 5,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1e293b',
  },

  subtitle: {
    fontSize: 15,
    color: '#64748b',
    marginTop: 6,
  },

  products: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});