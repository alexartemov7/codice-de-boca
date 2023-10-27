import { useState } from "react"

function SingleMenuComponent(props){
    console.log('props ->', props)
    return (
        <>
        <h3> {props.title}</h3>
        <p> {props.description}</p>
        </>
    )
        
    
}


export default function Home() {
    const [menuItems, setMenuItems] = useState(['hotdog', 'burger']) //[stateVar, setter]
    // 1.fetch data - done 
    // 2. get array of objects - done
    // 3. render each object
    // 3.1 create a state variable - DONE
    // 3.2 put inside state variable the array of objects - DONE
    // 3.3 display each item in dom
    // 3.3.1 Map over the array of objects
    // 3.3.2 return each item so that it displays on the browser

    console.log('menuItems ->', menuItems)
    const handleBtnClick = () => {
        console.log('hey class from a function')

        fetch('https://codice-boca.web.app/menu')
        .then(res => res.json()) //contacting the API
        .then(data => setMenuItems(data)) //get clean data from res
        .catch(x => console.error(x))
    }

    return (
        <>
          <button onClick={() => handleBtnClick()}>get data</button>
          {menuItems && menuItems.map((singleItem) => {
            console.log('singleItem ->', singleItem)

            return (
            <>
            <SingleMenuComponent title={singleItem.title}/>
            <SingleMenuComponent description={singleItem.description}/>
            {/* <h2>{singleItem.title}</h2>
            <p>{singleItem.descripstion}</p> */}
            </>
            )
          })}
        </>

    )
}