import axios from "axios"
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


export const FormStore = ({setMovie}) => {
    const [data , setData] = useState({
        name: null,
        duration: null,
        synopsis: null,
        year: null,
        image: null,
    })
    
    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/api/movie')
    //         .then(res => {
    //             console.log(res)
    //         })
    // } , [])
    
    const handleInput = (input) =>{
        setData({...data , [input.target.name] : input.target.value})
    }
    
    const handleSubmit = (btn) => {
        btn.preventDefault()
        axios.post('http://127.0.0.1:8000/api/movie' , data)
            .then(res => {
                setMovie(res)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        console.log(data)
    }
    return (
        <>
            <form className="row g-3 p-5 mx-5" encType="multipart/form-data" onSubmit={(handleSubmit)}>
                <div className="col-md-6">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" name="name" onChange={handleInput} className="form-control" id="Name"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="Duration" className="form-label">Duration</label>
                    <input type="number" name="duration" onChange={handleInput} className="form-control" id="Duration"/>
                </div>
                <div className="col-12">
                    <label htmlFor="Synopsis" className="form-label">Synopsis</label>
                    <input type="text" name="synopsis" onChange={handleInput} className="form-control" id="Synopsis" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Year</label>
                    <input type="number" name="year" onChange={handleInput} className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Image</label>
                    <input type="file" name="image" onChange={handleInput} className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-12 mt-5">
                    <button type="submit" className="btn btn-primary col-12">Add Data</button>
                </div>
            </form>
        </>
    )
}