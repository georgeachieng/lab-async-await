// Async function to fetch posts
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
  }
}

// Function to display posts
function displayPosts(posts) {
  const postList = document.getElementById("post-list");
  postList.innerHTML = "";

  posts.forEach(post => {
    const li = document.createElement("li");

    const title = document.createElement("h1"); // test expects h1
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    li.appendChild(title);
    li.appendChild(body);
    postList.appendChild(li);
  });
}

// Call fetchPosts when page loads
document.addEventListener("DOMContentLoaded", fetchPosts);