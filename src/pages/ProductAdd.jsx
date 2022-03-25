import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
export default function ProductAdd() {
  //object ile gel swagger2dan al api gelsun
  const initialValues = { productName: "", unitPrice: 10 };
  //yup doğrulama yapmamızı sağlayan bir yapı!
  const schema = Yup.object({
    productName: Yup.string().required("Ürün Adı Zorunludur demek"),
    unitPrice: Yup.number().required("Ürünün fiyatı zorunludur!"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
        <KodlamaIoTextInput name="productName" placeholder="Ürün Adı" />
        <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
        
       
        <Button color="green" type="submit">
          Ürün Ekle
        </Button>
      </Form>
    </Formik>
  );
}



{/* <FormField>
          <Field name="productName" placeholder="Ürün Adı"></Field>
          <ErrorMessage
            name="productName"
            render={(error) => (
              <Label pointing basic color="red" content={error}></Label>
            )}
          ></ErrorMessage>
        </FormField> */}