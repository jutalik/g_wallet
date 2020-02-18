import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Content,Card,CardItem,Body,Icon,Button, Container} from 'native-base';
import {CustomHeader} from '../CustomHeader';



export class Account extends React.Component {
    render() {
      return (
        
        
          <Container style={styles.container}>
        <CustomHeader title="Account" isHome={true} navigation={this.props.navigation}/>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Button transparent iconLeft large block
                onPress={() => this.props.navigation.navigate('CreateWallet')}>
                  <Icon name='ios-add-circle-outline' />
                  <Text>지갑 생성</Text>
                </Button>
              </Body>
                </CardItem>
            </Card>
        </Content>
      </Container>
           
        );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});