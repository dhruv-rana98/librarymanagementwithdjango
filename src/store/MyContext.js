import React from "react";

const defaultvalue = { isLoggedIn: false, login: () => {}, logout: () => {} };
const MyContext = React.createContext(defaultvalue);

export default MyContext;
