require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind hub include clinic fringe sketch'; 
let testAccounts = [
"0x1239465db51f6108e4a688f9b288e8e97e1a45c44f20557e714da1ac611720c9",
"0x490329c06d363653367f0130c4c4c81a4f622f811a4635c4dab37c151610afbb",
"0x98693415e04b64cdb8fd6e6349ff10427e357b1e4154649cb2801b1cd2ac6573",
"0xd272186942117a5803f39311f684d9b7715428231a434c722e4c1dcf3d1c63ba",
"0x6f84251f05e3e2cbe3dbcabdcd76158093d3c4b1589fa3e9dfcaa63fed27d7ca",
"0x528ea1a91bae08964fbe219af9bd9a9d02a2fc49e9007feafb3d512838bfd4d7",
"0x8f1e6cc86af29a9b0baf0ec80269f558239907317c4209cf6b39396fb0f045ca",
"0xc2d8e7e85fdf8a9fd6dcf404c6181566e0889d140ef2c4b62a9374a40607cca4",
"0xd32617e538fa88bc4904ccd84357c41461f37560d140d2edb206660819998abb",
"0x8ebe14306a17f074fe7b3a49b4c3b7a3036476ee8a2637404efded8586359217"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

