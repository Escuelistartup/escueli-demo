const SettingsPage = () => {
  return (
    <div className="min-h-screen pb-24 px-6 flex flex-col items-center justify-center text-center" style={{ backgroundColor: '#FAF7F2' }}>
      <p className="text-base font-medium mb-3" style={{ color: '#3E5F54', fontFamily: 'DM Sans, sans-serif' }}>
        You just experienced Escueli.
      </p>
      <h1 className="font-display text-3xl font-bold mb-5 leading-tight" style={{ color: '#2E2E2E', fontFamily: 'Playfair Display, serif' }}>
        You don't have to be the one carrying it anymore.
      </h1>
      <p className="text-base mb-8 max-w-sm leading-relaxed" style={{ color: '#555', fontFamily: 'DM Sans, sans-serif' }}>
        You've held this together for years. It was never supposed to be one person's job. Escueli is ready to take it from here.
      </p>
      <a
        href="https://tally.so/r/obAZob"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          backgroundColor: '#3E5F54',
          color: '#FAF7F2',
          padding: '16px 32px',
          borderRadius: '8px',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '1rem',
          fontWeight: '500',
          textDecoration: 'none',
          width: '100%',
          maxWidth: '320px',
          textAlign: 'center',
        }}
      >
        Join the Beta — $29/mo
      </a>
      <p className="mt-4 text-sm" style={{ color: '#999', fontFamily: 'DM Sans, sans-serif' }}>
        14-day money-back guarantee. Cancel anytime.
      </p>
    </div>
  );
};

export default SettingsPage;
