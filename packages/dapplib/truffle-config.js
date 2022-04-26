require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan reflect still modify give kite metal giggle'; 
let testAccounts = [
"0x2208fcf979ab8ba3cc7c72d5f6dfa273602416846683e466b761660a1f63e12b",
"0xa4743d37e92fa923a79062708b125a5f23ec2841b240c6884d88d4614f72478d",
"0x834bfff8e6bb881a859a1e460e98ce68ce4e00614b63d3057342fe213f0c04e8",
"0xa72aa4476751fd2423a7db61e070fcd04ee7acf770b74666ff530b6efe872530",
"0x632ce6a8cd6e072c16d2e99def4d4861f6a594d9d657b62fcd9a14d637ec2885",
"0xc83a4e9d66d83b23ed2ef65e84ab60347bc99722f61836ff52d0529ab6f3cff6",
"0xbedb4118a69982279c5ad9dcea974024546ce2144a75f593415e7f23f0575656",
"0xf46168f003e008a615d90a2d71c41bbd8551ba3ffbddbe717a7e4d662ff9f665",
"0xc4172e0c46c85b0e8a386b85892fd40efb00346a815ea91be7f368aa9ac05a38",
"0x4f2d7ce7759e7d4666ea0d638e7cf72885c17e1e933689c434c37e458b97e281"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

