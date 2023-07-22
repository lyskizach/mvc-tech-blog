const postBlog = async (event) => {
    event.preventDefault();
  
    const postTitle = document.querySelector('#title-input').value.trim();
    const postContent = document.querySelector('#content-input').value.trim();
    let postData;
  
    if (postTitle && postContent) {
      postData = {
        title: postTitle,
        content: postContent,
      }
    } else {
      alert('Please enter a title and content for your blog post.');
    }
    console.log(postData);
  
    const response = await fetch('/api/blogpost', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: { 'Content-Type': 'application/json' },
    }); 
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#BPbutton').addEventListener('click', postBlog);