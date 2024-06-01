import React, { useEffect, useState } from "react";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import "./profile.scss";
import Header from "../Header/header";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    profession: "",
    dob: "",
    email: "",
    finshaalaId: "", // Adding finshaalaId field to formValues state
  });

  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, "Users", user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
          setFormValues({
            username: userDoc.data().username || "",
            profession: userDoc.data().profession || "",
            dob: userDoc.data().dob || "",
            email: user.email || "",
            finshaalaId: userDoc.data().finshaalaId || "", // Set the finshaalaId from user document
          });
        } else {
          console.error("No such document!");
        }
      } else {
        console.error("User is not signed in");
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Save user data to Firestore
    const currentUser = auth.currentUser;
    if (currentUser) {
      setDoc(doc(db, "Users", currentUser.uid), {
        username: formValues.username,
        profession: formValues.profession,
        dob: formValues.dob,
        email: formValues.email,
        finshaalaId: formValues.finshaalaId, // Include finshaalaId in the document data
      })
        .then(() => {
          setIsEditing(false);
          console.log("User data saved successfully!");
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No user data found</div>;
  }

  return (
    <div>
      <Header />
      <h1 className="font-bold text-center text-3xl p-5">Profile Section</h1>

      <div className="profile-container">
        <div className="profile-header">
          <div className="avatar">
            {userData.username.charAt(0).toUpperCase()}
          </div>
          <h2>{userData.username}</h2>
          <button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>
        {isEditing ? (
          <div className="edit-form">
            <input
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleInputChange}
              placeholder="Username"
            />
            <input
              type="text"
              name="profession"
              value={formValues.profession}
              onChange={handleInputChange}
              placeholder="Profession"
            />
            <input
              type="date"
              name="dob"
              value={formValues.dob}
              onChange={handleInputChange}
              placeholder="Date of Birth"
            />
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Email"
              disabled
            />
            <input
              type="text"
              name="finshaalaId"
              value={formValues.finshaalaId}
              onChange={handleInputChange}
              placeholder="Finshaala ID"
            />
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div className="profile-details">
            <div className="profile-item">
              <strong>Email:</strong> {userData.email}
            </div>
            <div className="profile-item">
              <strong>Profession:</strong>{" "}
              {userData.profession || "Not provided"}
            </div>
            <div className="profile-item">
              <strong>Date of Birth:</strong> {userData.dob || "Not provided"}
            </div>
            <div className="profile-item">
              <strong>Finshaala ID:</strong>{" "}
              {userData.finshaalaId || "Not provided"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
