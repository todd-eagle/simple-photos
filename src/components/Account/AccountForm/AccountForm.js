import React from 'react'
import PeronalInfoForm from '../../Form/Form'
import AddressForm from '../../Form/Form'

const AccountForm = (props) => {
    const {handleChangeFn, values} = props
    // console.log("values = ", values)
    return(
        <>
             <PeronalInfoForm 
                inputData = {
                    [
                        {type: 'text', property: 'first_name', value: values.first_name},
                        {type: 'text', property: 'last_name', value: values.last_name},
                        {type: 'text', property: 'email', value: values.email}
                    ]
                }
                onChange={handleChangeFn}
                width='60%'
                heading = 'Personal Information'
            />
             <AddressForm 
                inputData = {
                    [
                        {type: 'text', property: 'address', value: values.address},
                        {type: 'text', property: 'city', value: values.city},
                        {type: 'text', property: 'state', value: values.state},
                        {type: 'text', property: 'postal_code', value: values.postal_code}
                    ]
                }
                onChange={handleChangeFn}
                width='60%'
                heading = 'Address'
            />
        </>
    ) 
}

export default AccountForm