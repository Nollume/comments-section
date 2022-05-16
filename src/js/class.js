import data from "../data/data.json";
import { timeAgo } from "./timeAgo";
import { placeCaretAtEnd } from "./caretFocus";

export class User {
  constructor() {
    this.container = document.querySelector(".container");
    this.textarea = document.querySelector(".textarea-send");
    this.allWraps = [];
  }

  pushToArray() {
    let allWraps = document.querySelectorAll(".wrap");

    allWraps = Array.from(allWraps);

    allWraps.forEach((wrap) => {
      this.allWraps.push(wrap);
    });

    this.allWraps.forEach((wrap, index) => {
      index++;
      wrap.id = index;
    });
  }

  createCard() {
    data.comments.forEach((user) => {
      let repliesContainer = document.createElement("div");

      repliesContainer.classList.add("replies");
      repliesContainer.id = `${user.id}`;

      this.container.append(repliesContainer);

      repliesContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="wrap"> 
                    <div class="header">
                        <img src="${user.user.image.png}" alt="avatar-image">
                        <div class="you-name">
                            <h3 class="name">${user.user.username}</h3>
                            
                        </div>
                        <p class="when">${user.createdAt}</p>
                    </div>
                    <p class="comment">${user.content}</p>
                    <div class="footer">
                
                        <div class="btns-container">
                            <button class="plus"><svg class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" class="plus" /></svg></button>
                            <p>${user.score}</p>
                            <button class="minus"><svg class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" class="minus" /></svg></button>
                        </div>
                        <div class="svg-icons-container">
                                       
                            <div class="svg-reply rep">
                                <svg class="rep" width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" class="rep"/></svg>
                                <p class="rep">Reply</p>
                            </div>
                
                        </div>
                    </div>
                    <div class="container-add-reply"  style="display:none;">          
                        <textarea class="textarea-send" name="textarea" placeholder="@${user.user.username}"></textarea>
                        <div class="container-send">
                            <div><img src="./images/image-juliusomo.png" alt="avatar">
                            </div>
                            <div >
                                
                                <button class="send-message reply-message">reply</button>
                            </div>
                        </div>        
                    </div> 
                </div>
                <div class="reply-wrap" style="display:none;" >
                `.trim()
      );
    });
  }

  createReplyContainer() {
    let repliesContainer = document.getElementById("2");
    let replyWrap = repliesContainer.querySelector(".reply-wrap");

    replyWrap.style.display = "grid";

    replyWrap.insertAdjacentHTML(
      "beforeend",
      `<div class="reply-container">
            <div class="wrap">
              <div class="header">
                  <img src="${data.comments[1].replies[0].user.image.png}" alt="avatar-image">
                  <div class="you-name">
                    <h3 class="name">${data.comments[1].replies[0].user.username}</h3>
                  </div>
                  <p class="when">${data.comments[1].replies[0].createdAt}</p>
              </div>
              <p class="comment"><span class="replying-to">@${data.comments[1].replies[0].replyingTo} </span>${data.comments[1].replies[0].content}</p>
              <div class="footer">
          
                  <div class="btns-container">
                      <button class="plus"><svg class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" class="plus" /></svg></button>
                      <p>${data.comments[1].replies[0].score}</p>
                      <button class="minus"><svg class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" class="minus" /></svg></button>
                  </div>
                  <div class="svg-icons-container">
          
                        <div class="svg-reply rep">
                            <svg class="rep" width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" class="rep"/></svg>
                            <p class="rep">Reply</p>
                        </div>
          
                  </div>
              </div>
              <div class="container-add-reply"  style="display:none;">          
                        <textarea class="textarea-send" name="textarea" placeholder="@${data.comments[1].replies[0].user.username}"></textarea>
                        <div class="container-send">
                            <div><img src="./images/image-juliusomo.png" alt="avatar">
                            </div>
                            <div >
                                
                                <button class="send-message reply-message">reply</button>
                            </div>
                        </div>        
                </div> 
            </div>
    
       </div>`.trim()
    );

    replyWrap.insertAdjacentHTML(
      "beforeend",
      `
            <div class="reply-container">
            <dialog class="modal">
                <h2>Delete comment</h2>
                <p> Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                <div class="btns">
                    <button class="close-modal">no, cancel</button>
                    <button class="delete-modal">yes, delete</button>
                </div>
            </dialog>
                <div class="wrap">
                    <div class="header">
                        <img src="${data.comments[1].replies[1].user.image.png}" alt="avatar-image">
                        <div class="you-name">
                            <h3 class="name">${data.comments[1].replies[1].user.username}</h3>
                            <small class="you">you</small>
                        </div>
                        <p class="when">${data.comments[1].replies[1].createdAt}</p>
                    </div>   
                    
                    <button class="update you btn-update" >Update</button>
                                
                    <p class="comment"><span class="replying-to">@${data.comments[1].replies[1].replyingTo} </span>${data.comments[1].replies[0].content}</p>
                    <div class="footer">
                
                        <div class="btns-container">
                            <button class="plus"><svg class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" class="plus" /></svg></button>
                            <p>${data.comments[1].replies[1].score}</p>
                            <button class="minus"><svg class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" class="minus" /></svg></button>
                        </div>
                        <div class="svg-icons-container">
                
                            <div class="svg-delete delete-comment">
                                <svg class="delete-comment " width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" class="delete-comment " /></svg>
                                <p class="delete-comment ">Delete</p>
                            </div>

                
                            <div class="svg-edit edit">
                                <svg class="edit" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"class="edit" /></svg>
                                <p class="edit" >Edit</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            `.trim()
    );
  }

  createReply() {
    let open = false;

    document.addEventListener("click", (e) => {
      // ****************vytvorenie textare

      if (e.target.classList.contains("rep")) {
        let wrap = e.target.closest(".wrap");
        let addReply = wrap.querySelector(".container-add-reply");

        open = !open;

        addReply.style.display = open ? "block" : "none";
      }

      // *******************vytvorenie noveho reply containera

      if (e.target.classList.contains("reply-message")) {
        let textarea = e.target
          .closest(".container-add-reply")
          .querySelector(".textarea-send");

        let name = e.target.closest(".wrap").querySelector(".name");
        let replyWrap = e.target
          .closest(".replies")
          .querySelector(".reply-wrap");

        if (!textarea.value) return;

        let wrap = document.createElement("div");

        wrap.classList.add("wrap");

        wrap.innerHTML = `
        <div class="header">
            <img src="${data.comments[1].replies[1].user.image.png}" alt="avatar-image">
            <div class="you-name">
                <h3 class="name">${data.comments[1].replies[1].user.username}</h3>
                <small class="you">you</small>
            </div>
            
        </div>   
        
                <button class="update you btn-update" >Update</button>
                    
        <p class="comment"><span contenteditable="false" class="replying-to">@${name.textContent} </span>${textarea.value}</p>
        <div class="footer">
    
            <div class="btns-container">
                <button class="plus"><svg class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" class="plus" /></svg></button>
                <p>0</p>
                <button class="minus"><svg class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" class="minus" /></svg></button>
            </div>
            <div class="svg-icons-container">
    
                <div class="svg-delete delete-comment">
                    <svg class="delete-comment " width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" class="delete-comment " /></svg>
                    <p class="delete-comment ">Delete</p>
                </div>

    
                <div class="svg-edit edit">
                    <svg class="edit" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"class="edit" /></svg>
                    <p class="edit" >Edit</p>
                </div>
            </div>
        </div>`.trim();

        let dialog = document.createElement("dialog");

        dialog.classList.add("modal");

        dialog.innerHTML = `
        <h2>Delete comment</h2>
        <p> Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        <div class="btns">
            <button class="close-modal">no, cancel</button>
            <button class="delete-modal">yes, delete</button>
        </div>`;

        replyWrap.style.display = "grid";

        let element = document.createElement("p");
        element.classList.add("when");
        element.textContent = "few seconds ago";
        timeAgo(element);

        let replyContainer = document.createElement("div");

        replyContainer.classList.add("reply-container");

        replyContainer.prepend(dialog);
        replyContainer.append(wrap);

        replyWrap.append(replyContainer);
        replyContainer.append(element);

        open = !open;

        e.target.closest(".container-add-reply").style.display = "none";

        textarea.value = "";

        this.allWraps.push(wrap);

        this.allWraps.forEach((wrap, index) => {
          index++;
          wrap.id = index;
        });
      }
    });
  }

  score() {
    function getIdwrap(element) {
      return "Score " + element.id;
    }

    function getScore(element) {
      return +localStorage.getItem(getIdwrap(element) || 0);
    }

    function setScore(element, score) {
      localStorage.setItem(getIdwrap(element), score);
    }

    function updateElement(element) {
      let score = getScore(element);
      let scoreEl = element.querySelector(".btns-container").querySelector("p");

      scoreEl.textContent = score;
    }

    function increaseScore(element) {
      let score = getScore(element);
      score++;

      setScore(element, score);
      updateElement(element);
    }

    function decreaseScore(element) {
      let score = getScore(element);
      score--;

      setScore(element, score);
      updateElement(element);
    }

    setTimeout(() => {
      this.allWraps.forEach((wrap) => {
        updateElement(wrap);
      });
    }, 0);

    document.addEventListener("click", (e) => {
      const wrapCurrent = e.target.closest(".wrap");

      if (e.target.classList.contains("plus")) {
        increaseScore(wrapCurrent);
      }
      if (e.target.classList.contains("minus")) {
        decreaseScore(wrapCurrent);
      }
    });
  }

  sendMessage() {
    let send = document.querySelector(".add-comment");

    send.addEventListener("click", (e) => {
      e.preventDefault();
      if (!this.textarea.value) return;

      let messageContainer = document.createElement("div");
      messageContainer.classList.add("replies");

      this.container.append(messageContainer);

      let element = document.createElement("p");
      element.classList.add("when");
      element.textContent = "few seconds ago";
      timeAgo(element);

      let dialog = document.createElement("dialog");
      dialog.classList.add("modal");

      dialog.innerHTML = `<h2>Delete comment</h2>
                    <p> Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                    <div class="btns">
                        <button class="close-modal">no, cancel</button>
                        <button class="delete-modal">yes, delete</button>
                    </div>`.trim();

      let wrap = document.createElement("div");
      wrap.classList.add("wrap");

      wrap.innerHTML = `<div class="header">
                            <img src="${data.comments[1].replies[1].user.image.png}" alt="avatar-image">

                            <div class="you-name">
                                <h3 class="name">juliusomo</h3>
                                <small class="you">you</small>                          
                            </div>

                        </div>
                        <button class="update you btn-update" >Update</button>
                        <p class="comment">${this.textarea.value}</p>
                        <div class="footer">
                    
                            <div class="btns-container">
                                    <button class="plus"><svg class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path  d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" class="plus"/></svg></button>
                                    <p>0</p>
                                    <button class="minus"><svg class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path  d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" class="minus" /></svg></button>
                                </div>
                                <div class="svg-icons-container">
                    
                                    <div class="svg-delete delete-comment">
                                        <svg class="delete-comment " width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" class="delete-comment " /></svg>
                                        <p class="delete-comment ">Delete</p>
                                    </div>

                        
                                    <div class="svg-edit edit">
                                        <svg class="edit" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"class="edit" /></svg>
                                        <p class="edit" >Edit</p>
                                    </div>
                            </div>                                
                        </div>
                        `.trim();

      messageContainer.prepend(dialog);
      messageContainer.append(wrap);

      wrap.append(element);

      this.textarea.value = "";

      this.allWraps.push(wrap);

      this.allWraps.forEach((wrap, index) => {
        index++;
        wrap.id = index;
      });
    });
  }

  modal() {
    // DELETE***************************************

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-comment")) {
        e.target.closest(".wrap").previousElementSibling.showModal();
      }

      if (e.target.classList.contains("close-modal")) {
        e.target.closest(".modal").close();
      }

      if (e.target.classList.contains("delete-modal")) {
        let replyWrap = e.target.closest(".reply-wrap");
        let wrap = e.target.closest(".modal").nextElementSibling;

        e.target.closest(".modal").close();

        e.target.closest(".modal").parentElement.style.transform = "scale(.5)";
        e.target.closest(".modal").parentElement.style.opacity = "0";

        e.target.closest(".modal").parentElement.style.transition =
          "all .25s ease-in-out";

        setTimeout(() => {
          e.target.closest(".modal").parentElement.remove();

          localStorage.removeItem(`Score ${wrap.id}`);

          if (!replyWrap) return;

          if (!replyWrap.children.length) {
            replyWrap.style.display = "none";
          } else if (replyWrap.children.length > 0) {
            replyWrap.style.display = "grid";
          }
        }, 250);
      }
    });
  }

  edit() {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("edit")) {
        let paragraph = e.target.closest(".footer").previousElementSibling;
        let btn =
          e.target.closest(".footer").previousElementSibling
            .previousElementSibling;

        paragraph.setAttribute("contenteditable", true);

        placeCaretAtEnd(paragraph);

        paragraph.classList.add("edit-border");

        btn.style.display = "inline-block";
      }

      if (e.target.classList.contains("btn-update")) {
        let paragraph = e.target.closest(".update").nextElementSibling;

        paragraph.setAttribute("contenteditable", false);
        paragraph.classList.remove("edit-border");

        e.target.style.display = "none";
      }
    });
  }
}
