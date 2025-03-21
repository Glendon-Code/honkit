document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // 阻止表单默认提交

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error");
    // 加密
    const encrypt = (txt, publicKey) => {
        const encryptor = new JSEncrypt();
        encryptor.setPublicKey(publicKey); // 设置公钥
        return encryptor.encryptLong(txt); // 对数据进行加密
    };
    // 解密
    const decrypt = (txt) => {
        const encryptor = new JSEncrypt();
        encryptor.setPrivateKey(privateKey); // 设置私钥
        return encryptor.decrypt(txt); // 对数据进行解密
    };

    const publicKey =
        "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKoR8mX0rGKLqzcWmOzbfj64K8ZIgOdHnzkXSOVOZbFu/TJhZ7rFAN+eaGkl3C4buccQd/EjEsj9ir7ijT7h96MCAwEAAQ==";
    const privateKey =
        "MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAmc3CuPiGL/LcIIm7zryCEIbl1SPzBkr75E2VMtxegyZ1lYRD+7TZGAPkvIsBcaMs6Nsy0L78n2qh+lIZMpLH8wIDAQABAkEAk82Mhz0tlv6IVCyIcw/s3f0E+WLmtPFyR9/WtV3Y5aaejUkU60JpX4m5xNR2VaqOLTZAYjW8Wy0aXr3zYIhhQQIhAMfqR9oFdYw1J9SsNc+CrhugAvKTi0+BF6VoL6psWhvbAiEAxPPNTmrkmrXwdm/pQQu3UOQmc2vCZ5tiKpW10CgJi8kCIFGkL6utxw93Ncj4exE/gPLvKcT+1Emnoox+O9kRXss5AiAMtYLJDaLEzPrAWcZeeSgSIzbL+ecokmFKSDDcRske6QIgSMkHedwND1olF8vlKsJUGK3BcdtM8w4Xq7BpSBwsloE=";
    const getKeyPair = async (callback) => {
        const response = await axios.get("http://localhost:8099/api/genKeyPair");
        callback(response.data.uuidPrivateKey, response.data.RSA_PUBLIC_KEY);
    };

    try {
        // 使用 axios 发送 POST 请求到 /api/login
        //   await getKeyPair(async (uuidPrivateKey, RSA_PUBLIC_KEY) => {
        //     const headers = {
        //         isToken: false,
        //         publicKey: RSA_PUBLIC_KEY,
        //         isEncrypt: true,
        //         'encrypt-key': uuidPrivateKey
        //     }
        //     const encryptData = encrypt(encodeURIComponent(JSON.stringify({username: username, password: password})), publicKey)
        //     const response = await axios.post('http://localhost:8099/api/login', {
        //         username: username,
        //         password: encryptData,
        //     }, {headers: headers});

        // 假设接口返回的数据中包含 token
        // const token = response.data.token;
        const token =
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpblR5cGUiOiJsb2dpbiIsImxvZ2luSWQiOiJzeXNfdXNlcjoyMDg3MzgwMzU4MDIxMjAxOTIiLCJyblN0ciI6InFxa2hNc2NlMWV4VUxMODkxRzc5U3Yxc1hmajFWZHdNIiwiY2xpZW50aWQiOiJlNWNkN2U0ODkxYmY5NWQxZDE5MjA2Y2UyNGE3YjMyZSIsInRlbmFudElkIjoyMDg3MzY0MDA2ODIwNjU5MjAsInVzZXJJZCI6MjA4NzM4MDM1ODAyMTIwMTkyLCJ1c2VyTmFtZSI6InRlc3QxIiwiZGVwdElkIjoyMDg3MzY0MDk4NTkyMDMwNzIsImRlcHROYW1lIjoiRmluVGF4LVRlc3QifQ.W6MzJOMm4K0XOYlvgb0TfWX6R6g5rug-GfFm5i03G7E";

        if (token) {
            localStorage.setItem("token", token);
            window.location.href = "_book/index.html";
        } else {
            throw new Error("未返回 token");
        }
        // });
    } catch (error) {
        throw newError(error);
    }
});
