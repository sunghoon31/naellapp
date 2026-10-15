
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CardPractice() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>HALO, SELAMAT DATANG 👋</Text>
            <Text style={styles.heading}>Profil Mahasiswa</Text>
            <Text style={styles.headerSubtitle}>
              Informasi profil dan akademik
            </Text>
          </View>

          <View style={styles.headerAvatar}>
            <Text style={styles.headerAvatarText}>NK</Text>
          </View>
        </View>

        {/* Card Profil */}
        <View style={styles.profileCard}>
          <View style={styles.cardTop}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>NK</Text>
            </View>

            <View style={styles.statusBadge}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>Aktif</Text>
            </View>
          </View>

          <Text style={styles.name}>Naelul Kirom</Text>
          <Text style={styles.major}>Sistem Informasi</Text>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>PROGRAM STUDI</Text>
              <Text style={styles.infoValue}>Sistem Informasi</Text>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>SEMESTER</Text>
              <Text style={styles.infoValue}>5</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>FAKULTAS</Text>
              <Text style={styles.infoValue}>Komputer</Text>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>STATUS</Text>
              <Text style={styles.infoValue}>Mahasiswa</Text>
            </View>
          </View>
        </View>

        {/* Ringkasan */}
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

        {/* Informasi */}
        <View style={styles.noteCard}>
          <Text style={styles.noteIcon}>💡</Text>
          <View style={styles.noteContent}>
            <Text style={styles.noteTitle}>Tentang Halaman Ini</Text>
            <Text style={styles.noteDescription}>
              Halaman ini menerapkan komponen View sebagai card
              dengan pengaturan ukuran, padding, margin, border,
              sudut melengkung, dan bayangan.
            </Text>
          </View>
        </View>

        <Text style={styles.footer}>
          React Native • Card Layout Practice
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
  content: {
    padding: 20,
    paddingTop: 45,
    paddingBottom: 35,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  greeting: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#64748b',
    letterSpacing: 1,
    marginBottom: 6,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 5,
  },
  headerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerAvatarText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  profileCard: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 22,
    marginBottom: 28,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 22,
    backgroundColor: '#dbeafe',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#dcfce7',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#16a34a',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#15803d',
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  major: {
    fontSize: 14,
    color: '#2563eb',
    fontWeight: '600',
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 12,
  },
  infoItem: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 10,
    color: '#94a3b8',
    fontWeight: 'bold',
    marginBottom: 7,
    letterSpacing: 0.5,
  },
  infoValue: {
    fontSize: 13,
    color: '#334155',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 15,
  },
  statistics: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 18,
    paddingHorizontal: 5,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    elevation: 3,
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 21,
    marginBottom: 9,
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
  noteCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#eff6ff',
    padding: 17,
    marginBottom: 25,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#bfdbfe',
    gap: 12,
  },
  noteIcon: {
    fontSize: 23,
  },
  noteContent: {
    flex: 1,
  },
  noteTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 6,
  },
  noteDescription: {
    fontSize: 12,
    lineHeight: 19,
    color: '#475569',
  },
  footer: {
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: 11,
  },
});
