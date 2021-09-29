import React from 'react'
// import axios from 'axios'
// import Card from './Card'

export default function SearchBar() {
    // const [term,setTerm] = useState('6153c4b4e518faa6a7641aeb')
    // const [result,setResult] = useState([])
    // Bugs, cant finish search feature
    // useEffect(()=>{
    //     const search = async()=>{
    //         const { data } = await axios.get(`http://localhost:5000/employee/${term}`)
    //         setResult(data)
    //     }
    //     if(term && !result.length){
    //         search()
    //         console.log("searched")
    //     }else{
    //         const timeoutId = setTimeout(() => {
    //             if (term) {
    //               search();
    //             }
    //           }, 1000);
    //           return () => {
    //             clearTimeout(timeoutId);
    //           };
    //     }
    // },[term])
    // const renderResult = result.map((ele)=>{
    //         return(
    //             <Card data={ele}/>
    //         )
    //     })
    
    return (
    <>
        <h1 className="mt-5 form-label text-center">Search Employees by name</h1>
        <div className="d-flex justify-content-center">
            <input style={{width:"70%"}}type="text"  className="form-control"/>
            <button style={{verticalAlign:'top'}}type="button" className="btn btn-primary">Search </button>
        </div>

    </>
    )
}