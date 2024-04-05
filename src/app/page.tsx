import Image from "next/image";
// import function to register Swiper custom elements
import Features from "@/components/Features.tsx";
export default function Home() {
  return (
    <main className="relative">
      {/* do not use bg-opacity-# when styling an image that is full wid/height, just use opacity-# */}

      <Image
        className="h-screen w-full object-cover object-left overflow-hidden relative opacity-80"
        src="/summerroad.jpeg" //?? change source to change initial b
        width={500}
        height={500}
        sizes="(100vw, 100vh)"
        alt="road background image"
      />
      {/*//??  Destinary Text Absolute Postitioning? */}
      {/* Destinary Main Text */}
      <div
        className="absolute top-20
           left-0 right-20 bottom-0 flex flex-col items-center"
      >
        {/* Heading - Title */}
        <h1 className="font-satisfyregular text-7xl">Destinary</h1>
        {/* Subheading "Your Destin..." */}
        <h4 className="font-nunito font-normal text-xl ps-20 pt-2">
          Your Destination Itinerary
        </h4>
      </div>
      <section>
        <Features />
      </section>
    </main>
  );
}
