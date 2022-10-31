const root = document.querySelector('#root');

const usersCardArray = userData.map(user => createUserCard(user));

root.append(...usersCardArray);

function createUserCard(user) {
    const imageWrapper = createImageWrapper(user);
    const userName = createElement('h2', { classNames: ['userName'] }, user.name);
    const description = createElement('p', { classNames: ['description'] }, user.description);
    const connectButton = createElement('button', { classNames: ['connectButton'] }, 'Connect');
    const wrapper = createElement('section', { classNames: ['card-wrapper'] }, imageWrapper, userName, description, connectButton);
    wrapper.addEventListener('click', getActiveCard);
    return wrapper;
}

/**
 * 
 * @param {String} type 
 * @param {Object} options
 * @param {String[]} options.className 
 * @param  {Node} children 
 */


function createElement(type, { classNames = [] }, ...children) {
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...children);
    return elem;
}

function createImageWrapper(user) {
    const imageWrapper = createElement('div', { classNames: ['image-wrapper'] }, user.name[0])
    const color = stringToColor(user.name);
    imageWrapper.style.backgroundColor = color;
    imageWrapper.setAttribute('id', `wrapper-${user.id}`);
    const avatar = createImage(user);
    return imageWrapper;
}

function createImage(user) {
    const avatar = document.createElement('img');
    avatar.setAttribute('src', user.profilePicture);
    avatar.setAttribute('alt', user.name);
    avatar.dataset.id = user.id;
    avatar.classList.add('avatar');

    avatar.addEventListener('load', imageLoadHandler);
    avatar.addEventListener('error', imageErrorHandler);

    return avatar;
}

function imageLoadHandler({ target }) {
    const parentWrapper = document.querySelector((`#wrapper-${target.dataset.id}`));
    parentWrapper.append(target);
}

function imageErrorHandler(event) {
    event.target.remove();
}


function getActiveCard(event) {
    const activeCard = document.querySelector('.active');
    if (activeCard === event.currentTarget) {
        return;
    }
    if (activeCard) {
        activeCard.classList.remove('active');
    }
    event.currentTarget.classList.add('active');
}


/* UTILITS */


function stringToColor (str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xFF;
      colour += value.toString(16);
    }
    return colour.substring(0, 7);
  }