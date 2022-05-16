!function(){"use strict";var e=JSON.parse('{"G":[{"id":1,"content":"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You\'ve nailed the design and the responsiveness at various breakpoints works really well.","createdAt":"1 month ago","score":12,"user":{"image":{"png":"./images/image-amyrobson.png","webp":"./images/image-amyrobson.webp"},"username":"amyrobson"},"replies":[]},{"id":2,"content":"Woah, your project looks awesome! How long have you been coding for? I\'m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!","createdAt":"2 weeks ago","score":5,"user":{"image":{"png":"./images/image-maxblagun.png","webp":"./images/image-maxblagun.webp"},"username":"maxblagun"},"replies":[{"id":3,"content":"If you\'re still new, I\'d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It\'s very tempting to jump ahead but lay a solid foundation first.","createdAt":"1 week ago","score":4,"replyingTo":"maxblagun","user":{"image":{"png":"./images/image-ramsesmiron.png","webp":"./images/image-ramsesmiron.webp"},"username":"ramsesmiron"}},{"id":4,"content":"I couldn\'t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.","createdAt":"2 days ago","score":2,"replyingTo":"ramsesmiron","user":{"image":{"png":"./images/image-juliusomo.png","webp":"./images/image-juliusomo.webp"},"username":"juliusomo"}}]}]}');function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e){var n=Date.now();setInterval((function(){var s=Date.now()-n,a=function(e){switch(t(e)){case"number":break;case"string":e=+new Date(e);break;case"object":e.constructor===Date&&(e=e.getTime());break;default:e=+new Date}var n=[[60,"seconds",1],[120,"1 minute ago","1 minute from now"],[3600,"minutes",60],[7200,"1 hour ago","1 hour from now"],[86400,"hours",3600],[172800,"Yesterday","Tomorrow"],[604800,"days",86400],[1209600,"Last week","Next week"],[2419200,"weeks",604800],[4838400,"Last month","Next month"],[29030400,"months",2419200],[58060800,"Last year","Next year"],[290304e4,"years",29030400],[580608e4,"Last century","Next century"],[580608e5,"centuries",290304e4]],s=(+new Date-e)/1e3,a="ago",c=1;if(0==s)return"Just now";s<0&&(s=Math.abs(s),a="from now",c=2);for(var l,o=0;l=n[o++];)if(s<l[0])return"string"==typeof l[2]?l[c]:Math.floor(s/l[2])+" "+l[1]+" "+a;return e}(new Date(Date.now()-s));e.textContent=a}),6e4)}function s(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var a=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=document.querySelector(".container"),this.textarea=document.querySelector(".textarea-send"),this.allWraps=[]}var a,c;return a=t,c=[{key:"pushToArray",value:function(){var e=this,t=document.querySelectorAll(".wrap");(t=Array.from(t)).forEach((function(t){e.allWraps.push(t)})),this.allWraps.forEach((function(e,t){t++,e.id=t}))}},{key:"createCard",value:function(){var t=this;e.G.forEach((function(e){var n=document.createElement("div");n.classList.add("replies"),n.id="".concat(e.id),t.container.append(n),n.insertAdjacentHTML("beforeend",'<div class="wrap"> \n                    <div class="header">\n                        <img src="'.concat(e.user.image.png,'" alt="avatar-image">\n                        <div class="you-name">\n                            <h3 class="name">').concat(e.user.username,'</h3>\n                            \n                        </div>\n                        <p class="when">').concat(e.createdAt,'</p>\n                    </div>\n                    <p class="comment">').concat(e.content,'</p>\n                    <div class="footer">\n                \n                        <div class="btns-container">\n                            <button class="plus"><svg class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" class="plus" /></svg></button>\n                            <p>').concat(e.score,'</p>\n                            <button class="minus"><svg class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" class="minus" /></svg></button>\n                        </div>\n                        <div class="svg-icons-container">\n                                       \n                            <div class="svg-reply rep">\n                                <svg class="rep" width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" class="rep"/></svg>\n                                <p class="rep">Reply</p>\n                            </div>\n                \n                        </div>\n                    </div>\n                    <div class="container-add-reply"  style="display:none;">          \n                        <textarea class="textarea-send" name="textarea" placeholder="@').concat(e.user.username,'"></textarea>\n                        <div class="container-send">\n                            <div><img src="./images/image-juliusomo.png" alt="avatar">\n                            </div>\n                            <div >\n                                \n                                <button class="send-message reply-message">reply</button>\n                            </div>\n                        </div>        \n                    </div> \n                </div>\n                <div class="reply-wrap" style="display:none;" >\n                ').trim())}))}},{key:"createReplyContainer",value:function(){var t=document.getElementById("2").querySelector(".reply-wrap");t.style.display="grid",t.insertAdjacentHTML("beforeend",'<div class="reply-container">\n            <div class="wrap">\n              <div class="header">\n                  <img src="'.concat(e.G[1].replies[0].user.image.png,'" alt="avatar-image">\n                  <div class="you-name">\n                    <h3 class="name">').concat(e.G[1].replies[0].user.username,'</h3>\n                  </div>\n                  <p class="when">').concat(e.G[1].replies[0].createdAt,'</p>\n              </div>\n              <p class="comment"><span class="replying-to">@').concat(e.G[1].replies[0].replyingTo," </span>").concat(e.G[1].replies[0].content,'</p>\n              <div class="footer">\n          \n                  <div class="btns-container">\n                      <button class="plus"><svg class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" class="plus" /></svg></button>\n                      <p>').concat(e.G[1].replies[0].score,'</p>\n                      <button class="minus"><svg class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" class="minus" /></svg></button>\n                  </div>\n                  <div class="svg-icons-container">\n          \n                        <div class="svg-reply rep">\n                            <svg class="rep" width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" class="rep"/></svg>\n                            <p class="rep">Reply</p>\n                        </div>\n          \n                  </div>\n              </div>\n              <div class="container-add-reply"  style="display:none;">          \n                        <textarea class="textarea-send" name="textarea" placeholder="@').concat(e.G[1].replies[0].user.username,'"></textarea>\n                        <div class="container-send">\n                            <div><img src="./images/image-juliusomo.png" alt="avatar">\n                            </div>\n                            <div >\n                                \n                                <button class="send-message reply-message">reply</button>\n                            </div>\n                        </div>        \n                </div> \n            </div>\n    \n       </div>').trim()),t.insertAdjacentHTML("beforeend",'\n            <div class="reply-container">\n            <dialog class="modal">\n                <h2>Delete comment</h2>\n                <p> Are you sure you want to delete this comment? This will remove the comment and can\'t be undone.</p>\n                <div class="btns">\n                    <button class="close-modal">no, cancel</button>\n                    <button class="delete-modal">yes, delete</button>\n                </div>\n            </dialog>\n                <div class="wrap">\n                    <div class="header">\n                        <img src="'.concat(e.G[1].replies[1].user.image.png,'" alt="avatar-image">\n                        <div class="you-name">\n                            <h3 class="name">').concat(e.G[1].replies[1].user.username,'</h3>\n                            <small class="you">you</small>\n                        </div>\n                        <p class="when">').concat(e.G[1].replies[1].createdAt,'</p>\n                    </div>   \n                    \n                    <button class="update you btn-update" >Update</button>\n                                \n                    <p class="comment"><span class="replying-to">@').concat(e.G[1].replies[1].replyingTo," </span>").concat(e.G[1].replies[0].content,'</p>\n                    <div class="footer">\n                \n                        <div class="btns-container">\n                            <button class="plus"><svg class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" class="plus" /></svg></button>\n                            <p>').concat(e.G[1].replies[1].score,'</p>\n                            <button class="minus"><svg class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" class="minus" /></svg></button>\n                        </div>\n                        <div class="svg-icons-container">\n                \n                            <div class="svg-delete delete-comment">\n                                <svg class="delete-comment " width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" class="delete-comment " /></svg>\n                                <p class="delete-comment ">Delete</p>\n                            </div>\n\n                \n                            <div class="svg-edit edit">\n                                <svg class="edit" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"class="edit" /></svg>\n                                <p class="edit" >Edit</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>  \n            </div>\n            ').trim())}},{key:"createReply",value:function(){var t=this,s=!1;document.addEventListener("click",(function(a){if(a.target.classList.contains("rep")){var c=a.target.closest(".wrap").querySelector(".container-add-reply");s=!s,c.style.display=s?"block":"none"}if(a.target.classList.contains("reply-message")){var l=a.target.closest(".container-add-reply").querySelector(".textarea-send"),o=a.target.closest(".wrap").querySelector(".name"),i=a.target.closest(".replies").querySelector(".reply-wrap");if(!l.value)return;var r=document.createElement("div");r.classList.add("wrap"),r.innerHTML='\n        <div class="header">\n            <img src="'.concat(e.G[1].replies[1].user.image.png,'" alt="avatar-image">\n            <div class="you-name">\n                <h3 class="name">').concat(e.G[1].replies[1].user.username,'</h3>\n                <small class="you">you</small>\n            </div>\n            \n        </div>   \n        \n                <button class="update you btn-update" >Update</button>\n                    \n        <p class="comment"><span contenteditable="false" class="replying-to">@').concat(o.textContent," </span>").concat(l.value,'</p>\n        <div class="footer">\n    \n            <div class="btns-container">\n                <button class="plus"><svg class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" class="plus" /></svg></button>\n                <p>0</p>\n                <button class="minus"><svg class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" class="minus" /></svg></button>\n            </div>\n            <div class="svg-icons-container">\n    \n                <div class="svg-delete delete-comment">\n                    <svg class="delete-comment " width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" class="delete-comment " /></svg>\n                    <p class="delete-comment ">Delete</p>\n                </div>\n\n    \n                <div class="svg-edit edit">\n                    <svg class="edit" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"class="edit" /></svg>\n                    <p class="edit" >Edit</p>\n                </div>\n            </div>\n        </div>').trim();var d=document.createElement("dialog");d.classList.add("modal"),d.innerHTML='\n        <h2>Delete comment</h2>\n        <p> Are you sure you want to delete this comment? This will remove the comment and can\'t be undone.</p>\n        <div class="btns">\n            <button class="close-modal">no, cancel</button>\n            <button class="delete-modal">yes, delete</button>\n        </div>',i.style.display="grid";var m=document.createElement("p");m.classList.add("when"),m.textContent="few seconds ago",n(m);var u=document.createElement("div");u.classList.add("reply-container"),u.prepend(d),u.append(r),i.append(u),u.append(m),s=!s,a.target.closest(".container-add-reply").style.display="none",l.value="",t.allWraps.push(r),t.allWraps.forEach((function(e,t){t++,e.id=t}))}}))}},{key:"score",value:function(){var e=this;function t(e){return"Score "+e.id}function n(e){return+localStorage.getItem(t(e)||0)}function s(e,n){localStorage.setItem(t(e),n)}function a(e){var t=n(e);e.querySelector(".btns-container").querySelector("p").textContent=t}setTimeout((function(){e.allWraps.forEach((function(e){a(e)}))}),0),document.addEventListener("click",(function(e){var t,c,l=e.target.closest(".wrap");e.target.classList.contains("plus")&&(c=n(t=l),s(t,++c),a(t)),e.target.classList.contains("minus")&&function(e){var t=n(e);s(e,--t),a(e)}(l)}))}},{key:"sendMessage",value:function(){var t=this;document.querySelector(".add-comment").addEventListener("click",(function(s){if(s.preventDefault(),t.textarea.value){var a=document.createElement("div");a.classList.add("replies"),t.container.append(a);var c=document.createElement("p");c.classList.add("when"),c.textContent="few seconds ago",n(c);var l=document.createElement("dialog");l.classList.add("modal"),l.innerHTML='<h2>Delete comment</h2>\n                    <p> Are you sure you want to delete this comment? This will remove the comment and can\'t be undone.</p>\n                    <div class="btns">\n                        <button class="close-modal">no, cancel</button>\n                        <button class="delete-modal">yes, delete</button>\n                    </div>'.trim();var o=document.createElement("div");o.classList.add("wrap"),o.innerHTML='<div class="header">\n                            <img src="'.concat(e.G[1].replies[1].user.image.png,'" alt="avatar-image">\n\n                            <div class="you-name">\n                                <h3 class="name">juliusomo</h3>\n                                <small class="you">you</small>                          \n                            </div>\n\n                        </div>\n                        <button class="update you btn-update" >Update</button>\n                        <p class="comment">').concat(t.textarea.value,'</p>\n                        <div class="footer">\n                    \n                            <div class="btns-container">\n                                    <button class="plus"><svg class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path  d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" class="plus"/></svg></button>\n                                    <p>0</p>\n                                    <button class="minus"><svg class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path  d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" class="minus" /></svg></button>\n                                </div>\n                                <div class="svg-icons-container">\n                    \n                                    <div class="svg-delete delete-comment">\n                                        <svg class="delete-comment " width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" class="delete-comment " /></svg>\n                                        <p class="delete-comment ">Delete</p>\n                                    </div>\n\n                        \n                                    <div class="svg-edit edit">\n                                        <svg class="edit" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"class="edit" /></svg>\n                                        <p class="edit" >Edit</p>\n                                    </div>\n                            </div>                                \n                        </div>\n                        ').trim(),a.prepend(l),a.append(o),o.append(c),t.textarea.value="",t.allWraps.push(o),t.allWraps.forEach((function(e,t){t++,e.id=t}))}}))}},{key:"modal",value:function(){document.addEventListener("click",(function(e){if(e.target.classList.contains("delete-comment")&&e.target.closest(".wrap").previousElementSibling.showModal(),e.target.classList.contains("close-modal")&&e.target.closest(".modal").close(),e.target.classList.contains("delete-modal")){var t=e.target.closest(".reply-wrap"),n=e.target.closest(".modal").nextElementSibling;e.target.closest(".modal").close(),e.target.closest(".modal").parentElement.style.transform="scale(.5)",e.target.closest(".modal").parentElement.style.opacity="0",e.target.closest(".modal").parentElement.style.transition="all .25s ease-in-out",setTimeout((function(){e.target.closest(".modal").parentElement.remove(),localStorage.removeItem("Score ".concat(n.id)),t&&(t.children.length?t.children.length>0&&(t.style.display="grid"):t.style.display="none")}),250)}}))}},{key:"edit",value:function(){document.addEventListener("click",(function(e){if(e.target.classList.contains("edit")){var t=e.target.closest(".footer").previousElementSibling,n=e.target.closest(".footer").previousElementSibling.previousElementSibling;t.setAttribute("contenteditable",!0),function(e){if(e.focus(),void 0!==window.getSelection&&void 0!==document.createRange){var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var n=window.getSelection();n.removeAllRanges(),n.addRange(t)}else if(void 0!==document.body.createTextRange){var s=document.body.createTextRange();s.moveToElementText(e),s.collapse(!1),s.select()}}(t),t.classList.add("edit-border"),n.style.display="inline-block"}if(e.target.classList.contains("btn-update")){var s=e.target.closest(".update").nextElementSibling;s.setAttribute("contenteditable",!1),s.classList.remove("edit-border"),e.target.style.display="none"}}))}}],c&&s(a.prototype,c),Object.defineProperty(a,"prototype",{writable:!1}),t}(),c=new a;c.createCard(),c.createReplyContainer(),c.score(),c.createReply(),c.sendMessage(),c.modal(),c.edit(),c.pushToArray()}();