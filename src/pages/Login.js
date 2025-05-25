import logo from '../assets/logo.png';

export default function Login() {
  return (
    <div class="login-box">
    <h2 class="text-center mb-4"><img src={logo} alt="Logo" width="40" height="40" class="d-inline-block align-text-top bg-light"/>AIThinkr</h2>
    <form>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input type="email" class="form-control" placeholder="Enter email" />
      </div>
      <div class="mb-3">
        <label class="form-label">Register Number</label>
        <input type="number" class="form-control" placeholder="Enter Reg. No." />
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" placeholder="Password" />
      </div>
      <div class="d-grid gap-2">
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
      <div class="mt-3 text-center">
        <a href="#" class="text-decoration-none text-info">Forgot Password?</a>
      </div>
    </form>
  </div>
  );
}