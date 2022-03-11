// Predefined arrays for storing posts/post ids //
let posts = [];
const likedPostsId = [];
const reportedPostsId = [];
//.......................//

// Function of filtering only liked posts //
const getLikedPosts = () => {
  return posts.filter((post) => likedPostsId.includes(post.id));
};
//......................//

// Function of filtering only reported posts //
const getReportedPosts = () => {
  return posts.filter((post) => reportedPostsId.includes(post.id));
};
//......................//

const isLiked = (id) => {
  return likedPostsId?.length && !!likedPostsId.includes(id);
};

// Function of adding liked post's id to liked id's array //
const addToLiked = (id) => {
  likedPostsId.push(id);
  const remainingPosts = posts.filter(post => !reportedPostsId.includes(post.id));
  showPosts(remainingPosts);
};
//......................//

// Function of adding reported post's id to reported id's array //
const reportPost = (id) => {
  reportedPostsId.push(id);
  const remainingPosts = posts.filter((post) => !reportedPostsId.includes(post.id));
  showPosts(remainingPosts);
};
//......................//

// Function of display post's description based on condition //
const displayContent = (text) => {
  return text.length < 30 ? text : text.slice(0, 30) + "<span class='fw-bold'>... read more</span>";
};
//..............................//

// Function of Rendering home, liked posts, reported posts //
const switchTab = (style1, style2, style3, style4, style5, style6, style7, id) => {
  document.getElementById("posts").style.display = style1;  // Getting arguments
  document.getElementById("liked").style.display = style2;  // from the
  document.getElementById("reported").style.display = style3; // HTML file
  document.getElementById("articles").style.display = style4;  // where this
  document.getElementById("home-title").style.display = style5;  // function is
  document.getElementById("like-title").style.display = style6;  // invoking
  document.getElementById("report-title").style.display = style7;
  if (id === "liked") {
    displayLikedPosts();
  } else if (id === "reported") {
    displayReportedPosts();
  }
};
//........................................//

// Function of creating cards of posts //
const createPost = (post) => {
  const { userImage, image, comments } = post;
  const div = document.createElement("article");
  div.classList.add("post");
  div.innerHTML = `
              <div class="post__header">
                <div class="post__profile">
                  <a
                    href="https://github.com/ProgrammingHero1"
                    target="_blank"
                    class="post__avatar"
                  >
                    <img src="${userImage}" alt="User Picture" />
                  </a>
                  <a href="#" class="post__user">phero</a>
                </div>

                <button class="post__more-options">
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
              </div>

              <div class="post__content">
                <div class="post__medias">
                  <img
                    class="post__media"
                    src="${image}"
                    alt="Post Content"
                  />
                </div>
              </div>

              <div class="post__footer">
                <div class="post__buttons">
                  <button class="post__button" onclick="addToLiked(${post.id})">
                  <i class="fa-solid fa-heart ${isLiked(post.id) && "text-danger"}"></i>
                    
                  </button>
                  <button class="post__button">
                    <i class="fa-solid fa-comment"></i>
                  </button>
                  

                  <div class="post__indicators"></div>

                  <button class="post__button post__button--align-right" onclick="reportPost(${post.id})">
                    <i class="fa-solid fa-ban"></i>
                  </button>
                </div>

                <div class="post__content ms-2">${displayContent(post.description)}</div>

                <div class="post__infos">
                  <div class="post__likes">
                    <a href="#" class="post__likes-avatar">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="User Picture" />
                    </a>

                    <span>Liked by
                      <a class="post__name--underline" href="#">user123</a> and
                      <a href="#">73 others</a>
                    </span>
                  </div>

                  <hr/>

                  <div class="post__description">
                    <small>
                      <a class="post__name--underline" href="#">
                          ${comments[0]?.user}
                      </a>
                      ${comments[0]?.text}
                    </small>
                  </div>
                  <span class="post__date-time">30 minutes ago</span>
                </div>
              </div>
      `;
  return div;
};
//......................//

// Function of show all the posts //
const showPosts = (posts) => {
  const productsContainer = document.getElementById("posts");
  productsContainer.innerHTML = '';
  posts.forEach((post) => {
    const div = createPost(post);
    productsContainer.appendChild(div);
  });
};
//......................//

// Function of displaying only liked posts //
const displayLikedPosts = () => {
  document.getElementById('liked').innerHTML = '';
  const likedPosts = getLikedPosts();
  likedPosts.forEach((post) => {
    const div = createPost(post);
    document.getElementById("liked").appendChild(div);
  });
};
//......................//

// Function of displaying only reported posts //
const displayReportedPosts = () => {
  document.getElementById('reported').innerHTML = '';
  const reportedPosts = getReportedPosts();
  reportedPosts.forEach((post) => {
    const div = createPost(post);
    document.getElementById("reported").appendChild(div);
  });
};
//......................//

// Function of load all the posts when page loading //
const loadPosts = async () => {
  let data = await fetch('../data/posts.json');
  posts = await data.json();
  showPosts(posts);
};
loadPosts();
//......................//

// Thank You //