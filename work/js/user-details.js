const userId = new URLSearchParams(window.location.search).get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(user => {
        let userDetails = document.getElementById('user-details');
        let button = document.getElementById('user-button');
        let postContainer = document.getElementById('post-container');

        let func = function (user) {
            for (const userKey in user) {
                if (typeof user[userKey] === 'object') {
                    let keyTitle = document.createElement('h3');
                    keyTitle.classList.add('key-title')
                    keyTitle.innerText = userKey;
                    userDetails.appendChild(keyTitle);

                    func(user[userKey]);
                } else {
                    let divBoxKey = document.createElement('div');
                    divBoxKey.classList.add('box-key');
                    divBoxKey.innerText = `${userKey}: ${user[userKey]}`;

                    userDetails.appendChild(divBoxKey);
                }

            }
        }
        func(user);

        button.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(res => res.json())
                .then(post => {
                    postContainer.innerText = '';
                    for (const postItem of post) {
                        let postBox = document.createElement('div');
                        postBox.classList.add('post-box');

                        let postText = document.createElement('p');
                        postText.classList.add('post-text');
                        postText.innerText = postItem.title;

                        let postButton = document.createElement('a');
                        postButton.classList.add('post-button');
                        postButton.innerText = 'More';
                        postButton.href = `post-details.html?postId=${postItem.id}`;
                        postButton.setAttribute('target', '_blank');

                        postBox.append(postText, postButton)
                        postContainer.appendChild(postBox);
                    }
                })
        }
    });


