import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import { ProductService } from "../services/productService";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
export default function ProductList() {
  //const [state, setstate] = useState(initialState);
  //soldaki yapı destructor içinde data sağdaki fonksiyon!
  //defaultu boş bir array! initiali yani başlangıcı boş array
  //lifecycle hooks'dur

  //burasu reeducr'dan sonra geldi
  //dispatch aksyionaları
  //reflectionla beraber fonk çağırmak istiyoruz
  //buton ekle aksiyonu çağır

  const dispatch = useDispatch();
  //servisden sonra hemen buraya gel gare
  const [products, setProducts] = useState([]);
  //comp yüklendiğinde yapılöası istediğin kodu buraya yapıştır

  useEffect(() => {
    //burda get al promise döndürüyo başarılı then başarısız olursa  catch
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

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
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {/* backtick //"dfsw"+"few" */}
        <Table.Body>
          {
            //array içi products map et jsx'e gel
            products.map((product) => (
              <Table.Row key={product.id}>
                <Table.Cell>
                  <Link to={`/products/${product.productName}`}>
                    {product.productName}
                  </Link>
                </Table.Cell>
                <Table.Cell>{product.unitPrice}</Table.Cell>
                <Table.Cell>{product.unitsInStock}</Table.Cell>
                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                <Table.Cell>{product.category.categoryName}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handleAddToCart(product)}>
                    Sepete ekle
                  </Button>
                </Table.Cell>
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
