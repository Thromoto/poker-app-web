import React, { useState } from 'react';
import './Controle.css';
import Header from '../components/Header';

const Controle = () => {
    const [resultados, setResultados] = useState([]);
    const [novoResultado, setNovoResultado] = useState({
        site: '',
        valorInicial: '',
        valorFinal: '',
        data: '',
    });
    const [editandoIndex, setEditandoIndex] = useState(null);

    const handleAdicionarResultado = () => {
        if (
            novoResultado.site &&
            novoResultado.valorInicial &&
            novoResultado.valorFinal &&
            novoResultado.data
        ) {
            if (editandoIndex !== null) {
                // Editar resultado existente
                const novosResultados = [...resultados];
                novosResultados[editandoIndex] = novoResultado;
                setResultados(novosResultados);
                setEditandoIndex(null);
            } else {
                // Adicionar novo resultado
                setResultados([...resultados, novoResultado]);
            }
            setNovoResultado({
                site: '',
                valorInicial: '',
                valorFinal: '',
                data: '',
            });
        }
    };

    const handleEditarResultado = (index) => {
        // Preencher o formulário de edição com os dados do resultado selecionado
        setNovoResultado(resultados[index]);
        setEditandoIndex(index);
    };

    const handleExcluirResultado = (index) => {
        const novosResultados = [...resultados];
        novosResultados.splice(index, 1);
        setResultados(novosResultados);
    };

    return (
        <>
            <Header />
            <div className='body-controle'>
                <div className="container-controle">
                    <h2>Controle</h2>
                    <form>
                        <label>
                            Site:
                            <input
                                type="text"
                                value={novoResultado.site}
                                onChange={(e) => setNovoResultado({ ...novoResultado, site: e.target.value })}
                            />
                        </label>
                        <label>
                            Valor Inicial:
                            <input
                                type="text"
                                value={novoResultado.valorInicial}
                                onChange={(e) =>
                                    setNovoResultado({ ...novoResultado, valorInicial: e.target.value })
                                }
                            />
                        </label>
                        <label>
                            Valor Final:
                            <input
                                type="text"
                                value={novoResultado.valorFinal}
                                onChange={(e) => setNovoResultado({ ...novoResultado, valorFinal: e.target.value })}
                            />
                        </label>
                        <label>
                            Data:
                            <input
                                type="text"
                                value={novoResultado.data}
                                onChange={(e) => setNovoResultado({ ...novoResultado, data: e.target.value })}
                            />
                        </label>
                        <button type="button" onClick={handleAdicionarResultado}>
                            {editandoIndex !== null ? 'Editar' : 'Adicionar'} Resultado
                        </button>
                    </form>

                    <table>
                        <thead>
                            <tr>
                                <th>Site</th>
                                <th>Valor Inicial</th>
                                <th>Valor Final</th>
                                <th>Data</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultados.map((resultado, index) => (
                                <tr key={index}>
                                    <td>{resultado.site}</td>
                                    <td>{resultado.valorInicial}</td>
                                    <td>{resultado.valorFinal}</td>
                                    <td>{resultado.data}</td>
                                    <td>
                                        <button type="button" onClick={() => handleEditarResultado(index)}>
                                            Editar
                                        </button>
                                        <button type="button" onClick={() => handleExcluirResultado(index)}>
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Controle;