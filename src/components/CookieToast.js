import React from "react";


export default function CookieToast({Fancybox}) {


  const [cookie, setCookie] = React.useState(localStorage.getItem("cookie"));
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
      // Update the document title using the browser API
      setTimeout(() => {setLoading(false, '')}, 3000);
  }, [])

  if (cookie !== 'true') {
    function addCookie() {
      setCookie('true')
      localStorage.setItem("cookie",true)
    }

    Fancybox.bind("[data-fancybox='cookie-policy']", {});

    return (
      <>
        <dialog id="cookie-policy" style={{display:'none',maxWidth:'1280px',padding:'2rem',margin:'1rem'}}>
          <h2 className="text-primary font-bold text-2xl mb-4">Política de cookies 🔒</h2>
          <i>Last updated Sept.2023</i>

          <br/>

          <p>This Cookie Policy explains how Osnola Fincas, uses cookies and similar technologies to recognize you when you visit our websites at https://osnolafincas.es. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>

          <p>In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.</p>

          <br/>

          <h3>What are cookies?</h3>
          <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>

          <p>Cookies set by the website owner Osnola Fincas are called “first party cookies”. Cookies set by parties other than the website owner are called “third party cookies”. Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.</p>

          <br/>

          <h3>Why do we use cookies?</h3>
          <p>We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as “essential” or “strictly necessary” cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Websites for advertising, analytics and other purposes. This is described in more detail below.</p>

          <p>The specific types of first and third party cookies served through our Websites and the purposes they perform are described below (please note that the specific cookies served may vary depending on the specific Online Properties you visit)</p>

          <br/>

          <h3>How can I control cookies?</h3>
          <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.</p>

          <p>The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.</p>

          <p>In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit https://optout.aboutads.info/ or https://www.youronlinechoices.com/.</p>

          <p>The specific types of first and third party cookies served through our Websites and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Online Properties you visit)</p>

          <br/>

          <h3>Performance and functionality cookies:</h3>
          <p>These cookies are used to enhance the performance and functionality of our Websites but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.</p>

          {/*<ul>
          <li>Name: pll_language</li>
          <li>Purpose: The pll_language cookie is used by Polylang to remember the language selected by the user when returning to the website, and also to get the language information when not available in another way.</li>
          <li>Provider: Polylang</li>
          <li>Service: https://polylang.pro/privacy-policy/</li>
          <li>Country: France</li>
          <li>Type: Functional</li>
          <li>Expires in: 1 year</li>
          </ul>

          <ul>
          <li>Name: __cf_bm</li>
          <li>Purpose: This cookie, set by Cloudflare, is used to support Cloudflare Bot Management.	</li>
          <li>Provider: Vimeo</li>
          <li>Service: https://vimeo.com/privacy</li>
          <li>Country: United States</li>
          <li>Type: Functional</li>
          <li>Expires in: 30 minutes</li>
          </ul>*/}

          <br/>

          <h3>What about other tracking technologies, like web beacons?</h3>
          <p>Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called “tracking pixels” or “clear gifs”). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Websites or opened an e-mail including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of e-mail marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.</p>

          <br/>

          <h3>Do you use Flash cookies or Local Shared Objects?</h3>
          <p>Websites may also use so-called “Flash Cookies” (also known as Local Shared Objects or “LSOs”) to, among other things, collect and store information about your use of our services, fraud prevention and for other site operations.</p>

          <p>If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the Website Storage Settings Panel. You can also control Flash Cookies by going to the Global Storage Settings Panel and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to “information” on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).</p>

          <p>Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.</p>

          <br/>

          <h3>Do you serve targeted advertising?</h3>
          <p>Third parties may serve cookies on your computer or mobile device to serve advertising through our Websites. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. This can be accomplished by them using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details or other details that directly identify you unless you choose to provide these.</p>

          <br/>

          <h3>How often will you update this Cookie Policy?</h3>
          <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>

          <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>

          <br/>

          <h3>Where can I get further information?</h3>
          <p>If you have any questions about our use of cookies or other technologies, please email us at:</p>

          <ul>
          <li>Name: Osnola Fincas</li>
          <li>Location: Barcelona (Spain)</li>
          <li>Email: info@osnolafincas.es</li>
          </ul>

        </dialog>

        <div className={`bg-dark text-white fixed w-full z-10 p-7 rounded-t-xl sm:max-w-[350px] sm:right-6 ${loading ? '-bottom-[400px]' : 'bottom-0'}`}>
            <p class="font-josefin text-xl pb-3">Política de cookies 🍪</p>
            <p class="text-sm border-t-2 border-primary pt-3" >Si continúa navegando en este sitio web está aceptando el uso de cookies explicadas en nuestra <a class="underline cursor-pointer" data-fancybox="cookie-policy" data-src="#cookie-policy">política de cookies</a>.</p>
            <button onClick={addCookie} class="w-full border-white border-[3px] rounded-md mt-4 py-2 px-6 text-white font-bold hover:bg-dark-light active:bg-gray active:text-dark">Aceptar</button>
        </div>
      </>
        
    );
  }

  
}
