import React from "react";

export default function YuwamLandingPage() {
  const sections = [
    {
      title: "Yuwam Book 1 - Complete Competitive Exam Guide",
      desc: "Yuwam's latest competitive exam book provides the complete syllabus in a smart and organized manner. This book features detailed theory, chapter-wise MCQs, previous year questions, and expert strategies. Every topic is explained in simple language to ensure easy understanding for students. The book includes 5000+ practice questions, 100+ solved examples, and time-saving techniques to maximize your preparation efficiency.",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop",
      reverse: false,
      features: [
        "Complete syllabus coverage with smart learning approach",
        "5000+ carefully curated practice questions",
        "Chapter-wise previous year questions analysis",
        "Expert tips and time management strategies",
        "Simple language explanations for complex topics"
      ]
    },
    {
      title: "Yuwam Practice Set - Daily Preparation Kit",
      desc: "Enhance your preparation to the next level with daily practice sets. Each set contains 100 carefully selected questions designed according to the latest exam patterns. Improve your time management skills, increase accuracy, and experience real exam-like conditions. The package includes 30 comprehensive practice sets with detailed solutions and personalized performance analysis reports to track your progress effectively.",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop",
      reverse: true,
      features: [
        "30 comprehensive practice sets",
        "Real exam pattern simulation",
        "Detailed solutions and explanations",
        "Performance tracking and analysis",
        "Time management skill development"
      ]
    },
    {
      title: "Yuwam Special Edition - Advanced Level MCQs",
      desc: "This limited edition Yuwam book is specially designed for students aiming to excel in high-level competitive exams. It features advanced level MCQs, challenging problems, and complex concepts that push your boundaries. The book contains 2000+ advanced MCQs, conceptual questions, and brain teasers that prepare you for the toughest competitions. Perfect for students who want to secure top ranks in national level examinations.",
      img: "https://images.unsplash.com/photo-1622493373945-3b3a8a561a83?w=600&h=400&fit=crop",
      reverse: false,
      features: [
        "2000+ advanced level MCQs",
        "Complex problem-solving techniques",
        "Brain teasers and conceptual questions",
        "High-difficulty level preparation",
        "National level exam focus"
      ]
    },
    {
      title: "Yuwam Notes - Expert Faculty Handwritten Material",
      desc: "Access handwritten notes from top faculty members that provide significant help in examinations. These notes are the result of years of teaching experience and cover all important examination points. They include short tricks, formulas, important facts, and revision notes in a colorful presentation format that makes learning easy and memorable. Perfect for last-minute revision and quick concept recall during exam preparation.",
      img: "https://plus.unsplash.com/premium_photo-1715588660566-b42ef42fde8d?w=600&h=400&fit=crop",
      reverse: true,
      features: [
        "Expert faculty handwritten notes",
        "Colorful and engaging presentation",
        "Short tricks and formula collections",
        "Last-minute revision focused",
        "Important facts and concepts highlighted"
      ]
    },
    {
      title: "Yuwam Mega Guide - All-in-One Preparation Package",
      desc: "The ultimate all-in-one guide that combines comprehensive theory with extensive practice material. This complete package covers the entire syllabus, including chapter-wise notes, practice questions, mock tests, and previous year papers - all in a single book. Suitable for students from beginner to advanced levels, with special focus on frequently asked questions and high-scoring topics that can maximize your examination performance.",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=400&fit=crop",
      reverse: false,
      features: [
        "Complete theory and practice combination",
        "Beginner to advanced level coverage",
        "Mock tests and previous year papers",
        "Frequently asked questions focus",
        "High-scoring topics emphasis"
      ]
    },
    {
      title: "Yuwam Quick Revision - Last Minute Preparation",
      desc: "The perfect book for last-minute revision before examinations. All important formulas, definitions, concepts, and facts are compiled in one place for quick recall. Specially designed for rapid revision, this book is compact enough to carry to the examination hall. Complex concepts are presented in simple ways through charts, tables, and diagrams, making it ideal for final preparation and confidence building before exams.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      reverse: true,
      features: [
        "Quick recall focused content",
        "Charts, tables and diagrams",
        "Important formulas and definitions",
        "Exam hall carry friendly",
        "Last-minute confidence building"
      ]
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Yuwam Publications</h1>
          <p className="text-xl mb-8 opacity-90">
            India's Most Trusted Competitive Exam Preparation Books
          </p>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Quality content, expert guidance, and proven results - Achieve new heights in your preparation with Yuwam's comprehensive study materials designed for success in competitive examinations.
          </p>
        </div>
      </div>

      {/* Dynamic Sections */}
      <div className="max-w-7xl mx-auto py-20 space-y-24 px-4">
        {sections.map((sec, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              sec.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={sec.img}
                alt={sec.title}
                className="w-full rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-gray-800 leading-tight">
                {sec.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {sec.desc}
              </p>
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-3 text-lg">
                  Key Features:
                </h4>
                <ul className="text-gray-700 space-y-2">
                  {sec.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Preparation Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join thousands of successful students who have achieved their dreams with Yuwam books. 
            Our comprehensive study materials, expert guidance, and proven success rate will take 
            your preparation to the next level and help you secure your desired rank in competitive examinations.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-orange-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
              Buy Now - Special Offer
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Download Free Sample
            </button>
          </div> */}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-gray-900 text-white py-8 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-lg mb-4">© 2025 Yuwam Publications. All Rights Reserved.</p>
          <p className="text-gray-400">
            Leading the way in competitive exam preparation since 2010
          </p>
        </div>
      </div>
    </div>
  );
}