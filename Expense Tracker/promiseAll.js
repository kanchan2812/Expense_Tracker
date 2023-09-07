// Mock user data
const user = {
    id: 1,
    name: "John",
    lastActivityTime: null, // Initialize with null
  };
  
  const posts = [];
  
  // Function to simulate creating a post (returns a promise)
  function createPost(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        posts.push(post);
        resolve();
      }, 1000);
    });
  }
  
  // Function to update the user's last activity time (returns a promise)
  function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        resolve();
      }, 1000);
    });
  }
  
  // Function to delete the last post (returns a promise)
  function deleteLastPost() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      }, 1000);
    });
  }
  
  // Main function to perform the sequence of actions
  function performActions() {
    // Create a post
    createPost({ title: "New Post" })
      .then(() => {
        // Update the user's last activity time
        return updateLastUserActivityTime();
      })
      .then(() => {
        // Log all posts and last activity time
        console.log("Posts:", posts);
        console.log("Last Activity Time:", user.lastActivityTime);
  
        // Delete the last post
        return deleteLastPost();
      })
      .then((deletedPost) => {
        // Log the deleted post
        console.log("Deleted Post:", deletedPost);
  
        // Log the updated set of posts
        console.log("Updated Posts:", posts);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  // Call the main function to start the sequence
  performActions();
  