import { redirect } from "next/navigation";

export default function Home() {
  const redirectToLanguage = () => {
    redirect("/it");
  };

  redirectToLanguage();

  return <></>;
}
