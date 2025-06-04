import bannerImg from "/img/hero.jpg";

export default function Banner() {
  return (
    <section className="relative h-56 w-full overflow-hidden rounded-lg md:h-72 lg:h-80">
      <img
        src={bannerImg}
        alt="Banner"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Portafolio • Soluciones a tu medida
        </h1>
        <p className="mt-2 max-w-2xl text-sm sm:text-base">
          Explora nuestros proyectos como si fueran productos en un e-commerce.
        </p>
      </div>
    </section>
  );
}