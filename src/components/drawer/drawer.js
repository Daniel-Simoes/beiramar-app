import React from "react";
import LinearGradient from "react-native-linear-gradient";
import ItemList from "./itemList";

const Drawer = ({
  onProgressChange,
  items,
  header: Header,
  footer: Footer,
  ...props
}) => {
  const {progress, navigation} = props;

  React.useEffect(() => {
    onProgressChange(progress);
  }, [progress]);

  return (
    
    <LinearGradient colors={["#0A3C70", "#2F80ED"]}  style={{flex:1}}>
      <Header progress={progress} />
      <ItemList progress={progress} items={items} navigation={navigation} />
      <Footer progress={progress} />
      </LinearGradient>

  );
};

export default Drawer;


// import React from "react";
// import {View} from "react-native";
// import ItemList from "./itemList";

// const Drawer = ({
//   onProgressChange,
//   items,
//   header: Header,
//   footer: Footer,
//   ...props
// }) => {
//   const {progress, navigation} = props;

//   React.useEffect(() => {
//     onProgressChange(progress);
//   }, [progress]);

//   return (
//     <View style={{flex: 1, backgroundColor: "transparent"}}>
//       <Header progress={progress} />
//       <ItemList progress={progress} items={items} navigation={navigation} />
//       <Footer progress={progress} />
//     </View>
//   );
// };

// export default Drawer;
