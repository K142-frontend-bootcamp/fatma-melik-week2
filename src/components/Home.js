import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import Table from './Table';
import axios from 'axios';

const Wrapper = Styled.div `
    display:flex;
    justify-content: center;
    align-items: center; 
`;

const Home = () => {

    const [data,setData] = useState([]);
    const [newData,setNewData] = useState(['']);
    // setNewData('');
    // let text='';

    const getData = async () => {
        const res = await axios.get('https://swapi.dev/api/people');
        setData(...data,res.data.results);
        console.log("getData");
        setNewData('');
        // setNewData(...newData,res.data.results);
        
    }

    useEffect(() => { 
        console.log('page is loaded');
        getData();                
    },[]);

    const filter =(e) => {
        setNewData(e.target.value);
    }

    const filteredData = data.filter(data => data.name.toLowerCase().includes(newData.toLowerCase()));
    return (
        <>
        <input type='text' placeholder='Name' value={newData} onChange={filter} style={{margin:'20px', marginTop:'40px' , width:'500px' , height:'35px', borderRadius:'12px', background:'#d3d0d2'}}></input>
        <Wrapper>
            <Table data={filteredData}/>
        </Wrapper>
        </>
    )
}


export default Home;

