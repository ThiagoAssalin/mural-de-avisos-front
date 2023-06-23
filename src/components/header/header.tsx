

export default function Header(){
    return(
        <header className="bg-gray-600 flex flex-col w-full h-20 justify-center p-3" >
            <h1 className=" text-white">Novo Post</h1>
            <div className=" flex gap-1">
                <input type="text" placeholder="Titulo" className="p-2"></input>
                <input type="text" placeholder="Descrição" className="p-2"></input>
                <button className="text-white">Salvar</button>
            </div>
        </header>
    )
}