import React, { Component } from 'react';

const HomeClass = ({obj, deleteItem}) => {
        
        return (
            <div className="obj-list">
                {
                    obj.map(o => {
                        return (
                            <div className="row" key={o.id}>
                                <div className ="col-md-6 mx-auto">
                                        <div className ="card card-body">
                                            <h4>email : {o.email} </h4>
                                            <h4>firstName : {o.firstName} </h4>
                                            <h4>lastName : {o.lastName} </h4>
                                            <h4>userName : {o.userName} </h4>
                                            <input type="button" value="Delete" className="btn btn-danger" onClick={() => {deleteItem(o.id)}}></input>
                                        </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
}

export default HomeClass