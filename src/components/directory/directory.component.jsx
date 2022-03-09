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
                  linkUrl: 'tshirts'
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
                  title: 'coasters',
                  imageUrl: '/assets/img/coaster.jpg',
                  id: 4,
                  linkUrl: 'shop/coasters'
                },
                {
                  title: 'glasses',
                  imageUrl: '/assets/img/drinkingglasses.jpg',
                  id: 5,
                  linkUrl: 'shop/glasses'
                }
              ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                            <MenuItem key={id} {...otherSectionProps} />
                        )
                    )
                }
            </div>
        )
    }

    
}

export default Directory;