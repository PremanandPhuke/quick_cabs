import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="App">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Luxury Cars"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full p-6 bg-transparent flex justify-between items-center z-20">
          <div className="text-yellow-400 text-2xl font-bold">QuickCabs</div>
          <ul className="flex space-x-6 text-white">
            <li><a href="#about" className="hover:text-yellow-400 transition duration-300">About</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition duration-300">Contact</a></li>
            <li><a href="#login" className="hover:text-yellow-400 transition duration-300">Login/Signup</a></li>
          </ul>
        </nav>


        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in-down">
            Welcome to <span className="text-yellow-400">QuickCabs</span>
          </h1>
          <p className="text-xl mb-8 animate-fade-in-up">
            Your premium ride, anytime, anywhere.
          </p>
          <Link to='/login' className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition duration-300 animate-bounce">
            Book Now
          </Link>
        </div>
      </div>

      {/* 1. Book Your First Trial Ride */}
      <div className="py-20 bg-gray-100 min-h-screen" id="book-ride">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Section - Map */}
            <div className="animate-fade-in-left flex justify-center ">
              <img
              
                src="https://i.pinimg.com/474x/e2/8b/53/e28b530fe6e9e5e336f534cb78171617.jpg"
                alt="Map of India"
                className="w-[350px] h-[600px] rounded-lg shadow-xl"
              />
            </div>

            {/* Right Section - Form */}
            <div className="animate-fade-in-right">
              <h2 className="text-4xl font-bold mb-6">Book Your First Trial Ride</h2>
              <p className="text-lg mb-6">Experience the comfort and luxury with your first ride! Just fill out the details below to book your ride.</p>

              <form className="space-y-6">
                {/* Starting Destination */}
                <div className="mb-6">
                  <label htmlFor="start" className="block text-lg font-semibold mb-2">Starting Destination</label>
                  <input
                    type="text"
                    id="start"
                    placeholder="Enter starting point"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                {/* Final Destination */}
                <div className="mb-6">
                  <label htmlFor="end" className="block text-lg font-semibold mb-2">Final Destination</label>
                  <input
                    type="text"
                    id="end"
                    placeholder="Enter final destination"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                {/* Vehicle Selection */}
                <div className="mb-6">
                  <label htmlFor="vehicle" className="block text-lg font-semibold mb-2">Select Vehicle</label>
                  <select
                    id="vehicle"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="bike">Bike</option>
                    <option value="car">Car</option>
                    <option value="cycle">Cycle</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
                >
                  Book Ride
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

       {/* 2. What Are We and What We Do */}
       <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="animate-fade-in-right">
              <h2 className="text-4xl font-bold mb-6">What Are We and What We Do</h2>
              <p className="text-lg mb-4">
                QuickCabs is a premium ride-hailing service that connects you with luxury vehicles and professional drivers. Whether you need a ride to the airport, a business meeting, or a night out, we’ve got you covered.
              </p>
              <p className="text-lg">
                Our mission is to provide a seamless, comfortable, and stylish travel experience for every customer.
              </p>
            </div>

            <div className="animate-fade-in-left">
              <img
                src="https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="What We Do"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Unique Features */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Unique Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4">Luxury Vehicles</h3>
              <p>Travel in style with our fleet of premium cars.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-200">
              <h3 className="text-2xl font-bold mb-4">Professional Drivers</h3>
              <p>Our drivers are trained to provide a safe and comfortable ride.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-400">
              <h3 className="text-2xl font-bold mb-4">24/7 Support</h3>
              <p>We’re here for you anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. What People Say About Us */}
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">What People Say About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-fade-in-left">
              <p className="text-lg mb-4">"QuickCabs is the best ride-hailing service I’ve ever used. The cars are luxurious, and the drivers are always on time!"</p>
              <p className="font-bold">- John Doe</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-fade-in-up">
              <p className="text-lg mb-4">"I love how easy it is to book a ride with QuickCabs. The app is user-friendly, and the service is top-notch."</p>
              <p className="font-bold">- Jane Smith</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-fade-in-right">
              <p className="text-lg mb-4">"QuickCabs has made my daily commute so much more comfortable. Highly recommend!"</p>
              <p className="font-bold">- Mike Johnson</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Feedback Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">We’d Love to Hear From You</h2>
          <form className="max-w-2xl mx-auto animate-fade-in-up">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Feedback"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>

      {/* 6. Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">QuickCabs</h3>
              <p>Your premium ride, anytime, anywhere.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:text-yellow-400">Home</a></li>
                <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400">Services</a></li>
                <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <p>Email: support@quickcabs.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Home