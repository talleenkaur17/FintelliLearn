import React, { useEffect, useState } from "react";
import {
  getDoc,
  doc,
  setDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import "./profile.scss"; // Assuming you have your SCSS/CSS for profile styling
import Header from "../Header/header";
import Avatar from "react-avatar"; // Importing Avatar component for displaying avatars

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
  const [totalScore, setTotalScore] = useState(0); // New state for total score
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserData(userData);
          setFormValues({
            username: userData.username || "",
            profession: userData.profession || "",
            dob: userData.dob || "",
            email: user.email || "",
            finshaalaId: userData.finshaalaId || "",
          });

          // Fetch all posts by the user and calculate total score
          const postsQuery = query(
            collection(db, "posts"),
            where("userFirstName", "==", userData.username)
          );
          const postDocs = await getDocs(postsQuery);
          const totalUpvotes = postDocs.docs.reduce(
            (sum, doc) => sum + (doc.data().score || 0),
            0
          );
          setTotalScore(totalUpvotes);
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
          <h1 className="profile-title">Finshaala Profile</h1>

          <div className="profile-header">
            <Avatar
              size="100"
              round={true}
              name={userData.username}
              // Placeholder image for Avatar
              className="avatar"
            />
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
                <strong>Total Score:</strong> {totalScore}{" "}
                {/* Display total score */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
