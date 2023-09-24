export const checkValidData = (email, password, name, isSignForm) => {
    const isNameValid = /^[a-zA-Z ]+$/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
   
    if(!isSignForm && !isNameValid) return 'Name is not valid';
    if(!isEmailValid) return 'Email is not valid';
    if(!isPasswordValid) return 'Password is not valid';
    
    return null;
}