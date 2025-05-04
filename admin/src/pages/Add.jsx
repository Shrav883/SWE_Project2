import React, {useState} from 'react';
import { icons } from '../assets/assets';
import './pages.css'; // Import the CSS file
import axios from 'axios';
import { backendUrl } from '../App';

const Add = ({ token }) => { // Receive the 'token' prop using object destructuring

  const[image1,setImage1] = useState(null);
  const[image2,setImage2] = useState(null);
  const[image3,setImage3] = useState(null);
  const[image4,setImage4] = useState(null);

  const [name,setName] = useState("");
  const [director, setDirector] = useState("");
  const [category, setCategory] = useState("");
  const [actors, setActors] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [description, setDescription] = useState("");
  const [bestseller, setBestseller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try{
      const formData = new FormData();
      formData.append("name",name);
      formData.append("description",description);
      formData.append("price",ticketPrice);
      formData.append("category",category);
      formData.append("director",director);
      formData.append("actors",JSON.stringify(actors));
      formData.append("releaseDate",releaseDate);
      formData.append("bestseller",bestseller);

      image1 && formData.append("image1",image1);
      image2 && formData.append("image2",image2);
      image3 && formData.append("image3",image3);
      image4 && formData.append("image4",image4);

      const response = await axios.post(backendUrl + "/api/product/add", formData,{
        headers: {
          token: token // Use the 'token' prop directly in the headers
        }
      });
      console.log(response.data);

    } catch (error) {
      console.error("Error adding product:", error);
      // Optionally, set an error state
    }
  };

 return (
  <form onSubmit={onSubmitHandler} className="add-form">
    <div className="upload-title-container">
      <p className="upload-title">Upload Image</p>
    </div >
    <div className='upload-area-container'>
      <label htmlFor="image1" className="upload-label">
        <img src={!image1 ? icons.upload_area : URL.createObjectURL(image1)} alt="Upload" className="upload-icon" />
        <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden className="upload-input" />
      </label>
      <label htmlFor="image2" className="upload-label">
        <img src={!image2 ? icons.upload_area : URL.createObjectURL(image2)} alt="Upload" className="upload-icon" />
        <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden className="upload-input" />
      </label>
      <label htmlFor="image3" className="upload-label">
        <img src={!image3 ? icons.upload_area : URL.createObjectURL(image3)} alt="Upload" className="upload-icon" />
        <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden className="upload-input" />
      </label>
      <label htmlFor="image4" className="upload-label">
        <img src={!image4 ? icons.upload_area : URL.createObjectURL(image4)} alt="Upload" className="upload-icon" />
        <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden className="upload-input" />
      </label>
    </div>

    <div className="input-group">
      <label htmlFor="movieName" className="input-label">Product Name</label>
      <input onChange={(e)=>setName(e.target.value)} value={name} type="text" id="movieName" className="input-field" placeholder='Type Movie Name' required />
    </div>

    <div className="input-group">
      <label htmlFor="director" className="input-label">Director</label>
      <input onChange={(e)=>setDirector(e.target.value)} value={director} type="text" id="director" className="input-field" placeholder='Enter Director Name' />
    </div>

    <div className="input-group">
      <label htmlFor="category" className="input-label">Category</label>
      <select onChange={(e)=>setCategory(e.target.value)} value={category} id="category" className="input-field">
        <option value="">Select Category</option>
        <option value="Team">Team</option>
        <option value="Solo">Solo</option>
      </select>
    </div>

    <div className="input-group">
      <label htmlFor="actors" className="input-label">Main Actors</label>
      <input onChange={(e)=>setActors(e.target.value)} value={actors} type="text" id="actors" className="input-field" placeholder='Enter comma-separated actor names' />
    </div>

    <div className="input-group">
      <label htmlFor="releaseDate" className="input-label">Release Date</label>
      <input onChange={(e)=>setReleaseDate(e.target.value)} value={releaseDate} type="date" id="releaseDate" className="input-field" />
    </div>

    <div className="input-group">
      <label htmlFor="ticketPrice" className="input-label">Ticket Price</label>
      <input onChange={(e)=>setTicketPrice(e.target.value)} value={ticketPrice} type="number" id="ticketPrice" className="input-field" placeholder='Enter Ticket Price' />
    </div>

    <div className="input-group">
      <label htmlFor="description" className="input-label">Description</label>
      <textarea onChange={(e)=>setDescription(e.target.value)} value={description} id="description" className="input-field" placeholder='Enter movie description'></textarea>
    </div>

    <div className="input-group">
      <label htmlFor="bestseller" className="input-label">Bestseller</label>
      <input
        type="checkbox"
        id="bestseller"
        className="input-field"
        checked={bestseller}
        onChange={(e) => setBestseller(e.target.checked)}
      />
    </div>

    <button type="submit" className="submit-button">Add Movie</button>
  </form>
 );
};

export default Add;