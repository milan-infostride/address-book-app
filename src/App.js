import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import SecondaryMenuBar from './components/SecondryMenuBar/SecondaryMenuBar';
import MyClassComponent from './components/MyClassComponent';
import { useEffect, useReducer, useState } from 'react';
import AddressCard from './components/ListingAdresses/AddressCard';
import AddressList from './components/ListingAdresses/AddressList';
import commonFunctions from './components/commanFunctions';
import { useSelector, useDispatch } from 'react-redux';
import { addressActions } from './Stores/slices/adderesses-slice';
import commanFunctions from './components/commanFunctions';
import { Route } from 'react-router-dom';
import Login from './components/pages/Login'
var initialAddresses = [];



function App() {
  const addresses = useSelector(state=> state.addresses.addresses)
const addressDispatch = useDispatch();

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
  const addAdressHandler =  (newAddress,sortType)=>{
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
      addressDispatch(addressActions.addAddress({newAddress:res}))
      // addressDispatch(action);
      if(sortType.length>0){
        let actionSort = {type:sortType}
        addressDispatch(addressActions.sortAddresses({sortType:sortType}))
      }
    })
    
    
  }
  const editAddressHandler = (newAddress)=>{
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
      addressDispatch(addressActions.editAddress({newAddress: newAddress}));
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
        addressDispatch(addressActions.removeAddress({id:id}));
      });

  }
  const [searchString,setSearchString] = useState('');
  // const [seachClicked,setSearchClicked] = useState(false);
  // const addressReducer = (prevState,action)=>{
  //   if(action.type=='initialize'){
  //     console.log(prevState)
  //     console.log('action value = ',action.value)
  //     return action.value;
  //   }
  //   if(action.type=='add'){
  //     let lastArray = [...prevState];
  //     console.log('prevState = ',prevState);
  //     console.log('action value',action.value);

  //     lastArray.push(action.value);
  //     console.log('la',lastArray);
  //     return lastArray;
      
     
      
  //   }
  //   if(action.type=='remove'){
  //     let lastArray = [...prevState];
  //     let index = lastArray.findIndex(item=>{
  //       return item.id == action.value.id;
  //     });
  //     lastArray.splice(index,1);
       
  //     return lastArray;
  //   }
  //   if(action.type=='edit'){
  //     let lastArray = [...prevState];
  //     let currentAddress = lastArray.find(item=>{
  //       return item.id == action.value.id;
  //     })
  //     let index = lastArray.findIndex(item=>{
  //       return item.id==action.value.id; 
  //     })
  //     currentAddress = {...action.value};
  //     lastArray.splice(index,1,currentAddress);
      
  //     return lastArray;
  //   }
  //   if(action.type=='dl'){
  //     console.log('in action dl')
  //     let lastArray = [...prevState];
  //     lastArray.sort((a,b)=>{
  //       return b.date - a.date;
  //     })
  //     return lastArray;
  //   }
  //   if(action.type=='do'){
  //     let lastArray = [...prevState];
  //     lastArray.sort((a,b)=>{
  //       return a.date - b.date;
  //     })
  //     return lastArray;
  //   }
  //   if(action.type=='a-z'){
  //     let lastArray = [...prevState];
      
  //     lastArray.sort((a,b)=>{
  //       return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  //     })
  //     return lastArray;
  //   }
  //   if(action.type=='z-a'){
  //     let lastArray = [...prevState];
      
  //     lastArray.sort((a,b)=>{
  //       return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
  //     })
  //     return lastArray;
  //   }
  //   if(action.type=='search'){
  //     let keyWords = action.value.keyWords;
  //     console.log('initial = ',initialAddresses);
  //     let lastArray = initialAddresses;
  //     lastArray = lastArray.filter((item)=>{
  //       let itemKeys = item.name.split(' ');
  //       // let commonFunctions = JSON.parse(localStorage.getItem('commonFunctions'));
  //       itemKeys = commonFunctions.sanatizeWords(itemKeys);
  //       for(let i=0;i<keyWords.length;i++){
  //         if(itemKeys.includes(keyWords[i]))
  //           return item;
  //       }
  //     })
  //     return lastArray;
  //   }
  // }
  
  // let myAddresses = []
  useEffect(()=>{
    
     fetch('http://localhost:3000/addresses').then(res=>{return res.json()}).then(res=>{ initialAddresses=res;
      addressDispatch(addressActions.initialize({initialAddresses:res}))
    })},[]);
  
  //const [addresses,addressDispatch] = useReducer(addressReducer,[]);
  const searchAddressesHandler = (str)=>{
    let keyWords = str.split(' ');
    keyWords = commanFunctions.sanatizeWords(keyWords);
    let searchedResult = []
    keyWords.forEach((keyWord)=>{
       searchedResult= addresses.filter((item)=>{
        let addressKeyWords = item.name.split(' ');
        addressKeyWords = commanFunctions.sanatizeWords(addressKeyWords);
        return addressKeyWords.includes(keyWord);
      })
    })

    setSearchAddresses(searchedResult);

}
  useEffect(()=>{
    
    console.log('adresses = ',addresses);
    if(searchString.length>0){
      searchAddressesHandler(searchString)
    }
    
  },[addresses])
  const [searchAddresses,setSearchAddresses] = useState([]);
 
  
  return (
    <>
      <Navbar />
      <Route path='/main'>
      <SecondaryMenuBar addresses={addresses} addAdressHandler={addAdressHandler} searchAddressesHandler={searchAddressesHandler} setSearchString={setSearchString} addressDispatch={addressDispatch} />
      <AddressList addresses={searchAddresses.length>0?searchAddresses:addresses} editAddressHandler={editAddressHandler} deleteHandler={deleteHandler}  />
      </Route>
      <Route path='/login'>
        <Login></Login>
      </Route>
    </>
  );
}


export default App;
