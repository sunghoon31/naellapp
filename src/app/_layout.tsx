import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#94a3b8',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Produk',
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>🛍️</Text>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>👤</Text>
          ),
        }}
      />

      <Tabs.Screen
        name="counter"
        options={{
          title: 'Counter',
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>🔢</Text>
          ),
        }}
      />

      <Tabs.Screen
        name="text-state"
        options={{
          title: 'Input',
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>✏️</Text>
          ),
        }}
      />

      <Tabs.Screen
        name="style-practice"
        options={{
          title: 'Style',
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>🎨</Text>
          ),
        }}
      />
      <Tabs.Screen
  name="flexbox-practice"
  options={{
    title: 'Flexbox',
    tabBarIcon: ({ color }) => (
      <Text style={{ color, fontSize: 20 }}>📐</Text>
    ),
  }}
/>
<Tabs.Screen
  name="card-practice"
  options={{
    title: 'Card',
    tabBarIcon: ({ color }) => (
      <Text style={{ color, fontSize: 20 }}>🃏</Text>
    ),
  }}
/>
<Tabs.Screen
  name="responsive-practice"
  options={{
    title: 'Responsive',
    tabBarIcon: ({ color }) => (
      <Text style={{ color, fontSize: 20 }}>📱</Text>
    ),
  }}
/>
<Tabs.Screen
  name="profile-practice"
  options={{
    title: 'Profil',
    tabBarIcon: ({ color }) => (
      <Text style={{ color, fontSize: 20 }}>👨‍🎓</Text>
    ),
  }}
/>
<Tabs.Screen
  name="keren"
  options={{
    title: 'Nexus',
    tabBarIcon: ({ color }) => (
      <Text style={{ color, fontSize: 20 }}>✨</Text>
    ),
  }}
/>
    </Tabs>
  );
}