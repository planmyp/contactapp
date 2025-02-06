import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header'
import ContactList from './components/ContactList';
import {getContacts, saveContact, udpatePhoto} from './api/ContactService';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LayoutHome from './components/LayoutHome';
import PoojaKart from './components/PoojaKart';
import ContactDetail from './components/ContactDetail';
import HomePage from "./components/HomePage";


//version 2
// version 3 

function App() {
  const modalRef = useRef();
  const fileRef = useRef();
  const[data, setData] = useState({});
  const[currentPage, setCurrentPage] = useState(0);
  const[file, setFile] = useState(undefined);
  const[values, setValues] = useState({
    "name":"",
    "email":"",
    "phone":"",
    "address":"",
    "title":"",
    "status":"",
  });

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const getAllContacts = async (page =0, size =10) => {
    try{
      setCurrentPage(page);
      const {data} = await getContacts(page, size);
      setData(data);
      console.log(data);
      
    }
    catch(error){
      console.log(error);
    }
  };

  const onChange = (event) =>{
    setValues({...values, [event.target.name]: event.target.value});
    console.log(values);
  };

  // const handleNewContact = async(event)=>{
  //   // await sleep(1000000);
  //   event.preventDefault();
  //   try{
  //     // const response = await saveContact(values);
  //     const {data} = await saveContact(values);
  //     console.log(data);
  //     console.log("Reached handleNewContact submit");

  //   }catch(error){
  //     console.log(error);
  //   }
  // };

  // const handleNewContact = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const { data } = await saveContact(values);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //     // toastError(error.message);
  //   }
  // };
  const handleNewContact = async (event) => {
    event.preventDefault();
    try {
      const { data } = await saveContact(values);
      const formData = new FormData();
      formData.append('file', file, file.name);
      formData.append('id', data.id);
      const { data: photoUrl } = await udpatePhoto(formData);
      toggleModal(false);
      setFile(undefined);
      fileRef.current.value = null;
      setValues({
        name: '',
        email: '',
        phone: '',
        address: '',
        title: '',
        status: '',
      })
      getAllContacts();
    } catch (error) {
      console.log(error);
      // toastError(error.message);
    }
  };

  const updateContact = async () => {
    };

  const updateImage = async () => {
    };
  const toggleModal=(show) => show ? modalRef.current.showModal() : modalRef.current.close();

  useEffect(() => {
    getAllContacts();
  },[]);

  return (
    <>
      {/* <Header toggleModal={toggleModal} nbOfContacts={data.totalElements} /> */}
      <Header toggleModal={toggleModal} nbOfContacts={data.totalElements} />
      <main className='main'>
        <div className='container'>
          <Routes >
            <Route path='/' element={<Navigate to={'/contacts'} />}/>
            <Route path="/home" element={<LayoutHome><HomePage/></LayoutHome>}/>
            {/* <Route path="/contacts" element={<Header toggleModal={toggleModal} nbOfContacts={data.totalElements}><Layout><div><ContactList data={data} currentPage={currentPage} getAllContacts={getAllContacts} /></div></Layout></Header>}/> */}
            <Route path="/contacts" element={<Layout><div><ContactList data={data} currentPage={currentPage} getAllContacts={getAllContacts} /></div></Layout>}/>
            <Route path="/contacts/:id" element={<Layout><div><ContactDetail updateContact={updateContact} updateImage={updateImage} /></div></Layout>}/>
            
            <Route path="/poojaKart" element={<Layout><div><PoojaKart/></div></Layout>}/>
            {/* <Route path="/contacts" element={<div><ContactList data={data} currentPage={currentPage} getAllContacts={getAllContacts} /></div>}/> */}
          </Routes>
        </div>
      </main>

       {/* Modal */}
       <dialog ref={modalRef} className="modal" id="modal">
        <div className="modal__header">
          <h3>New Contact</h3>
          <i onClick={() => toggleModal(false)} className="bi bi-x-lg"></i>
        </div>
        <div className="divider"></div>
        <div className="modal__body">
          <form onSubmit={handleNewContact}>
          {/* <form onSubmit={handleNewContact}> */}
            <div className="user-details">
              <div className="input-box">
                <span className="details">Name</span>
                <input type="text" value={values.name} onChange={onChange} name='name' required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" value={values.email} onChange={onChange} name='email' required />
              </div>
              <div className="input-box">
                <span className="details">Title</span>
                <input type="text" value={values.title} onChange={onChange} name='title' required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" value={values.phone} onChange={onChange} name='phone' required />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input type="text" value={values.address} onChange={onChange} name='address' required />
              </div>
              <div className="input-box">
                <span className="details">Account Status</span>
                <input type="text" value={values.status} onChange={onChange} name='status' required />
              </div>
              <div className="file-input">
                <span className="details">Profile Photo</span>
                {/* <input type="file" onChange={(event) => {setFile(event.target.files[0]); console.log(event.target.files[0])}} ref={fileRef} name='photo' required /> */}
                <input type="file" onChange={(event) => setFile(event.target.files[0])} ref={fileRef} name='photo' required />
              </div>
            </div>
            <div className="form_footer">
              <button onClick={() =>  toggleModal(false)} type='button' className="btn btn-danger">Cancel</button>
              <button type='submit' className="btn">Save</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default App;
