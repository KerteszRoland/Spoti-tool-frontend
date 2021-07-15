const Profile = ({ name, pic }) => {
  return (
    <div className="profile">
      <img
        src={pic}
        alt="Profile"
        width="40px"
        height="40px"
        className="profile-pic"
      />
      <span className="profile-name">{name}</span>
    </div>
  );
};

export default Profile;
