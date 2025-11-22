
import { Routes, Route, Navigate } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Landing from './pages/Landing'
import OrgDashboard from './pages/OrgDashboard'
import EventWizard from './pages/EventWizard'
import QRDesigner from './pages/QRDesigner'
import Scanner from './pages/Scanner'
import AdminDashboard from './pages/AdminDashboard'
import VisitorRegistration from './pages/VisitorRegistration'
import AuthPage from './pages/Auth'

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<Landing />} />
        <Route path="/org" element={<OrgDashboard />} />
        <Route path="/org/events/new" element={<EventWizard />} />
        <Route path="/org/events/:id/qr-designer" element={<QRDesigner />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/r/:slug" element={<VisitorRegistration />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </RootLayout>
  )
}

export default App
