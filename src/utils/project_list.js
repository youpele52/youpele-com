// list of projects

// importing images
import poetry from '../assets/project_img/youpele_poetry.png'
import pagination from '../assets/project_img/pagination.png'
import youpele from '../assets/project_img/youpele_com.png'
import birthday_reminder from '../assets/project_img/birthday_reminder.png'
import restaurant_reviews from '../assets/project_img/restaurant-reviews.png'
import movie_reviews from '../assets/project_img/movie-reviews.png'
import first_react_app from '../assets/project_img/first-react-app.png'
import cocktail_bar from '../assets/project_img/cocktail-bar.png'
import master_thesis from '../assets/project_img/master-thesis.png'
import colour_generator from '../assets/project_img/colour-generator.png'
import stripe_clone from '../assets/project_img/stripe-clone.png'
import grocery_list from '../assets/project_img/grocery-list.png'
import food_menu from '../assets/project_img/food-menu.png'
import tours from '../assets/project_img/tours.png'
import shopping_cart from '../assets/project_img/shopping-cart.png'
import nyc_citi_bike from '../assets/project_img/nyc_citi_bike.png'

// project domain
const dataScience = 'data science'
const webDevelopment = 'web development'
const webAndData = 'data science and web development'

// list of projects
const projects = [
  {
    id: 1,
    title: 'Segmentation of CT Scans Using CNN',
    img: master_thesis,
    description:
      'Segmentation of CT Scans of Kidney Tumour, Kidney Stones and Phleboliths Using CNN',
    url:
      'https://docs.google.com/file/d/1PxHSWc58H8xI-Km5fTupR3jIGULtqt_u/edit?usp=docslist_api&filetype=mspresentation',
    github: 'https://github.com/youpele52/thesis',
    techstack: 'Python, CNN, DeepMedic, nnU-Net, PyTorch, TensorFlow ',
    domain: dataScience,
  },

  {
    id: 2,
    title: "Youpele's Poetry",
    img: poetry,
    description:
      'Webpage of links to some of my poems. The page has a darkmode toggle feature.',
    url: 'https://youpele-poetry-dark-mode-git-main-youpele52.vercel.app/',
    github: 'https://github.com/youpele52/youpele-poetry-dark-mode',
    techstack: 'React, JavaScript, HTML, CSS ',
    domain: webDevelopment,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    img: youpele,
    description:
      'Portfolio website, with links to my  personal projects and poetry collections. Yes, I am a poet.',
    url: 'https://youpele.com/',
    github: 'https://github.com/youpele52/youpele-com',
    techstack: 'React, JavaScript, HTML, CSS ',
    domain: webDevelopment,
  },
  {
    id: 11,
    title: 'Stripe Clone',
    img: stripe_clone,
    description: 'Stripe Clone',
    url: 'https://stripe-clone2.vercel.app/',
    github: 'https://github.com/youpele52/stripe-clone',
    techstack: 'React, JavaScript, HTML, CSS ',
    domain: webDevelopment,
  },

  {
    id: 12,
    title: 'food menu',
    img: food_menu,
    description: 'food menu',
    url: 'https://food-menu-silk.vercel.app/',
    github: 'https://github.com/youpele52/food-menu',
    techstack: 'React, JavaScript, HTML, CSS ',
    domain: webDevelopment,
  },
  {
    id: 6,
    title: 'Restaurant Reviews Classification',
    img: restaurant_reviews,
    description: 'Restaurant Reviews Classification',
    url:
      'https://github.com/youpele52/Restaurant-Reviews-Classification/blob/main/Classifying_Restaurant_Reviews_Using_NLP.ipynb',
    github: 'https://github.com/youpele52/Restaurant-Reviews-Classification',
    techstack: 'Python, NLP',
    domain: dataScience,
  },

  {
    id: 4,
    title: 'Pagination - Frontend',
    img: pagination,
    description: 'A webpage displaying few github users',
    url: 'https://pagination-frontend.vercel.app/',
    github: 'https://github.com/youpele52/pagination-frontend',
    techstack: 'React, JavaScript, HTML, CSS ',
    domain: webDevelopment,
  },
  {
    id: 15,
    title: 'NYC Citi Bike Trips',
    img: nyc_citi_bike,
    description: `Using Google's BigQuery to obtain useful insights from the big data`,
    url:
      'https://console.cloud.google.com/marketplace/product/city-of-new-york/nyc-citi-bike?project=pivotal-canto-271521',
    github:
      'https://github.com/youpele52/Toggle_test/blob/main/ACCESS%20TO%20PUBLIC%20DATABASES.sql',
    techstack: 'BigQuery, SQL, GCP',
    domain: dataScience,
  },

  {
    id: 7,
    title: 'Movie Reviews Classification',
    img: movie_reviews,
    description: ' Reviews Classification',
    url:
      'https://github.com/youpele52/IMDB_movie_review_classification_using_NLP_with_BERT/blob/main/NLP_with_Bert_for_Sentiment_Analysis.ipynb',
    github:
      'https://github.com/youpele52/IMDB_movie_review_classification_using_NLP_with_BERT',
    techstack: 'Python, NLP, BERT',
    domain: dataScience,
  },
  {
    id: 8,
    title: 'My first react app',
    img: first_react_app,
    description: 'My first react app',
    url: 'https://youpele-first-react-app.netlify.app/',
    github: 'https://github.com/youpele52/my-first-react-app',
    techstack: 'React, JavaScript, HTML, CSS ',
    domain: webDevelopment,
  },
  {
    id: 5,
    title: 'Birthday Reminder',
    img: birthday_reminder,
    description: 'Birthday Reminder',
    url: 'https://birthday-reminder-rho.vercel.app/',
    github:
      'https://github.com/youpele52/react-projects/tree/main/01-birthday-reminder',
    techstack: 'React, JavaScript, HTML, CSS ',
    domain: webDevelopment,
  },

  {
    id: 9,
    title: 'Cocktail bar',
    img: cocktail_bar,
    description: 'Cocktail bar',
    url: 'https://cocktail-bar.vercel.app/',
    github:
      'https://github.com/youpele52/react-projects/tree/main/15-cocktail-bar',
    techstack: 'React, JavaScript, HTML, CSS ',
    domain: webDevelopment,
  },
  {
    id: 10,
    title: 'Colour generator',
    img: colour_generator,
    description: 'Colour generator',
    url: 'https://colour-generator.vercel.app/',
    github: 'https://github.com/youpele52/colour-generator',
    techstack: 'React, JavaScript, HTML, CSS ',
    domain: webDevelopment,
  },
  {
    id: 11,
    title: 'Grocery list',
    img: grocery_list,
    description: 'Grocery list',
    url: 'https://grocery-list-peach.vercel.app/',
    github: 'https://github.com/youpele52/grocery-list',
    techstack: 'React, JavaScript, HTML, CSS ',
    domain: webDevelopment,
  },
  {
    id: 13,
    title: 'Shopping cart',
    img: shopping_cart,
    description: 'Shopping cart',
    url: 'https://shopping-cart-opal.vercel.app/',
    github: 'https://github.com/youpele52/shopping-cart',
    techstack: 'React, JavaScript, HTML, CSS ',
    domain: webDevelopment,
  },
  {
    id: 14,
    title: 'Tours',
    img: tours,
    description: 'Tours',
    url: 'https://tours-three.vercel.app/',
    github: 'https://github.com/youpele52/tours',
    techstack: 'React, JavaScript, HTML, CSS ',
    domain: webDevelopment,
  },
]

export default projects

// project template
//  {
//     id: 2,
//     title: "",
//     img: '',
//     description:
//       '',
//     url: '',
//     github: '',
//     techstack: 'React, JavaScript, HTML, CSS ',
//     domain: 'Web development',
//   },

// for testing
export const whatNow = {
  id: 3,
  title: 'Pagination - Frontend',
  img: pagination,
  description: 'A webpage displaying few github users.',
  url: 'https://pagination-frontend.vercel.app/',
  github: 'https://github.com/youpele52/pagination-frontend',
  techstack: 'React, JavaScript, HTML, CSS ',
  domain: 'Web development',
}
