"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Award, Coffee, Feather, Smile, Sparkles, Star, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLarge"
        background="fluid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "About",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Team",          id: "#team"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "Pricing",          id: "#pricing"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Wendy's Barbershop"
    />
  </div>

  <div id="home" data-section="home">
      <HeroCarouselLogo
      logoText="Wendy's Barbershop"
      description="Your Style, Our Expertise. Precision Cuts & Classic Shaves for the Modern Gentleman."
      buttons={[
        {
          text: "Book Now",          href: "#contact"},
        {
          text: "View Services",          href: "#services"},
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/male-barber-giving-his-client-nice-haircut_23-2149186489.jpg",          imageAlt: "Modern barbershop interior with empty chairs"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/male-chef-sharpening-his-knives_23-2148763170.jpg",          imageAlt: "Barber giving a precision haircut"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/professional-hairdresser-modeling-beard-barbershop-close-up-photo_613910-18422.jpg",          imageAlt: "Client enjoying a hot lather beard shave"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/comfortable-old-fashioned-chair-rustic-antique-elegance-indoors-generated-by-ai_188544-29043.jpg",          imageAlt: "Classic barbershop exterior with vintage sign"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/kid-getting-haircut-front-view_23-2149870361.jpg",          imageAlt: "Happy child getting a haircut"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-bearded-tattooed-caucasian-black-indian-men-drinking-craft-beer-microbrewery_613910-2198.jpg",          imageAlt: "Diverse group of men in a lively barbershop atmosphere"},
      ]}
      autoplayDelay={4000}
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      title="About Cut N Go"
      description="At Wendy's Barbershop at Cut N Go, we're dedicated to providing top-notch grooming services in a friendly and welcoming atmosphere. With years of experience, our skilled barbers ensure every client leaves looking and feeling their best. From classic cuts to modern fades, we've got your style covered."
      bulletPoints={[
        {
          title: "Expert Barbers",          description: "Our team boasts seasoned professionals passionate about their craft, ensuring you get the best cut every time.",          icon: Users,
        },
        {
          title: "Relaxed Atmosphere",          description: "Enjoy a comfortable and inviting space where you can unwind and get pampered.",          icon: Coffee,
        },
        {
          title: "Quality Products",          description: "We use only the finest grooming products to enhance your look and maintain healthy hair and skin.",          icon: Feather,
        },
        {
          title: "Customer Satisfaction",          description: "Your happiness is our priority. We listen to your needs and strive to exceed expectations.",          icon: Smile,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/detail-hair-dresser-with-tools_23-2148108848.jpg"
      imageAlt="Barber working on a client's hair with focus and precision"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Mens Cut",          description: "Classic and contemporary haircuts tailored to your style.",          imageSrc: "http://img.b2bpic.net/free-photo/neon-portrait-young-attractive-man_158595-5145.jpg",          imageAlt: "Man getting a classic haircut from a barber"},
        {
          title: "Beard Trim",          description: "Precision beard trimming and shaping to perfect your facial hair.",          imageSrc: "http://img.b2bpic.net/free-photo/thoughtful-bearded-mans-face-isolated_171337-17260.jpg",          imageAlt: "Barber trimming a man's beard"},
        {
          title: "Fade Cut",          description: "Modern fade cuts from skin fades to tapers, expertly blended.",          imageSrc: "http://img.b2bpic.net/free-photo/tattoo-salon-process-process-getting-tattoo-body-man-tattoo-parlor_1321-3361.jpg",          imageAlt: "Man with a fresh fade haircut"},
        {
          title: "Head Shave",          description: "A smooth and clean head shave with hot lather and straight edge.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-hairdresser-washing-man-s-hair_23-2150665396.jpg",          imageAlt: "Barber giving a head shave with a straight razor"},
        {
          title: "Kids' Cuts",          description: "Fun and stylish haircuts for boys, ensuring they leave looking sharp.",          imageSrc: "http://img.b2bpic.net/free-photo/back-view-hairstyling-giving-haircut_23-2148506367.jpg",          imageAlt: "Child happily getting a haircut"},
        {
          title: "Hot Lather Shave",          description: "The ultimate classic experience: hot lather, hot towels, and a straight-edge shave.",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-man-getting-groomed_23-2150668469.jpg",          imageAlt: "Client enjoying a hot lather shave"},
      ]}
      title="Our Signature Services"
      description="Experience the best in grooming with our comprehensive range of services, tailored to perfection."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      groups={[
        {
          id: "barber-team",          groupTitle: "The Grooming Experts",          members: [
            {
              id: "wendy",              title: "Wendy, Owner & Master Barber",              subtitle: "20+ Years Experience",              detail: "With an eye for detail and a passion for perfection, Wendy leads our team, ensuring every cut is a masterpiece.",              imageSrc: "http://img.b2bpic.net/free-photo/man-getting-his-hair-cut-barber-shop4_23-2149186458.jpg",              imageAlt: "Portrait of Wendy, owner and master barber"},
            {
              id: "john",              title: "John, Senior Barber",              subtitle: "10+ Years Experience",              detail: "John specializes in classic cuts and meticulous beard trims, known for his friendly demeanor and precise hand.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-handsome-stylish-redhead-biker-black-leather-jacket-holds-motorcycle-helmet-posing-studio-isolated-dark-background_613910-5351.jpg",              imageAlt: "Portrait of John, a senior barber"},
            {
              id: "mike",              title: "Mike, Barber & Stylist",              subtitle: "5+ Years Experience",              detail: "Mike brings a modern touch to traditional styles, staying updated on the latest trends and techniques.",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-stylish-bearded-male-with-tattoo-arm-dressed-flannel-shirt-drinks-coffee-barbershop_613910-14697.jpg",              imageAlt: "Portrait of Mike, a stylish barber"},
          ]
        }
      ]}
      title="Meet Our Talented Barbers"
      description="Our team of experienced and passionate barbers are here to craft your perfect look."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Michael Chen",          role: "Regular Client",          company: "Local Business Owner",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/latino-hair-salon-owner-taking-care-client_23-2150286034.jpg",          imageAlt: "Michael Chen, a satisfied client"},
        {
          id: "2",          name: "David Kim",          role: "Happy Customer",          company: "Manchester Resident",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-grooming-their-client_23-2149205928.jpg",          imageAlt: "David Kim, a client pleased with his beard trim"},
        {
          id: "3",          name: "Robert Johnson",          role: "Loyal Patron",          company: "Community Member",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/professional-barber-finished-grooming-long-gray-beard_23-2148181941.jpg",          imageAlt: "Robert Johnson, a senior client"},
        {
          id: "4",          name: "Emily Rodriguez",          role: "New Client",          company: "Student",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-curly-haired-woman-makes-hopeful-please-gesture-smiles-gladfully-keeps-eyes-closed-wears-spectacles-turtleneck-leather-jacket-isolated-pink-background-makes-wish-prays-about-something_273609-57434.jpg",          imageAlt: "Emily Rodriguez, a young client with a stylish cut"},
        {
          id: "5",          name: "Sarah Lee",          role: "Client",          company: "Local Professional",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-using-dryer-beard-man_23-2147737033.jpg",          imageAlt: "Sarah Lee, a woman with a fresh clipper cut"},
      ]}
      title="What Our Clients Say"
      description="Don't just take our word for it – hear from our happy customers!"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "standard-cut",          badge: "Popular",          price: "$30",          subtitle: "Classic Haircut",          features: [
            "Precision Haircut",            "Neck Shave",            "Hot Towel Finish"],
          badgeIcon: Star,
        },
        {
          id: "cut-beard",          badge: "Best Value",          price: "$50",          subtitle: "Haircut + Beard Trim",          features: [
            "Precision Haircut",            "Beard Shaping & Trim",            "Hot Lather Finish",            "Style Consultation"],
          badgeIcon: Sparkles,
        },
        {
          id: "full-grooming",          badge: "Premium",          price: "$75",          subtitle: "Full Grooming Package",          features: [
            "Precision Haircut",            "Beard Trim & Shape",            "Hot Lather Straight Edge Shave",            "Head Massage",            "Product Application"],
          badgeIcon: Award,
        },
      ]}
      title="Pricing & Packages"
      description="Find the perfect service for your needs with our clear and competitive pricing."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",          title: "Do I need an appointment?",          content: "Appointments are highly recommended to ensure you get your preferred time slot, but walk-ins are welcome based on availability."},
        {
          id: "faq-2",          title: "What payment methods do you accept?",          content: "We accept cash, major credit cards (Visa, MasterCard, American Express), and contactless payments."},
        {
          id: "faq-3",          title: "Do you offer services for women?",          content: "Yes, we offer Women's Clipper Cuts and other services like Manicure and Pedicure. Please inquire for more details."},
        {
          id: "faq-4",          title: "Is your barbershop good for kids?",          content: "Absolutely! We provide Kids' Cuts and strive to create a comfortable and fun environment for our younger clients."},
        {
          id: "faq-5",          title: "Do you have gift certificates?",          content: "Yes, gift certificates are available for purchase. They make a great gift for friends and family!"},
        {
          id: "faq-6",          title: "Where are you located?",          content: "We are conveniently located at 354 Huse Rd, Manchester, NH 03103. You can find directions on our contact page."},
      ]}
      title="Frequently Asked Questions"
      description="Have questions? We've got answers. Check out some common inquiries below."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient"}}
      tag="Get in Touch"
      title="Book Your Appointment Today!"
      description="Ready for a fresh look? Schedule your visit to Wendy's Barbershop at Cut N Go."
      inputPlaceholder="Enter your email"
      buttonText="Send Message"
      termsText="By clicking Send Message you're confirming that you agree with our Terms and Conditions."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Mens Cuts",              href: "#services"},
            {
              label: "Beard Trims",              href: "#services"},
            {
              label: "Hot Lather Shaves",              href: "#services"},
            {
              label: "Kids' Cuts",              href: "#services"},
          ],
        },
        {
          title: "About Us",          items: [
            {
              label: "Our Story",              href: "#about"},
            {
              label: "Our Team",              href: "#team"},
            {
              label: "Testimonials",              href: "#testimonials"},
            {
              label: "FAQ",              href: "#faq"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Book Now",              href: "#contact"},
            {
              label: "(603) 722-8049",              href: "tel:+16037228049"},
            {
              label: "354 Huse Rd, Manchester, NH 03103",              href: "https://maps.app.goo.gl/YourGoogleMapsLink"},
          ],
        },
      ]}
      logoText="Wendy's Barbershop"
      copyrightText="© 2024 Wendy's Barbershop | All Rights Reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
