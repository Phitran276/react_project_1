import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="card text-white bg-primary border border-success">
                    <img className="card-img-top" src="holder.js/100px180/" alt />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            </div>
        )
    }
}
