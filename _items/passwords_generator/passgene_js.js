document.addEventListener("DOMContentLoaded", () => {
    const passwordOutput = document.getElementById("password-output");
    const lengthInput = document.getElementById("length");
    const countInput = document.getElementById("count");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const numbersCheckbox = document.getElementById("numbers");
    const symbolsCheckbox = document.getElementById("symbols");
    const generateButton = document.getElementById("generate");
    const copyButton = document.getElementById("copy");
    const strengthMessage = document.getElementById("strength-message");

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    function generatePassword() {
        console.log("パスワード生成を開始");
        let length = parseInt(lengthInput.value, 10);
        let count = parseInt(countInput.value, 10);
        let characters = "";
        let passwords = [];

        if (uppercaseCheckbox.checked) characters += uppercaseChars;
        if (lowercaseCheckbox.checked) characters += lowercaseChars;
        if (numbersCheckbox.checked) characters += numberChars;
        if (symbolsCheckbox.checked) characters += symbolChars;

        console.log("使用する文字種:", characters);

        if (characters.length === 0) {
            passwordOutput.value = "選択してください";
            strengthMessage.textContent = "";
            return;
        }

        for (let j = 0; j < count; j++) {
            let password = "";
            for (let i = 0; i < length; i++) {
                let randomIndex = Math.floor(Math.random() * characters.length);
                password += characters[randomIndex];
            }
            passwords.push(password);
        }

        console.log("生成されたパスワード:", passwords);
        passwordOutput.value = passwords.join("\n");

        evaluateStrength(passwords);
    }

    function evaluateStrength(passwords) {
        let minLength = Math.min(...passwords.map(p => p.length));
        let hasUpper = passwords.some(p => /[A-Z]/.test(p));
        let hasLower = passwords.some(p => /[a-z]/.test(p));
        let hasNumber = passwords.some(p => /[0-9]/.test(p));
        let hasSymbol = passwords.some(p => /[^A-Za-z0-9]/.test(p));

        let complexity = [hasUpper, hasLower, hasNumber, hasSymbol].filter(Boolean).length;
        let message = "";
        let className = "";

        if (minLength < 8 || complexity < 2) {
            message = "強度: 弱い（8文字以上 & 2種類以上の文字を推奨）";
            className = "weak";
        } else if (minLength >= 8 && complexity >= 2 && complexity < 3) {
            message = "強度: 普通（さらに文字種類を増やすと安全）";
            className = "medium";
        } else if (minLength >= 12 && complexity >= 3) {
            message = "強度: 強い（十分に安全）";
            className = "strong";
        } else if (minLength >= 16 && complexity === 4) {
            message = "強度: 非常に強い（最高レベルの安全性）";
            className = "very-strong";
        }

        console.log("パスワードの強度:", message);
        strengthMessage.textContent = message;
        strengthMessage.className = className;
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
