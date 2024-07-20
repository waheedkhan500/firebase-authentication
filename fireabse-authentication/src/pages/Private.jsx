import { signOut } from "firebase/auth";
import { auth } from "../firebase"; 

function Private() {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => alert("signed out successflully"))
      .catch(error => {
        console.log(error.message)
        alert(error.message)
    })

  }
  return (
    <div style={{ display:"flex",justifyContent:"center", flexDirection:"column"}}>
      <h1>Private Page</h1>
      <button onClick={handleSignOut}>SignOut</button>
    </div>
  );
}

export default Private;
