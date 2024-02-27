

// create a variable to hold your NFT's

let nfts = [];

function mintNFT (name,model) {
const nft = {
    "name" : name,
    "model": model
};
nfts.push(nft);

};

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for (let i =0;i<nfts.length;i++){
    console.log(nfts[i].name);
    console.log(nfts[i].model);
};
};

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("total nfts",nfts.length)
}
;
// call your functions below this line

mintNFT("a",1);
mintNFT("b",2);

listNFTs();
getTotalSupply();
