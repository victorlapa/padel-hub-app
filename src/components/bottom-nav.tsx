import { Home, Users, User } from "lucide-react";
import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="border-t border-gray-200 bg-white px-4 py-2">
      <div className="mx-auto flex max-w-md items-center justify-around">
        <Link
          href="/"
          className="flex flex-col items-center gap-1 p-2 text-gray-600 transition-colors hover:text-blue-600"
        >
          <Home size={24} />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href="/lobby"
          className="flex flex-col items-center gap-1 p-2 text-gray-600 transition-colors hover:text-blue-600"
        >
          <Users size={24} />
          <span className="text-xs">Match</span>
        </Link>
        <Link
          href="/profile"
          className="flex flex-col items-center gap-1 p-2 text-gray-600 transition-colors hover:text-blue-600"
        >
          <User size={24} />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </nav>
  );
}
