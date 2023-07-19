// deletepost.js

// Assuming you are using jQuery for simplicity
$(document).ready(function() {
    $('.delete-post-btn').on('click', function(e) {
      e.preventDefault();
      var postId = $(this).data('id');
      
      // Perform an AJAX request to delete the post
      $.ajax({
        url: '/api/posts/' + postId,
        method: 'DELETE',
        success: function(response) {
          // Handle the success response, such as removing the deleted post from the UI
          console.log('Post deleted successfully');
          // ... additional logic here ...
        },
        error: function(xhr, status, error) {
          // Handle the error response
          console.error('Error deleting post:', error);
          // ... additional error handling logic here ...
        }
      });
    });
  });  