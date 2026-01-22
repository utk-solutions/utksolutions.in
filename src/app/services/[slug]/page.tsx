import { notFound } from "next/navigation";
import { services } from "@/lib/data";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all services (optional, but good for SEO/Performance)
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4">
          <Link href="/#services" className="text-primary hover:text-white transition-colors mb-6 inline-block font-semibold">
            ← Back to Services
          </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-4">
            <div className="p-4 bg-white/10 rounded-xl">
              <service.icon size={48} className="text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-gray-300 max-w-2xl">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-gray-600 prose-strong:text-slate-900 prose-li:text-gray-600"
            dangerouslySetInnerHTML={{ __html: service.details }}
          />
          
          <div className="mt-16 pt-8 border-t border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Ready to get started?</h3>
            <Link 
              href="/#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us About {service.title}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
