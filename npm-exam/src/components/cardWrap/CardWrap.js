import React, {Component} from 'react'
import Card from 'card/Card.js'
import $ from 'jQuery'

export default class CardWrap extends Component{

    componentDidUpdate(){
        console.log('CardWrap 更新好了')
    }

    componentDidMount(){
        console.log('CardWrap 渲染完成')
        console.log($('.floated'))
    }

    componentWillUnmount(){
        console.log('CardWrap 被卸载了')
    }

    render(){

        let { data } = this.props

        let cards = data.map((elt, i) =>
                <Card key={i} {...elt}/>
            )

        return (
            <div className="ui cards">
                {cards}
            </div>
        )
    }
}
