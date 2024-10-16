import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import icon from "../../constants/icon.js";

const reservations = [
    {
      id: '1',
      doctor: 'Dra. Nise da Silveira',
      specialty: 'Cirurgia Plástica',
      date: '18/11/2024',
      time: '09:30h',
    },
    {
      id: '2',
      doctor: 'Dr. Antônio Almeida Souza',
      specialty: 'Pediatria',
      date: '20/10/2024',
      time: '14:00h',
    }
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      marginTop: 30,
    },
    header: {
      backgroundColor: '#fff', // Fundo branco
      paddingVertical: 15,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd', // Linha fina para separar
      shadowColor: '#000', // Sombra para dar efeito de profundidade
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3, // Elevação no Android
    },
    headerText: {
      color: '#333',
      fontSize: 18,
      fontWeight: 'bold',
    },
    card: {
      backgroundColor: '#fff',
      padding: 15,
      marginVertical: 10,
      marginHorizontal: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
    },
    doctorText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    specialtyText: {
      color: '#888',
      marginBottom: 10,
    },
    bottomContainer: {
      flexDirection: 'row', // Alinha data/hora e botão horizontalmente
      justifyContent: 'space-between', // Botão de cancelar à direita
      alignItems: 'center',
    },
    dateTimeContainer: {
      flexDirection: 'column', // Empilha data e hora verticalmente
    },
    dateText: {
      fontSize: 14,
      marginBottom: 5,
    },
    timeText: {
      fontSize: 14,
    },
    cancelButton: {
      backgroundColor: '#ff5c5c',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
    },
    cancelButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  const ReservationItem = ({ item, onCancel }) => {
    return (
        <View style={styles.card}>
      <Text style={styles.doctorText}>Consulta - {item.doctor}</Text>
      <Text style={styles.specialtyText}>{item.specialty}</Text>

      {/* Contêiner para data/hora e botão de cancelar */}
      <View style={styles.bottomContainer}>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.dateText}>📅 {item.date}</Text>
          <Text style={styles.timeText}>⏰ {item.time}</Text>
        </View>

        <TouchableOpacity style={styles.cancelButton} onPress={() => onCancel(item.id)}>
          <Text style={styles.cancelButtonText}>Cancelar Reserva</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  };

function Account() {
    const handleCancel = (id) => {
        console.log('Reserva cancelada', id);
      };
    
      return (
        <View style={styles.container}>
        {/* Barra superior */}
        <View style={styles.header}>
            <Text style={styles.headerText}>Minhas Reservas</Text>
        </View>

        <FlatList
          data={reservations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ReservationItem item={item} onCancel={handleCancel} />}
          contentContainerStyle={styles.container}
        />
        </View>
      );
}

export default Account;