const logoutBtn = document.getElementById('logout-btn');

if (logoutBtn) {
  logoutBtn.addEventListener('click', logoutHandler);
};

const logoutHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if(response.ok) {
        console.log(response);
        document.location.replace('/');
      };
    } catch (err) {
      console.log(err);
    }
};