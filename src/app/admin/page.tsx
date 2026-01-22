"use client";

import { useState, useEffect } from "react";
import { Submission, ContactSubmission, ConsultationSubmission } from "@/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "contact" | "consultation">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/submissions");
      const data = await response.json();
      
      if (data.success) {
        setSubmissions(data.submissions);
      }
    } catch (error) {
      console.error("Error fetching submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredSubmissions = submissions.filter((sub) => {
    if (filter !== "all" && sub.type !== filter) return false;
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        sub.name.toLowerCase().includes(query) ||
        sub.email.toLowerCase().includes(query) ||
        (sub.company && sub.company.toLowerCase().includes(query))
      );
    }
    
    return true;
  });

  const stats = {
    total: submissions.length,
    contact: submissions.filter((s) => s.type === "contact").length,
    consultation: submissions.filter((s) => s.type === "consultation").length,
    today: submissions.filter((s) => {
      const today = new Date().toDateString();
      return new Date(s.timestamp).toDateString() === today;
    }).length,
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Admin Dashboard
            </h1>
            <p className="text-xl text-gray-600">
              Manage and review all form submissions
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="text-3xl font-bold text-primary mb-2">{stats.total}</div>
              <div className="text-gray-600 font-medium">Total Submissions</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="text-3xl font-bold text-cyan-600 mb-2">{stats.contact}</div>
              <div className="text-gray-600 font-medium">Contact Forms</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="text-3xl font-bold text-teal-600 mb-2">{stats.consultation}</div>
              <div className="text-gray-600 font-medium">Consultations</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stats.today}</div>
              <div className="text-gray-600 font-medium">Today's Submissions</div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Filter Tabs */}
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    filter === "all"
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All ({stats.total})
                </button>
                <button
                  onClick={() => setFilter("contact")}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    filter === "contact"
                      ? "bg-cyan-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Contact ({stats.contact})
                </button>
                <button
                  onClick={() => setFilter("consultation")}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    filter === "consultation"
                      ? "bg-teal-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Consultation ({stats.consultation})
                </button>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-80 px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Refresh Button */}
              <button
                onClick={fetchSubmissions}
                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh
              </button>
            </div>
          </div>

          {/* Submissions List */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            </div>
          ) : filteredSubmissions.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-12 text-center border border-gray-100">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Submissions Found</h3>
              <p className="text-gray-500">There are no submissions matching your criteria yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredSubmissions.map((submission) => (
                <SubmissionCard
                  key={submission.id}
                  submission={submission}
                  isExpanded={expandedId === submission.id}
                  onToggle={() => setExpandedId(expandedId === submission.id ? null : submission.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Submission Card Component
function SubmissionCard({
  submission,
  isExpanded,
  onToggle,
}: {
  submission: Submission;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const isContact = submission.type === "contact";
  const date = new Date(submission.timestamp);

  const copyEmail = () => {
    navigator.clipboard.writeText(submission.email);
    alert("Email copied to clipboard!");
  };

  return (
    <div className={`bg-white rounded-xl shadow-md border-2 transition-all ${
      isContact ? "border-cyan-200" : "border-teal-200"
    }`}>
      {/* Header */}
      <div
        className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                isContact
                  ? "bg-cyan-100 text-cyan-700"
                  : "bg-teal-100 text-teal-700"
              }`}>
                {isContact ? "Contact Form" : "Consultation Booking"}
              </span>
              <span className="text-sm text-gray-500">
                {date.toLocaleDateString()} at {date.toLocaleTimeString()}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {submission.name}
            </h3>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {submission.email}
              </div>
              {submission.company && (
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {submission.company}
                </div>
              )}
            </div>
          </div>

          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg
              className={`w-6 h-6 transition-transform ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
          <div className="space-y-4">
            {!isContact && (
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1 block">Service</label>
                  <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900">
                    {(submission as ConsultationSubmission).service}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1 block">Preferred Date & Time</label>
                  <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900">
                    {new Date((submission as ConsultationSubmission).date).toLocaleString()}
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">
                {isContact ? "Message" : "Project Details"}
              </label>
              <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900 whitespace-pre-wrap">
                {submission.message}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={copyEmail}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                Copy Email
              </button>
              <a
                href={`mailto:${submission.email}`}
                className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
