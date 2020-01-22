import React, { Component } from 'react';

const HomeClass = ({obj}) => {
        const objList = obj.map(o => {
            return (
                <div className="home" key={o.id}>
                    <h3>this is content </h3>
                    <h4>ID : {o.id} </h4>
                    <h4>Name : {o.name} </h4>
                    <h4>DOB : {o.dob} </h4>
                    
                </div>
            )
        })

        return (
            <div className="obj-list">
                {objList}
            </div>
        )
}

export default HomeClass