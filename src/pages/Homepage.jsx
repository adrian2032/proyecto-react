import ItemListContainer from '../assets/components/ItemListContainer/itemList'
import ViewCount from '../assets/components/ViewCount/ViewCount'

function Homepage(){
  return (
    <div>
        <ViewCount initial={1}/>
        <ItemListContainer/>
    </div>
  )
}

export default Homepage;