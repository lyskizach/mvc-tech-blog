const logoutBtn = document.getElementById('logout-btn');

const logoutHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if(response.ok) {
        document.location.replace('/');
      };
    } catch (err) {
      console.log(err);
    }
};

if (logoutBtn) {
  logoutBtn.addEventListener('click', logoutHandler);
};