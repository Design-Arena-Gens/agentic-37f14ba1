'use client'

import { useState } from 'react'

const recipes = [
  {
    id: 1,
    name: 'Classic Apple Pie',
    category: 'Fruit',
    prepTime: '30 min',
    cookTime: '50 min',
    servings: 8,
    difficulty: 'Medium',
    image: '🍎',
    ingredients: [
      '6-7 cups sliced apples',
      '3/4 cup sugar',
      '2 tablespoons flour',
      '1 teaspoon cinnamon',
      '1/4 teaspoon nutmeg',
      '2 pie crusts',
      '2 tablespoons butter'
    ],
    instructions: [
      'Preheat oven to 425°F',
      'Mix apples, sugar, flour, and spices in a large bowl',
      'Place bottom crust in pie pan',
      'Fill with apple mixture and dot with butter',
      'Cover with top crust, seal edges, and cut slits',
      'Bake 40-50 minutes until golden brown'
    ]
  },
  {
    id: 2,
    name: 'Pumpkin Pie',
    category: 'Custard',
    prepTime: '20 min',
    cookTime: '60 min',
    servings: 8,
    difficulty: 'Easy',
    image: '🎃',
    ingredients: [
      '1 can (15 oz) pumpkin puree',
      '3/4 cup sugar',
      '1 teaspoon cinnamon',
      '1/2 teaspoon ginger',
      '1/4 teaspoon cloves',
      '2 large eggs',
      '1 can (12 oz) evaporated milk',
      '1 unbaked pie crust'
    ],
    instructions: [
      'Preheat oven to 425°F',
      'Mix pumpkin, sugar, and spices',
      'Beat in eggs, then stir in evaporated milk',
      'Pour into pie crust',
      'Bake 15 minutes at 425°F, then reduce to 350°F',
      'Bake 40-50 minutes more until knife inserted comes out clean'
    ]
  },
  {
    id: 3,
    name: 'Pecan Pie',
    category: 'Nut',
    prepTime: '15 min',
    cookTime: '60 min',
    servings: 8,
    difficulty: 'Easy',
    image: '🌰',
    ingredients: [
      '3 eggs',
      '1 cup light corn syrup',
      '1 cup sugar',
      '2 tablespoons butter, melted',
      '1 teaspoon vanilla',
      '1 1/2 cups pecan halves',
      '1 unbaked pie crust'
    ],
    instructions: [
      'Preheat oven to 350°F',
      'Beat eggs, corn syrup, sugar, butter, and vanilla',
      'Stir in pecans',
      'Pour into pie crust',
      'Bake 60-70 minutes until set',
      'Cool completely before serving'
    ]
  },
  {
    id: 4,
    name: 'Cherry Pie',
    category: 'Fruit',
    prepTime: '25 min',
    cookTime: '45 min',
    servings: 8,
    difficulty: 'Medium',
    image: '🍒',
    ingredients: [
      '4 cups fresh or frozen cherries, pitted',
      '1 1/4 cups sugar',
      '1/3 cup cornstarch',
      '1/4 teaspoon almond extract',
      '2 pie crusts',
      '1 tablespoon butter'
    ],
    instructions: [
      'Preheat oven to 425°F',
      'Mix cherries, sugar, cornstarch, and almond extract',
      'Let stand 15 minutes',
      'Place bottom crust in pie pan and fill with cherry mixture',
      'Dot with butter and cover with top crust',
      'Bake 45-55 minutes until golden and bubbly'
    ]
  },
  {
    id: 5,
    name: 'Key Lime Pie',
    category: 'Custard',
    prepTime: '20 min',
    cookTime: '15 min',
    servings: 8,
    difficulty: 'Easy',
    image: '🍋',
    ingredients: [
      '1 can (14 oz) sweetened condensed milk',
      '1/2 cup key lime juice',
      '3 egg yolks',
      '1 graham cracker crust',
      'Whipped cream for topping'
    ],
    instructions: [
      'Preheat oven to 350°F',
      'Whisk condensed milk, lime juice, and egg yolks',
      'Pour into graham cracker crust',
      'Bake 15 minutes',
      'Refrigerate at least 3 hours',
      'Top with whipped cream before serving'
    ]
  },
  {
    id: 6,
    name: 'Chocolate Cream Pie',
    category: 'Cream',
    prepTime: '30 min',
    cookTime: '10 min',
    servings: 8,
    difficulty: 'Medium',
    image: '🍫',
    ingredients: [
      '1 cup sugar',
      '1/3 cup cornstarch',
      '3 cups milk',
      '4 egg yolks',
      '6 oz semi-sweet chocolate, chopped',
      '2 tablespoons butter',
      '1 baked pie crust',
      'Whipped cream for topping'
    ],
    instructions: [
      'Mix sugar and cornstarch in saucepan',
      'Whisk in milk and egg yolks',
      'Cook over medium heat, stirring constantly until thick',
      'Remove from heat, stir in chocolate and butter',
      'Pour into baked crust',
      'Refrigerate until set, top with whipped cream'
    ]
  }
]

export default function Home() {
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Fruit', 'Custard', 'Nut', 'Cream']

  const filteredRecipes = filter === 'All'
    ? recipes
    : recipes.filter(r => r.category === filter)

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '2rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          margin: 0,
          fontSize: '2.5rem',
          color: '#333',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem'
        }}>
          🥧 Pie Recipe Collection
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#666',
          margin: '0.5rem 0 0 0',
          fontSize: '1.1rem'
        }}>
          Discover delicious pie recipes for every occasion
        </p>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {!selectedRecipe ? (
          <>
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: filter === cat ? '#fff' : 'rgba(255,255,255,0.2)',
                    color: filter === cat ? '#667eea' : '#fff',
                    border: 'none',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: filter === cat ? 'bold' : 'normal',
                    transition: 'all 0.3s',
                    boxShadow: filter === cat ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {filteredRecipes.map(recipe => (
                <div
                  key={recipe.id}
                  onClick={() => setSelectedRecipe(recipe)}
                  style={{
                    background: 'white',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 8px 12px rgba(0,0,0,0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  <div style={{ fontSize: '4rem', textAlign: 'center', margin: '1rem 0' }}>
                    {recipe.image}
                  </div>
                  <h2 style={{ margin: '0 0 0.5rem 0', color: '#333', fontSize: '1.5rem' }}>
                    {recipe.name}
                  </h2>
                  <div style={{
                    display: 'inline-block',
                    background: '#667eea',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    marginBottom: '1rem'
                  }}>
                    {recipe.category}
                  </div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>
                    <div style={{ marginBottom: '0.25rem' }}>
                      ⏱️ Prep: {recipe.prepTime} | Cook: {recipe.cookTime}
                    </div>
                    <div style={{ marginBottom: '0.25rem' }}>
                      👥 Servings: {recipe.servings}
                    </div>
                    <div>
                      📊 Difficulty: {recipe.difficulty}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '2rem',
            maxWidth: '800px',
            margin: '0 auto',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
          }}>
            <button
              onClick={() => setSelectedRecipe(null)}
              style={{
                background: '#667eea',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                marginBottom: '1.5rem',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#5568d3'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#667eea'}
            >
              ← Back to Recipes
            </button>

            <div style={{ textAlign: 'center', fontSize: '5rem', margin: '1rem 0' }}>
              {selectedRecipe.image}
            </div>

            <h1 style={{ margin: '0 0 1rem 0', color: '#333', textAlign: 'center' }}>
              {selectedRecipe.name}
            </h1>

            <div style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              color: '#666'
            }}>
              <div>⏱️ Prep: {selectedRecipe.prepTime}</div>
              <div>🔥 Cook: {selectedRecipe.cookTime}</div>
              <div>👥 Servings: {selectedRecipe.servings}</div>
              <div>📊 {selectedRecipe.difficulty}</div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: '#667eea', borderBottom: '2px solid #667eea', paddingBottom: '0.5rem' }}>
                Ingredients
              </h2>
              <ul style={{ lineHeight: '2', color: '#333' }}>
                {selectedRecipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={{ color: '#667eea', borderBottom: '2px solid #667eea', paddingBottom: '0.5rem' }}>
                Instructions
              </h2>
              <ol style={{ lineHeight: '2', color: '#333' }}>
                {selectedRecipe.instructions.map((instruction, i) => (
                  <li key={i} style={{ marginBottom: '0.75rem' }}>{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
