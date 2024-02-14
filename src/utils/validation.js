


export const validation = (email, password) => {
    
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)

    if (!isEmailValid) return "! Email is not valid"
    if (!isPasswordValid)  return "! Password is not valid"

    return null;
}