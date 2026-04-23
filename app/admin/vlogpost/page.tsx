import VlogsDisplay from "@/app/[components]/VlogsDisplay";
import VlogButton from "../components/VlogButton";
import { cookies } from "next/headers";

const VlogPost = async () => {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("isAdmin")?.value === "true";

  return (
    <section className="mt-10 min-h-screen space-y-4">
      <VlogButton />
      <div>
        <VlogsDisplay adminStatus={isAdmin} />
      </div>
    </section>
  );
};

export default VlogPost;
