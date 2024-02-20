var posts=["2023/01/28/关于证书/","2023/08/28/谈谈ChatGPT/","2023/05/12/Ubuntu桌面学习/","2023/07/12/Markdown语法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };