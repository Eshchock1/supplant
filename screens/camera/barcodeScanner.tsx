import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

import { Button } from "native-base";
import { BarCodeEvent, BarCodeScanner } from "expo-barcode-scanner";

const BarcodeScanner = () => {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeEvent) => {
    if (scanned) return;
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={{flex : 1}}
      />
      {scanned && (
        <Button
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            backgroundColor: "#207A18",
            marginBottom: 0,
            borderRadius:
              (Dimensions.get("window").width +
                Dimensions.get("window").height) /
              (1080 / 12),
          }}
          onPress={() => setScanned(false)}>
          <Text style={{ color: "white" }}>SIGN UP k</Text>
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 30),
    paddingVertical:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 15),
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  errorText: {
    color: "#ff6347",
    fontSize:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 15),
    textAlign: "center",
    paddingBottom:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 10),
  },
  logo: {
    color: "#4ba023",
    fontSize:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 38),
    fontWeight: "bold",
    paddingTop:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 20),
    // fontFamily:"roboto",
  },
  subtitle: {
    paddingTop:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 10),
    color: "#494949",
    fontSize:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 15),
  },
  title: {
    color: "#30851b",
    fontSize:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 30),
    paddingTop:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 10),
  },
  signIn: {
    paddingBottom:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 15),
  },
  bottomText: {
    paddingTop:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 30),
    textAlign: "center",
  },
});

export default BarcodeScanner;
