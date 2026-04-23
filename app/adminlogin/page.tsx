import OtherNav from "../[components]/OtherNav";
import { setAdmin } from "../action/cookieActions";
import { redirect } from "next/navigation";

const AdminLogin = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server" // Marks this as a server action
    const password = formData.get("password")
    if (password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) return
    await setAdmin()
    redirect('/admin')
  }
  return (
    <main>
      <OtherNav />
      <section className="mt-20 min-h-[70vh] flex justify-center items-center">
        <form action={handleSubmit} className="border border-amber-200 py-4 px-3 space-y-4 shadow-lg rounded-md max-sm:w-[70vw] w-[35vw] text-center">
          <p className="w-full flex justify-center items-center text-2xl font-brico text-[#333]">Admin Login</p>
          <div className="w-full">
            <input type="text" name="password" className="w-full border-2 border-[#333] p-1 font-bold font-hanken text-[#333]" placeholder="Password"/>
          </div>
          <div className="w-full">
            <button className="w-full py-2 font-bold font-space bg-black/80 text-white hover:py-2.5 hover:bg-black/40 transition-all duration-100 ease-in">Submit</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default AdminLogin;
