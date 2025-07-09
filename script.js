
    console.log("HERE"); 
    const form = document.getElementById('commentForm');
    const commentsDisplay = document.getElementById('commentsDisplay');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); 

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const comment = document.getElementById('comment').value.trim();
        console.log("name: ", name)
      if (name && email && comment) {
        const commentBox = document.createElement('div');
        commentBox.classList.add('comment');
        commentBox.innerHTML = `
          <strong>${name}</strong>
          <small>${email}</small>
          <p>${comment}</p>
        `;

        commentsDisplay.prepend(commentBox); 
        form.reset();
      }
    });
  
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(response => response.json())
    .then(posts => {
      const postList = document.getElementById('postList');
      postList.innerHTML = '';
fakePosts.forEach(post => {
  const postElement = document.createElement('div');
  postElement.className = 'post';
  postElement.innerHTML = `
    <h4>${post.title}</h4>
    <p>${post.body}</p>
  `;
  postList.appendChild(postElement);
});
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
      document.getElementById('postList').innerHTML = '<p>Failed to load posts.</p>';
    });
    const fakePosts = [
  {
    title: "How I Built My First Website",
    body: "A beginner’s guide to creating and launching your first website using only HTML, CSS, and a little creativity."
  },
  {
    title: "Understanding How JavaScript Works",
    body: "Explore the core concepts of JavaScript and how it makes websites interactive and dynamic."
  },
  {
    title: "Why Version Control with Git Is Essential",
    body: "Learn why Git is a must-have tool for every developer and how to use it to track and manage your code changes."
  },
  {
    title: "Top 5 Free Resources to Learn Coding",
    body: "Discover the best websites and platforms where you can start learning programming without spending a cent."
  },
  {
    title: "Deploying Your Website with GitHub Pages",
    body: "Step-by-step guide to hosting your personal website or project for free using GitHub Pages."
  }
];