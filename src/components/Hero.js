

export default function Hero(params) {
  return (
    <>
      <div className={`bg-dark text-white py-12 relative  ${params.heading ? 'min-h-[600px]' : 'min-h-[400px]'}`}>
        <figure>
          <img src={params.background} alt="image" className="absolute w-full h-full top-0 left-0 object-cover"/>
        </figure>
        <div className=" bottom-0 left-0">
          {params.children}
        </div>
        {params.heading ?
          <div className="absolute w-full bottom-0 left-0 bg-black bg-opacity-30 pb-2 md:pb-2 md:px-6">
            <div class="container flex justify-between items-center">
              <h1 className="font-merri font-bold max-w-[450px] text-4xl leading-[3rem]" dangerouslySetInnerHTML={{__html: params.heading}}></h1>
              <button className="absolute -bottom-8 right-10 w-16 h-16 bg-black bg-opacity-50 rounded-full p-5 py-6 md:static md:w-20 md:h-20 md:p-6 md:py-7">
                <img src="/assets/icons/arrow-white-down.svg" alt="arrow-down" className="animate-bounce"/>
              </button>
            </div>
          </div>
          : ''
        }
      </div>
    </>
  );
}
