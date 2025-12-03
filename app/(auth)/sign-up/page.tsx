import SignupForm from "@/components/auth/SignupForm";


export default function SignupPage() {
  return (
    <main className="min-h-[calc(100vh-75px)] bg-linear-to-br from-pink-400 via-pink-500 to-orange-400 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-white rounded-full opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-2 h-2 bg-white rounded-full opacity-60"></div>
      <div className="absolute top-1/3 left-5 w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>

      <SignupForm />
    </main>
  )
}
