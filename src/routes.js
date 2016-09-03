import Articles from './components/Articles'
import Categories from './components/Categories'
import Achieves from './components/Achieves'
import Tags from './components/Tags'

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
  }
}
