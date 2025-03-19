import { siteConfig } from "@/config/site-config";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#000080] text-white py-6 px-4 border-t-4 border-[#ff0000]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-4">
          <div className="inline-block bg-[#c0c0c0] p-1 border border-t-white border-l-white border-b-[#808080] border-r-[#808080]">
            <Link href="/" className="font-bold text-xl font-['Times_New_Roman'] text-[#000080]">
              zmeyer.dev
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
          <div className="flex gap-4">
            {siteConfig.socials.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c0c0c0] text-[#000080] px-2 py-1 font-bold border border-t-white border-l-white border-b-[#808080] border-r-[#808080] hover:bg-[#d0d0d0]"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="h-4 w-px bg-white hidden md:block" />
          <div className="flex gap-4">
            <Link href="/privacy" className="text-white hover:underline font-['Arial']">
              Privacy
            </Link>
            <Link href="/terms" className="text-white hover:underline font-['Arial']">
              Terms
            </Link>
          </div>
        </div>
        <div className="text-center text-sm">
          <p className="font-['Arial']">© {new Date().getFullYear()} zmeyer.dev. All rights reserved.</p>
          <p className="mt-2 text-xs">
            <span className="font-['Arial']">Best viewed with</span>{" "}
            <span className="font-bold">Netscape Navigator</span> <span className="font-['Arial']">or</span>{" "}
            <span className="font-bold">Internet Explorer 4+</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
