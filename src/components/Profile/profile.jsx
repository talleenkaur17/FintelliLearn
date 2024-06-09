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
    finshaalaId: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
          setFormValues({
            username: userDoc.data().username || "",
            profession: userDoc.data().profession || "",
            dob: userDoc.data().dob || "",
            email: user.email || "",
            finshaalaId: userDoc.data().finshaalaId || "",
          });
        } else {
          console.error("No such document!");
        }
      } else {
        console.error("User is not signed in");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSave = async () => {
    const currentUser = auth.currentUser;
    if (!formValues.username) {
      setError("Username is required");
      return;
    }
    setError("");

    if (currentUser) {
      try {
        await setDoc(doc(db, "users", currentUser.uid), {
          username: formValues.username,
          profession: formValues.profession,
          dob: formValues.dob,
          email: formValues.email,
          finshaalaId: formValues.finshaalaId,
        });
        setIsEditing(false);
        console.log("User data saved successfully!");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!userData) {
    return <div>No user data found</div>;
  }

  return (
    <div>
      <Header />
      <div className="profile-page">
        <div className="profile-container">
          <h1 className="profile-title">Profile Section</h1>

          <div className="profile-header">
            <div className="avatar">
              {userData.username.charAt(0).toUpperCase()}
            </div>
            <h2>{userData.username}</h2>
            <button
              className="edit-button"
              onClick={() => setIsEditing(!isEditing)}
            >
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
              {error && <div className="error">{error}</div>}
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
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
    </div>
  );
};

export default Profile;
