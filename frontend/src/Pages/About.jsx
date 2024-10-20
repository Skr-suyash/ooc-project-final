import React from "react";
import Navbar from "../Components/Navbar"
const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-5 bg-gray-100 text-gray-800">
        <Navbar/>
      <section className="mb-10" style={{marginTop:"50px"}}>
        <h1 className="text-4xl font-bold text-teal-600 mb-4">About Us</h1>
        <p className="leading-relaxed">
          At <strong>PickAPro</strong>, we believe that convenience and quality
          should never be compromised. Founded in 2018, our mission is simple:
          to bring skilled, professional services right to your doorstep with a
          single click. Whether it's home cleaning, beauty treatments, appliance
          repairs, or specialized services like plumbing and electrical work,
          PickAPro is your one-stop solution for all things home. We're more
          than just a service provider – we're here to improve your everyday
          life.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3">Our Story</h2>
        <p className="leading-relaxed mb-3">
          PickAPro was born out of the frustration of three friends who had one
          thing in common – a lack of reliable, hassle-free home services. Our
          founders, <strong>Aarav Sharma</strong>, a technology enthusiast,
          <strong>Ishita Kapoor</strong>, an advocate for skilled labor
          empowerment, and <strong>Kabir Mehta</strong>, an operations expert,
          knew there had to be a better way to connect customers with qualified
          professionals.
        </p>
        <p className="leading-relaxed">
          What started as a weekend project over coffee soon turned into a
          groundbreaking platform that now serves millions across the country.
          From major cities to smaller towns, PickAPro has revolutionized the
          way people book and receive home services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3">Our Mission</h2>
        <p className="leading-relaxed">
          Our mission is to{" "}
          <strong>empower people with dependable services</strong>, to make
          everyday life simpler and stress-free. We aim to be a platform that
          people can trust for quality, reliability, and affordability. We’re
          not just connecting you to professionals – we’re connecting you to
          better living.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3">Why PickAPro?</h2>
        <ul className="list-none space-y-3">
          <li>
            <strong>Vetted Professionals</strong>: Every service partner on our
            platform undergoes a rigorous background check and training to
            ensure you only get the best.
          </li>
          <li>
            <strong>Unmatched Quality</strong>: We use premium products and
            state-of-the-art tools to ensure the highest standard of service,
            whether it's a deep-clean or a quick AC repair.
          </li>
          <li>
            <strong>Customer-Centric</strong>: Your satisfaction is our top
            priority. Our easy-to-use app lets you book, schedule, and pay in
            minutes, while our customer support team is always available for any
            questions or concerns.
          </li>
          <li>
            <strong>Eco-Friendly Approach</strong>: We are committed to
            sustainability. From using eco-friendly cleaning products to
            promoting green solutions in appliance servicing, we take steps to
            reduce our environmental footprint.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3">Meet the Founders</h2>
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          <div className="flex-1 bg-white p-5 shadow-md">
            <h4 className="text-teal-600 font-semibold text-xl mb-2">
              Aarav Sharma
            </h4>
            <p className="leading-relaxed">
              With a background in software engineering and a deep passion for
              innovation, Aarav leads the technology and product team at
              PickAPro. His vision was to create a seamless platform that would
              redefine the way people book and experience home services.
            </p>
          </div>
          <div className="flex-1 bg-white p-5 shadow-md">
            <h4 className="text-teal-600 font-semibold text-xl mb-2">
              Ishita Kapoor
            </h4>
            <p className="leading-relaxed">
              A social entrepreneur at heart, Ishita is the driving force behind
              our service provider partnerships. She’s dedicated to empowering
              skilled workers and ensuring they are well-compensated for their
              expertise.
            </p>
          </div>
          <div className="flex-1 bg-white p-5 shadow-md">
            <h4 className="text-teal-600 font-semibold text-xl mb-2">
              Kabir Mehta
            </h4>
            <p className="leading-relaxed">
              An operational mastermind, Kabir ensures that PickAPro delivers on
              its promise of speed, quality, and reliability. From streamlining
              processes to overseeing logistics, his goal is to make every
              interaction with PickAPro as smooth as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3">Our Values</h2>
        <ul className="list-none space-y-3">
          <li>
            <strong>Trust</strong>: We believe trust is at the core of every
            service. That’s why we make sure every professional on our platform
            is thoroughly vetted and reviewed.
          </li>
          <li>
            <strong>Innovation</strong>: We continuously push the boundaries of
            what technology can do, making it easier and faster to get top-notch
            services.
          </li>
          <li>
            <strong>Sustainability</strong>: We believe in a future where
            high-quality service doesn’t come at the cost of the planet. We
            promote eco-friendly practices at every step.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3">Our Reach</h2>
        <p className="leading-relaxed">
          With over <strong>100,000</strong> satisfied customers and a growing
          team of over <strong>5,000 professionals</strong>, PickAPro is proud
          to be one of the fastest-growing platforms in the country. From
          bustling metros to suburban homes, we're committed to bringing the
          best services to your doorstep, no matter where you live.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3">Join Us</h2>
        <p className="leading-relaxed">
          Whether you're looking to book a service or want to join our
          ever-growing team of professionals, PickAPro is always just a click
          away. Let’s build a world where trusted, high-quality services are
          available to everyone, everywhere.
        </p>
        <p className="font-bold text-lg">
          Welcome to PickAPro – where service meets simplicity.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
