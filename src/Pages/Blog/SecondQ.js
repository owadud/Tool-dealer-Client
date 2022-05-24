import React from 'react';
import './Blog.css';


const SecondQ = () => {
    return (
        <div className="blog">
            <h1 className="text-2xl text-center py-5 text-blue-500">2. What are the different ways to manage a state in a React apppcation?</h1>
            <div class="bg-base-300 text-center">
                
                    <h5 className="text-xl text-bold ">The Four Kinds of React State to Manage</h5>
                    <div class="overflow-x-auto my-5">
                        <table class="table w-full">
                            
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Types of React State</th>
                                    <th>Short Description</th>
                                   
                                    
                                </tr>
                            </thead>
                            <tbody>
                               
                                <tr>
                                    <th>1</th>
                                    <td>Local state</td>
                                    <td>Local state is most often managed in React using the useState hook.</td>
                                   
                                   
                                </tr>
                               
                                <tr class="hover">
                                    <th>2</th>
                                    <td>Global (UI) state</td>
                                    <td>Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</td>
                                    
                                </tr>
                               
                                <tr>
                                    <th>3</th>
                                    <td>Server state</td>
                                    <td>Server state is a simple concept but There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.</td>
                                   
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>URL state</td>
                                    <td>Data that exists on our URLs, including the pathname and query parameters. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</td>
                                   
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="divider">OR</div>
                <div className="w-3/4 mx-auto ">
                    <h5 className='text-xl text-bold'>Way To Manage</h5>
                    <div className='text-dark-500 py-5'>
                   
                        <p>1. Local State- useState is the first tool but you can use another one useReducer.</p>
                        <p>2. Global State - Use Zustand,The benefit of a pbrary pke Zustand is that it is small, makes your entire global state a custom hook, and to read or update state, you just call this hook in your components. </p>
                        <p>3. Server- There are a couple of great pbraries that make data fetching in React a breeze: SWR and React Query.</p>
                        <p>4. URL- If you are using React Router, you can get all the information you need using useHistory or useLocation.If you are using Next.js, almost everything can access directly from calpng useRouter.</p>
                    
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SecondQ;