import React from "react";

const Drawer = ({
  onProgressChange,
  content: Content,
  ...props
}) => {
  const {progress} = props;

  React.useEffect(() => {
    onProgressChange(progress);
  }, [progress]);

  return (
    <Content progress={progress} style={{flex: 1}}/>
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
