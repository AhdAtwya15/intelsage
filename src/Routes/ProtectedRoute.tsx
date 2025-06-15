import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#fff',
        color: '#333',
        fontSize: '2rem',
        fontWeight: 'bold',
        direction: 'rtl',
        zIndex: 9999
      }}>
        يجب تسجيل الدخول أولاً
      </div>
    );
  }
  return children;
};

export default ProtectedRoute;
