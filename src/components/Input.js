import "../App.css";
import { useState } from "react";

const localhost = `/post`

function Input() {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e, res) => {
    e.preventDefault();

    try {
      let res = await fetch(localhost, {
        method: "POST",
        body: JSON.stringify({
            username: username,
            image: image,
        }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': '/'
          },
        });
      let resJson = await res.json();
      if (res.status === 200) {
        setUsername(username);
        setImage(image);
        setMessage("Post Made Successfully!");
        console.log(resJson);
        } else if (res.status === 11000) {
        setMessage("Duplicate Error : 11000!");
        }
        else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
    
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} id='form-container'>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          id='username-field'
        />
        <input
          type="text"
          value={image}
          placeholder="Image"
          onChange={(e) => setImage(e.target.value)}
          id='img-field'
        />

        <button type="submit" id="submit-btn">Upload Now!</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Input;
