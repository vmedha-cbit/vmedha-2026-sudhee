export default function TestPage() {
  return (
    <div style={{ 
      backgroundColor: '#080B1F', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <h1 style={{ color: '#00F2FF', fontSize: '48px', marginBottom: '20px' }}>
        ✅ Test Page Works!
      </h1>
      <p style={{ color: '#E6E9FF', fontSize: '20px' }}>
        If you can see this, the server is working correctly.
      </p>
      <a href="/" style={{ 
        color: '#00D2C8', 
        marginTop: '30px',
        fontSize: '18px',
        textDecoration: 'underline'
      }}>
        Go to Home Page
      </a>
    </div>
  )
}
