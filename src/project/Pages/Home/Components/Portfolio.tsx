const Portfolio = () => {
  return (
    <section className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our Featured Work
        </h2>
        <h3 className="text-xl font-semibold text-center mb-12">
          A selection of our recent photography projects
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <img
              key={i}
              src=""
              alt=""
              className="rounded-xl h-64 w-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
