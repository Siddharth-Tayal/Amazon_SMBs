import useLogout from "../../hooks/useLogout"
const LogoutButton = () => {
  const {loading,logout}=useLogout()
  return (
    <div className="mt-auto">
      {!loading ? (<button onClick={logout} className="btn btn-circle cursor-pointer bg-slate-100"></button>): (<span className="loading loading-spinner"></span>)}
    </div>
  )
}

export default LogoutButton
