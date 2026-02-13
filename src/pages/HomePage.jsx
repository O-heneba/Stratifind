import React from 'react';

const HomePage = () => {
  return (
    <div style={{ minHeight: '100vh', fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', backgroundColor: '#f8fafc', color: '#0f172a' }}>
      
      {/* Navigation */}
      

      {/* Hero Section */}
      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1280px', margin: '0 auto', padding: '3.5rem 2rem 2rem', flexWrap: 'wrap', gap: '2rem' }}>
        
        {/* Left side */}
        <div style={{ flex: '1 1 450px' }}>
          <span style={{ display: 'inline-block', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#2563eb', padding: '0.3rem 1rem', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1rem', border: '1px solid rgba(37, 99, 235, 0.2)' }}>⚡ AI-Powered Job Matching</span>
          <h1 style={{ fontSize: '3.3rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
            Find your <span style={{ color: '#2563eb', position: 'relative' }}>strata</span><br />
            of opportunity.
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#475569', marginBottom: '2rem', lineHeight: '1.6' }}>
            Stratifind uses smart algorithms to uncover the best-fit roles, 
            company culture, and career growth—tailored just for you.
          </p>
          
          {/* Search Bar */}
          <div style={{ display: 'flex', backgroundColor: 'white', borderRadius: '50px', padding: '0.4rem', boxShadow: '0 8px 20px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0', maxWidth: '700px', marginBottom: '2rem' }}>
            <input 
              type="text" 
              placeholder="Job title, skill, or company" 
              style={{ flex: 1, padding: '1rem 1.5rem', border: 'none', outline: 'none', fontSize: '1rem', background: 'transparent' }}
            />
            <button style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '0.8rem 2rem', borderRadius: '50px', fontWeight: '600', fontSize: '1rem', cursor: 'pointer' }}>Search</button>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '2.5rem', marginTop: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a' }}>45k+</span>
              <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Jobs</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a' }}>12k</span>
              <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Companies</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a' }}>2.5k</span>
              <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Placements</span>
            </div>
          </div>
        </div>

        {/* Right side - Job Card */}
        <div style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div style={{ backgroundColor: 'white', padding: '1.8rem', borderRadius: '28px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', border: '1px solid #f1f5f9', width: '100%', maxWidth: '360px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
              <span style={{ backgroundColor: '#f1f5f9', padding: '0.4rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600' }}>✨ Top match</span>
              <span style={{ fontSize: '1.4rem' }}>🏢</span>
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.3rem' }}>Senior Frontend</div>
            <div style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.2rem' }}>🔹 Stratifind • Remote (US)</div>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.8rem' }}>
              <span style={{ backgroundColor: '#f1f5f9', padding: '0.3rem 1rem', borderRadius: '30px', fontSize: '0.8rem', color: '#334155' }}>React</span>
              <span style={{ backgroundColor: '#f1f5f9', padding: '0.3rem 1rem', borderRadius: '30px', fontSize: '0.8rem', color: '#334155' }}>TypeScript</span>
              <span style={{ backgroundColor: '#f1f5f9', padding: '0.3rem 1rem', borderRadius: '30px', fontSize: '0.8rem', color: '#334155' }}>Tailwind</span>
            </div>
            <div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '0.6rem 1rem', borderRadius: '40px', fontWeight: '600', fontSize: '0.9rem', display: 'inlineBlock' }}>
              ⚡ 94% match · apply now
            </div>
            <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '1.2rem', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
              Based on your profile: 5 years experience, lead projects
            </p>
          </div>
        </div>
      </section>

      {/* Browse Categories */}
      <section style={{ maxWidth: '1280px', margin: '2rem auto', padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Explore by category</h2>
        <p style={{ color: '#475569', marginBottom: '1rem' }}>Find your next role in these popular fields</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.8rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          
          <div style={{ backgroundColor: 'white', padding: '1.8rem 1.5rem', borderRadius: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0', flex: '0 1 160px' }}>
            <div style={{ fontSize: '2.2rem', marginBottom: '0.7rem' }}>💻</div>
            <div style={{ fontWeight: '600', marginBottom: '0.3rem' }}>Engineering</div>
            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>2,341 jobs</div>
          </div>
          
          <div style={{ backgroundColor: 'white', padding: '1.8rem 1.5rem', borderRadius: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0', flex: '0 1 160px' }}>
            <div style={{ fontSize: '2.2rem', marginBottom: '0.7rem' }}>📊</div>
            <div style={{ fontWeight: '600', marginBottom: '0.3rem' }}>Data Science</div>
            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>892 jobs</div>
          </div>
          
          <div style={{ backgroundColor: 'white', padding: '1.8rem 1.5rem', borderRadius: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0', flex: '0 1 160px' }}>
            <div style={{ fontSize: '2.2rem', marginBottom: '0.7rem' }}>🎨</div>
            <div style={{ fontWeight: '600', marginBottom: '0.3rem' }}>Design</div>
            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>654 jobs</div>
          </div>
          
          <div style={{ backgroundColor: 'white', padding: '1.8rem 1.5rem', borderRadius: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0', flex: '0 1 160px' }}>
            <div style={{ fontSize: '2.2rem', marginBottom: '0.7rem' }}>📈</div>
            <div style={{ fontWeight: '600', marginBottom: '0.3rem' }}>Marketing</div>
            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>1,203 jobs</div>
          </div>
          
          <div style={{ backgroundColor: 'white', padding: '1.8rem 1.5rem', borderRadius: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0', flex: '0 1 160px' }}>
            <div style={{ fontSize: '2.2rem', marginBottom: '0.7rem' }}>🤝</div>
            <div style={{ fontWeight: '600', marginBottom: '0.3rem' }}>Sales</div>
            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>1,567 jobs</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'white', padding: '2rem', marginTop: '3rem', borderTop: '1px solid #e2e8f0', textAlign: 'center', color: '#64748b' }}>
        <div style={{ marginBottom: '0.8rem' }}>© 2025 stratifind · Intelligent career discovery</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.85rem' }}>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;