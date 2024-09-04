export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 bg-gray-600 py-20">
      <h1 className="font-title text-white">Hero Section</h1>
      <h2 className="font-inter text-white">Subheading</h2>
      <a
        className="rounded-md border-4 border-black bg-white py-3 px-8 text-xl text-emerald-500  hover:bg-white/80 hover:text-emerald-500"
        href="#"
      >
        Call To Action
      </a>
    </section>
  );
}
