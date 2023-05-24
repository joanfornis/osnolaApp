import React from 'react';


export default function ContactPage({Fancybox}) {

    Fancybox.bind("[data-fancybox]", {});

    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        // Update the document title using the browser API
        setLoading(false, '')
    }, [])

    return (
            <section className={`bg-orange w-full h-screen rounded-2xl p-6 ${loading ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-1'}`}>
                <h4>ContactPage Working OK👌</h4>

                <button data-fancybox data-src="#dialog-content" class="btn-primary">Launch Dialog</button>

                <dialog id="dialog-content" style={{display:'none'}}>

                    <h1 class="text-primary font-bold">Modal OK</h1>

                </dialog>
            </section>
    );
}