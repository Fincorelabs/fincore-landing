export default function LandingPage() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>🚀 Fincore Labs</h1>
        <p style={styles.subtitle}>Infraestrutura financeira e confidencialidade operacional.</p>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2>🔐 Discrição. Precisão. Convergência.</h2>
          <p>
            Estamos desenvolvendo um núcleo sigiloso voltado a profissionais com histórico técnico bancário e conhecimento em infraestrutura crítica. 
            Caso você atue nesse meio e deseje colaborar ou conhecer mais, inscreva-se.
          </p>
        </section>

        <section style={styles.section}>
          <h3>🧭 Próximos passos</h3>
          <ul>
            <li>➡️ Ambiente fechado de testes</li>
            <li>➡️ Primeira linha de interceptação operacional</li>
            <li>➡️ Consolidação de microsserviços financeiros</li>
          </ul>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Fincore Labs · All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Segoe UI, Roboto, sans-serif',
    backgroundColor: '#0e0e0e',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '0 20px',
  },
  header: {
    padding: '60px 0 30px',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#999',
  },
  main: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  section: {
    marginBottom: '40px',
  },
  footer: {
    textAlign: 'center',
    padding: '40px 0',
    fontSize: '14px',
    color: '#666',
  },
};
