var posts=["2023/05/12/Ubuntu桌面学习/","2023/07/12/Markdown语法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };