'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { sign } from 'crypto';

interface UserData {
  username: string;
  password: string;
}

interface NewUserData {
  username: string;
  email: string;
  password: string;
}

export default function Admin() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>({
    username: '',
    password: '',
  });

  const [newUserData, setNewUserData] = useState<NewUserData>({
    username: '',
    email: '',
    password: '',
  })

  const loginUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('User data login begin: ', userData);

    signIn('credentials', {
        ...userData,
        redirect: false,
    });
    router.push('/');
  };

  const createUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newUserData);

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({newUserData})
    })

    const userInfo = await response.json();
    console.log(userInfo);
  }

  return (
    <div className="flex flex-col items-center p-4">
      <div className="text-2xl mb-2 text-center">
        Welcome back!
      </div>

      <form className="flex flex-col gap-3 w-1/2" onSubmit={loginUser}>
        <div className="block relative">
          <label className="block cursor-text text-sm leading-[140%] font-normal mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            required
            value={userData.username}
            onChange={(e) => {
              setUserData({ ...userData, username: e.target.value });
            }}
            className="text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
          />
        </div>

        <div className="block relative">
          <label className="block cursor-text text-sm leading-[140%] font-normal mb-2">
            Password
          </label>
          <input
            type="text"
            id="password"
            required
            value={userData.password}
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
            className="text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
        </div>

        <button
          type="submit"
          className="bg-gray-500 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
        >
          Submit
        </button>
      </form>

      <form className="flex flex-col gap-3 w-1/2" onSubmit={createUser}>
        <p>Create user</p>
        <div className="block relative">
          <label className="cursor-text text-sm leading-[140%] font-normal mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            required
            value={newUserData.username}
            onChange={(e) => {
              setNewUserData({ ...newUserData, username: e.target.value });
            }}
            className="text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
          />
        </div>

        <div className="block relative">
          <label className="block cursor-text text-sm leading-[140%] font-normal mb-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            required
            value={newUserData.email}
            onChange={(e) => {
              setNewUserData({ ...newUserData, email: e.target.value });
            }}
            className="text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
          />
        </div>

        <div className="block relative">
          <label className="cursor-text text-sm leading-[140%] font-normal mb-2">
            Password
          </label>
          <input
            type="text"
            id="password"
            required
            value={newUserData.password}
            onChange={(e) => {
              setNewUserData({ ...newUserData, password: e.target.value });
            }}
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
        </div>

        <button
          type="submit"
          className="bg-gray-500 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
