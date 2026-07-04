import RegisterForm from "../../components/auth/RegisterForm";

function Register() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </section>
  );
}

export default Register;