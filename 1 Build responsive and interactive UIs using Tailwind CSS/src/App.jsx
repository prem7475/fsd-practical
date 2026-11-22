const student = {
  name: "Alex Morgan",
  course: "BSc Computer Science",
  year: "Year 2",
  email: "alex.morgan@example.com",
  interests: ["Web development", "Reading", "Photography"],
};

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10 text-slate-800">
      <article className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-lg shadow-slate-200">
        <div
          aria-hidden="true"
          className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100 text-3xl font-bold text-indigo-700"
        >
          AM
        </div>
        <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Student Profile
        </p>
        <h1 className="text-2xl font-bold">{student.name}</h1>
        <p className="mt-2 text-slate-600">{student.course}</p>
        <span className="mt-3 inline-block rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
          {student.year}
        </span>
        <a
          className="mt-5 block break-all text-sm text-indigo-700 underline decoration-indigo-200 underline-offset-4 hover:text-indigo-900"
          href={`mailto:${student.email}`}
        >
          {student.email}
        </a>
        <section className="mt-7 border-t border-slate-100 pt-5 text-left">
          <h2 className="mb-3 text-sm font-semibold text-slate-700">Interests</h2>
          <ul className="flex flex-wrap gap-2">
            {student.interests.map((interest) => (
              <li
                className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                key={interest}
              >
                {interest}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
