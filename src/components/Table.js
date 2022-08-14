import React from 'react'
import Styled from 'styled-components';
import Films from './Films'

const Wrapper = Styled.table `
    font-family: cursive, sans-serif;
    text-align: center;
    margin: 20px;
    border-spacing: 10px;
    background: white; 
    opacity: 0.90;
    color: rgb(0, 0, 0);
    width: 1200px;
    border-radius: 12px;
    
`;

class Table extends React.Component {
    constructor(props){      
        super(props)
        this.state = {
          
        }      
    }
  

    deleteItems=(i) => {
      // this.newData = this.props.data.filter(item => {
      //   if(item.created!=i.created){
      //     return item;
      //   }
      // })

      
    }

    render() {
        const newData=this.props.data;
        console.log(newData);
        return(
            <Wrapper  className='table'>
            <thead>
              <tr className='tr'>
                <th>Name</th>
                <th>Height</th>
                <th>Gender</th>
                <th>Film Bilgileri</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {newData.map((item) => (
              <tr key={item.created} className='tr'>
                <td>{item.name}</td>
                <td>{item.height}</td>
                <td>{item.gender}</td>
                <td>{item.films.map(film => (
                  <Films films={film}/>
                ))}</td>
                <td><center onClick={this.deleteItems}><img src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"/></center></td>
              </tr>
            ))}
             </tbody>
          </Wrapper>
        );
    }
}



export default Table;