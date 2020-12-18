# filecoin-signing-sync

Small wrapper for [@zondax/filecoin-signing-tools](https://github.com/Zondax/filecoin-signing-tools) to allow asynchronous load of the package.

Overcomes trouble with WASM and bundlers: inability to require zondax package directly due to WASM dependency.

## Installation
```shell
npm add filecoin-signing-sync
```

## Usage
```typescript
import * as filecoinSigning from 'filecoin-signing-sync'
const signingTools = await filecoinSigning.load()
// const payload = ...
const transaction = signingTools.transactionSerialize(payload);
// const singature = ...
// const transaction = ...
const recover = signingTools.verifySignature(signature, transaction);
```

## License

Apache-2.0 or MIT