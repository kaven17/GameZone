

import { useNavigate } from 'react-router-dom';

const stats = [
  { id: 1, name: "Games Sold", value: "1M+" },
  { id: 2, name: "Active Players", value: "500K+" },
  { id: 3, name: "Countries Reached", value: "120+" },
];



export default function Home() {

  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('./dashboard');
  };
  return (
<div>
    <div className="bg-gradient-to-r from-red-900 to-black shadow-lg">
  <div className="container mx-auto flex justify-between items-center py-4 px-6">
    <h1 className="text-white text-2xl font-bold flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-red-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-11h2v4h-2zm0 5h2v2h-2z"/>
        <path fill="none" d="M0 0h24v24H0z"/>
      </svg>
      GameZone
    </h1>
    <nav className="flex gap-6">
      <a href="#" className="text-gray-200 hover:text-red-500 transition">Games</a>
      <a href="#" className="text-gray-200 hover:text-red-500 transition">Hardware</a>
      <a href="#" className="text-gray-200 hover:text-red-500 transition">Accessories</a>
      <a href="#" className="text-gray-200 hover:text-red-500 transition">Community</a>
    </nav>
    <div className="flex items-center space-x-4">
      <button className="text-gray-200 hover:text-red-500 transition" title="Cart">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </button>
      <button 
          onClick={handleShopNow}
          className="bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Shop Now
        </button>
    </div>
  </div>
</div>
<div className="relative h-screen w-full bg-gradient-to-br from-red-900 to-black flex items-center justify-center text-center py-12 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-800/20 via-black/30 to-black"></div>
      </div>
      <div className="relative z-10 px-4 max-w-6xl w-full">
        <div className="bg-gray-800/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700 p-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Elevate Your Gaming Experience
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto">
            Discover cutting-edge gaming gear, exclusive titles, and immersive hardware that transforms your play.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <button className="bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Shop Now
            </button>
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/70 rounded-2xl p-6 text-left border border-gray-700 hover:bg-gray-800/90 transition duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 mb-4 group-hover:text-red-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-bold text-white mb-2">Latest Games</h3>
              <p className="text-gray-400">Explore the newest and most exciting game releases.</p>
            </div>
            <div className="bg-gray-800/70 rounded-2xl p-6 text-left border border-gray-700 hover:bg-gray-800/90 transition duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 mb-4 group-hover:text-red-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <h3 className="text-xl font-bold text-white mb-2">Gaming Hardware</h3>
              <p className="text-gray-400">High-performance gear for serious gamers.</p>
            </div>
            <div className="bg-gray-800/70 rounded-2xl p-6 text-left border border-gray-700 hover:bg-gray-800/90 transition duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 mb-4 group-hover:text-red-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2v-6a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2zm0 0v-6a2 2 0 012-2h4a2 2 0 012 2v6M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M8 7h8V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2z" />
              </svg>
              <h3 className="text-xl font-bold text-white mb-2">Accessories</h3>
              <p className="text-gray-400">Enhance your gaming setup with premium accessories.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-black to-red-900 shadow-lg">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Boost your Gaming experience. Start using our app today.
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-black to-red-900 shadow-lg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="mx-auto flex max-w-xs flex-col gap-y-4 transition-all duration-300 hover:scale-105 hover:shadow-xl p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-red-100 shadow-red-100/50 shadow-lg"
            >
              <dt className="text-base/7 text-red-800 uppercase tracking-wide font-medium">
                {stat.name}
              </dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-red-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-black text-white">
  {/* Contact Form Section */}
  <div className="container mx-auto px-4 py-16">
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-900 to-black p-8 rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
      <form 
        action="https://api.web3forms.com/submit" 
        method="POST" 
        className="space-y-6"
      >
        {/* Web3Forms Access Key */}
        <input 
          type="hidden" 
          name="access_key" 
          value="YOUR_ACCESS_KEY_HERE" 
        />

        {/* Honeypot Spam Protection */}
        <input 
          type="checkbox" 
          name="botcheck" 
          className="hidden" 
          title="Botcheck" 
          placeholder="Botcheck" 
        />

        {/* Name Input */}
        <div>
          <label className="block mb-2 text-sm text-gray-300">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 bg-white/10 border border-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
            placeholder="Your Name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block mb-2 text-sm text-gray-300">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-white/10 border border-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
            placeholder="your@email.com"
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label className="block mb-2 text-sm text-gray-300">Your Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 bg-white/10 border border-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        {/* Optional: Redirect to a thank you page */}
        {/* 
        <input 
          type="hidden" 
          name="redirect" 
          value="https://yourwebsite.com/thanks.html" 
        /> 
        */}

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full py-4 bg-red-800 text-white rounded-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>

  {/* Footer Section */}
  <footer className="bg-gradient-to-r from-blue-900 to-black text-white py-12">
    <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
      {/* Company Info */}
      <div>
        <h3 className="text-xl font-bold mb-4">Company Name</h3>
        <p className="text-gray-300">
          Your brief company description goes here. Connect with us for innovative solutions.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="font-semibold mb-4">Contact Info</h4>
        <ul className="space-y-2">
          <li className="text-gray-300">123 Business Street</li>
          <li className="text-gray-300">City, State 12345</li>
          <li className="text-gray-300">hello@company.com</li>
          <li className="text-gray-300">(123) 456-7890</li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h4 className="font-semibold mb-4">Stay Updated</h4>
        <p className="text-gray-300 mb-4">
          Subscribe to our newsletter for latest updates
        </p>
        <div className="flex">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full px-4 py-2 rounded-l-lg bg-blue-950 text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
          <button className="bg-red-800 px-4 rounded-r-lg hover:bg-red-700 transition duration-300">
            Send
          </button>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-blue-800 mt-8 pt-6 text-center">
      <p className="text-gray-400">
        © 2024 Company Name. All Rights Reserved.
      </p>
    </div>
  </footer>
</div>
    

  );
}

