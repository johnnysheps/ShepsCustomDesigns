import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 't-shirts',
                  imageUrl: '/assets/img/tshirt.jpeg',
                  id: 1,
                  linkUrl: 'shop/t-shirts'
                },
                {
                  title: 'hoodies',
                  imageUrl: '/assets/img/hoodie.jpeg',
                  id: 2,
                  linkUrl: 'shop/hoodies'
                },
                {
                  title: 'decals',
                  imageUrl: '/assets/img/decals.jpeg',
                  id: 3,
                  linkUrl: 'shop/decals'
                },
                {
                  title: 'womens',
                  imageUrl: '/assets/img/woman.jpeg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: '/assets/img/mens.jpeg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                        )
                    )
                }
            </div>
        )
    }

    
}

export default Directory;