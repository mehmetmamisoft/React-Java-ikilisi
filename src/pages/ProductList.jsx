import React, { useState,useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import { ProductService } from "../services/productService";
export default function ProductList() {
  //const [state, setstate] = useState(initialState);
  //soldaki yapı destructor içinde data sağdaki fonksiyon!
  //defaultu boş bir array! initiali yani başlangıcı boş array
  //lifecycle hooks'dur
  const [products, setProducts] = useState([]);
  //comp yüklendiğinde yapılöası istediğin kodu buraya yapıştır

  useEffect(() => {

    //burda get al promise döndürüyo başarılı then başarısız olursa  catch
    let productService=new ProductService()
    productService.getProducts().then(result=>setProducts(result.data.data))
  })
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ÜrünAdı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adeti</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            //array içi products map et jsx'e gel
            products.map((product) => (
              <Table.Row key={product.id}>
                <Table.Cell>{product.productName}</Table.Cell>
                <Table.Cell>{product.unitPrice}</Table.Cell>
                <Table.Cell>{product.unitsInStock}</Table.Cell>
                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                <Table.Cell>{product.category.categoryName}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
