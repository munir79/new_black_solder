'use client"';
// import { Spinner } from "./ui/shadcn-io/spinner";
import { useRouter } from "next/navigation";
import { useAuth } from "./hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <h3> Loading--</h3>
      </div>
    );
  }
  return <>{user?.role === "admin" ? children : router.replace("/sign-in")}</>;
};

