import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative">
      {/* do not use bg-opacity-# when styling an image that is full wid/height, just use opacity-# */}
      <Image
        className="h-screen w-full object-cover opacity-70 "
        src="/myroad.jpeg"
        width={500}
        height={500}
        alt="road background image"
      />
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
