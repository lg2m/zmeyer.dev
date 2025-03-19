import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <SiteHeader />
      <main>
        <section className="bg-[#000080] text-white py-8 px-4 border-t-4 border-b-4 border-[#ff0000]">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 font-['Times_New_Roman']">
                Welcome to my little slice of the internet
              </h1>
              <p className="text-lg mb-6 max-w-2xl mx-auto font-['Arial']">
                A collection of thoughts, tutorials, and random musings about software development, security, and
                probably many other things.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/about"
                  className="bg-[#00ff00] text-black px-4 py-2 font-bold border-2 border-black hover:bg-[#00cc00]"
                >
                  about me
                </Link>
                <Link
                  href="/blog"
                  className="bg-[#ff0000] text-white px-4 py-2 font-bold border-2 border-black hover:bg-[#cc0000]"
                >
                  read blog
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <table className="mx-auto">
                <tbody>
                  <tr>
                    <td className="bg-[#ffff00] px-4 py-2 border-2 border-black">
                      <h2 className="text-2xl font-bold font-['Times_New_Roman']">recent posts</h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-block bg-[#ff9900] text-black px-4 py-2 font-bold border-2 border-black hover:bg-[#ff8800]"
              >
                view all posts
              </Link>
            </div>
          </div>
        </section>

        <section className="py-8 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <div className="flex justify-center">
              <div className="bg-[#000000] text-[#00ff00] font-['Courier_New'] p-4 max-w-md text-left">
                <p className="mb-2">
                  {">"} Last updated: {new Date().toLocaleDateString()}
                </p>
                <p>{">"} Check back soon for updates...</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-4 px-4 text-center">
          <div className="inline-block bg-black p-1">
            <div className="flex items-center gap-1 bg-[#c0c0c0] px-2 py-1 border border-t-white border-l-white border-b-[#808080] border-r-[#808080]">
              <span className="text-xs font-['Arial'] mr-2">Visitors:</span>
              <span className="bg-black text-[#ff0000] font-['Digital'] px-1 font-mono">0</span>
              <span className="bg-black text-[#ff0000] font-['Digital'] px-1 font-mono">0</span>
              <span className="bg-black text-[#ff0000] font-['Digital'] px-1 font-mono">0</span>
              <span className="bg-black text-[#ff0000] font-['Digital'] px-1 font-mono">4</span>
              <span className="bg-black text-[#ff0000] font-['Digital'] px-1 font-mono">2</span>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
