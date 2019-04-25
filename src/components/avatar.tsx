import React from "react";

export type AvatarProps = {
    thumbnail: string
    name: string
}

export class Avatar extends React.Component<AvatarProps>{
    public render() {
        return (
            <div>
                <div className='fa w3-margin-left w3-margin-top'>
                    <h2>{this.props.name}</h2>
                </div>
                <img src={this.props.thumbnail} style={{ width: '100%' }} alt="Avatar" className='w3-margin-top' />
            </div>
        )
    }
}