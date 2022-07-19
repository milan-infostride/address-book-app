import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import SecondaryMenuBar from './components/SecondryMenuBar/SecondaryMenuBar';
import MyClassComponent from './components/MyClassComponent';
import { useEffect, useReducer } from 'react';
import AddressCard from './components/ListingAdresses/AddressCard';
import AddressList from './components/ListingAdresses/AddressList';

function App() {
  let dummyAddress = {
    name: 'milan',
    title: 'title',
    body: 'body'   
  }
  let dummyAddressEdit = {
    name: 'nalim',
    title: 'title',
    body: 'body',
    id: 5
  }
  // const initAdresses =  async ()=>{
  //   let addresses = {
  //     addresses: []
  //   }
  //   await fetch('http://localhost:3000/addresses').then(res=>{return res.json()}).then(res=>{console.log('stateres = ',res); addresses.addresses = res});
  //   console.log('init address = ',addresses);
  //   return addresses;
  // }
  const addAdressHandler =  (newAddress)=>{
    let action = {
      type:'add',
      //value: {}
    };
     fetch('http://localhost:3000/addresses/',{
      method: 'POST',
      body: JSON.stringify(newAddress),
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(res=>{return res.json()}).then(res=>{
      console.log('response ',res);
      //lastArray.push(res)
      //return lastArray;
      action.value = res;
      console.log('qction value',action.value);
      addressDispatch(action);
    })
    
    
  }
  const editAdressHandler = (newAddress)=>{
    fetch(' http://localhost:3000/addresses/'+newAddress.id,{
      method: 'PUT',
      body: JSON.stringify(newAddress),
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(res=>{console.log('response = ',res); return res.json()})
    .then(res=>{
      console.log('next res = ',res);
      let action = {
        type: 'edit',
        value: newAddress
        // id: newAddress.id
      }
      addressDispatch(action);
    })
    
  }
  const deleteHandler = (id)=>{
    fetch('http://localhost:3000/addresses/'+id,{
      method: 'DELETE',
      //body: JSON.stringify(),
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(res=>{console.log('response = ',res);return res.json()})
    .then(res =>{console.log(res)
        let action = {
          type: 'remove',
          value: {
            id: id
          }
        }
        addressDispatch(action);
      });

  }
  const addressReducer = (prevState,action)=>{
    if(action.type=='initialize'){
      console.log(prevState)
      console.log('action value = ',action.value)
      return action.value;
    }
    if(action.type=='add'){
      let lastArray = [...prevState];
      console.log('prevState = ',prevState);
      console.log('action value',action.value);

      lastArray.push(action.value);
      console.log('la',lastArray);
      return lastArray;
      
     
      
    }
    if(action.type=='remove'){
      let lastArray = [...prevState];
      let index = lastArray.findIndex(item=>{
        return item.id == action.value.id;
      });
      lastArray.splice(index,1);
       
      return lastArray;
    }
    if(action.type=='edit'){
      let lastArray = [...prevState];
      let currentAddress = lastArray.find(item=>{
        return item.id == action.value.id;
      })
      let index = lastArray.findIndex(item=>{
        return item.id==action.value.id; 
      })
      currentAddress = {...action.value};
      lastArray.splice(index,1,currentAddress);
      
      return lastArray;
    }
  }
  // let myAddresses = []
  useEffect(()=>{
     fetch('http://localhost:3000/addresses').then(res=>{return res.json()}).then(res=>{ addressDispatch({
      type: 'initialize',
      value: res
    })});
  },[])
  const [addresses,addressDispatch] = useReducer(addressReducer,[]);

  useEffect(()=>{
    
    console.log('adresses = ',addresses);
  },[addresses])
  
  return (
    <>
      <Navbar />
      <SecondaryMenuBar />
      <AddressList />
    </>
  );
}


export default App;
