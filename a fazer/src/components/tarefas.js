import React from 'react';
import './tarefas.css';
export default class ClassificadoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: []
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('https://lista-tarefa.herokuapp.com/listar', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ response: data['data'] }));

    }
    delete(id) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id })
        };
        fetch('https://lista-tarefa.herokuapp.com/deletar/', requestOptions).then(response => response.json())
            .then(data => this.setState({ error: data.error }));
        window.location.reload(false);
        return;
    }
    render() {
        return (
            this.state.response.map((tarefa, index) => (
                <div class="col-6">
                    < div className="card bg-light border-primary text-dark mb-3" key={index} >
                        <div className="card-header border-primary">
                            {tarefa.TITULO}
                        </div>
                        <div className="card-body">
                            <p>{tarefa.DESCRICAO}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-outline-danger" onClick={()=>{this.delete(tarefa.id)}}><i className="fa fa-recycle" aria-hidden="true"></i>Excluir</button>
                        </div>
                    </div >
                </div>
            ))

        )
    }
}