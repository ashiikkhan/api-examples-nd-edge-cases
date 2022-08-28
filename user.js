const loadUserFetch = () => {
  const url = `https://randomuser.me/api/?gender=female`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayUser(data.results[0]))
    //if api has any problem it will give error.
    .catch((error) => console.log(error));
};

const loadUserAsync = async () => {
  const url = `https://randomuser.me/api/?gender=female`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayUser(data.results[0]);
    //   console.log(data.results[0]);
  } catch (error) {
    console.log(error);
  }
};

const displayUser = (user) => {
  console.log(user);
};
loadUserFetch();
