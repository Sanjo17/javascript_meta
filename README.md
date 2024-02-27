
```markdown
# NFT Management Script

This script is a basic implementation for managing NFTs. It allows you to mint new NFTs, list their metadata, and get the total supply.

## Usage

1. **Mint NFTs:**
   - Use the `mintNFT` function to mint new NFTs by providing a name and model.
   ```javascript
   mintNFT("a", 1);
   mintNFT("b", 2);
   ```

2. **List NFTs:**
   - The `listNFTs` function loops through the array of NFTs and prints their metadata.
   ```javascript
   listNFTs();
   ```

3. **Get Total Supply:**
   - The `getTotalSupply` function prints the total number of minted NFTs.
   ```javascript
   getTotalSupply();
   ```

## Example

```javascript
// create a variable to hold your NFT's
let nfts = [];

// mint some NFTs
mintNFT("a", 1);
mintNFT("b", 2);

// list NFTs and get total supply
listNFTs();
getTotalSupply();
```

