const postId = new URLSearchParams(window.location.search).get('postId');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(post => {

        let postBox = document.getElementById('post-box');
        for (const postKey in post) {
            let postItem = document.createElement('div');
            postItem.classList.add('post-item')
            postItem.innerText = `${postKey} - ${post[postKey]}`;
            postBox.appendChild(postItem);
        }

    })

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(res => res.json())
    .then(comments => {

        let commentsBox = document.getElementById('comments-box');
        for (const comment of comments) {
            let commentItem = document.createElement('div');
            commentItem.classList.add('comment-item');
            for (const commentKey in comment) {
                commentItem.innerText = `${comment[commentKey]}`;
                commentsBox.appendChild(commentItem);
            }
        }

    })


















