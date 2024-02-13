var posts=["2024/02/12/Ubuntu桌面学习/","2024/02/12/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };