import React, { useState } from 'react';
import { Clock, Users, Award, Zap, Target, ChefHat, Sparkles, Download, Menu, X, Plus, Share2, Heart, Star, Trophy } from 'lucide-react';

const sampleRecipes = [
  {
    id: 1,
    title: "Midnight Cereal Bread Pudding",
    creator: "@chef_chaos",
    ingredients: ["stale cereal", "expired milk", "banana", "cinnamon"],
    chaosScore: 87,
    attempts: 23,
    successRate: 78,
    verified: true,
    earnings: 12.30,
    cookTime: "25 mins",
    description: "Turn your stale cereal into a surprisingly delicious dessert that actually works!"
  },
  {
    id: 2,
    title: "Pizza Leftover Fried Rice",
    creator: "@midnight_munchies", 
    ingredients: ["leftover pizza", "rice", "soy sauce", "egg"],
    chaosScore: 72,
    attempts: 45,
    successRate: 89,
    verified: true,
    earnings: 23.70,
    cookTime: "15 mins",
    description: "Revolutionary way to transform cold pizza into something fresh and exciting"
  },
  {
    id: 3,
    title: "Energy Drink Glazed Chicken",
    creator: "@extreme_eats",
    ingredients: ["chicken breast", "energy drink", "garlic", "honey"],
    chaosScore: 94,
    attempts: 12,
    successRate: 42,
    verified: false,
    earnings: 8.40,
    cookTime: "40 mins",
    description: "WARNING: Extreme chaos cooking. Attempt only if you're brave enough!"
  }
];

const mysteryBoxes = [
  {
    name: "College Dorm Special",
    items: ["instant noodles", "energy drink", "cheese slices", "hot sauce", "microwave popcorn"],
    budget: 25,
    meals: 4,
    description: "Survive college with these questionable ingredients"
  },
  {
    name: "Fridge Cleanout Challenge", 
    items: ["leftover takeout", "wilting lettuce", "half onion", "random condiments", "stale bread"],
    budget: 0,
    meals: 3,
    description: "Before grocery shopping, use up everything that's about to expire"
  },
  {
    name: "Expired Ingredients Only",
    items: ["expired yogurt", "soft apples", "stale crackers", "old cheese", "browning bananas"],
    budget: 0,
    meals: 5,
    description: "The ultimate zero-waste challenge for brave souls"
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const [rouletteResult, setRouletteResult] = useState(null);
  const [isRouletting, setIsRouletting] = useState(false);

  const spinRoulette = () => {
    setIsRouletting(true);
    setTimeout(() => {
      const expiringItems = ['soft banana', 'leftover pizza', 'wilting spinach', 'half onion', 'stale bread'];
      const selected = expiringItems.sort(() => 0.5 - Math.random()).slice(0, 3);
      const chaosScore = Math.floor(Math.random() * 40) + 60;
      
      setRouletteResult({
        ingredients: selected,
        chaosScore,
        title: `${selected[0]} ${selected[1]} Fusion`,
        difficulty: chaosScore > 85 ? 'Extreme' : chaosScore > 75 ? 'Hard' : 'Medium',
        predictedViews: `${(Math.random() * 3 + 1).toFixed(1)}M`,
        viralPotential: chaosScore > 85 ? 'EXTREMELY HIGH' : 'HIGH'
      });
      setIsRouletting(false);
    }, 2000);
  };

  const generateBoxPlan = (box) => {
    setSelectedBox({
      ...box,
      meals: [
        `${box.items[0]} Supreme Bowl`,
        `Fusion ${box.items[1]} Delight`, 
        `${box.items[2]} Remix Plate`,
        `Ultimate ${box.items[3]} Creation`
      ].slice(0, box.meals),
      totalCost: box.budget,
      zeroWasteScore: Math.floor(Math.random() * 30) + 70
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-purple-600 cursor-pointer" onClick={() => setCurrentPage('home')}>
                ChaosCooking
              </h1>
              <span className="ml-2 text-sm text-gray-500 hidden sm:block">Turn food waste into cooking adventures</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => setCurrentPage('home')} className={`${currentPage === 'home' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-700 hover:text-purple-600'} px-3 py-2 text-sm font-medium transition-colors`}>Home</button>
              <button onClick={() => setCurrentPage('recipes')} className={`${currentPage === 'recipes' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-700 hover:text-purple-600'} px-3 py-2 text-sm font-medium transition-colors`}>Recipes</button>
              <button onClick={() => setCurrentPage('community')} className={`${currentPage === 'community' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-700 hover:text-purple-600'} px-3 py-2 text-sm font-medium transition-colors`}>Community</button>
              <button onClick={() => setCurrentPage('tools')} className={`${currentPage === 'tools' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-700 hover:text-purple-600'} px-3 py-2 text-sm font-medium transition-colors`}>Tools</button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold text-sm">F</span>
                </div>
                <span className="text-sm text-gray-700">food_saver_pro</span>
              </div>
              
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="space-y-1">
                <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">Home</button>
                <button onClick={() => { setCurrentPage('recipes'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">Recipes</button>
                <button onClick={() => { setCurrentPage('community'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">Community</button>
                <button onClick={() => { setCurrentPage('tools'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">Tools</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Page */}
      {currentPage === 'home' && (
        <div className="min-h-screen bg-gray-50">
          <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                    Turn Food Waste Into 
                    <span className="text-yellow-300"> Cooking Adventures</span>
                  </h1>
                  <p className="text-xl mb-8 opacity-90">
                    AI-powered platform that transforms leftover ingredients into creative recipes while building a community of chaos cooking creators.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={() => setCurrentPage('tools')} className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
                      Start Cooking Now
                    </button>
                    <button onClick={() => setCurrentPage('community')} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                      Join Community
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold">$156.50</div>
                    <div className="text-sm opacity-80">Money Saved</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold">7</div>
                    <div className="text-sm opacity-80">Day Streak</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold">2.3M</div>
                    <div className="text-sm opacity-80">Recipes Created</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold">847K</div>
                    <div className="text-sm opacity-80">Community Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How ChaosCooking Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Three simple tools to transform your cooking experience and eliminate food waste</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm border p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Leftover Roulette</h3>
                <p className="text-gray-600 mb-6">Spin the wheel of chaos! Get random expiring ingredients and discover viral recipe combinations that actually work.</p>
                <button onClick={() => setCurrentPage('tools')} className="text-orange-600 font-semibold hover:text-orange-700">Try Roulette →</button>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Mystery Box Challenge</h3>
                <p className="text-gray-600 mb-6">Choose your adventure box and get instant meal plans. Perfect for students, budget cooking, or fridge cleanouts.</p>
                <button onClick={() => setCurrentPage('tools')} className="text-blue-600 font-semibold hover:text-blue-700">Open Mystery Box →</button>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community Verification</h3>
                <p className="text-gray-600 mb-6">Share your chaos recipes, get verified by the community, and earn simulated creator rewards for viral content.</p>
                <button onClick={() => setCurrentPage('community')} className="text-purple-600 font-semibold hover:text-purple-700">Join Community →</button>
              </div>
            </div>
          </div>

          <div className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Trending Chaos Recipes</h2>
                  <p className="text-gray-600">Community-verified recipes that actually work</p>
                </div>
                <button onClick={() => setCurrentPage('recipes')} className="text-purple-600 font-semibold hover:text-purple-700">View All Recipes →</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sampleRecipes.map(recipe => (
                  <div key={recipe.id} className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gray-200 relative">
                      <div className="absolute top-4 right-4">
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          recipe.chaosScore > 85 ? 'bg-red-100 text-red-800' :
                          recipe.chaosScore > 75 ? 'bg-orange-100 text-orange-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {recipe.chaosScore}/100
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{recipe.title}</h3>
                        {recipe.verified && <Award className="text-green-600" size={20} />}
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {recipe.ingredients.slice(0, 3).map(ingredient => (
                          <span key={ingredient} className="bg-gray-100 px-2 py-1 rounded-full text-xs">{ingredient}</span>
                        ))}
                        {recipe.ingredients.length > 3 && (
                          <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">+{recipe.ingredients.length - 3} more</span>
                        )}
                      </div>
                      
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1"><Clock size={14} />{recipe.cookTime}</span>
                          <span className="flex items-center gap-1"><Users size={14} />{recipe.attempts}</span>
                        </div>
                        <div className="text-green-600 font-semibold">${recipe.earnings}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tools Page */}
      {currentPage === 'tools' && (
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Chaos Cooking Tools</h1>
              <p className="text-xl text-gray-600">Transform your leftover ingredients into culinary adventures</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-sm border p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-orange-600" size={40} />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Leftover Roulette</h2>
                  <p className="text-gray-600">Spin for random expiring ingredients and get viral recipe suggestions</p>
                </div>

                <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white p-8 rounded-xl text-center mb-6">
                  {isRouletting ? (
                    <div className="animate-spin mx-auto mb-4"><Sparkles size={64} /></div>
                  ) : (
                    <Zap size={64} className="mx-auto mb-4" />
                  )}
                  
                  <button onClick={spinRoulette} disabled={isRouletting} className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors disabled:opacity-50">
                    {isRouletting ? 'Spinning...' : 'SPIN THE CHAOS WHEEL'}
                  </button>
                </div>

                {rouletteResult && (
                  <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-orange-600">🎰 ROULETTE RESULT 🎰</h3>
                      <div className="text-2xl font-bold mt-2">{rouletteResult.title}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-xl font-bold text-purple-600">{rouletteResult.chaosScore}/100</div>
                        <div className="text-sm text-purple-800">Chaos Score</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-xl font-bold text-green-600">{rouletteResult.predictedViews}</div>
                        <div className="text-sm text-green-800">Predicted Views</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Your Cursed Ingredients:</h4>
                      <div className="flex flex-wrap gap-2">
                        {rouletteResult.ingredients.map(ingredient => (
                          <span key={ingredient} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">{ingredient}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">Accept Challenge</button>
                      <button className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">Spin Again</button>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="text-blue-600" size={40} />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Mystery Box Challenge</h2>
                  <p className="text-gray-600">Choose your adventure and get instant meal plans</p>
                </div>

                <div className="space-y-4 mb-6">
                  {mysteryBoxes.map((box, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{box.name}</h3>
                        <div className="text-right text-sm text-gray-600">
                          <div>Budget: ${box.budget}</div>
                          <div>{box.meals} meals</div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{box.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {box.items.slice(0, 3).map(item => (
                          <span key={item} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">{item}</span>
                        ))}
                        {box.items.length > 3 && (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">+{box.items.length - 3} more</span>
                        )}
                      </div>
                      
                      <button onClick={() => generateBoxPlan(box)} className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                        Generate Meal Plan
                      </button>
                    </div>
                  ))}
                </div>

                {selectedBox && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-green-600">📦 MEAL PLAN GENERATED! 📦</h3>
                      <div className="text-lg font-semibold mt-2">{selectedBox.name}</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-green-600">${selectedBox.totalCost}</div>
                        <div className="text-xs text-gray-600">Total Cost</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-blue-600">{selectedBox.meals.length}</div>
                        <div className="text-xs text-gray-600">Meals</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-purple-600">{selectedBox.zeroWasteScore}%</div>
                        <div className="text-xs text-gray-600">Zero Waste</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Your Meal Plan:</h4>
                      <div className="space-y-2">
                        {selectedBox.meals.map((meal, index) => (
                          <div key={index} className="bg-white p-3 rounded-lg flex justify-between items-center">
                            <span className="font-medium">Day {index + 1}: {meal}</span>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Clock size={14} />
                              {15 + Math.floor(Math.random() * 30)} mins
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                        <Download size={18} />
                        Download Share Card
                      </button>
                      <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">Start Cooking</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recipes Page */}
      {currentPage === 'recipes' && (
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Chaos Recipe Library</h1>
                <p className="text-gray-600">Discover community-verified recipes that turn leftovers into magic</p>
              </div>
              
              <div className="flex gap-4 mt-4 md:mt-0">
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2">
                  <Plus size={20} />
                  Create Recipe
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleRecipes.concat(sampleRecipes).map((recipe, index) => (
                <div key={`${recipe.id}-${index}`} className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 relative">
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        recipe.chaosScore > 85 ? 'bg-red-100 text-red-800' :
                        recipe.chaosScore > 75 ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {recipe.chaosScore}/100
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      {recipe.verified && (
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Award size={12} />
                          Verified
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold">{recipe.title}</h3>
                      <button className="text-gray-400 hover:text-red-500">
                        <Heart size={20} />
                      </button>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3">by {recipe.creator}</p>
                    <p className="text-gray-700 text-sm mb-4">{recipe.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {recipe.ingredients.slice(0, 3).map(ingredient => (
                        <span key={ingredient} className="bg-gray-100 px-2 py-1 rounded-full text-xs">{ingredient}</span>
                      ))}
                      {recipe.ingredients.length > 3 && (
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                          +{recipe.ingredients.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {recipe.cookTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={14} />
                          {recipe.attempts}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star size={14} />
                          {recipe.successRate}%
                        </span>
                      </div>
                      <div className="text-green-600 font-semibold">
                        ${recipe.earnings}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                        View Recipe
                      </button>
                      <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                Load More Recipes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Community Page */}
      {currentPage === 'community' && (
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Chaos Cooking Community</h1>
              <p className="text-xl text-gray-600">Join fellow food adventurers in the ultimate cooking playground</p>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Trophy size={32} />
                    Weekly Challenge: Breakfast Chaos
                  </h2>
                  <p className="text-lg mb-4 opacity-90">
                    Create a breakfast dish using only dinner leftovers. Most creative and successful recipes win!
                  </p>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">$150</div>
                      <div className="text-sm opacity-80">Prize Pool</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">3</div>
                      <div className="text-sm opacity-80">Days Left</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">47</div>
                      <div className="text-sm opacity-80">Entries</div>
                    </div>
                  </div>
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Join Challenge
                  </button>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h3 className="font-semibold mb-4">Current Leaderboard</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>🥇 @midnight_chef</span>
                      <span>94 Chaos Score</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>🥈 @leftover_legend</span>
                      <span>89 Chaos Score</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>🥉 @breakfast_bandit</span>
                      <span>87 Chaos Score</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border">
                <div className="text-3xl font-bold text-purple-600 mb-2">847K</div>
                <div className="text-gray-600">Active Creators</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border">
                <div className="text-3xl font-bold text-green-600 mb-2">2.3M</div>
                <div className="text-gray-600">Recipes Shared</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border">
                <div className="text-3xl font-bold text-blue-600 mb-2">15M</div>
                <div className="text-gray-600">Recipe Attempts</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border">
                <div className="text-3xl font-bold text-orange-600 mb-2">$47K</div>
                <div className="text-gray-600">Creator Earnings</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Community Feed</h2>
                  <select className="border border-gray-300 rounded-lg px-3 py-2">
                    <option>Latest</option>
                    <option>Most Popular</option>
                    <option>Highest Chaos</option>
                    <option>Most Attempts</option>
                  </select>
                </div>

                {sampleRecipes.map(recipe => (
                  <div key={recipe.id} className="bg-white border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                        {recipe.creator[1].toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{recipe.creator}</h3>
                          {recipe.verified && <Award className="text-green-600" size={16} />}
                        </div>
                        <p className="text-gray-600 text-sm">shared a chaos recipe • 2 hours ago</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        recipe.chaosScore > 85 ? 'bg-red-100 text-red-800' :
                        recipe.chaosScore > 75 ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {recipe.chaosScore}/100
                      </div>
                    </div>

                    <h4 className="text-xl font-semibold mb-2">{recipe.title}</h4>
                    <p className="text-gray-700 mb-4">{recipe.description}</p>

                    <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {recipe.ingredients.map(ingredient => (
                        <span key={ingredient} className="bg-gray-100 px-2 py-1 rounded-full text-sm">{ingredient}</span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><Users size={16} />{recipe.attempts} attempts</span>
                        <span className="flex items-center gap-1"><Star size={16} />{recipe.successRate}% success</span>
                        <span className="flex items-center gap-1"><Clock size={16} />{recipe.cookTime}</span>
                      </div>
                      <div className="text-green-600 font-semibold">${recipe.earnings} earned</div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                        <ChefHat size={16} />
                        Try Recipe
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                        <Heart size={16} />
                        {Math.floor(Math.random() * 50) + 10}
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div className="bg-white border rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Top Chaos Creators</h3>
                  <div className="space-y-4">
                    {['@midnight_chef', '@leftover_legend', '@chaos_master', '@waste_warrior'].map((creator, index) => (
                      <div key={creator} className="flex items-center gap-3">
                        <div className="text-lg">{index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '👨‍🍳'}</div>
                        <div className="flex-1">
                          <div className="font-medium">{creator}</div>
                          <div className="text-sm text-gray-600">${(Math.random() * 500 + 100).toFixed(0)} earned</div>
                        </div>
                        <button className="text-purple-600 text-sm font-medium hover:text-purple-700">Follow</button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Trending Ingredients</h3>
                  <div className="space-y-2">
                    {['leftover pizza', 'stale bread', 'expired milk', 'wilting lettuce', 'overripe banana'].map((ingredient, index) => (
                      <div key={ingredient} className="flex justify-between items-center">
                        <span className="text-sm">{ingredient}</span>
                        <span className="text-green-600 text-sm font-medium">+{Math.floor(Math.random() * 50 + 10)}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-2">Ready to Go Viral?</h3>
                  <p className="text-sm opacity-90 mb-4">Join our creator program and start earning from your chaos cooking adventures!</p>
                  <button className="w-full bg-white text-purple-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Become a Creator
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;