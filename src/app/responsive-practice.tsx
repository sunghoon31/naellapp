import {
    ScrollView,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';

const menus = [
  { id: '1', icon: '📚', title: 'Akademik', desc: 'Informasi perkuliahan' },
  { id: '2', icon: '📝', title: 'Tugas', desc: 'Daftar tugas kuliah' },
  { id: '3', icon: '📅', title: 'Jadwal', desc: 'Jadwal perkuliahan' },
  { id: '4', icon: '📊', title: 'Nilai', desc: 'Hasil akademik' },
];

export default function ResponsivePractice() {
  const { width } = useWindowDimensions();

  // Mengatur jumlah kolom berdasarkan lebar layar
  const isSmallScreen = width < 380;
  const cardWidth = isSmallScreen ? '100%' : '48%';

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.content}>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.greeting}>SELAMAT DATANG 👋</Text>
            <Text style={styles.title}>Dashboard Mahasiswa</Text>
            <Text style={styles.subtitle}>
              Ringkasan aktivitas akademik
            </Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>NK</Text>
          </View>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerLabel}>SELAMAT BELAJAR</Text>
            <Text style={styles.bannerTitle}>Terus berkembang!</Text>
            <Text style={styles.bannerDesc}>
              Tingkatkan kemampuan dan raih prestasi terbaikmu.
            </Text>
          </View>
          <Text style={styles.bannerIcon}>🎓</Text>
        </View>

        {/* Statistik */}
        <Text style={styles.sectionTitle}>Ringkasan Akademik</Text>

        <View style={styles.statistics}>
          <View style={styles.statCard}>
            <Text style={styles.statIcon}>📚</Text>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Mata Kuliah</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statIcon}>📝</Text>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Tugas Aktif</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statIcon}>⭐</Text>
            <Text style={styles.statNumber}>3.75</Text>
            <Text style={styles.statLabel}>IPK</Text>
          </View>
        </View>

        {/* Menu */}
        <Text style={styles.sectionTitle}>Menu Akademik</Text>

        <View style={styles.menuContainer}>
          {menus.map((menu) => (
            <View
              key={menu.id}
              style={[styles.menuCard, { width: cardWidth }]}
            >
              <Text style={styles.menuIcon}>{menu.icon}</Text>
              <Text style={styles.menuTitle}>{menu.title}</Text>
              <Text style={styles.menuDesc}>{menu.desc}</Text>
            </View>
          ))}
        </View>

        {/* Informasi */}
        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>💡</Text>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Responsive Design</Text>
            <Text style={styles.infoDesc}>
              Tampilan ini menggunakan Flexbox dan ukuran fleksibel
              agar konten tetap rapi pada berbagai ukuran layar.
            </Text>
          </View>
        </View>

        <Text style={styles.footer}>
          React Native • Responsive Layout Practice
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },

  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
  },

  content: {
    width: '100%',
    maxWidth: 600,
    paddingHorizontal: '5%',
    paddingTop: 35,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    marginBottom: 25,
  },

  headerText: {
    flex: 1,
  },

  greeting: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#64748b',
    letterSpacing: 1,
    marginBottom: 6,
  },

  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#1e293b',
    flexShrink: 1,
  },

  subtitle: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 5,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  banner: {
    width: '100%',
    backgroundColor: '#2563eb',
    borderRadius: 20,
    padding: 20,
    marginBottom: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },

  bannerContent: {
    flex: 1,
  },

  bannerLabel: {
    color: '#bfdbfe',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 8,
  },

  bannerTitle: {
    color: '#ffffff',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  bannerDesc: {
    color: '#dbeafe',
    fontSize: 12,
    lineHeight: 19,
  },

  bannerIcon: {
    fontSize: 38,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 14,
  },

  statistics: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 28,
  },

  statCard: {
    flex: 1,
    minWidth: 0,
    backgroundColor: '#ffffff',
    paddingVertical: 17,
    paddingHorizontal: 4,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 5,
  },

  statIcon: {
    fontSize: 21,
    marginBottom: 8,
  },

  statNumber: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#2563eb',
  },

  statLabel: {
    fontSize: 10,
    color: '#64748b',
    marginTop: 5,
    textAlign: 'center',
  },

  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 25,
  },

  menuCard: {
    backgroundColor: '#ffffff',
    padding: 17,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    minHeight: 125,
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },

  menuIcon: {
    fontSize: 25,
    marginBottom: 9,
  },

  menuTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1e293b',
  },

  menuDesc: {
    fontSize: 11,
    color: '#64748b',
    marginTop: 5,
  },

  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    backgroundColor: '#dbeafe',
    padding: 17,
    borderRadius: 16,
    marginBottom: 25,
  },

  infoIcon: {
    fontSize: 23,
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 5,
  },

  infoDesc: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 19,
  },

  footer: {
    textAlign: 'center',
    fontSize: 11,
    color: '#94a3b8',
  },
});