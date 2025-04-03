fetch(' https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {

        let userContainer = document.getElementById('user-container');

        for (const user of users) {
            let userBox = document.createElement('div');
            userBox.classList.add('user-box');

            let userInfo = document.createElement('div');
            userInfo.classList.add('user-info')
            userInfo.innerText = `id: ${user.id}, name: ${user.name}`;

            let userButton = document.createElement('a');
            userButton.classList.add('user-button');
            userButton.innerText = 'More';
            userButton.href = `pages/user-details.html?id=${user.id}`;

            userBox.append(userInfo, userButton)
            userContainer.appendChild(userBox);
        }

    })





















