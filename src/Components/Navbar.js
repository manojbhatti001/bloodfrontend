import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Blood Donation</h1>
      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/emergency-blood">Emergency Blood</Link></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
// import { Link } from "react-router-dom"
// import { PhoneCall, Mail, MapPin, Facebook, Twitter, Instagram, Droplet, Heart, Users, Calendar } from "lucide-react"

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="bg-white shadow-md">
//         <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//           <Link to="/" className="flex items-center">
//             <img src="https://via.placeholder.com/50x50" alt="Logo" className="h-10 w-10 mr-2" />
//             <span className="text-xl font-bold text-red-600">BloodLife</span>
//           </Link>
//           <div className="hidden md:flex space-x-4">
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/about">About</NavLink>
//             <NavLink to="/donate">Donate</NavLink>
//             <NavLink to="/find">Find Blood</NavLink>
//             <NavLink to="/contact">Contact</NavLink>
//           </div>
//           <button className="md:hidden">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative py-20 md:py-32 overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://via.placeholder.com/1920x1080"
//             alt="Blood Donation"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-red-900 opacity-75"></div>
//         </div>
//         <div className="container mx-auto px-4 relative z-10 text-white">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">Every Drop Counts</h1>
//             <p className="text-xl md:text-2xl mb-8">
//               Join our mission to save lives through blood donation. Your contribution can make a world of difference.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <button className="px-8 py-3 bg-white text-red-600 rounded-full font-bold hover:bg-gray-100 transition duration-300">
//                 Become a Donor
//               </button>
//               <button className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-red-700 transition duration-300">
//                 Find Blood
//               </button>
//             </div>
//           </div>
//         </div>
//         <BloodDropAnimation />
//       </section>

//       {/* Feature Cards */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-8">
//             <FeatureCard
//               title="Looking for Blood?"
//               description="Find blood donors in your area quickly and easily. Our platform connects you with willing donors to help in your time of need."
//               icon={<Droplet className="w-12 h-12 text-red-600" />}
//               link="/search-blood"
//             />
//             <FeatureCard
//               title="Want to Donate Blood?"
//               description="Become a hero by donating blood. Your simple act of kindness can save up to three lives and make a lasting impact on your community."
//               icon={<Heart className="w-12 h-12 text-red-600" />}
//               link="/donate-blood"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Why Donate Blood? */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Donate Blood?</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <ReasonCard
//               icon={<Heart className="w-12 h-12 text-red-600" />}
//               title="Save Lives"
//               description="A single donation can save up to three lives, providing hope to accident victims, surgical patients, and those battling cancer."
//             />
//             <ReasonCard
//               icon={<Users className="w-12 h-12 text-red-600" />}
//               title="Community Impact"
//               description="By donating blood, you're strengthening your community and ensuring that blood is available when emergencies strike."
//             />
//             <ReasonCard
//               icon={<Calendar className="w-12 h-12 text-red-600" />}
//               title="Regular Need"
//               description="Blood is needed every two seconds. Regular donations ensure a stable supply for ongoing treatments and unexpected crises."
//             />
//           </div>
//         </div>
//       </section>

//       {/* Blood Donation Photo Gallery */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact in Pictures</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             <GalleryImage src="https://via.placeholder.com/600x400" alt="Blood donation event 1" />
//             <GalleryImage
//               src="https://via.placeholder.com/600x800"
//               alt="Blood donation event 2"
//               className="row-span-2"
//             />
//             <GalleryImage src="https://via.placeholder.com/600x400" alt="Blood donation event 3" />
//             <GalleryImage src="https://via.placeholder.com/600x400" alt="Blood donation event 4" />
//             <GalleryImage
//               src="https://via.placeholder.com/600x800"
//               alt="Blood donation event 5"
//               className="row-span-2"
//             />
//             <GalleryImage src="https://via.placeholder.com/600x400" alt="Blood donation event 6" />
//             <GalleryImage src="https://via.placeholder.com/600x400" alt="Blood donation event 7" />
//             <GalleryImage src="https://via.placeholder.com/600x400" alt="Blood donation event 8" />
//           </div>
//           <div className="text-center mt-8">
//             <button className="px-6 py-3 border-2 border-red-600 text-red-600 rounded-full font-bold hover:bg-red-600 hover:text-white transition duration-300">
//               View All Photos
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Donor Testimonials</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <TestimonialCard
//               quote="Donating blood makes me feel like a real-life superhero. It's such a simple act, but it has an incredible impact."
//               author="Sarah Johnson"
//               role="Regular Donor"
//             />
//             <TestimonialCard
//               quote="After receiving blood during my surgery, I knew I had to give back. Now, I donate whenever I can."
//               author="Michael Chen"
//               role="Grateful Recipient"
//             />
//             <TestimonialCard
//               quote="The staff at the donation center always make me feel comfortable and appreciated. It's a great experience every time."
//               author="Emily Rodriguez"
//               role="First-Time Donor"
//             />
//           </div>
//         </div>
//       </section>

