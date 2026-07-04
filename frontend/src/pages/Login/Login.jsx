import LoginForm from "../../components/auth/LoginForm";

function Login() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </section>
  );
}

export default Login;