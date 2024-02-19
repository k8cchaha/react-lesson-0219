import Item from './Item'

const List = ({listData, deleteData}) => {
  return <div>
    {
      listData.map((item)=>{
        return <Item data={item} deleteData={deleteData} key={item.id}/>
      })
    }
  </div>
}

export default List