import CategoryItem from '../category-item-component/CategoryItemComponent'
import './directory.styles.scss'



const DirectoryComponent = ({categories}) => {
    return (
        <div className="directory-container">
        {categories.map((item) => {
          return (
            <CategoryItem
              key={item.id}
              category={item}
            />
          )
        })}
      </div>
    )
}

export default DirectoryComponent
