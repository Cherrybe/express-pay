'use client'

import React from 'react'
import { useFetch } from './useFetch';

type UserType = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export const Details = ({id}: { id: number }) => {
  const { data: user, error, loading } = useFetch<UserType>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Error: {error}</p>;
  } else {
    content = (
      <div>
        <h2>{user?.name}</h2>
        <p>Email: {user?.email}</p>
        <p>Phone: {user?.phone}</p>
      </div>
    );
  }

  return (
    <div>
      {content}
    </div>
  );
};

