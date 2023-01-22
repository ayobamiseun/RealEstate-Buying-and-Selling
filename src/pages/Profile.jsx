import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetails, setChangeDetails] = useState(false);

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;
  function onLogOut() {
    auth.signOut();
    navigate("/");
  }
  function onChange(e) {
    setFormData((prevState)=>({
        ...prevState,
        [e.target.id]: e.target.value,
    }))

  }
  async function onSubmit(){
    try {
      if(auth.currentUser.displayName !== name ) {
        // update the display name with firebase auth
         await updateProfile(auth.currentUser, {
          displayName: name,
         })
        // update name in firestore 

        const docRef = doc(db, "users", auth.currentUser.uid)
          await updateDoc(docRef, {
            name,
          })

          
      }

      toast.success("profile  details updated ")
    } catch (error) {
       toast.error("could not update change")
    }
  }
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3 ">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetails}
              onChange={onChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out ${changeDetails && "bg-red-200 focus:bg-red-200"}`}
            />

            <input
              type="email"
              id="email"
              value={email}
              disable
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center ">
                Do you want to change your name ?{" "}
                <span
                  onClick={()=>{changeDetails && onSubmit()
                    setChangeDetails((prevState)=>  !prevState)
                  }}
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                >
                 {changeDetails ? "Apply Change" : "Edit"}
                </span>
              </p>
              <p
                className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 ml-1 cursor-pointer"
                onClick={onLogOut}
              >
                {" "}
                sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
