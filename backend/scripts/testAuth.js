// Using built-in fetch (Node 18+)
const testAuth = async () => {
  const baseUrl = 'http://localhost:5000/api/auth';
  const email = `testuser_${Date.now()}@example.com`;
  const password = 'password123';
  const name = 'Test User';

  try {
    // 1. Register
    console.log('Registering user...');
    const regRes = await fetch(`${baseUrl}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, role: 'admin' })
    });
    const regData = await regRes.json();
    console.log('Register response:', regData);

    if (!regRes.ok) throw new Error(`Registration failed: ${regData.message || 'Unknown error'}`);

    // 2. Login
    console.log('\nLogging in...');
    const loginRes = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const loginData = await loginRes.json();
    console.log('Login response:', loginData);

    if (loginRes.ok && loginData.success) {
      console.log('\nSUCCESS: Auth flow is working correctly!');
    } else {
      console.log(`\nFAILURE: Auth flow returned status ${loginRes.status}`);
      console.log('Response body:', loginData);
    }
  } catch (err) {
    console.error('\nERROR:', err.message);
  }
};

testAuth();
