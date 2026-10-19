import { Pressable, Image, Text, View, Switch } from "react-native";
import { Link } from "expo-router";
import { Lembrete } from "../../types/lembretes";
import { styles } from "./lembreteItemStyle";


type props = {
    lembrete: Lembrete;
}

export function LembreteItem({ lembrete }: props) {
    return (
 
        <Link href={`/lembrete/${lembrete.lembreteId}`} asChild>
            <Pressable style={styles.pressableContainer}>
                <Text style={[styles.title, styles.destaque]}>
                    {lembrete.tituloLembrete}
                </Text>
                <Switch 
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    value={lembrete.statusLembrete}
                // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                // ios_backgroundColor="#3e3e3e"
                // onValueChange={toggleSwitch}
                // value={isEnabled}
                />
            </Pressable>
        </Link>
    );
}

