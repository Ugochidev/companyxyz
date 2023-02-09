import forge from 'node-forge';
import environment from '../../config/environment';
const Flutterwave = require('flutterwave-node-v3');
import AppError from '../utils/AppError';
class FlwEncrypter {
  private forge;
  private FLW_ENCRYPTION_KEY: string;
  constructor() {
    this.forge = forge;
    this.FLW_ENCRYPTION_KEY = environment.FLW_ENCRYPTION_KEY;
  }

  private encrypt(encryptionKey: string, payload: object) {
    const text = JSON.stringify(payload);

    const cipher = forge.cipher.createCipher(
      '3DES-ECB',
      forge.util.createBuffer(encryptionKey)
    );
    cipher.start({ iv: '' });
    cipher.update(forge.util.createBuffer(text, 'utf8'));
    cipher.finish();
    const encrypted = cipher.output;
    return forge.util.encode64(encrypted.getBytes());
  }

  public encryptData(payload: object) {
    const encryptedData = this.encrypt(this.FLW_ENCRYPTION_KEY, payload);
    return encryptedData;
  }

  // // Install with: npm i flutterwave-node-v3
  public async payout(
    bankCode: string,
    account_number: string,
    amount: string,
    narration: string,
    reference: string,
    wallet_id: string,
  ) {
    const flw = new Flutterwave(
      process.env.FLW_PUBLIC_KEY,
      process.env.FLW_SECRET
    );
    const details = {
      account_bank: bankCode,
      account_number,
      amount: Number(amount) / 100,
      currency: 'NGN',
      narration,
      reference,
      meta: {
        wallet_id,
      },
    };

    try {
      const response = await flw.Transfer.initiate(details);
      console.log(222, response);
      if (response.status !== 'success') {
        throw new Error(response.data.complete_message);
      }
      return response;
    } catch (error: any) {
      console.log(999, error);
      // error.message = undefined;
      throw new AppError(
        error.message || 'Cannot Complete pay out now, please try again'
      );
    }

    // await flw.Transfer.initiate(details)
    //   .then((response: any) => {
    //     console.log(222, response);
    //     return response;
    //   })
    //   .catch((error: any) => {
    //     console.log(999, error);

    //     throw new AppError(error);
    //   });
    // console.log(response);
    // return { a: 'response.data' };
  }
}

export default FlwEncrypter;
