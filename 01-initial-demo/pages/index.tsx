import Link from "next/link";
import { MainLayout } from "../layout/MainLayout";


export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
        <h1>
          {/* Ir a <a href="/about">About</a> */}
          Ir a <Link href="/about">About</Link>
        </h1>
        <div>
          <p className={'description'}>
            Get started by editing{''}
            <code className={'code'}>pages/index.js</code>
          </p>
        </div>
    </MainLayout>
  );
}
