import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './global';
import { useEffect } from 'react';
import BottomNavigation from './src/navigation/Bottom';
const Web3 = require('web3');
import * as bitcoin from "bitcoinjs-lib"

const TESTNET = bitcoin.networks.testnet;
// const Moralis = require('moralis');
// Moralis.initialize("qR0dYYsalIsmo00S0TMYLB7YAMR5si4JIHf8MuDI");

// Moralis.serverURL = 'https://bs8lvgkqrztw.moralis.io:2053/server'


const App = () => {
  // console.log("Mounted")
  useEffect(async () => {

    

    const keyPair = await bitcoin.ECPair.makeRandom();
    console.log("🚀 ~ file: App.js ~ line 28 ~ useEffect ~ keyPair", keyPair)
      const { address } =await bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
      console.log("🚀 ~ file: App.js ~ line 27 ~ useEffect ~ address", address)
      // GET ETHERIUMM BALANCE BY PUBLIC KEY

    // const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/a1bbc7b88cb54b16993c14bf231bbce9"))

    // web3.eth.getBalance("0x5455F4F3C807a09ab032e21a27B6A202B2f582D7", function (err, result) {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log(web3.utils.fromWei(result, "ether") + " ETH")
    //   }
    // })


    //Import Wallet By Private Key

    // const provider =
    //   "https://speedy-nodes-nyc.moralis.io/2d962af326b1df2c1d77c8bc/eth/mainnet"
    // const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));

    // const web3 = new Web3(
    //   new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/a1bbc7b88cb54b16993c14bf231bbce9')
    // );
    //   const wallett =  web3.eth.accounts.privateKeyToAccount('681a31d3b509b6e09ef9c81056757ca06f8f5da5195db1bc12cb01dfd7fe616b');
    //   console.log("🚀 ~ wwwwwwwwwwwwwwwwwwwwwwwwwwwallett", wallett)


    // GET YFIC TOKEN BALANCE


    // const abi = [
    //   {
    //     constant: true,
    //     inputs: [{ name: "_owner", type: "address" }],
    //     name: "balanceOf",
    //     outputs: [{ name: "balance", type: "uint256" }],
    //     type: "function",
    //   }
    // ]
    // const contractAddress = "0x9CF4679c67BEE8dA2D6F58c64592fFf6beE79330"
    // const contract = new Web3Client.eth.Contract(abi, contractAddress);
    // async function getBalance() {
    //   const result = await contract.methods.balanceOf("0x1b41106ee818859421C16d63b123C31753A3f10C").call(); // 29803630997051883414242659
    //   const format = Web3Client.utils.fromWei(result); // 29803630.997051883414242659
    //   console.log(format);
    // }
    // const b = await getBalance();
    // console.log("🚀 ~ file: App.js ~ line 43 ~ useEffect ~ b", b)


  }, [])
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;