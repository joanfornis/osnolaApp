import React from 'react';
import ContactForm from './../services/ContactForm';
import Hero from './../components/Hero'
import ContactPageStyle from './ContactPage.module.scss'


export default function ContactPage({Fancybox}) {

    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        // Update the document title using the browser API
        setLoading(false, '')
    }, [])

    return (

        <>
        
        <a href="/" className="pointer-events-none md:pointer-events-auto">
            <img src="/assets/logos/osnola-logo-primary.svg" alt="logo" className="mainlogo absolute z-10 top-0 w-[170px] h-[170px] p-4 opacity-0 md:opacity-100 brightness-[500]"/>
        </a>

        <section className={`bg-gray w-full ${loading ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-1'} ${ContactPageStyle}`}>

            <Hero background='/assets/images/contact-background.jpg'/>

            <div class="container">
                <h4 className="text-3xl titleribbon mb-6">CONTACTO</h4>
                <ContactForm Fancybox={Fancybox}/>
            </div>
            

        </section>
        
        
        </>

        
    );
}