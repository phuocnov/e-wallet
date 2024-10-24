import { useEffect, useState } from 'react';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'
function useBiometricAuth() {
  const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });
  const [bioType, setBioType] = useState(BiometryTypes.FaceID);

  useEffect(() => {
    async function getBiometricType() {
      const { biometryType } = await rnBiometrics.isSensorAvailable();
      if (biometryType) setBioType(biometryType);
    }
    getBiometricType();
  }, [])


  // TODO: Check if user has biometric key stored on server
  // if not -> login with password -> createPublicKey -> save publicKey to server
  // public key is stored on server -> login with biometric -> createSignature -> send signature to server -> verify signature
  // login token expired time -> 30 mins 

  const createPublicKey = () => {
    rnBiometrics.createKeys().then((result) => {
      const { publicKey } = result;
      console.log(result);

      // TODO: Save publicKey to server
    });
  }

  const createSignature = () => {
    rnBiometrics.createSignature({
      promptMessage: 'Sign in',
      payload: 'qweoihckasnckln',
    }).then((result) => {
      // const { success, signature } = result;
      console.log(result);
    });
  }

  return {
    bioType,
    createPublicKey,
    createSignature,
  }
};

export default useBiometricAuth;
