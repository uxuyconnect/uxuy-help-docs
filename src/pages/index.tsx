import React, {useEffect} from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  useEffect(() => {
    // Redirect to documentation
    window.location.href = '/docs/intro';
  }, []);

  return (
    <Layout title="UXUY Help Documentation">
      <main>
        <div style={{padding: '2rem', textAlign: 'center'}}>
          <h1>Redirecting to UXUY Documentation...</h1>
          <p>If you are not redirected automatically, <a href="/docs/intro">click here</a>.</p>
        </div>
      </main>
    </Layout>
  );
} 