
const AdminOverlay = ({children, className}: {children: React.ReactNode, className: string}) => {
  return (
    <div className={`fixed inset-0 z-20 w-screen min-h-screen bg-white font-brico ${className}`}>
        {children}
    </div>
  )
}

export default AdminOverlay