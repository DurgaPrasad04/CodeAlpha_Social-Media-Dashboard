document.addEventListener("DOMContentLoaded", function () {
    const appContainer = document.getElementById("app");
  
    // Mocked user data
    const userData = {
      name: "Durga prasad",
      email: "durgaprasad@gmail.com",
      // Add more user information as needed
    };
  
    // Mocked recent posts data
    const recentPosts = [
      { content: "This is my first post on social media!" },
      { content: "This is my Internship Journey" },
      // Add more posts as needed
    ];
  
    // Function to render user information
    function renderUserData(userData) {
      const dashboardDiv = document.createElement("div");
      dashboardDiv.classList.add("dashboard");
  
      const heading = document.createElement("h1");
      heading.textContent = "Welcome to Your Social Media Dashboard";
      dashboardDiv.appendChild(heading);
  
      const userInfoDiv = document.createElement("div");
      userInfoDiv.classList.add("user-info");
  
      const nameParagraph = document.createElement("p");
      nameParagraph.textContent = "Name: " + userData.name;
      userInfoDiv.appendChild(nameParagraph);
  
      const emailParagraph = document.createElement("p");
      emailParagraph.textContent = "Email: " + userData.email;
      userInfoDiv.appendChild(emailParagraph);
  
      dashboardDiv.appendChild(userInfoDiv);
  
      appContainer.appendChild(dashboardDiv);
    }
  
    // Function to render recent posts
    function renderRecentPosts(posts) {
      const postScheduleDiv = document.createElement("div");
      postScheduleDiv.classList.add("post-schedule");
  
      const heading = document.createElement("h2");
      heading.textContent = "Recent Posts";
      postScheduleDiv.appendChild(heading);
  
      const postList = document.createElement("ul");
      postList.classList.add("post-list");
      posts.forEach((post) => {
        const listItem = document.createElement("li");
        listItem.classList.add("post-item");
        listItem.textContent = post.content;
        postList.appendChild(listItem);
      });
      postScheduleDiv.appendChild(postList);
  
      appContainer.appendChild(postScheduleDiv);
    }
  
    // Function to schedule a new post
    function schedulePost() {
      const newPostContent = prompt("Enter your new post:");
      if (newPostContent) {
        recentPosts.unshift({ content: newPostContent });
        renderRecentPosts(recentPosts);
      }
    }
  
    // Initialize dashboard
    function initDashboard() {
      renderUserData(userData);
      renderRecentPosts(recentPosts);
  
      const scheduleButton = document.createElement("button");
      scheduleButton.textContent = "Schedule New Post";
      scheduleButton.addEventListener("click", schedulePost);
      appContainer.appendChild(scheduleButton);
    }
  
    initDashboard();
  });
  