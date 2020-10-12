/*
 * @Author: Jinqi Li
 * @Date: 2020-08-05 04:28:43
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2020-10-12 05:57:51
 * @FilePath: /1-BookStore/client/src/components/utils/ImageSlider.js
 */
import React from 'react'
import { Carousel } from 'antd';

function ImageSlider(props) {
    return (
        <div>

            <Carousel autoplay>
                {props.images.map((image, index) => (
                    <div key={index}>
                        <img style={{ width: '99px', maxHeight: '150px' }}
                            src={`http://localhost:5000/${image}`} alt="productImage" />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageSlider
