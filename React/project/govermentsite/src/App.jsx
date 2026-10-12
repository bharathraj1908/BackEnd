
import { useState } from "react";
import {
  Search,
  ArrowRight,
  FileText,
  ShieldCheck,
  Users,
  Droplets,
  Zap,
  Construction,
  House,
  HeartPulse,
  GraduationCap,
  Leaf,
  MessageCircle,
  Menu,
  X,
  ChartNoAxesColumn,
  ChevronRight,
  PlayCircle,
  Landmark,
  ClipboardCheck,
  Clock,
  Headphones,
} from "lucide-react";

const departments = [
  {
    name: "Water Supply & Sanitation",
    icon: Droplets,
    color: "text-sky-500",
  },
  {
    name: "Electricity",
    icon: Zap,
    color: "text-amber-400",
  },
  {
    name: "Roads & Public Works",
    icon: Construction,
    color: "text-blue-800",
  },
  {
    name: "Housing & Urban Development",
    icon: House,
    color: "text-green-600",
  },
  {
    name: "Health & Medical Services",
    icon: HeartPulse,
    color: "text-blue-500",
  },
  {
    name: "Education",
    icon: GraduationCap,
    color: "text-blue-600",
  },
  {
    name: "Environment & Forests",
    icon: Leaf,
    color: "text-green-600",
  },
  {
    name: "Other Services",
    icon: MessageCircle,
    color: "text-violet-600",
  },
];

const features = [
  {
    title: "Register a Grievance",
    description: "Submit your issue in a few simple steps.",
    icon: FileText,
    color: "text-blue-700",
    bg: "bg-sky-100",
    link: "#register",
  },
  {
    title: "Track Your Grievance",
    description: "Check the status anytime, anywhere.",
    icon: Search,
    color: "text-emerald-700",
    bg: "bg-emerald-100",
    link: "#track",
  },
  {
    title: "Get Resolution",
    description: "We ensure timely action and updates.",
    icon: ShieldCheck,
    color: "text-violet-700",
    bg: "bg-violet-100",
    link: "#track",
  },
  {
    title: "Better Governance",
    description: "Together for a transparent and responsive government.",
    icon: Users,
    color: "text-orange-600",
    bg: "bg-orange-100",
    link: "#about",
  },
];

const impactStats = [
  {
    number: "1.2 Lakh+",
    label: "Grievances Resolved",
    color: "text-emerald-700",
  },
  {
    number: "98%",
    label: "Resolution Rate",
    color: "text-blue-600",
  },
  {
    number: "3.5 Days",
    label: "Avg. Resolution Time",
    color: "text-violet-700",
  },
  {
    number: "24×7",
    label: "Support & Assistance",
    color: "text-orange-600",
  },
];

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [grievance, setGrievance] = useState("");
  const [trackingId, setTrackingId] = useState("");
  const [showTracking, setShowTracking] = useState(false);

  const handleRegister = () => {
    if (!grievance.trim()) {
      alert("Please enter your grievance details.");
      return;
    }

    sessionStorage.setItem("grievanceDraft", grievance);
    window.location.href = "/register";
  };

  const handleDepartment = (department) => {
    sessionStorage.setItem("selectedDepartment", department);
    window.location.href = "/register";
  };

  const handleTrack = () => {
    if (!trackingId.trim()) {
      alert("Please enter your grievance reference ID.");
      return;
    }

    alert(`Tracking grievance: ${trackingId}`);
  };

  const navLinks = [
    ["Home", "#home"],
    ["Register Grievance", "#register"],
    ["Track Status", "#track"],
    ["Departments", "#departments"],
    ["FAQs", "#faqs"],
    ["About Us", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* HEADER */}

      <header className="relative z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-5 py-4 lg:px-12">

          {/* LOGO */}

          <a
            href="#home"
            className="flex shrink-0 items-center gap-3"
          >
            <div className="flex h-16 w-12 flex-col items-center justify-center text-blue-900">
              <Landmark size={38} strokeWidth={1.5} />
              <span className="mt-1 text-[9px] font-bold">
                सत्यमेव जयते
              </span>
            </div>

            <div>
              <p className="text-xs font-medium text-slate-500 sm:text-sm">
                Government of India
              </p>

              <h2 className="whitespace-nowrap text-lg font-bold leading-tight text-[#18345a] sm:text-2xl">
                Public Grievance Portal
              </h2>

              <p className="mt-1 text-xs tracking-wide text-slate-500 sm:text-sm">
                Your Voice <span className="px-2">|</span> Our Priority
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden items-center gap-5 xl:flex 2xl:gap-7">
            {navLinks.map(([name, link], index) => (
              <a
                key={name}
                href={link}
                className={`whitespace-nowrap border-b-2 py-3 text-sm transition ${
                  index === 0
                    ? "border-blue-600 font-semibold text-blue-700"
                    : "border-transparent text-slate-700 hover:border-blue-500 hover:text-blue-700"
                }`}
              >
                {name}
              </a>
            ))}
          </nav>

          {/* HEADER BUTTONS */}

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <button
              aria-label="Search"
              className="rounded-full p-3 text-slate-700 transition hover:bg-blue-50"
            >
              <Search size={21} />
            </button>

            <a
              href="/login"
              className="rounded-lg border border-blue-600 px-6 py-3 text-sm font-medium text-blue-700 transition hover:bg-blue-50"
            >
              Login
            </a>

            <a
              href="/signup"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Sign Up
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 xl:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}

        {menuOpen && (
          <div className="absolute left-0 top-full w-full border-t bg-white px-5 py-4 shadow-xl xl:hidden">
            <nav className="flex flex-col">
              {navLinks.map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 hover:text-blue-600"
                >
                  {name}
                </a>
              ))}

              <div className="mt-4 flex gap-3">
                <a
                  href="/login"
                  className="flex-1 rounded-lg border border-blue-600 py-3 text-center text-sm text-blue-700"
                >
                  Login
                </a>

                <a
                  href="/signup"
                  className="flex-1 rounded-lg bg-blue-600 py-3 text-center text-sm text-white"
                >
                  Sign Up
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}

      <section
        id="home"
        className="relative isolate min-h-[420px] overflow-hidden bg-[#e9f4ff] lg:min-h-[390px]"
      >
        {/* Background image */}

        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        {/* Image overlay */}

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-50 via-sky-50/95 to-sky-50/30" />

        <div className="mx-auto flex min-h-[420px] max-w-[1600px] items-center px-5 py-12 lg:min-h-[390px] lg:px-12">
          <div className="w-full max-w-3xl">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-medium text-blue-800 sm:text-sm">
              <ShieldCheck size={16} />
              A Citizen Centric Initiative
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#18345a] sm:text-4xl lg:text-5xl">
              Share Your Concerns
              <br />

              <span className="text-blue-600">
                Help Us Build a Better Tomorrow
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              The Government of India is committed to addressing your
              grievances and ensuring a more responsive and transparent
              administration.
            </p>

            {/* GRIEVANCE SEARCH */}

            <div
              id="register"
              className="mt-7 flex flex-col gap-2 rounded-xl border border-blue-100 bg-white p-2 shadow-lg shadow-blue-900/10 sm:flex-row sm:items-center"
            >
              <Search
                className="ml-3 hidden shrink-0 text-blue-900 sm:block"
                size={22}
              />

              <input
                type="text"
                value={grievance}
                onChange={(e) => setGrievance(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleRegister()
                }
                placeholder="Enter your grievance details (e.g. water supply, electricity, road, etc.)"
                className="min-w-0 flex-1 rounded-lg px-3 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />

              <button
                onClick={handleRegister}
                className="flex shrink-0 items-center justify-center gap-3 rounded-lg bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Submit Grievance
                <ArrowRight size={18} />
              </button>
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("features")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="mt-5 flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-blue-700"
            >
              <PlayCircle size={22} className="text-blue-600" />
              How it works?
              <span className="text-blue-600">Watch Video</span>
            </button>
          </div>
        </div>

        {/* FLOATING HERO CARD */}

        <div className="absolute bottom-7 right-10 hidden max-w-[320px] items-center gap-4 rounded-xl border border-white/30 bg-white/95 p-5 shadow-xl backdrop-blur-md xl:flex">
          <Users size={42} className="shrink-0 text-blue-800" />

          <div>
            <h3 className="font-bold text-[#18345a]">
              Your Grievance Matters
            </h3>

            <p className="mt-1 text-sm leading-5 text-slate-600">
              We are here to listen, resolve and create a better tomorrow for you.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ACTION FEATURES */}

      <section
        id="features"
        className="mx-auto grid max-w-[1600px] grid-cols-1 gap-4 bg-white px-5 py-7 sm:grid-cols-2 lg:grid-cols-4 lg:px-12"
      >
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <a
              key={feature.title}
              href={feature.link}
              className="group flex items-center gap-4 rounded-xl border border-slate-100 p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${feature.bg} ${feature.color}`}
              >
                <Icon size={32} strokeWidth={1.8} />
              </div>

              <div className="flex-1">
                <h3 className="text-base font-bold text-[#18345a]">
                  {feature.title}
                </h3>

                <p className="mt-1 text-sm leading-5 text-slate-500">
                  {feature.description}
                </p>
              </div>

              <ArrowRight
                size={18}
                className="hidden text-blue-600 transition group-hover:translate-x-1 sm:block"
              />
            </a>
          );
        })}
      </section>

      {/* DEPARTMENT SECTION */}

      <section
        id="departments"
        className="bg-slate-50 px-5 py-10 lg:px-12"
      >
        <div className="mx-auto max-w-[1500px]">

          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                Browse by Department
              </p>

              <h2 className="text-2xl font-bold text-[#18345a] sm:text-3xl">
                Find the Right Department
              </h2>

              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                Select a department to raise a grievance related to your issue.
              </p>
            </div>

            <a
              href="/departments"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900"
            >
              View All Departments
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8">
            {departments.map((department) => {
              const Icon = department.icon;

              return (
                <button
                  key={department.name}
                  onClick={() => handleDepartment(department.name)}
                  className="group relative flex min-h-[145px] flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-white px-3 py-5 text-center transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
                >
                  <Icon
                    size={38}
                    strokeWidth={2}
                    className={department.color}
                  />

                  <h3 className="text-sm font-medium leading-5 text-[#18345a]">
                    {department.name}
                  </h3>

                  <ChevronRight
                    size={18}
                    className="absolute bottom-3 right-3 text-blue-800 transition group-hover:translate-x-1"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRACK GRIEVANCE */}

      <section id="track" className="bg-white px-5 py-12 lg:px-12">
        <div className="mx-auto max-w-[1500px] rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-6 sm:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-blue-100 p-4 text-blue-700">
                <ClipboardCheck size={32} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Grievance Status
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#18345a]">
                  Track Your Grievance
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  Already submitted a complaint? Check your grievance
                  status using your unique reference number.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowTracking(!showTracking)}
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Track Now
              <ArrowRight size={18} />
            </button>
          </div>

          {showTracking && (
            <div className="mt-7 flex flex-col gap-3 border-t border-blue-100 pt-6 sm:flex-row">
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter your grievance reference ID"
                className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <button
                onClick={handleTrack}
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Check Status
              </button>
            </div>
          )}
        </div>
      </section>

      {/* IMPACT STATISTICS */}

      <section
        id="about"
        className="bg-gradient-to-r from-blue-50 to-sky-100 px-5 py-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-[1500px] grid-cols-2 items-center gap-y-8 lg:grid-cols-5">

          <div className="col-span-2 flex items-center gap-4 lg:col-span-1">
            <ChartNoAxesColumn
              size={42}
              className="shrink-0 text-blue-600"
            />

            <div>
              <h2 className="text-xl font-bold text-[#18345a]">
                Our Impact
              </h2>

              <p className="mt-2 text-sm leading-5 text-slate-500">
                Building a responsive government, one grievance at a time.
              </p>
            </div>
          </div>

          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="border-l border-blue-200 px-4 text-center lg:text-left"
            >
              <h3 className={`text-xl font-bold sm:text-2xl ${stat.color}`}>
                {stat.number}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}

      <section id="faqs" className="bg-white px-5 py-12 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-[#18345a] sm:text-3xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-center text-sm text-slate-500">
            Quick answers to common questions about grievance registration.
          </p>

          <div className="mt-8 space-y-3">
            {[
              {
                q: "How do I submit a grievance?",
                a: "Select the relevant department, describe your issue, and provide the required contact details on the registration page.",
              },
              {
                q: "How can I track my complaint?",
                a: "Use the unique reference ID provided after submitting your grievance to check its status.",
              },
              {
                q: "Can I submit a grievance without an account?",
                a: "Account and identity requirements depend on the actual government service and its applicable rules.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-slate-200 p-5"
              >
                <summary className="cursor-pointer list-none font-semibold text-[#18345a] marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {faq.q}
                    <ChevronRight
                      size={20}
                      className="shrink-0 text-blue-600 transition group-open:rotate-90"
                    />
                  </span>
                </summary>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer
        id="contact"
        className="bg-[#142e50] px-5 py-8 text-white lg:px-12"
      >
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-6 md:flex-row md:items-center">

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
            <Landmark size={28} />
            <span>Government of India</span>

            <span className="hidden text-slate-500 sm:inline">|</span>

            <span className="text-slate-300">
              Public Grievance Portal
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-300 sm:text-sm">
            <a href="#privacy" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#terms" className="hover:text-white">
              Terms & Conditions
            </a>

            <a href="#faqs" className="hover:text-white">
              Help
            </a>

            <a href="#contact" className="flex items-center gap-2 hover:text-white">
              <Headphones size={16} />
              Contact Us
            </a>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-[1500px] border-t border-white/10 pt-5 text-center text-xs text-slate-400">
          © 2026 Public Grievance Portal. Educational project prototype.
        </div>
      </footer>
    </div>
  );
};



export default App;