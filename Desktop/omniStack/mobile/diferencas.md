## Diferenças ReactJS para React Native

### Elementos HTML
    Não tem as mesmas tags que o HTML, não há semântica

    Containers e sections:  <View></View>
    Textos: <Text></Text>

### Estilização 
    Style Sheets
    style={styles.container}

    Todos os elementos são 'display: flex' por padrão;
    Não há hífen, no lugar utiliza-se camelCase;
    Os valores que não são números precisam de "" a sua volta => '#FFF';
    Não existe herança de estilos;

    expo install expo-constants 

## Rotas com Expo
    As rotas no ReactNative são configuradas através do React Routing
        npm install @react-navigation/native
        
        expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
    
    Stack Navigator _(navegação por botões)_: 
        npm install @react-navigation/
        
## Enviar email 
    expo install expo-mail-composer