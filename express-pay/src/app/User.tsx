'use client'
import { useState } from "react";
import Link from "next/link";
import { useFetch } from "./useFetch";

type UserType = {
  id: number;
  name: string;
};

export const User = () => {
  const { data: users, error, loading } = useFetch<UserType[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-center items-center">
      {loading ? (
        <p> Loading... </p>
      ) : (
        <div className="flex flex-col gap-4">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="border border-blue-500 p-2 rounded-md "/>
          <ul>
            {(users ?? [])
              .filter((user) =>
                user.name.toLowerCase().includes(search?.toLowerCase() || "")
              )
              .map((user) => (
                <li key={user.id}>
                  <Link href={`/${user.id}`}>
                    {user.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
      {error && <p>Error: Failed to load</p>}
    </div>
  );
}
