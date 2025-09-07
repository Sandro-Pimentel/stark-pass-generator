export default function generatePass() {
    let password: string = '';
    let characters: string = 'Aa@BbCcçDdE1e-F4f23G?5678+9HhIi&JjKkLlMm=NnO0%oPpQqRrSs$Tt!UuVvWwXxYyZz';
    let passwordLength = 10;

    for(let index = 0; index < passwordLength; index++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    return password;
}