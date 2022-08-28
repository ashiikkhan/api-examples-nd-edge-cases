const loadUsers = () => {
  fetch('https://randomuser.me/api/?results=10')
    .then((response) => response.json())
    .then((data) => displayUsers(data.results));
};
loadUsers();

const displayUsers = (users) => {
  const usersContainer = document.getElementById('users-container');
  for (const user of users) {
    console.log(user);
    const { name, email, location, picture } = user;
    const { title, first, last } = name;
    const { street, city, country } = location;
    const userDiv = document.createElement('div');
    userDiv.classList.add('user-div');
    userDiv.innerHTML = `
    <img src="${picture.large}" alt="" />
    <h2>${`${title} ${first} ${last}`}</h2>
    <p>Email: ${email}</p>
    <p>Address: ${street.number}, ${street.name},  ${city}, ${country}</p>
    `;
    usersContainer.appendChild(userDiv);
  }
};
