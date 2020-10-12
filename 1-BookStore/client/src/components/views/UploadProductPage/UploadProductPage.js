import React, { useState } from 'react'
import { Typography, Button, Form, message, Input } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Years = [
    { key: 1, value: "2021" },
    { key: 2, value: "2020" },
    { key: 3, value: "2019" },
    { key: 4, value: "2018" },
    { key: 5, value: "2017" },
    { key: 6, value: "2016" },
    { key: 7, value: "2015" },
    { key: 8, value: "2014" },
    { key: 9, value: "2013" },
    { key: 10, value: "2012" }
]

function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [CategoryValue, setCategoryValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    // const [PriceValue, setPriceValue] = useState(0)
    const [YearsValue, setYearsValue] = useState(1)

    const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onCategoryChange = (event) => {
        setCategoryValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    // const onPriceChange = (event) => {
    //     setPriceValue(event.currentTarget.value)
    // }

    const onYearsSelectChange = (event) => {
        setYearsValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        // if (!TitleValue || !DescriptionValue || !PriceValue ||
        //     !YearsValue || !Images) {
        //     return alert('fill all the fields first!')
        // }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            category: CategoryValue,
            description: DescriptionValue,
            // price: PriceValue,
            images: Images,
            Years: YearsValue,
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Upload Publication Product</Title>
            </div>


            <Form onSubmit={onSubmit} >

                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>Title</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Category</label>
                <Input
                    onChange={onCategoryChange}
                    value={CategoryValue}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                {/* <label>Price($)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br /> */}
                <select onChange={onYearsSelectChange} value={YearsValue}>
                    {Years.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />

                <Button
                    onClick={onSubmit}
                >
                    Submit
                </Button>

            </Form>

        </div>
    )
}

export default UploadProductPage
