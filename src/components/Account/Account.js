import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import ProfileHead from '../Dashboard/ProfileHead/ProfileHead'
import AccountForm from './AccountForm/AccountForm'
import Button from '../Button/Button'
import {AccountWrapper} from '../../styles/Pages/Account'

const Account = (props) =>  {

    let [values, setValues] = useState([])
    let [dbInfo, setDbInfo] = useState([])

    useEffect(() => {
        getUserData(props.auth.user.id)
    },[props.auth.user.id])

    const getUserData = (id) => {
        axios.get(`/api/users/${id}`)
        .then(res=>{
            res.data.length > 0 ? setValues(res.data[0]): setValues({})
            setDbInfo(res.data[0])
        })
        .catch(error => console.log(error))
    }

    const handleSubmit = async e => {
        const apiPath = dbInfo ? `/api/users/${props.auth.user.id}` : '/api/users'
        const user_id = {user_id: props.auth.user.id}
        const updatedInfo = Object.assign(values, user_id) 
        // console.log("dbInfo: " , dbInfo )
        // console.log("dbInfo ?",  dbInfo ? 'put' : 'post' )

        dbInfo ? values = await axios.put(apiPath, values) :  values = await axios.post(apiPath, updatedInfo)
    }

    const handleChange = e => {
        e.persist();
        setValues(values => ({ ...values, [e.target.name]: e.target.value.trim()}));
    }
    
    return (
        <>
        <ProfileHead />
        <AccountWrapper>
            <div>Account Section</div>
            <AccountForm handleChangeFn={handleChange} values={values}/>
            <Button  onClick={handleSubmit}>
                Update
            </Button>
        </AccountWrapper>
        </>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(Account)