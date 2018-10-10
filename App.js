import React from 'react';
import { Font } from 'expo';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import { FONTS } from './fontList';

export default class App extends React.Component {
  /* data for list needs to be in the format:
  [
    {
      key: '0',
      fontName: name
    },
    {
      key: '1',
      fontName: name
    }
  ]
  */
  constructor(props) {
    super(props);
    this.fontData = [];
  }

  generateFontData() {
    let index = 1;
    for (let font in FONTS) {
      this.fontData.push({
        key: index.toString(),
        fontName: FONTS[font]
      });
      index++;
    }
  }

  componentWillMount() {
    this.generateFontData();
    console.log(this.fontData);
  }

  renderRow = ({ item }) => {
    return (
      <ListItem
        title={item.fontName}
        titleStyle={{ fontFamily: item.fontName }}
        hideChevron
        containerStyle={styles.listItemContainer}
        key={item.key}
      />
    );
  };

  render() {
    return (
      <List containerStyle={styles.listContainer}>
        <FlatList data={this.fontData} renderItem={this.renderRow} />
      </List>
    );
  }
}

const myColors = {
  lightGrey: '#e0e0e0'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listItemContainer: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginTop: 0,
    marginBottom: 10,
    backgroundColor: myColors.lightGrey
  }
});
