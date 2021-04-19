import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";

import Page from "../layout/Page";
import BannerAd from "../components/BannerAd";

export default function Home() {
  return (
    <div>
      <Page>
        <BannerAd />
        <div className="bg-white shadow-md sm:shadow-lg p-2 sm:p-4 rounded-md flex space-x-2 m-auto w-full sm:w-3/4 mt-8">
          <input
            type="search"
            name="q"
            autoComplete="off"
            className="text-md mt-0 input-filter w-full"
          />
          <button type="submit" className="btn btn-primary">
            <SearchIcon className="w-6 h-6" />
          </button>
        </div>
      </Page>

      <div className="bg-white mt-12 border border-grey-200 p-2">
        <div className="container mx-auto">
          <p className="font-bold text-center sr-only">Gyártók</p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 justify-center">
            <div>
              <Link href="/motorok/honda">
                <a className="cursor-pointer" title="Honda használt motorok">
                  <Image src="/brand/honda.png" width={150} height={150} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="/motorok/yamaha">
                <a className="cursor-pointer" title="Yamaha használt motorok">
                  <Image src="/brand/yamaha.png" width={150} height={150} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="/motorok/suzuki">
                <a className="cursor-pointer" title="Suzuki használt motorok">
                  <Image src="/brand/suzuki.png" width={150} height={150} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="/motorok/aprilia">
                <a className="cursor-pointer" title="Aprilia használt motorok">
                  <Image src="/brand/aprilia.png" width={150} height={150} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="/motorok/kawasaki">
                <a className="cursor-pointer" title="Kawasaki használt motorok">
                  <Image src="/brand/kawasaki.png" width={150} height={150} />
                </a>
              </Link>
            </div>
          </div>

          <Link href="/motorok">
            <a className="flex items-baseline justify-center">
              Összes motor <ChevronDoubleRightIcon className="ml-2 w-3 h-3" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
