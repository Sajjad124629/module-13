"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from '../function/Cookies';
import Router from 'next/router'
const Preferences = () => {
    const [data, setData] = useState(null);
    const [login, setLogin] = useState('');
    const { push } = useRouter();
  useEffect(() => {
    const fetchData = async () => {
        try {
          const result = await Cookies();
          setData(result);
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };
    fetchData();
  }, []);
   
    const setPreference = async (preferenceValue) => {


        try {
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'theme': preferenceValue,
                },

            });

            if (response.ok) {
                console.log('Preference set successfully.');
            } else {
                console.error('Failed to set preference.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }

        const fetchData = async () => {
            try {
              const result = await Cookies();
              setData(result);
            } catch (error) {
              console.error('An error occurred:', error);
            }
        };
      
          fetchData();
        
    };

    const setredirect = async () =>{
        try {
            const response = await fetch('/api/redirect');
            if(response.ok){
                push('/about')
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }


    const authorization = async () =>{
        try {
            const response = await fetch('/api/header', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token':"XYZ-123-ABC",
                },

            });
            if (response.ok) {
                setLogin("You are Login")
            } else {
                setLogin("You are Not Login")
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }

    }
 
    return (
        <div className='text-center'>
           
           {data ? (
        <div>
        <p>Cookie Value: {data.msg ? data.msg.value : ""}</p>
          <p>Message: {data.message}</p>
          <p>Version: {data.version}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
             <p className="mb-10"> {login ? login : "Please Login"}</p>

            <button className="btn btn-primary text-center mr-3" onClick={() => setPreference('dark')}>Dark Theme</button>
            <button className="btn btn-primary  mr-3" onClick={() => setPreference('light')}>Light Theme</button>
            <button className="btn btn-primary  mr-3" onClick={() => setredirect()}>Redirect</button>
            <button className="btn btn-primary"  onClick={() => authorization()}>Authorization</button>
        </div>
    );
};

export default Preferences;