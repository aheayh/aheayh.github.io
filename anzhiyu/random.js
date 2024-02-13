var posts=["2024/02/12/hello-world/","2024/02/12/123/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };