import React from "react";

export default function YuwamLandingPage() {
  const sections = [
    {
      title: "Active Fluency Adjectives",
      desc: "Adjectives are the describing words. They are used to modify nouns by using them before a noun or after the linking verbs that follow a noun or pronoun. To achieve true fluency in spoken English, we should have a clear idea of what adjectives can be used with what nouns, i.e. acceptable combinations of Adjective + Noun. This book gives you a comprehensive list of Adjective + Noun combinations that are commonly used in spoken English.",
      img: "./Adjective.png",
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
      title: "Synonyms and Antonyms",
      desc: "Synonyms and Antonyms form an important part of English vocabulary. Questions about synonyms and antonyms frequently appear in almost all the competitive and academic exams. Hence, a student with a good vocabulary has a better chance of success in competitive as well as academic exams.",
      img: "./Antonyms.png",
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
      title: "English Fluency Course",
      desc: "To learn to speak English fluently and confidently, you will have to master all the Sentence Structures of the English language. We have devised a unique and innovative pattern of sentence structures presented in a tabular form with a precise word order called 'Automatic Sentence Generating Tables'. With the help of these tables, a person can frame hundreds of grammatically correct sentences directly in English without being conscious of grammar and even without thinking in one's mother tongue. The book is a product of years of research and hands-on experience of its author.",
      img: "./english_fluency.jpeg",
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
      title: "English Grammar",
      desc: "Grammar is the life blood of the English language. If grammar aspects are not taken care of, we cannot write and speak correct English. Hence, it has become very important to acquire in-depth knowledge of English grammar. We have designed a unique course of English grammar that will help you pass any exam easily by building a strong foundation. The course is highly learner friendly and has everything you need to master perfect grammar.",
      img: "Grammar.png",
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
      title: "High Level Vocabulary",
      desc: "A decent knowledge of vocabulary helps a student perform better in exams and make an impressive career growth. Our book covers a wide range of advanced level words incorporating synonyms, antonyms and one word substitutions highly useful for all competitive exams.",
      img: "HLV.png",
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
      title: "Active Fluency Verbs",
      desc: "Verbs are the words that generally denote actions, states and possessions. They play such a major role in English that no sentence can be framed without a verb. To be fluent in English, simply knowing the meaning of a verb is not enough. We must know what nouns a verb can occur with, i.e. the meaningful combinations of various Verbs and Nouns. This book gives you a comprehensive collection of Verb + Noun combinations on which the true frequency depends.",
      img: "Verb.png",
      reverse: true,
      features: [
        "Complete theory and practice combination",
        "Beginner to advanced level coverage",
        "Mock tests and previous year papers",
        "Frequently asked questions focus",
        "High-scoring topics emphasis"
      ]
    },
    {
      title: "Learn Correct Pronunciation",
      desc: "Pronunciation is the life blood of spoken English. Generally, we learn the pronunciation of English words in two ways - 1. By listening, or 2. As for the spelling of the word, but these are not the reliable ways all the time. To master the perfect pronunciation, you must acquaint yourself with the International Phonetic Alphabet and also refer to some good dictionaries.",
      img: "Pronouns.png",
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
      title: "Idioms & Phrases",
      desc: "Idioms and Phrasal Verbs form an integral part of English vocabulary. They are also one of the important parts of various competitive exams. Remember, idioms and phrasal verbs are a combination of at least two or more words having a single meaning and often it is not possible to guess the meaning of an idiom or a phrasal verb from the words it contains.",
      img: "YUWAM_271.png",
      reverse: true,
      features: [
        "Complete theory and practice combination",
        "Beginner to advanced level coverage",
        "Mock tests and previous year papers",
        "Frequently asked questions focus",
        "High-scoring topics emphasis"
      ]
    },
     {
      title: "A Dictionary Of Fluency Words",
      desc: "The UK residents who have undergone a full 16 years of education use merely about 5000 words in a speech and up to 10000 words in written communication  -The Guinness Book of World records. Vocabulary is unarguably the most important part of any language and therefore, it is given pre-eminence in our course. The purpose of this book is to help you achieve a greater command of fluency oriented words. These words are normally sufficient to maintain a good frequency in English irrespective of the topic. ",
      img: "words.jpeg",
      reverse: false,
      features: [
        "Quick recall focused content",
        "Charts, tables and diagrams",
        "Important formulas and definitions",
        "Exam hall carry friendly",
        "Last-minute confidence building"
      ]
    },
     {
      title: "Active Fluency Nouns",
      desc: "Nouns are the words that refer to people, animals, places, things, and abstract ideas. They are generally used as subjects in sentences or objects of verbs or prepositions. To be fluent in English, we must very well know what verbs they can occur with. This book gives you noun-wise combinations of Verb + Noun and also Adjective + Noun combinations commonly used in everyday English. ",
      img: "nouns.jpeg",
      reverse: true,
      features: [
        "Quick recall focused content",
        "Charts, tables and diagrams",
        "Important formulas and definitions",
        "Exam hall carry friendly",
        "Last-minute confidence building"
      ]
    },
    // {
    //   title: "Yuwam Quick Revision - Last Minute Preparation",
    //   desc: "The perfect book for last-minute revision before examinations. All important formulas, definitions, concepts, and facts are compiled in one place for quick recall. Specially designed for rapid revision, this book is compact enough to carry to the examination hall. Complex concepts are presented in simple ways through charts, tables, and diagrams, making it ideal for final preparation and confidence building before exams.",
    //   img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    //   reverse: true,
    //   features: [
    //     "Quick recall focused content",
    //     "Charts, tables and diagrams",
    //     "Important formulas and definitions",
    //     "Exam hall carry friendly",
    //     "Last-minute confidence building"
    //   ]
    // }
   
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Hero Section */}
   <div className="w-full bg-gradient-to-r from-[#4b79a1] to-[#283e51] text-white py-4 text-center">
  <div className="max-w-4xl mx-auto px-6">

    {/* Logo */}
    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.4)] border-4 border-white/20">
      <img
        src="/yuwam-icon.png"
        alt="Yuwam Logo"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Heading */}
    <h1 className="text-6xl font-bold mb-2 tracking-wide drop-shadow-lg">
      Yuwam Publications
    </h1>

    <p className="text-2xl mb-6 opacity-95 font-light">
      India’s Most Trusted Competitive Exam Preparation Books
    </p>

    <p className="text-lg max-w-2xl mx-auto leading-relaxed opacity-95 mb-2 ">
      Quality content, expert guidance, and proven results — Achieve new heights
      in your preparation with Yuwam’s comprehensive study materials designed
      for success in competitive examinations.
    </p>

    {/* Contact Section */}
    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl inline-block shadow-xl">
      <div className="flex flex-col items-center gap-1 text-base leading-relaxed">
        <p className="flex items-center gap-2">
          <span className="text-xl">📞</span> +91 7073999036
        </p>
        <p className="flex items-center gap-2">
          <span className="text-xl">📧</span> yuwampublications@gmail.com
        </p>
        <p className="flex items-center gap-2 text-center">
          <span className="text-xl">📍</span> 63 Near ICIC Bank, Ambabari Shopping
          Center, Ambabari, Jaipur-302039, Rajasthan, India
        </p>
      </div>
    </div>

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
  className="w-150  h-100 object-contain rounded-2xl   hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
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
              {/* <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
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
              </div> */}
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
    <div className="w-full bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-8">
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-xl">📞</span>
                  <span>+91 7073999036</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-xl">📧</span>
                  <span>yuwampublications@gmail.com</span>
                </div>
                <div className="flex items-start justify-center md:justify-start gap-3">
                  <span className="text-xl mt-1">📍</span>
                  <span>63 Near ICIC Bank, Ambabari Shoping Center, Ambabari, Jaipur-302039, Rajasthan, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            {/* <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Quick Links</h3>
              <div className="space-y-2 text-gray-300">
                <a href="#" className="block hover:text-orange-400 transition-colors duration-300">Our Books</a>
                <a href="#" className="block hover:text-orange-400 transition-colors duration-300">Study Materials</a>
                <a href="#" className="block hover:text-orange-400 transition-colors duration-300">Success Stories</a>
                <a href="#" className="block hover:text-orange-400 transition-colors duration-300">Contact Us</a>
              </div>
            </div> */}

            {/* Social Media */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Follow Us</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                {['🌐', '📘', '📸', '🐦'].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl hover:bg-orange-500 transition-all duration-300 transform hover:scale-110"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-lg mb-2">© 2025 Yuwam Publications. All Rights Reserved.</p>
            <p className="text-gray-400">
              Leading the way in competitive exam preparation since 2010
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}