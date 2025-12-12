

function Cards ({data}){

return(
    <>
    <div className="flex flex-col items-center p-4 border-b-blue-700 rounded-lg gap-10">
        <img src={data.image} alt={data.title} />
        <h3 className="font-bold">{data.title}</h3>
        <p>{data.description}</p>
    </div>
    </>
)

}

export default Cards 