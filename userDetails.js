const url = new URL(location.href);
const user = JSON.parse(url.searchParams.get('user'));

function renderUser(user) {
    const userBlock = document.getElementById('userInfo');

    for (const key in user) {


        if (typeof user[key] === 'object') {

            renderUser(user[key]);
        } else {

        }
    }
}

renderUser(user);

const postsButton = document.getElementById('posts');
