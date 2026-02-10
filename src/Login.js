import React, { useState } from 'react';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Short-circuit rendering */}
      {isLoggedIn && <p>You are logged in</p>}

      {/* Toggle Button for testing */}
      <button onClick={() => setIsLoggedIn(prev => !prev)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
}

export default Login;