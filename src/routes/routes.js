import App from "../App";
import Login from "../pages/Login";
import Posts from "../pages/posts/Posts";
const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/posts',
                element: <Posts />
            },
            {
                path: '/register',
                element: 'register'
            },
            {
                path: '/login',
                element: <Login/>
            },
        ]
    },

]);

export default router;