import ImagesDisplay from "@/app/[components]/ImagesDisplay";
import AdminButton from "../components/AdminButton";
import { cookies } from "next/headers";

const ArtGalleryPost = async () => {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("isAdmin")?.value === "true";
  
  return (
    <section className="mt-10 min-h-screen space-y-4">
      <AdminButton />
      <div>
        <ImagesDisplay adminStatus={isAdmin} />
      </div>
    </section>
  );
};

export default ArtGalleryPost;
