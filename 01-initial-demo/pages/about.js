import Link from "next/link";
import { DarkLayout } from "../layout/DarkLayout";
import { MainLayout } from "../layout/MainLayout";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={"title"}>
        {/* Ir a <a href="/">Home</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>
      <div>
        <p className={"description"}>
          Get started by editing{""}
          <code className={"code"}>pages/about.js</code>
        </p>
      </div>
    </>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