//       {/* CTA Banner */}
//       <section className="bg-red-600 py-12">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
//           <p className="text-xl text-white mb-8">Your donation can save lives. Schedule an appointment today!</p>
//           <button className="px-8 py-3 bg-white text-red-600 rounded-full font-bold hover:bg-gray-100 transition duration-300">
//             Schedule Donation
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4">BloodLife</h3>
//               <p className="text-gray-300">
//                 Connecting donors with those in need since 2020. Our mission is to ensure that blood is available to
//                 everyone who needs it.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link to="/" className="text-gray-300 hover:text-white">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/about" className="text-gray-300 hover:text-white">
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/donate" className="text-gray-300 hover:text-white">
//                     Donate Blood
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/find" className="text-gray-300 hover:text-white">
//                     Find Blood
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/contact" className="text-gray-300 hover:text-white">
//                     Contact Us
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-4">Contact Information</h3>
//               <address className="not-italic text-gray-300 space-y-2">
//                 <div className="flex items-center">
//                   <MapPin className="h-5 w-5 mr-2" />
//                   <span>123 Blood Donation Street, City, Country</span>
//                 </div>
//                 <div className="flex items-center">
//                   <PhoneCall className="h-5 w-5 mr-2" />
//                   <span>+1 (123) 456-7890</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Mail className="h-5 w-5 mr-2" />
//                   <span>contact@bloodlife.org</span>
//                 </div>
//               </address>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-4">Follow Us</h3>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-300 hover:text-white">
//                   <Facebook className="h-6 w-6" />
//                 </a>
//                 <a href="#" className="text-gray-300 hover:text-white">
//                   <Twitter className="h-6 w-6" />
//                 </a>
//                 <a href="#" className="text-gray-300 hover:text-white">
//                   <Instagram className="h-6 w-6" />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//             <p>© {new Date().getFullYear()} BloodLife. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// function NavLink({ to, children }) {
//   return (
//     <Link to={to} className="text-gray-600 hover:text-red-600 transition duration-300">
//       {children}
//     </Link>
//   )
// }

// function FeatureCard({ title, description, icon, link }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
//       <div className="p-6">
//         <div className="mb-4">{icon}</div>
//         <h3 className="text-xl font-bold mb-2">{title}</h3>
//         <p className="text-gray-700 mb-4">{description}</p>
//       </div>
//       <div className="mt-auto p-6 pt-0">
//         <Link to={link} className="block w-full">
//           <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition duration-300">
//             Learn More
//           </button>
//         </Link>
//       </div>
//     </div>
//   )
// }

// function ReasonCard({ icon, title, description }) {
//   return (
//     <div className="bg-gray-100 rounded-lg p-6 text-center hover:shadow-md transition duration-300">
//       <div className="mb-4 flex justify-center">{icon}</div>
//       <h3 className="text-xl font-bold mb-2">{title}</h3>
//       <p className="text-gray-700">{description}</p>
//     </div>
//   )
// }

// function GalleryImage({ src, alt, className = "" }) {
//   return (
//     <div className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow ${className}`}>
//       <img
//         src={src || "/placeholder.svg"}
//         alt={alt}
//         className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//       />
//     </div>
//   )
// }

// function TestimonialCard({ quote, author, role }) {
//   return (
//     <div className="bg-gray-100 rounded-lg p-6 shadow-md">
//       <p className="text-gray-700 mb-4 italic">"{quote}"</p>
//       <div className="font-bold">{author}</div>
//       <div className="text-gray-600">{role}</div>
//     </div>
//   )
// }

// function BloodDropAnimation() {
//   return (
//     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
//       <svg
//         className="animate-bounce"
//         width="50"
//         height="50"
//         viewBox="0 0 100 100"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"
//           fill="#FF0000"
//         />
//       </svg>
//     </div>
//   )
// }

