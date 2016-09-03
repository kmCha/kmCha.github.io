import Articles from './components/Articles'
import Categories from './components/Categories'
import Category from './components/Category'
import Achieves from './components/Achieves'
import Tags from './components/Tags'
import Article from './components/Article'

export default {
  '/articles': {
    component: Articles
  },
  '/categories': {
    component: Categories
  },
  '/achieves': {
    component: Achieves
  },
  '/tags': {
    component: Tags
  },
  '/articles/:key': {
    component: Article
  },
  '/categories/:key': {
    component: Category
  }
}
