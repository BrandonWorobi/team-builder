import React, { useState } from 'react';

const initialFormValues = {
	name: '',
	email: '',
	role: '',
      }
      
      function Form(props) {
	const { addNewMember } = props;
	const [formValues, setFormValues] = useState(initialFormValues);
      
	const onChange = evt => {
	  const { name, value } = evt.target;
	  setFormValues({
	    ...formValues,
	    [name]: value,
	  })
	}
      
	const onSubmit = evt => {
	  evt.preventDefault();
	  const newMember = {
	    name: formValues.name.trim(),
	    email: formValues.email.trim(),
	    role: formValues.role,
	  }
	  if (newMember.name && newMember.email && newMember.role) {
	    addNewMember(newMember);
	    setFormValues(initialFormValues);
	  }
	  else {
	    console.log(`newMember missing field: ${newMember.name} ${newMember.email} ${newMember.role}`);
	  }
	}
      
	return (
	  <form className='form container' onSubmit={onSubmit}>
	    <h2>Add New Team Member</h2>
	    <label>Name
	      <input 
		name='name'
		type='text'
		value={formValues.name}
		onChange={onChange}
		placeholder='Firstname Lastname'
		required
	      />
	    </label>
	    <label>Email
	      <input 
		name='email'
		type='email'
		value={formValues.email}
		onChange={onChange}
		placeholder='firstlast@company.com'
		required
	      />
	    </label>
	    <label>Role
	      <select name='role' value={formValues.role} onChange={onChange} required>
		<option value='' selected disabled>--- Select role ---</option>
		<option value='#'>Test Option</option>
		<option value='#'>Test Option</option>
		<option value='#'>Test Option</option>
		<option value='#'>Test Option</option>
		<option value='#'>Test Option</option>
		<option value='#'>Test Option</option>
		<option value='#'>Test Option</option>
	      </select>
	    </label>
	    <button>Submit</button>
	  </form>
	);
}

export default Form;