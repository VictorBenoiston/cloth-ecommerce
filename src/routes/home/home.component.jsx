// import categoriesjson from '../../components/category-menu/categoryMenu' 
import categoriesjson from '../../categories.json'
import DirectoryComponent from "../../components/directory/DirectoryComponent";

const Home = () => {

  const categories = categoriesjson

  return (
    <div>
        <DirectoryComponent categories={categories} ></DirectoryComponent>
    </div>
  )
}

export default Home;
