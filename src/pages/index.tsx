import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Spaccarotella&apos;s Blog</title>
      </Head>

      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Image className="h-12 w-12" src="/user.jpeg" width="60" height="60" alt="User Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">Hi</div>
          <p className="text-gray-500">Welcome to my personal website</p>
        </div>
      </div>
    </>
  );
}
