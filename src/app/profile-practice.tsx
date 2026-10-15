import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function ProfilePractice() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.content}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerLabel}>STUDENT PORTAL</Text>
            <Text style={styles.headerTitle}>Profil Mahasiswa</Text>
          </View>

          <View style={styles.headerIcon}>
            <Text style={styles.headerIconText}>👤</Text>
          </View>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.cover}>
            <View style={styles.coverCircleOne} />
            <View style={styles.coverCircleTwo} />
            <Text style={styles.coverLabel}>STUDENT PROFILE</Text>
          </View>

          <View style={styles.profileContent}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
              }}
              style={styles.profileImage}
            />

            <View style={styles.identity}>
              <View style={styles.activeBadge}>
                <View style={styles.activeDot} />
                <Text style={styles.activeText}>Mahasiswa Aktif</Text>
              </View>

              <Text style={styles.name}>Naelul Kirom</Text>
              <Text style={styles.major}>Sistem Informasi</Text>
              <Text style={styles.campus}>
                Universitas Ma’soem
              </Text>
            </View>

            <View style={styles.divider} />

            {/* Academic Information */}
            <Text style={styles.sectionTitle}>
              Informasi Akademik
            </Text>

            <View style={styles.infoGrid}>
              <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>PROGRAM STUDI</Text>
                <Text style={styles.infoValue}>Sistem Informasi</Text>
              </View>

              <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>SEMESTER</Text>
                <Text style={styles.infoValue}>5</Text>
              </View>

              <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>FAKULTAS</Text>
                <Text style={styles.infoValue}>Komputer</Text>
              </View>

              <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>STATUS</Text>
                <Text style={styles.infoValue}>Aktif</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Statistics */}
        <Text style={styles.sectionTitleOutside}>
          Ringkasan Akademik
        </Text>

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
            <Text style={styles.statNumber}>3.88</Text>
            <Text style={styles.statLabel}>IPK</Text>
          </View>
        </View>

        {/* About */}
        <View style={styles.aboutCard}>
          <View style={styles.aboutHeader}>
            <Text style={styles.aboutIcon}>💡</Text>
            <Text style={styles.aboutTitle}>Tentang Saya</Text>
          </View>

          <Text style={styles.aboutDescription}>
            Mahasiswa Sistem Informasi yang memiliki ketertarikan
            pada pengembangan teknologi, pengolahan data, dan
            pembuatan aplikasi berbasis digital.
          </Text>
        </View>

        {/* Skills */}
        <Text style={styles.sectionTitleOutside}>
          Bidang yang Dipelajari
        </Text>

        <View style={styles.skillsContainer}>
          <View style={styles.skillBadge}>
            <Text style={styles.skillText}>React Native</Text>
          </View>

          <View style={styles.skillBadge}>
            <Text style={styles.skillText}>JavaScript</Text>
          </View>

          <View style={styles.skillBadge}>
            <Text style={styles.skillText}>UI Design</Text>
          </View>

          <View style={styles.skillBadge}>
            <Text style={styles.skillText}>Data Analysis</Text>
          </View>
        </View>

        <Text style={styles.footer}>
          STUDENT PROFILE • REACT NATIVE
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
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    padding: 20,
    paddingTop: 35,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  headerLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#64748b',
    letterSpacing: 2,
    marginBottom: 5,
  },

  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0f172a',
  },

  headerIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: '#dbeafe',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerIconText: {
    fontSize: 22,
  },

  profileCard: {
    backgroundColor: '#ffffff',
    borderRadius: 22,
    overflow: 'hidden',
    marginBottom: 28,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  cover: {
    height: 115,
    backgroundColor: '#172554',
    justifyContent: 'center',
    paddingHorizontal: 22,
    overflow: 'hidden',
  },

  coverCircleOne: {
    position: 'absolute',
    width: 170,
    height: 170,
    borderRadius: 100,
    backgroundColor: '#1d4ed8',
    opacity: 0.35,
    right: -35,
    top: -85,
  },

  coverCircleTwo: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: '#60a5fa',
    opacity: 0.2,
    right: 75,
    bottom: -85,
  },

  coverLabel: {
    color: '#bfdbfe',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  profileContent: {
    padding: 22,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#ffffff',
    marginTop: -72,
    marginBottom: 14,
    backgroundColor: '#e2e8f0',
  },

  identity: {
    alignItems: 'flex-start',
  },

  activeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dcfce7',
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
    marginBottom: 10,
  },

  activeDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#16a34a',
  },

  activeText: {
    color: '#15803d',
    fontSize: 11,
    fontWeight: 'bold',
  },

  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0f172a',
  },

  major: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2563eb',
    marginTop: 5,
  },

  campus: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 5,
  },

  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 22,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 15,
  },

  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  infoBox: {
    width: '47%',
    backgroundColor: '#f8fafc',
    padding: 13,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },

  infoLabel: {
    fontSize: 9,
    color: '#94a3b8',
    fontWeight: 'bold',
    marginBottom: 7,
  },

  infoValue: {
    fontSize: 13,
    color: '#334155',
    fontWeight: '600',
  },

  sectionTitleOutside: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 15,
  },

  statistics: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
  },

  statCard: {
    flex: 1,
    minWidth: 0,
    backgroundColor: '#ffffff',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    elevation: 2,
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

  aboutCard: {
    backgroundColor: '#ffffff',
    padding: 19,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 27,
  },

  aboutHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginBottom: 10,
  },

  aboutIcon: {
    fontSize: 21,
  },

  aboutTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1e293b',
  },

  aboutDescription: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 21,
  },

  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 30,
  },

  skillBadge: {
    backgroundColor: '#dbeafe',
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  skillText: {
    color: '#1d4ed8',
    fontSize: 12,
    fontWeight: '600',
  },

  footer: {
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: 10,
    letterSpacing: 1,
  },
});