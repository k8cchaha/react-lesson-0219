const Item = ({data, deleteData}) => {

  function deleteMe() {
    deleteData((pre)=>{
      return pre.filter((item)=>{
        return item.id !== data.id
      })
    })
  }

  return <div>
    {data.note} - {`${data.date}-${data.time}`}
    <button onClick={deleteMe}>刪除</button>
  </div>
}

export default Item