const user = {
  name: 'Alex',
  age: 30,
  city: 'Melbourne'
};

for (const key in user) {
  console.log(key)
}

for (const key of user) {
  console.log(key)
}
