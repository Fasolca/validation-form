"use strict"

//Задание 1


let regexp = /^\w+@(\w+\.)+\w+$/i;

let str1 = 'email123@domen1.com';
console.log( regexp.test(str1) );

let str2 = 'email123@domen1.domen2.com';
console.log( regexp.test(str2) );

let str3 = 'email123@domen1.domen2.domen3.com';
console.log( regexp.test(str3) );

let str4 = 'words123@domen1com';
console.log( regexp.test(str4) );

let str5 = 'words123@domen1com. ';
console.log( regexp.test(str5) );

let str6 = 'words123@ domen1com';
console.log( regexp.test(str6) );

let str7 = ' words123@domen1com ';
console.log( regexp.test(str7) );

//Задание 2

const regForm = document.getElementById('registration-form');

const login = regForm.login;
const email = regForm.email;
const pass = regForm.pass;
const tel = regForm.tel;
const signUp = document.getElementById('sign-up');

const regexpLogin = /^[a-z]\w+$/i;

const regexpEmail = /^\w+@(\w+\.)+\w+$/i;
// Можно использовать РВ из первого задания

const regexpPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const regexpTel = /^\+7\s\(\d{3}\)\s\d{3}(-\d{2}){2}$/;


// Почему для валидации логина используется обработка события change, а для всех остальных – событие input и blur? Необходимо использовать какую-то единую схему валидации данных.


login.addEventListener('change', function() {
    if (!regexpLogin.test(login.value)) {
        login.previousElementSibling.lastElementChild.textContent =
            'Ошибка';
        login.setCustomValidity('Логин должен начинаться с латинской буквы и может содержать  цифры');
    } else {
        login.previousElementSibling.lastElementChild.textContent = '';
        login.setCustomValidity('');
        console.log(login);
    }
});

email.addEventListener('input', function() {
    if (!regexpEmail.test(email.value)) {
        email.previousElementSibling.lastElementChild.textContent =
            'Ошибка';
        email.setCustomValidity('Почта введена неверно');
    } else {
        email.previousElementSibling.lastElementChild.textContent = '';
        email.setCustomValidity('');
    }
});

pass.addEventListener('blur', function() {
    if (!regexpPass.test(pass.value)) {
        pass.previousElementSibling.lastElementChild.textContent =
            'Ошибка';
        pass.setCustomValidity('Пароль должен содержать: латинские буквы заглавные и строчные, цифры и символы');
    } else {
        pass.previousElementSibling.lastElementChild.textContent = '';
        pass.setCustomValidity('');
    }
});

tel.addEventListener('input', function() {
    if (!regexpTel.test(tel.value)) {
        tel.previousElementSibling.lastElementChild.textContent =
            'Ошибка';
        tel.setCustomValidity('Введите в формате +7 (ххх) ххх-хх-хх');
    } else {
        tel.previousElementSibling.lastElementChild.textContent = '';
        tel.setCustomValidity('');
    }
});
