import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";
import { certificates } from "./constants";

// Inline Certificates page (can be moved to src/pages/Certificates.jsx later)
const Certificates = () => (
  <section className='max-container padding-x padding-y'>
    <h1 className='head-text'>Certificates & Achievements</h1>
    <p className='mt-3 text-slate-600'>A selection of my certifications and notable achievements.</p>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
      {certificates.map((c, idx) => (
        <article key={idx} className='neo-brutalism-white p-4 rounded flex flex-col gap-3'>
          {c.imageUrl && (
            <img src={c.imageUrl} alt={c.title} className='w-full h-40 object-contain bg-white rounded' />
          )}
          <div>
            <h3 className='font-semibold'>{c.title}</h3>
            <p className='text-sm text-slate-600'>
              {c.issuer}{c.year ? ` • ${c.year}` : ""}
            </p>
            {c.verifyId && (
              <p className='text-xs text-slate-500 mt-1'>Verify ID: {c.verifyId}</p>
            )}
            {c.verifyUrl && (
              <a className='text-blue-600 underline mt-2 inline-block' href={c.verifyUrl} target='_blank' rel='noreferrer'>
                View credential
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<><About /><Footer /></>} />
          <Route path='/projects' element={<><Projects /><Footer /></>} />
          <Route path='/certificates' element={<><Certificates /><Footer /></>} />
          <Route path='/contact' element={<><Contact /><Footer /></>} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
