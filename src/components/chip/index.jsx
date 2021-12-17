import React from "react";
import {View, FlatList, Text, TouchableOpacity} from "react-native";
import { makeStyles, useTheme } from "components";
import HapticFeedback from "react-native-haptic-feedback";

const Chip = ({
  tags, 
  selected, 
  onChange, 
}) => {
  const styles = useStyles();
  const theme = useTheme();

  const handlePress = (index) => {
    HapticFeedback.trigger("impactLight");
    onChange(index);
  };

  const renderChip = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[styles.chip, selected === item ? styles.chipSelected : null]}
        onPress={() => handlePress(item)}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.text,
            selected === item ? styles.textSelected : null,
          ]}>
          {item[0].toUpperCase() + item.substr(1)}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tags}
        renderItem={renderChip}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  list: {
    paddingBottom: 5,
    marginLeft:5,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: theme.palette.typograph.main,
  },
  textSelected: {
    color: theme.palette.typograph.contrast,
  },
  chip: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: theme.palette.primary.contrast,
    shadowColor: theme.palette.shadow.main,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,

    elevation: 1,
  },
  chipSelected: {
    backgroundColor: theme.palette.badge.main,
  },
}));

export default Chip;