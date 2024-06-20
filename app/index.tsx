import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Asset } from "expo-asset";
import { Video } from "expo-av";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Index() {
  const introVideo = Asset.fromModule(require("@/assets/videos/intro.mp4"))

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header__text}>Ready to change the way you money?</Text>
      </View>
      {introVideo && (
        <Video
           source={{uri: introVideo.uri}} 
           style={styles.video}
           isMuted
           isLooping
           shouldPlay
          />
      )}

      <View style={styles.buttons}>
         <Link 
            href="/login"
            style={[defaultStyles.pillButton, {flex: 1, backgroundColor: Colors.dark}]}
            asChild
          >
          <TouchableOpacity>
              <Text style={{color: "white", fontSize: 22, fontWeight: "500"}}>Log in</Text>
          </TouchableOpacity>
         </Link>

         <Link 
            href="/signup"
            style={[defaultStyles.pillButton, {flex: 1, backgroundColor: Colors.lightGray}]}
            asChild
          >
          <TouchableOpacity>
              <Text style={{color: "#000", fontSize: 22, fontWeight: "500"}}>Sign up</Text>
          </TouchableOpacity>
         </Link>
         
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  video: {
    width: "100%",
    height: "100%",
  },
  header:{
    marginTop: 40,
    padding: 20,
    position:"absolute",
    left: 0,
    top:20,
    zIndex: 10
  },
  header__text:{
    color: "white",
    fontSize: 40,
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  buttons:{
    position: "absolute",
    left:0,
    bottom:20,
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap:20,
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
});

