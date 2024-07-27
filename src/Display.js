function Display({ user }) {
    return (
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        {user.image && <img src={URL.createObjectURL(user.image)} alt="User" style={{ width: '100px', height: '100px' }} />}
      </div>
    );
  }
  
  export default Display;
  