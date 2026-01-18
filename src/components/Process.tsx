"use client";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We analyze your requirements and business goals to understand the scope.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Our architects design a comprehensive roadmap and technical strategy.",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop the solution using agile sprints and best coding practices.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Rigorous testing and seamless deployment to your production environment.",
  },
  {
    number: "05",
    title: "Support",
    description: "Ongoing maintenance and optimization to ensure long-term success.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h5 className="text-primary font-bold uppercase tracking-wide mb-3 text-sm">Our Process</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Deliver Excellence
          </h2>
          <p className="text-gray-600">
            A proven methodology that ensures project success from concept to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
               {/* Connector Line (Desktop) */}
               {index !== steps.length - 1 && (
                 <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-100 group-hover:bg-blue-100 transition-colors" />
               )}
               
               <div className="relative z-10 flex flex-col items-center text-center">
                 <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-xl font-bold text-gray-400 mb-6 group-hover:border-primary group-hover:text-primary transition-all duration-300">
                   {step.number}
                 </div>
                 <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                 <p className="text-sm text-gray-500 leading-relaxed px-2">
                   {step.description}
                 </p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
