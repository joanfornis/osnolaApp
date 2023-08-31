import React from 'react';
import { useNavigate } from "react-router-dom";

export default function PropertyDetailPage({title, closeDetailPageFromChild}) {


    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => { 
      setLoading(false, '')
    }, [])


    const closeDetailPage = () => {
    	closeDetailPageFromChild();

  	}


    return (

        <div class="p-4 fixed z-10 top-0 left-0 h-screen w-full margin-auto flex align-center bg-black bg-opacity-50">
            <section className={`rounded-xl bg-white p-6 py-10 overflow-y-auto ${loading ? 'opacity-0 scale-90' : 'opacity-1 scale-100'}`}>

                <button className="absolute right-8 top-8 text-4xl" onClick={(e) => closeDetailPage() }>✖</button>

                <h3>Detailpage</h3>
                <h1 className="leanding-normal">{title}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </section>
        </div>
        
        
    );
}