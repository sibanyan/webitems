document.addEventListener("DOMContentLoaded", () => {
    const passwordOutput = document.getElementById("password-output");
    const lengthInput = document.getElementById("length");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const numbersCheckbox = document.getElementById("numbers");
    const symbolsCheckbox = document.getElementById("symbols");
    const generateButton = document.getElementById("generate");
    const copyButton = document.getElementById("copy");

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    function generatePassword() {
        console.log("パスワード生成を開始");
        let length = parseInt(lengthInput.value, 10);
        let characters = "";
        let password = "";

        if (uppercaseCheckbox.checked) characters += uppercaseChars;
        if (lowercaseCheckbox.checked) characters += lowercaseChars;
        if (numbersCheckbox.checked) characters += numberChars;
        if (symbolsCheckbox.checked) characters += symbolChars;

        console.log("使用する文字種:", characters);

        if (characters.length === 0) {
            passwordOutput.value = "選択してください";
            return;
        }

        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        console.log("生成されたパスワード:", password);
        passwordOutput.value = password;
    }

    function copyToClipboard() {
        if (passwordOutput.value) {
            navigator.clipboard.writeText(passwordOutput.value).then(() => {
                alert("パスワードをコピーしました！");
            });
        }
    }

    generateButton.addEventListener("click", generatePassword);
    copyButton.addEventListener("click", copyToClipboard);
});
