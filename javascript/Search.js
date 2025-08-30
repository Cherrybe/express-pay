import { categories } from "./constant.js";
const Search = () => {
  const search = '';

  for (const category of categories) {
        if (category.name.toLowerCase().includes(search.toLowerCase())) {
          console.log(category);
        }
  }

  // tried out the recursive search
  const recursiveSearch = (categories, search) => {
    for (const category of categories) {
      if (category.name.toLowerCase().includes(search.toLowerCase())) {
        // console.log(category);
        console.dir(category, { depth: null }); // expand obj/arr in node terminal
      }
      if (category.children.length > 0) {
        recursiveSearch(category.children, search);
      }
    }
  }
  recursiveSearch(categories, search);
}

Search()