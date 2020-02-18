import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Segment, Text, Icon, Button, Header, Left, Body, Title, Right, Form, Textarea, Input, Item } from 'native-base'; 
import { HDNode, utils, Wallet, ethers } from 'ethers';
import LoadingSpinner from 'react-native-loading-spinner-overlay';
// import bip39 from 'react-native-bip39';

export class CreateWallet extends React.Component {
    static navigationOptions = {
    title: '지갑 생성하기'
  }

  constructor(props) {
      super(props);

      this.state= {
          loading: false,
          showResult: false,
          mnemonic: null,
          privateKey: null,
          address: null,
      }
  }

  // componentDidMount(){
  //     //안피곤 니모닉 생성
  //     // bip39.generateMnemonic().then(mnemonic => {
  //     //     this.setState({mnemonic})
  //     // })
  //     this.setState({
  //         loading:false,
  //         showResult:false
  //     })
  // }



  generateNewWallet() {
    this.setState({loading: true});

    setTimeout(() => {
      const mnemonic = HDNode.entropyToMnemonic(utils.randomBytes(16));
      const wallet = Wallet.fromMnemonic(mnemonic);

      this.setState({
        mnemonic: mnemonic,
        privateKey: wallet.privateKey,
        address: wallet.address,
        loading: false,
        showResult: true});
    }, 500);
  }

  saveWallet() {
    const { mnemonic, privateKey, address } = this.state;

    const key = 'Wallet:' + address.toLowerCase();
    const value = address + ':' + privateKey + ':' + mnemonic;

    AsyncStorage.setItem(key, value, (error) => {
      if(error) {
        Alert.alert(null, '지갑을 저장할 수 없습니다.', [ {text: '확인'}, ], { cancelable: true });
      }
      else {
        this.props.navigation.pop();
      }
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={{ flex: 1, padding: 10 }}>
          <View style={{ flex: 1 }}>
            <Text note>아래 12개 니모닉을 복사하여 백업하세요. 지갑을 복구하는데 매우 중요한 데이터입니다.</Text>
            <Form>
              <Textarea rowSpan={5} bordered disabled 
              value={this.state.mnemonic}/>
            </Form>
          </View>
          <View style={{ flex: 1 }}>
            <Button block primary
            onPress={()=>this.generateNewWallet()}>
              <Text>생성하기</Text>
            </Button>
            <Button block primary
            onPress={()=>alert('ddd')}>
              <Text>test</Text>
            </Button>
            <LoadingSpinner visible={this.state.loading} textContent="지갑을 생성하고 있습니다. 잠시만 기다려주세요" textStyle={styles.loadingText}/>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});