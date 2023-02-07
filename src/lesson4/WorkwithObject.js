export let user = {
    name: 'John'
}

export let admin

export function showWorkWithObject() {
    user.age = prompt('Введите число');
    admin = Object.assign({}, user, {role: 'admin'});
    let {name, age, role} = admin;
    console.log(name, age, role);
}