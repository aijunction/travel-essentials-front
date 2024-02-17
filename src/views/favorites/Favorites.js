/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import { auth } from "firebase.js";
import { database } from "firebase.js";
import "../../assets/css/travelEssentials.css";
import Header from "components/Headers/Header.js";
import { useEffect, useState } from "react";
import CardsFooter from "components/Footers/CardsFooter";

const Favorites = () => {
  const currentUser = auth.currentUser;

  console.log(currentUser);
  const [favorites, setFavorites] = useState([]);

  const deleteFavorite = async (favoriteId) => {
    try {
      const favoriteDocRef = doc(
        database,
        "users",
        currentUser.uid,
        "favorites",
        favoriteId
      );

      // Delete the favorite document
      await deleteDoc(favoriteDocRef);

      // Update the state to reflect the removal
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.id !== favoriteId)
      );
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  };

  useEffect(() => {
    const fetchFavorites = async () => {
      if (currentUser) {
        const favoritesCollectionRef = collection(
          database,
          "users",
          currentUser.uid,
          "favorites"
        );
        const favoritesQuery = query(favoritesCollectionRef);

        try {
          const favoritesSnapshot = await getDocs(favoritesQuery);

          if (!favoritesSnapshot.empty) {
            const favoritesData = favoritesSnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setFavorites(favoritesData);
          } else {
            console.log("No favorites found");
          }
        } catch (error) {
          console.error("Error fetching favorites:", error);
        }
      }
    };

    fetchFavorites();
  }, [currentUser]);
  console.log(favorites);
  return (
    <>
      <Header />
      {/* Page content */}
      <section className="section section-lg pt-lg-0 mt--200">
        <Container className="mt--9" fluid>
          <h1 className="display-3 text-white"> Favorites </h1>
        </Container>
      </section>
      <section>
        <Container className="d-flex flex-row flex-wrap align-content-center">
          {favorites.map((favorite, i) => (
            <Row className="justify-content-center p-3 flex-grow-1">
              <Col lg="12 flex-grow-1">
                <Row className="row-grid">
                  <Col lg="12" className="item-col" key={i}>
                    <Card className="card-lift--hover shadow border-0 card-height favorite-card">
                      <CardBody className="item-body">
                        <img
                          src={require(`../../assets/img/productImages/${favorite.image}`)}
                          alt="blue travel neck pillow"
                          className="product-img"
                        />
                        <h6 className="text-primary text-uppercase">
                          {favorite.name}
                        </h6>

                        <p className="description mt-3">
                          {favorite.description}
                        </p>
                        <div>
                          {favorite.tags?.split(",").map((tag, i) => (
                            <Badge
                              color="primary"
                              pill
                              className="mr-1"
                              key={i}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          className="mt-4"
                          color="primary"
                          href={favorite.url}
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(`${favorite.url}`, "_blank");
                          }}
                        >
                          Buy on Amazon
                        </Button>

                        <Button onClick={() => deleteFavorite(favorite.id)}>
                          Remove
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}
        </Container>
      </section>
      <CardsFooter />
    </>
  );
};

export default Favorites;
