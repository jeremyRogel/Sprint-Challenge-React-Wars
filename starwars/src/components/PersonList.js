import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonCard from "./card";


export default function PersonList() {
    const[person, setPerson] = useState([]);

    useEffect(() => {
        axios
          .get(`https://swapi.co/api/people/`)
          .then(response => {
            const personInfo = response.data.results;
            console.log("star wars people", personInfo);
            setPerson(personInfo);
          })
          .catch(error => {
            console.log("The data was not returned", error);
          });
      }, []);

      return (
          <div className="person">
             {person.map(character => {
                 return (
                     <PersonCard 
                        key={character.id}
                        name={character.name}
                        mass={character.mass}
                        height={character.height}
                        gender={character.gender}
                     />
                 );
             })} 
          </div>
      );
}