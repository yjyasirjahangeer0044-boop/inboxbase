'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem('iboxbase-cookies');
    if (!choice) setVisible(true);
  }, []);

  const handle = (value: 'accepted' | 'declined') => {
    localStorage.setItem('iboxbase-cookies', value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 200,
        background: '#111',
        border: '1px solid #1E1E1E',
        borderRadius: 12,
        padding: '16px 20px',
        maxWidth: 540,
        width: 'calc(100% - 40px)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 14,
        alignItems: 'center',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
      }}
    >
      <p style={{ fontSize: 13, color: '#ccc', flex: '1 1 240px', margin: 0, lineHeight: 1.5 }}>
        We use cookies to improve your experience. Read our{' '}
        <a href="/cookies-policy/" style={{ color: '#8B5CF6', textDecoration: 'underline' }}>
          cookies policy
        </a>
        .
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={() => handle('declined')}
          style={{
            padding: '8px 14px',
            border: '1px solid #1E1E1E',
            borderRadius: 6,
            color: '#ddd',
            fontSize: 13,
            background: 'transparent',
          }}
        >
          Decline
        </button>
        <button
          onClick={() => handle('accepted')}
          style={{
            padding: '8px 14px',
            background: '#8B5CF6',
            color: '#fff',
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
