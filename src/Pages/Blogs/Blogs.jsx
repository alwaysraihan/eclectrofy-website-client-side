import React from "react";

const Blogs = () => {
    return (
        <div className="py-16 px-5 md:px-[20%]">
            {/* Question-1 */}
            <h1 className="text-4xl mb-3">
                How will you improve the performance of a React Application?
            </h1>
            <p className="text-xl">
                We can improve response performance through lazy loading.
                Something Content users will not be able to see when they visit
                our website. When they scroll down we should contact the server
                side api and load the data. And when we Call a API, we can save
                the necessary data from the api. We can keep the componet State
                is local. We do not use Heavy files.
            </p>
            {/* Question-2  */}
            <h1 className="text-4xl mt-5 mb-3">
                What are the different ways to manage a state in a React
                application?
            </h1>
            <p className="text-xl">
                The main difference between sql and nosql database is tahat, SQl
                is a relational database and nosql is a nor-relational database.
                SQL databases are table-based, while NoSQL databases are
                document based, SQL databases are better for multi-row data,
                while NoSQL is better for unstructured data like JSON.
            </p>
            {/* Question-3  */}
            <h1 className="text-4xl mt-5 mb-3">
                Why you do not set the state directly in React. For example, if
                you have const [products, setProducts] = useState([]). Why you
                do not set products = [...] instead, you use the setProducts
            </h1>
            <p className="text-xl">
                Basically Json Web Token(jwt) used for security purpose between
                two parties — a client and a server. JSON Web Token (JWT) is an
                open standard that defines a compact and self-contained way for
                securely transmitting information between parties as a JSON
                object. If we use JWT then our api data will be accesable for
                varified user . Without verify user can not able to acces data
                form api or sever side.
            </p>
            {/* Question-4  */}
            <h1 className="text-4xl mt-5 mb-3">
                You have an array of products. Each product has a name, price,
                description, etc. How will you implement a search to find
                products by name?
            </h1>
            <p className="text-xl">
                Basically Json Web Token(jwt) used for security purpose between
                two parties — a client and a server. JSON Web Token (JWT) is an
                open standard that defines a compact and self-contained way for
                securely transmitting information between parties as a JSON
                object. If we use JWT then our api data will be accesable for
                varified user . Without verify user can not able to acces data
                form api or sever side.
            </p>
            {/* Question-4  */}
            <h1 className="text-4xl mt-5 mb-3">
                What is a unit test? Why should write unit tests?
            </h1>
            <p className="text-xl">
                Basically Json Web Token(jwt) used for security purpose between
                two parties — a client and a server. JSON Web Token (JWT) is an
                open standard that defines a compact and self-contained way for
                securely transmitting information between parties as a JSON
                object. If we use JWT then our api data will be accesable for
                varified user . Without verify user can not able to acces data
                form api or sever side.
            </p>
        </div>
    );
};

export default Blogs;
