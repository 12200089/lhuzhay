import React, {Fragment, useEffect, useState} from "react"

// import I from "../../../server/uploads/s1.jpg"
// import J from "../components/assets/img/b1.jpg"

const InputPG = () => {
    const[data, setData] = useState([]);

    const getSongs = async() => {
        try {
            const response = await fetch("http://localhost:5000/song")
            const jsonData = await response.json() 
            setData(jsonData)
        } catch (err) {
            console.log(err.message)
        }
    }



    useEffect(()=>{
        getSongs();
    },[])
    
    return(
        <Fragment>   
            <h1 className="text-center mt-5">List Luzhay</h1>
            
            <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>sl#</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Type</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>
                    {data.map((data) => {
                        const{sid, name, author, type, img} = data;
                        return (
                            <tr key={sid}>
                                <td>{sid}</td>
                                <td>{name}</td>
                                <td>{author}</td>
                                <td>{type}</td>
                                <td><img src={`http://localhost:5000/image/${img}`} style={{height:100,width: 100}} alt="noImg"/></td>
                            </tr>
                        )
                    })}

                {/* <img src={`http://localhost:5000/image/`} style={{height:100,width: 100}} alt="noImg"/> */}
                    
                
            
                </tbody>
            </table>
                        
        </Fragment>
    )
}

export default InputPG;