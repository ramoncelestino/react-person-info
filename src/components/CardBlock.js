import Card from './Card'

function CardBlock(props){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Card name={props.cards[0].name} age={props.cards[0].age}></Card>
                </div>
                <div className="col-md-4">
                    <Card name={props.cards[1].name} age={props.cards[1].age}></Card>
                </div>
                <div className="col-md-4">
                    <Card name={props.cards[2].name} age={props.cards[2].age}></Card>
                </div>
            </div>
        </div>
    );
}

export default CardBlock;