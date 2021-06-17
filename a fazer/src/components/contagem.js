import React from 'react';
export default class ContagemComponent extends React.Component {
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
    render() {
        if (Object.keys(this.state.response).length > 0) {
            return (
                <div className="alert border-light"><b>Tarefas registradas: {Object.keys(this.state.response).length}</b></div>
            )
        } else {
            return (
                <div className="alert alert-warning" role="alert">
                    Parabéns. Você cumpriu com todas as tarefas!<br>
                    </br>
                    Adicione outras!
                    <br></br>
                </div>
            )
        }
    }
}