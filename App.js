import React from 'react';
import { Font } from 'expo';
import {
  StyleSheet,
  View,
  Clipboard,
  Alert,
  TouchableHighlight
} from 'react-native';
import { List, ListItem, SearchBar, Text, Icon } from 'react-native-elements';
import { SearchableFlatList } from 'react-native-searchable-list';

import { FONTS } from './fontList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchAttribute: '',
      ignoreCase: true,
      fontSize: 18
    };
    this.fontData = FONTS;
  }

  componentWillMount() {
    this.setState({
      fontSize: 18
    });
  }

  renderRow = ({ item }) => {
    return (
      <TouchableHighlight onPress={this.copyToClipboard.bind(this, item)}>
        <Text
          fontFamily={item}
          style={(styles.text, { fontSize: this.state.fontSize })}
        >
          {item}
        </Text>
      </TouchableHighlight>
    );
  };

  fontUp() {
    let fontSize = this.state.fontSize + 1;
    this.setState({
      fontSize
    });
  }

  fontDown() {
    let fontSize = this.state.fontSize - 1;
    this.setState({
      fontSize
    });
  }

  copyToClipboard(item) {
    Clipboard.setString(item);
    Alert.alert('Font', `Copied "${item}" to clipboard`);
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          lightTheme
          containerStyle={styles.search}
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
        <View style={styles.buttons}>
          <Icon
            name="arrow-up"
            type="font-awesome"
            onPress={this.fontUp.bind(this)}
            iconStyle={styles.icon}
          />
          <Text style={{ color: myColors.white }}>Font Size</Text>
          <Icon
            iconStyle={styles.icon}
            name="arrow-down"
            type="font-awesome"
            onPress={this.fontDown.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const myColors = {
  white: 'white',
  lightBlue: '#6178EA'
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  search: {
    marginTop: 20,
    backgroundColor: myColors.white
  },
  listItem: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 5,
    backgroundColor: myColors.white
  },
  text: {
    padding: 5
  },
  icon: {
    color: myColors.white,
    alignText: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: myColors.lightBlue
  }
});
