import React from 'react';
import { Font } from 'expo';
import { StyleSheet, View } from 'react-native';
import { List, ListItem, SearchBar, Text } from 'react-native-elements';
import { SearchableFlatList } from 'react-native-searchable-list';

import { FONTS } from './fontList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchAttribute: '',
      ignoreCase: true
    };
    this.fontData = FONTS;
  }

  renderRow = ({ item }) => {
    return <Text fontFamily={item}>{item}</Text>;
  };

  render() {
    return (
      <View style={styles.search}>
        <SearchBar
          style={styles.search}
          placeholder={'Search Font'}
          onChangeText={searchTerm => this.setState({ searchTerm })}
        />
        <SearchableFlatList
          searchTerm={this.state.searchTerm}
          searchAttribute={this.state.searchAttribute}
          ignoreCase={true}
          data={this.fontData}
          renderItem={this.renderRow}
          keyExtractor={item => item}
          style={styles.listItem}
        />
        />
      </View>
    );
  }
}

const myColors = {
  white: 'white'
};

const styles = StyleSheet.create({
  search: {
    flex: 1,
    marginTop: 20
  },
  listItem: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginTop: 10,
    marginBottom: 0,
    backgroundColor: myColors.white
  }
});
