const commentInput = document.getElementById('commentInput');
const addCommentBtn = document.getElementById('addCommentBtn');
const CommentLists = document.getElementById('commentList');

submitReply = (parentEl,text) => {
   if (text !== '') {
    let reply = document.createElement('li');
    let replyBtn = document.createElement('button');

    reply.textContent = text;
    replyBtn.textContent = "Add reply";
    replyBtn.classList.add("reply-btn");

    parentEl.appendChild(reply);
    reply.appendChild(replyBtn);

    replyBtn.addEventListener('click', () => {
        addReplyInput(reply);
    });
   }

}

addReplyInput = (parentEl) => {
    let replyInputContainer = document.createElement('div');
    let replyInput = document.createElement('input');
    let replySubmitBtn = document.createElement('button');

    replyInputContainer.classList.add('input-container');
    replyInputContainer.classList.add('reply-input');
    replyInput.setAttribute("type","text");
    replyInput.setAttribute("placeholder","Add reply");
    replySubmitBtn.setAttribute("name","Submit Reply");
    replySubmitBtn.textContent = "Submit reply"
    replySubmitBtn.classList.add("reply-btn");

    parentEl.appendChild(replyInputContainer);
    replyInputContainer.appendChild(replyInput);
    replyInputContainer.appendChild(replySubmitBtn);

    replySubmitBtn.addEventListener('click', () => {
        let replyText = replyInput.value.trim();
        submitReply(parentEl,replyText);

        replyInputContainer.style.display = 'none';
    });
};

createCommentContainer = (text) => {
    const liEl = document.createElement('li');
    liEl.textContent = text;
    
    const replyBtn = document.createElement('button');
    replyBtn.classList.add('reply-btn');
    replyBtn.textContent = 'Add Reply';

    CommentLists.appendChild(liEl);
    liEl.appendChild(replyBtn);
    replyBtn.addEventListener('click', () => {
        addReplyInput(liEl);
    });
};

addComment = () => {
    const commentText = commentInput.value.trim();
    console.log(commentText);

    if (commentText !== '') {
       createCommentContainer(commentText);
    }
};

addCommentBtn.addEventListener('click', addComment);