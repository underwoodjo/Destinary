import Image from 'next/image';
// import function to register Swiper custom elements

export default function Home() {
  return (
    <main className="relative">
      {/* do not use bg-opacity-# when styling an image that is full wid/height, just use opacity-# */}

      <Image
        className="h-screen w-full object-cover opacity-80 relative"
        src="/myroad.jpeg" //?? change source to change initial b
        width={500}
        height={500}
        alt="road background image"
      />
      {/*//??  Destinary Text Absolute Postitioning? */}
      {/* Destinary Main Text */}
      <div
        className="absolute top-20
           left-0 right-20 bottom-0 flex flex-col items-center"
      >
        {/* Heading - Title */}
        <h1 className="font-'Satisfy-Regular' text-5xl">Destinary</h1>
        {/* Subheading "Your Destin..." */}
        <h4 className="ps-4">Your Destination Itinerary</h4>
      </div>

      <section>
        <h2>Features</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit
          quos fuga sint iure dolor similique nesciunt totam, fugiat incidunt
          blanditiis, harum non maiores laudantium tenetur nulla commodi quae
          in?
        </p>
      </section>
    </main>
  );
}
