const deletePost = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (event.target.hasAttribute('data-id')) {
    const postId = event.target.getAttribute('data-id');
    console.log(postId);

    const response = await fetch(`/api/blogpost/${postId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('We were unable to delete this post');
    }
  }
};

const deletePostBtns = document.querySelectorAll('.delete-post-btn');

deletePostBtns.forEach((button) => {
  button.addEventListener('click', deletePost);
});