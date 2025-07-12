import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h1><i class="fa-solid fa-bars-staggered"></i> Filters </h1>
      <div className="pp">
        <p>Price</p>
        <p>Collections</p>
        <p>Chains</p>
        <p>Categories</p>
      </div>
    </div>
  )
}

export default Sidebar
