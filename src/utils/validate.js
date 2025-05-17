
export const checkValidData =(name, email, password)=>{

    const nameRegex = /^[A-Za-z]{2,50}$/.test(name);  
    const isEmailVaild = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);  
    if (!nameRegex) return "Name is Required";
    if (!isEmailVaild) return "Email ID is not valid";
    if (!passwordRegex) return "Password is not valid";

  
    return null;
}