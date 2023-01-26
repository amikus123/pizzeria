import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "../utils/api";
import Cover from "../components/layout/Cover";
import Gallery from "../components/pages/Landing/sections/LandingGallery";
import BestOffers from "../components/pages/Landing/sections/LandingBestOffers";
import Hero from "../components/pages/Landing/sections/LandingHero";
import SecondHero from "../components/pages/Landing/sections/LandingSecondHero";
import Location from "../components/pages/Landing/sections/LandingLocation";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Hero />
        <Cover url="/pizza-bg.jpg" alt="Pizza" isLanding />
      </div>
      <div className="flex flex-col">
        <Location />
        <SecondHero />
        <BestOffers />
        <Gallery />
      </div>
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
