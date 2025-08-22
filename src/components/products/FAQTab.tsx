import  { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Truck, CreditCard, RefreshCw, Shield, MessageCircle, Mail, type LucideIcon } from 'lucide-react';

type faqCategories = {
    title: string;
    icon: LucideIcon;
    questions: {
        question: string;
        answer: string;
    }[];
}

// interface faqCategoriesProps {
//     data:faqCategories
// }



const FAQPage = () => {
    
  const [activeIndex, setActiveIndex]:any  = useState(null);


  const Categories:faqCategories[] = [
    {
      title: "Orders & Shipping",
      icon: Truck,
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping takes 3-5 business days within India. Express shipping is available for 1-2 business days delivery. International shipping takes 7-14 business days depending on the destination."
        },
        {
          question: "Do you offer free shipping?",
          answer: "Yes! We offer free standard shipping on orders over ₹999. For orders below this amount, a nominal shipping fee of ₹99 applies."
        },
        {
          question: "Can I track my order?",
          answer: "Absolutely! Once your order is dispatched, you'll receive a tracking number via email and SMS. You can track your order in real-time through our website or the courier partner's app."
        }
      ]
    },
    {
      title: "Payments",
      icon: CreditCard,
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit/debit cards, UPI, net banking, digital wallets like Paytm, PhonePe, and cash on delivery for eligible locations."
        },
        {
          question: "Is it safe to pay online?",
          answer: "Yes, your payment information is completely secure. We use 256-bit SSL encryption and comply with PCI DSS standards. We never store your card details on our servers."
        },
        {
          question: "Can I pay in installments?",
          answer: "Yes! We offer EMI options through major banks and Buy Now Pay Later services like Simpl and LazyPay for orders above ₹3000."
        }
      ]
    },
    {
      title: "Returns & Exchanges",
      icon: RefreshCw,
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a hassle-free 30-day return policy. Items must be unused, with original tags, and in original packaging. Simply initiate a return request through your account."
        },
        {
          question: "How do I exchange a product?",
          answer: "You can exchange products within 30 days of delivery. Select the exchange option in your order history, choose your preferred size/color, and our team will arrange pickup and delivery."
        },
        {
          question: "Who pays for return shipping?",
          answer: "If the return is due to our error (wrong item, damaged product), we cover return shipping. For other returns like size issues, return shipping charges apply."
        }
      ]
    },
    {
      title: "Product & Quality",
      icon: Shield,
      questions: [
        {
          question: "How do I choose the right size?",
          answer: "Each product page has a detailed size chart. We recommend measuring yourself and comparing with our size guide. If you're between sizes, we suggest going for the larger size."
        },
        {
          question: "Are your products authentic?",
          answer: "Yes, all our products are 100% authentic. We source directly from authorized distributors and brands. Each item comes with authenticity guarantee."
        },
        {
          question: "Do you offer product warranties?",
          answer: "Yes, most of our products come with manufacturer warranties. The warranty period varies by product and is mentioned on the product page."
        }
      ]
    }
  ];

  const toggleAccordion = (categoryIndex:number , questionIndex: number ) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (

        <div className="min-h-screen bg-gray-50 ">
        {/* Header */}
        <div className="bg-white shadow-sm my-6 rounded-2xl p-4">
            <div className="max-w-4xl ">
                <h1 className="inline text-2xl md:text-4xl font-bold mb-3 text-gray-800">
                    Frequently Asked <span className="text-yellow-400">Questions</span>
                </h1>
                <div className="inline-flex   mb-6">
                    <div className=" rounded-2xl">
                    <HelpCircle className="size-2 sm:size-3" />
                    </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 max-w-2xl">
                    Find answers to your questions quickly and easily
                </p>
            </div>
        </div>


        {/* FAQ Categories */}
        <div className="space-y-8">
          {Categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-gray-400 to-gray-200 p-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <category.icon className="size-4 text-black" />
                  </div>
                  <h2 className="text-lg font-bold text-black">{category.title}</h2>
                </div>
              </div>

              {/* Questions */}
              <div className="p-3">
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const index = `${categoryIndex}-${questionIndex}`;
                    const isActive = activeIndex === index;
                    
                    return (
                      <div key={questionIndex} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => toggleAccordion(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                        >
                          <span className="font-semibold text-gray-900 text-sm sm:text-base">{faq.question}</span>
                          <div className="flex-shrink-0 ml-4">
                            {isActive ? (
                              <ChevronUp className="w-5 h-5 text-gray-600" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-600" />
                            )}
                          </div>
                        </button>
                        
                        <div 
                          className={`overflow-hidden transition-all duration-300 ${
                            isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="px-6 py-4 bg-white border-t border-gray-100">
                            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-8 text-sm sm:text-base">Our customer support team is here to help you</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors cursor-pointer">
                <MessageCircle className="size-4 sm:size-6" />
                <span className="font-medium text-sm sm:text-base">Live Chat Support</span>
              </div>
              
              <div className="flex items-center justify-center space-x-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors cursor-pointer">
                <Mail className="size-4 sm:size-6" />
                <span className="font-medium text-sm sm:text-base">Email Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default FAQPage;