export interface ExtendedKey {
    address: string;
    public_raw: Uint8Array;
    private_raw: Uint8Array;
    public_hexstring: string;
    private_hexstring: string;
    public_base64: string;
    private_base64: string;
}

export interface MessageParams {
    From: string;
    To: string;
    Value: string;
    GasPrice: string;
    GasLimit: number;
    GasFeeCap: string;
    GasPremium: string;
    Nonce: number;
    Method: number;
    Params: string;
}

export interface TransactionSignLotusResponse {
    Message: MessageParams;
    Signature: {
        Type: number;
        Data: string;
    };
}

interface Zondax {
    keyRecover(
        privateKey: string,
        testnet?: boolean
    ): ExtendedKey;
    keyRecoverBLS(
        privateKey: string,
        testnet?: boolean
    ): ExtendedKey;
    transactionSignLotus(
        message: MessageParams,
        privateKey: string
    ): TransactionSignLotusResponse;
    verifySignature(signature: any, message: any): any;
    transactionSerialize(message: any): any;
}
export function isReady(): boolean
export function load(): Promise<Zondax>