import React from'react';
import './App.css';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import {Cards,Chart,CountryPicker} from './components'
import {fetchData,fetchDataOfCountries} from './api';
import coronaImage from './Images/image.png';



const history = createBrowserHistory();
ReactGA.initialize('UA-167993704-1');
history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname)
  }
);

class App extends React.Component
{

state={
data:{},
country:'',
}

  async componentDidMount()
    {
        const fetchedData=await fetchData();
        
    this.setState({data:fetchedData});
    }
    
handleCountryChange=async(country)=>{
    const fetchedData=await fetchDataOfCountries(country);
    if(fetchedData){
    this.setState({data:fetchedData,country:country});
    }
    else{
        const fetchedData=await fetchData();
    this.setState({data:fetchedData});
    }
    console.log(fetchedData);
}

    render(){
        const {data,country}=this.state;
        console.log(data);
        return (<Router history={history}>
            <div className="container">
                <img className="image" src={coronaImage} alt="COVID-19"/>
               <Cards data={data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
               <Chart data={data} country={country}/>
            </div>
            </Router>
        )
    }
}
export default App;