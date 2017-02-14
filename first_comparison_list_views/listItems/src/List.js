import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ListView,
  View
} from 'react-native';

var width = Dimensions.get('window').width;

export default class List extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      dataSource: this.ds.cloneWithRows(['row 1', 'row 2'])
    };
    this.renderRow = this.renderRow.bind(this)
  }

  componentDidMount() {
    var items = []

    for (var i = 0; i < 1000; i++) {
      items.push(i)
    }

    this.setState({dataSource: this.ds.cloneWithRows(items) })
  }

  renderRow(rowData){
    return (<View style={styles.row}>
              <Text>{rowData}</Text>
              <Image source={require('./Google128.png')} />
            </View>
            )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    alignItems: 'center',
    width: width,
    marginBottom: 5,
  },
});

