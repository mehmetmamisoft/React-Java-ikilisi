import React, { useState } from "react";
import { useParams } from "react-router";
import { Button, Card, Image } from "semantic-ui-react";
import { ProductService } from "../services/productService";

export default function ProductDetail() {
  let { name } = useParams();
  //ilk değeri object burda sebebi tek değer diğerinde array
  const [product, setProduct] = useState({});

  React.useEffect(() => {
    //burda get al promise döndürüyo başarılı then başarısız olursa  catch
    let productService = new ProductService();
    productService
      .getByProductName(name)
      .then((result) => setProduct(result.data.data));
  }, [name]);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>{product.unitPrice}</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
