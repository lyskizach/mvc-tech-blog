const postComment = async (event) => {
    event.preventDefault();
    const commentContent = document.querySelector('#input').value.trim();
    const commentPostId = window.location.pathname.split('/').pop();
  
    if (!commentContent) {
      alert('Please enter a comment.');
    }
  
    const commentData = {
      content: commentContent,
      post_id: commentPostId,
    }
    
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#post').addEventListener('click', postComment);