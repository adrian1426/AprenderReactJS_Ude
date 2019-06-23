import React, {Component} from 'react';


class BitCoinPrice extends Component{

    _renderCurrencies(){
        const {bpi}=this.props;
        console.log("objectKeys: ",Object.keys(bpi));
        return Object.keys(bpi).map(currency => {
            return(
                <div key={currency}>
                1 BTC is {bpi[currency].rate}
                <span>{currency}</span>
                </div>
            )
        })
    }
    
    render(){
        return(
            <div>
                <h4>BitCoinPrice index</h4>
                {this._renderCurrencies()}
            </div>
        );
    }
}

export default BitCoinPrice;