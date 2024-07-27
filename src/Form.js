import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Form({ user, setUser }) {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      setUser({
        ...user,
        image: file
      });
      setPreview(URL.createObjectURL(file));
    } else {
      setUser({
        ...user,
        [name]: value
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user.name);
    console.log(user.email);
    console.log(user.password);
    console.log(user.image);
    navigate('/display'); // Programmatically navigate to the display page
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
        {preview && <img src={preview} alt="Preview" style={{ width: '100px', height: '100px' }} />}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
