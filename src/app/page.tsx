import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <div className="">
        {/* Unable to get opacity to work */}
        <img
          className="h-screen w-full object-cover bg-opacity-5 "
          src="/myroad.jpeg"
        ></img>
      </div>

      <section>
        <h2>Features</h2>Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Velit odit quos fuga sint iure dolor similique nesciunt totam,
        fugiat incidunt blanditiis, harum non maiores laudantium tenetur nulla
        commodi quae in?
      </section>
    </main>
  );
}
