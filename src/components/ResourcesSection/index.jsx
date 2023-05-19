import React, { useState } from 'react';
import './styles.css';

const Section = ({ title, resources }) => {
    const beginnerResources = [
        {
          title: 'Getting Started',
          resources: [
            { title: 'FreeCodeCamp - Learn to code for free', url: 'https://www.freecodecamp.org' },
            { title: 'MDN Web Docs - Beginner-friendly web development documentation', url: 'https://developer.mozilla.org' },
            { title: 'Codecademy - Interactive coding lessons', url: 'https://www.codecademy.com' },
            { title: 'The Odin Project - Full-stack web development curriculum', url: 'https://www.theodinproject.com' },
            { title: 'W3Schools - Web development tutorials and references', url: 'https://www.w3schools.com' },
            { title: 'CSS-Tricks - Web design and development articles', url: 'https://css-tricks.com' },
            { title: 'Stack Overflow - Q&A platform for developers', url: 'https://stackoverflow.com' },
          ],
        },
        {
          title: 'Programming Languages',
          resources: [
            { title: 'Code.org - Computer science education and coding activities', url: 'https://code.org' },
            { title: 'Coursera - Online courses from top universities', url: 'https://www.coursera.org' },
            { title: 'Khan Academy - Programming and computer science courses', url: 'https://www.khanacademy.org' },
            { title: 'Udacity - Online learning platform for tech skills', url: 'https://www.udacity.com' },
            { title: 'SoloLearn - Mobile coding community and learning platform', url: 'https://www.sololearn.com' },
          ],
        },
        {
          title: 'Web Development',
          resources: [
            { title: 'Scotch.io - Web development tutorials and articles', url: 'https://scotch.io' },
            { title: 'Traversy Media - Web development tutorials on YouTube', url: 'https://www.youtube.com/c/TraversyMedia' },
            { title: 'CSS-Tricks - Web design and development articles', url: 'https://css-tricks.com' },
            { title: 'W3Schools - Web development tutorials and references', url: 'https://www.w3schools.com' },
            { title: 'CodePen - Online code editor and community', url: 'https://codepen.io' },
          ],
        },
        {
          title: 'General Programming',
          resources: [
            { title: 'HackerRank - Coding challenges and competitions', url: 'https://www.hackerrank.com' },
            { title: 'Stack Overflow - Q&A platform for developers', url: 'https://stackoverflow.com' },
          ],
        },
        {
          title: 'Books',
          resources: [
            { title: 'JavaScript: The Good Parts by Douglas Crockford', url: 'https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742' },
            { title: 'Eloquent JavaScript by Marijn Haverbeke', url: 'https://eloquentjavascript.net' },
            { title: 'Clean Code: A Handbook of Agile Software Craftsmanship by Robert C. Martin', url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882' },
          ],
        },
        // Add more categories as needed
      ];

      const [activeCategory, setActiveCategory] = useState(null);
      const [activeCategories, setActiveCategories] = useState([]);
      const handleCategoryToggle = (categoryIndex) => {
        if (activeCategories.includes(categoryIndex)) {
          setActiveCategories(activeCategories.filter((index) => index !== categoryIndex));
        } else {
          setActiveCategories([...activeCategories, categoryIndex]);
        }
      };
  return (
<section className="section">
      <h2 className="section-title">Start Here</h2>
      <div className="category-list">
        {beginnerResources.map((category, index) => (
          <div key={index} className="category-item">
            <div className="category-header" onClick={() => handleCategoryToggle(index)}>
              <span className="category-name">{category.title}</span>
              <span className={`category-icon ${activeCategories.includes(index) ? 'open' : 'closed'}`}>
              </span>
            </div>
            {activeCategories.includes(index) && (
              <ul className="resource-list">
                {category.resources.map((resource, resourceIndex) => (
                  <li key={resourceIndex} className="resource-item">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
