import {TouchableOpacity, StyleSheet, Text} from 'react-native'

const Touchable01 = (props) => {

    return(
        <TouchableOpacity>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )

}

export default Touchable01

const styles = StyleSheet.create(
    {
        container: {
            
        },
        title: {
            fontSize:24
        }

    }
)