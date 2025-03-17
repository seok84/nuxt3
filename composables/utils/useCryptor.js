import CryptoJS from 'crypto-js';

const useCryptor = () => {
    const config = useRuntimeConfig();
    const secretKey = config.public.aesSecret;

    const encrypt = (data) => {
        const jsonData = JSON.stringify(data);
        const encryptedData = CryptoJS.AES.encrypt(jsonData, secretKey).toString();
        return btoa(encryptedData); // Base64 인코딩
    };

    const decrypt = (base64Data) => {
        try {
            const encryptedData = atob(base64Data); // Base64 디코딩

            console.log('encryptedData: ', encryptedData)
            const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);

            console.log('bytes: ', bytes)
            const decryptedJsonData = bytes.toString(CryptoJS.enc.Utf8);

            console.log('decryptedJsonData: ', decryptedJsonData)
            return JSON.parse(decryptedJsonData);
        } catch (error) {
            console.error('복호화 오류:', error);
            return null; // 적절한 오류 처리
        }
    };

    return {
        encrypt,
        decrypt,
    };
};

export default useCryptor;
