let editingPostId = null;

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            const postList = document.getElementById('postList');
            postList.innerHTML = '';
            posts.forEach(post => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.innerHTML = `
                    <h5>${post.title}</h5>
                    <p>${post.body}</p>
                    <button type="button" class="btn btn-danger btn-sm" onclick="deletePost(${post.id})">Delete</button>
                    <button type="button" class="btn btn-primary btn-sm" onclick="editPost(${post.id})">Edit</button>
                `;
                postList.appendChild(listItem);
            });
        });
}

function deletePost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        fetchPosts();
    });
}

function editPost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(post => {
            document.getElementById('title').value = post.title;
            document.getElementById('body').value = post.body;
            editingPostId = id;
            document.querySelector('button[type="submit"]').textContent = 'Update Post';
        });
}

document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    if (!title || !body) {
        alert('Please enter both title and body.');
        return;
    }
    if (editingPostId) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${editingPostId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: editingPostId,
                title: title,
                body: body,
                userId: 1 
            })
        })
        .then(() => {
            document.getElementById('title').value = '';
            document.getElementById('body').value = '';
            editingPostId = null;
            document.querySelector('button[type="submit"]').textContent = 'Add Post';
            fetchPosts();
        });
    } else {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1 
            })
        })
        .then(() => {
            document.getElementById('title').value = '';
            document.getElementById('body').value = '';
            fetchPosts();
        });
    }
});

fetchPosts();
