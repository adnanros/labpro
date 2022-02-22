import {  Redirect } from 'react-router-dom'

const UnknownRoute = (props: any) => {
   return <Redirect to="/404" />;
};


export default  UnknownRoute