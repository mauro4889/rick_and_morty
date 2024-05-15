import Characters from '../interfaces/Characters'
import { CardDetail } from './api/CardDetail'


export const Card = (props: Characters) => {
    return (
        <div className="card mb-3 card-container">
            <h3 className="card-header"> {props.name} </h3>
            <img src={props.image} alt={props.name} />
            <div className="card-body">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Detalle
                </button>
                <CardDetail name={props.name} gender={props.gender} species={props.species} image={props.image} />
            </div>
        </div>
    )
}
