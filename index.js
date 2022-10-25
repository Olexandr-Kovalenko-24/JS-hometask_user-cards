const root = document.querySelector('#root');

const userData = [
    {
        "id": 1,
        "name": "John",
        "description": "fafewqrewrqwer2322revzd",
        "profilePicture": "https://globalnews.ca/wp-content/uploads/2017/05/oldestmanthumb.jpg?quality=85&strip=all"
    },
    {
        "id": 2,
        "name": "Josh",
        "description": "qweqwsxasdqwew",
        "profilePicture": "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    },
    {
        "id": 3,
        "name": "Jane",
        "description": "yjtykyumjhjhjkgjhhjkhkj",
        "profilePicture": "https://media.istockphoto.com/photos/elegant-beauty-picture-id516208984?k=20&m=516208984&s=612x612&w=0&h=KooFBmqHtO2lz5CFV5Oe87u_12wgKCxHvTHxlYuErCU="
    },
    {
        "id": 4,
        "name": "Iness",
        "description": "k4jh23k4jh23kjhk2jhk",
        "profilePicture": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    },
    {
        "id": 5,
        "name": "Alex",
        "description": ";oiu;oxzkxfaklwejlkwej",
        "profilePicture": "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    },
    {
        "id": 6,
        "name": "Nathan",
        "description": "lkheklerhtlk3jtk34jh5kjhkwekfjekjfahe",
        "profilePicture": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
        "id": 7,
        "name": "Tracy",
        "description": "rerewervdfgdfgsdfgsdgsdfgsdfg",
        "profilePicture": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        "id": 8,
        "name": "James",
        "description": "yjtykyumjhjhjkgjhhjkhkj",
        "profilePicture": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    }
]

const wrapper = document.createElement('main');
wrapper.classList.add('wrapper');
root.append(wrapper);

function createCard(arrayOfUserData){
    const card = document.createElement('section');
    card.classList.add('card', 'mouse-off');
    card.addEventListener('click', toggle);
    function toggle(){
        card.classList.toggle('mouse-off');
        card.classList.toggle('mouse-on');
    };
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

wrapper.append(...usersArray);

