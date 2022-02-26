import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "@Components/Layout";
import List from "@Components/List";
import { IUser } from "../../interfaces";
import axios from "axios";
import { useState } from "react";
type Props = {
  users: IUser[] | []
}

const onSubmit = (name: string) => {
  axios.post("http://localhost:3000/api/users", { name: name }).then(() => console.log("added")).catch(() => console.log("failed"));
};

const WithStaticProps = ({ users }: Props) => {
  const [name, setName] = useState("");

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Users List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /users</p>
      <List items={users} />
      <form className='my-4'>
        <label>Add user</label>
        <input className='border border-blue-400 rounded-2xl mx-2' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button className='py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-indigo-500/50 focus:outline-none' type="submit" onClick={() => onSubmit(name)}>Submit</button>
      </form>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {

  const users: IUser[] | [] = await axios.get<IUser[]>("http://localhost:3000/api/users")
    .then((r) => r.data)
    .catch((err) => []);

  return { props: { users } };
};

export default WithStaticProps;
