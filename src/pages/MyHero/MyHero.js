import React, {useState} from "react";
import axios from "axios";
import {useEffect} from "react";
import'./MyHero.css';

const MyHero =() =>{
    const [items,setItem] = useState({
        id:'',
        name:''
    });

    const [hero,setHero] = useState({
        id:'',
        name:''
    });
    const [display,setDisplay] = useState('none')
    const [selected,setSelected] = useState([])
    useEffect(()=>{
        axios.get(`https://60dff0ba6b689e001788c858.mockapi.io/heroes`)
            .then(res => {
                const heros = res.data;
                console.log(heros)
                setItem( heros);
            })
            .catch(error => console.log(error));
    },[]);


    const selectedHero = (item) =>{
        setDisplay('block')
        setHero(item)
        selected.push(item.id)
        setSelected(selected)
    }

    const handleChange = (item) =>{
        setHero({
            ...hero,
            name:item.target.value
        })
        const list = [...items]
        Array.from(list).find(x=>x.id===hero.id).name = item.target.value
    }

    return (
        <div>
            <h1>Tour of Heroes</h1>
            <h3>My heroes</h3>
            <div>
                {Array.from(items).map(hero_list =>(
                    <ul key={hero_list.id} className="list_hero" onClick={()=> selectedHero(hero_list) }>
                        <li>
                            <span className="hero_id" >{hero_list.id}</span>{hero_list.name}
                        </li>
                    </ul>))}
            </div>

            <div>
            <span style={{display}}>
               <h1> {hero.name} Details</h1>
                <p>id : {hero.id}</p>
                Hero name :
                <input
                    name="name"
                    type="text"
                    value={hero.name}
                    onChange={ handleChange }
                    className="input_display"
                /></span>
            </div>
            <div>
                <h2 style={{color:'red'}}>Messages</h2>
                <button className="button_clear" onClick={ ()=> setSelected([]) }>Clear Message</button>
                {selected.map((item)=> <span style={{display}}>HeroesComponent: Selected hero id={item}</span>)}
            </div>
        </div>
    );
};
export default MyHero;