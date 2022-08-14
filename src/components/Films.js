import React from "react";
import axios from "axios";



class Films extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            film:[]
        }
        // console.log(this.props.films);

        const fetchData = async () => {
            const res = await axios.get(this.props.films);
            const res2= await res.data;
            // console.log(res2);
            return res2;
                
        }

        const getData = async () => {
            const data = await fetchData();
            const filmName = data.title;
            // console.log(filmName);
            this.setState({film: filmName});
            // console.log(this.state.film);    
        }

        getData();
        
    }
    
    render() {
        return(
            <div>
                {this.state.film}
            </div>
        )
    }
}

export default Films;