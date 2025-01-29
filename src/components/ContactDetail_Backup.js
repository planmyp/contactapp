import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { getContact } from '../api/ContactService';
// import Contact from "./Contact"
import { toastError, toastSuccess } from '../api/ToastService';

const ContactDetail = ({updateContact, updateImage}) => {

    const[contact, setContact] = useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        title:"",
        status:"",
        photoUrl:""
      });

    const{id}=useParams();

    const fetchContact = async (id) => {
        try {
          const { data } = await getContact(id);
        setContact(data);
        console.log(data);
        toastSuccess('Contact Retrieved');
        } catch (error) {
          console.log(error);
          toastError(error.message);
        }
      };

      useEffect(() => {
        fetchContact();
      },[]);

  return (
    <>
    <Link to={'/contacts'} className='link'><i className='bi bi-arrow-left'></i> Back to list</Link>
    <div className='profile'>
      <div className='profile__details'>
        <img src={contact.photoUrl} alt={`Profile photo of ${contact.name}`}/>
        <div className='profile__metadata'>
          <p className='profile__name'>{contact.name}</p>
          <p className='profile__muted'>JPG, GIF, or PNG. Masx size of 10MG</p>
          <button  className='btn'><i className='bi bi-cloud-upload'></i> Change Photo</button>
        </div>
      </div>
      <div className='profile__settings'>Settings will go here</div>
    </div>
    </>
  )
}

export default ContactDetail;