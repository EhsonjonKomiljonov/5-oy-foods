import {
  FileUploadInput,
  FileUploadLabel,
  FileUploadLabelDesc,
  FileUploadLabelText,
  FileUploadName,
  InputErrorMessage,
  InputPostProduct,
  InputPostProductBox,
  OptionPostProduct,
  PostProductAddBtn,
  PostProductBtnsBox,
  PostProductCancelBtn,
  SelectArrowDownImg,
  SelectPostProduct,
} from './product-post-form.styles';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useContext, useEffect, useRef, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { FoodCardDataContext } from '../../context/FoodCardDataContext';

export const ProductPostForm = () => {
  const { setFoodDataCard } = useContext(FoodCardDataContext);

  const { setModal } = useContext(ModalContext);

  const [fileName, setFileName] = useState('');
  const fileUploadRef = useRef();
  const categoryRef = useRef();

  let formData = new FormData();

  const onSubmit = (values) => {
    console.log(values);

    formData.set('name', values.name);
    formData.set('price', values.price);
    formData.set('bowls', values.bowls);
    formData.set('category_id', +categoryRef.current.value);
    formData.set('food_img', fileUploadRef.current.files[0]);

    axios
      .post('http://localhost:5000/food', formData)
      .then((data) => setFoodDataCard(data.data))
      .catch((err) => console.log(err));

    setModal(false);
  };

  const initialValues = {
    name: '',
    price: '',
    bowls: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Required!!!')
      .max(20, 'maximum product name 20'),
    price: Yup.number()
      .required('Required!!!')
      .min(1, 'Minimum product price 100')
      .max(99999, 'Max product price 99999'),
    bowls: Yup.number()
      .required('Required!!!')
      .min(1, 'Minimum product input 1'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Form>
        <InputPostProductBox>
          <InputPostProduct
            placeholder="Product name"
            name="name"
            type="text"
          />
          <InputErrorMessage>
            <ErrorMessage name="name" />
          </InputErrorMessage>
        </InputPostProductBox>
        <InputPostProductBox>
          <InputPostProduct
            placeholder="Product bowls"
            name="bowls"
            type="number"
          />
          <InputErrorMessage>
            <ErrorMessage name="bowls" />
          </InputErrorMessage>
        </InputPostProductBox>
        <InputPostProductBox>
          <InputPostProduct
            placeholder="Product price"
            name="price"
            type="number"
          />
          <InputErrorMessage>
            <ErrorMessage name="price" />
          </InputErrorMessage>
        </InputPostProductBox>
        <InputPostProductBox>
          <SelectArrowDownImg></SelectArrowDownImg>
          <SelectPostProduct ref={categoryRef} name="category">
            <OptionPostProduct value="1">Hot Dishes</OptionPostProduct>
            <OptionPostProduct value="2">Cold Dishes</OptionPostProduct>
            <OptionPostProduct value="3">Soup</OptionPostProduct>
            <OptionPostProduct value="4">Grill</OptionPostProduct>
            <OptionPostProduct value="5">Appetizer</OptionPostProduct>
            <OptionPostProduct value="6">Dessert</OptionPostProduct>
          </SelectPostProduct>
          <InputErrorMessage>
            <ErrorMessage name="category_id" />
          </InputErrorMessage>
        </InputPostProductBox>
        <InputPostProductBox>
          <FileUploadLabel>
            <FileUploadInput
              onChange={(evt) => setFileName(evt.target?.files[0]?.name)}
              name="food_img"
              ref={fileUploadRef}
              type="file"
            />
            <FileUploadLabelDesc>
              Click or drag file to this area to upload
            </FileUploadLabelDesc>
            <FileUploadLabelText>
              Support for a single or bulk upload.
            </FileUploadLabelText>
          </FileUploadLabel>
          <FileUploadName>{fileName}</FileUploadName>
        </InputPostProductBox>
        <PostProductBtnsBox>
          <PostProductCancelBtn type="reset">Cancel</PostProductCancelBtn>
          <PostProductAddBtn type="submit">Add</PostProductAddBtn>
        </PostProductBtnsBox>
      </Form>
    </Formik>
  );
};
