import { GetStaticProps, GetStaticPaths } from "next";

import { IUpgrade, IUser } from "../../interfaces";
import Layout from "@Components/Layout";
import axios from "axios";
import ListDetail from "@Components/ListDetail";
import { supabase } from "../../utils/supabaseClient";

type Props = {
  user?: IUser
  upgrade?: IUpgrade;
  errors?: string
}

const StaticPropsDetail = ({ user, upgrade, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        user ? user.name : "User Detail"
      } | Next.js + TypeScript Example`}
    >
      {user && <ListDetail user={user} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  //TODO get static paths https://github.com/dijonmusters/build-a-saas-with-next-js-supabase-and-stripe/blob/master/18-query-dynamic-supabase-data-in-static-pages-using-next-js/pages/%5Bid%5D.js
  const { data: users } = await supabase.from("users").select("id");

  const paths = users.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const { data: user } = await supabase.from("users").select("*").match({ id: id }).single();
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { user } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
