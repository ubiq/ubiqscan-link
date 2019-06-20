# Ubiqscan Link Generator

## Usage

```javascript
const ubiqscanLink = require('ubiqscan-link')

const networkId = '88'
const account = '0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825'
const accountLink = ubiqscanLink.createAccountLink(account, networkId)

const hash = '0xa7540793de6b6ca7d3c948a8cc0a163bf107f5535a69353162ea9dec7ee7beca'
const txLink = ubiqscanLink.createExplorerLink(hash, networkId)
```
