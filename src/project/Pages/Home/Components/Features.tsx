const Features = () => {
  const features = [
    "Professional Photoshoot Sessions  ",
    "Flexible Scheduling",
    "High-Quality Delivery",
    "Custom Packages Based on Your Needs",
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-amber-600 font-extrabold">End-to-End</span>{" "}
          Creative Solutions
        </h2>
        <h3 className="text-xl font-semibold mb-12">Photography services</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-neutral-800 p-6 rounded-xl">
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
