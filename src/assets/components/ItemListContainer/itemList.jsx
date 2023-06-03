
import Item from "../item/Item";
import Flex from "../Flex/Flex";
import { useState } from "react";


{/* clase 8 */}
function FilterList({children, items}){
    const[searchword, setSearchword] = useState("");

    function filterList(){
        if (searchword === "") {
            return items;
        }else{
            return items.filter((item) => {
                let textTitle = item.title.toLowerCase()
                let word = searchword.toLowerCase()
                return textTitle.includes(word)
        });  
        }  
    }
    
    function handleSearch(evt){
        setSearchword(evt.target.value);
    }
    return children(handleSearch, filterList());
}

{/* clase 8 */}

function ItemList({products}){ 
    return(
     <div>
        <FilterList items = {products}>
            {(handleSearch, filterList) => (
            <>  
                <input onChange={handleSearch}></input>
                <Flex title="mi catalogo">
                {filterList.map((itemInArray) => (
                    <Item key={itemInArray.id} {...itemInArray}></Item>
            ))}
            </Flex>
            </>
            )}
        </FilterList>
    </div>
    );
}

export default ItemList