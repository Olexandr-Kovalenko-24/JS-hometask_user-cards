const root = document.querySelector('#root');


const wrapper = document.createElement('main');
wrapper.classList.add('wrapper');
root.append(wrapper);

function createCard(arrayOfUserData) {
    const card = document.createElement('section');
    card.classList.add('card');
    const userName = document.createElement('h1');
    userName.classList.add('userName');
    userName.textContent = arrayOfUserData.name;
    const description = document.createElement('p');
    description.classList.add('discription');
    description.textContent = arrayOfUserData.description;
    const avatar = document.createElement('img');
    avatar.setAttribute('src', arrayOfUserData.profilePicture)
    avatar.classList.add('avatar');
    const connect = document.createElement('button');
    connect.classList.add('connect');
    connect.textContent = 'Connect'
    card.append(avatar, userName, description, connect);
    return card;
}

const usersArray = userData.map(createCard);


for (let i = 0; i < usersArray.length; i++) {
    usersArray[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}


wrapper.append(...usersArray);

