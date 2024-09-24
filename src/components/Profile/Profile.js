import React, { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../../api";

const Profile = ({ token }) => {
  const [profile, setProfile] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile(token);
      setProfile(data);
    };
    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(token, profile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        value={profile.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        value={profile.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default Profile;
