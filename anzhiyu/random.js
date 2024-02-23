var posts=["2024/01/28/关于证书/","2023/08/28/谈谈ChatGPT/","2023/05/12/Ubuntu桌面学习/","2023/07/12/Markdown语法/","2024/02/23/给电脑小白的一些建议/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };