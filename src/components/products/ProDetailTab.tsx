
import { CheckCircle2, Shirt, Droplets, Leaf, Ruler, Weight, Lock, MapPinned } from 'lucide-react';

const ProDetailTab = () => {

  

  const specifications = [
    { label: 'Material', value: '100% Cotton', icon: Shirt },
    { label: 'Care', value: 'Machine Wash Cold', icon: Droplets },
    { label: 'Weight', value: '200g', icon:Weight },
    { label: 'Fit', value: 'Regular', icon: Ruler },
    { label: 'Origin', value: 'Made in India', icon: MapPinned },
    { label: 'Warranty', value: '6 Months', icon: Lock }
  ];

  const features = [
    'Breathable and lightweight',
    'Fade-resistant color',
    'Eco-friendly dye process',
    'Available in multiple sizes'
  ];

  return (
    <div className="w-full  bg-gradient-to-br">
      {/* About Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <div className="w-1 h-8 bg-gradient-to-b from-gray-500 to-white rounded-full mr-4"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">About this Product</h2>
        </div>
        
        <div className="bg-white rounded-2xl p-3 sm:p-8 shadow-lg border border-gray-100">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Crafted from premium cotton fabric, this t-shirt offers both comfort and durability. Its timeless design ensures it pairs effortlessly with any outfit, whether casual or semi-formal.
          </p>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <div className="w-1 h-8 bg-gradient-to-b from-white-500 to-gray-500 rounded-full mr-4"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Specifications</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specifications.map((spec, index) => (
            <div key={index} className="bg-white rounded-xl p-3 sm:p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                {spec.icon && (
                  <div className="p-2 bg-gradient-to-r from-gray-500 to-white rounded-lg">
                    <spec.icon className="w-3 sm:w-5 h-3 sm:h-5 text-black" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">{spec.label}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{spec.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features Section */}
      <div>
        <div className="flex items-center mb-6">
          <div className="w-1 h-8 bg-gradient-to-b from-black-500 to-gray-500 rounded-full mr-4"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Key Features</h2>
        </div>
        
        <div className="bg-white rounded-2xl p-3 sm:p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-4 sm:w-6 h-4  sm:h-6 text-green-500" />
                </div>
                <span className="text-gray-700 text-sm sm:text-base font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Extra Visual Element */}
          <div className="mt-8 p-2 sm:p-6 bg-gradient-to-r from-green-50 to-gray-50 rounded-xl border border-green-100">
            <div className="flex items-center space-x-3">
              <Leaf className="size-5 sm:size-8 text-green-600" />
              <div>
                <h4 className="font-semibold text-sm sm:text-base  text-gray-900">Eco-Conscious Choice</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Made with sustainable practices and eco-friendly materials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProDetailTab;