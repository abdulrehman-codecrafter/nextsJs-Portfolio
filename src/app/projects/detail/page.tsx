import { ArrowUpRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectDetail() {
  return (
    <div className="min-h-screen  p-8 md:p-16 lg:p-24">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl md:text-5xl ">Currencee</h1>
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2 ">
              <span>Live URL</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="#" className="flex items-center gap-2 ">
              <span>GitHub</span>
              <Github className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Preview Image */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/assets/images/food-project.png"
            alt="Currencee App Preview"
            width={900}
            height={600}
            className="w-1/2 mx-auto"
          />
        </div>

        {/* Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl ">Overview</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Currencee is a user-friendly and reliable currency converter app designed to provide seamless currency
            conversion operations. With Currencee, you can effortlessly convert top leading currencies like{" "}
            <span className="">USD</span>, <span className="">GBP</span>,
            <span className="">EUR</span>, <span className="">INR</span>, and many more.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Powered by the{" "}
            <Link href="#" className="text-blue-400 hover:underline inline-flex items-center">
              CurrencyBeacon API <ArrowUpRight className="w-4 h-4" />
            </Link>
            , Currencee supports over 161 world currencies covering 99% of all UN-recognized states and territories.
          </p>
        </section>

        {/* Technologies */}
        <section className="space-y-4">
          <h2 className="text-2xl ">Technologies</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="#" className="inline-flex items-center hover">
                React <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>{" "}
              (Vite)
            </li>
            <li>
              <Link href="#" className="inline-flex items-center hover">
                Node.js <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>
            </li>
            <li>Vanilla CSS</li>
            <li>JavaScript</li>
            <li>
              <Link href="#" className="inline-flex items-center hover">
                Umami <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>{" "}
              Analytics
            </li>
          </ul>
        </section>

        {/* Features */}
        <section className="space-y-4">
          <h2 className="text-2xl  flex items-center gap-2">
            <span className="text-gray-400">#</span> Features
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Originally built two years ago when I first learned HTML, CSS, and JavaScript, Currencee initially supported
            just 5 currency pairs and had limited API allowance of 512 conversions per month. With the recent updates
            and rebranding, here are the current features:
          </p>
          <ul className="space-y-2 text-gray-400 list-disc pl-5">
            <li>
              Over <span className="">160</span> currencies available for conversion
            </li>
            <li>Modern tooling in React and CSS</li>
            <li>
              Implemented an API proxy using Node.js/Express to secure API keys and provide endpoints for fetching
              currency data.
            </li>
            <li>Cross-browser compatible across numerous devices.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

