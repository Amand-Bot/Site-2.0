import NavMenu from "../components/NavMenu"
export default function Portal() {
    return (
        <>
            <NavMenu />
            <div className="d-flex justify-content-center align-items-center w-full vh-100">

                <div className="d-flex flex-column border border-3 border-success p-4">
                    <h1 className="text-center">Portal</h1>
                    <input className="form-control my-2 mr-sm-2" type="search" placeholder="ID Aluno" aria-label="Pesquisar"></input>
                    <button className="btn btn-success my-2 my-sm-0" type="submit">Pesquisar</button>
                </div>

            </div>
        </>
    )
}
